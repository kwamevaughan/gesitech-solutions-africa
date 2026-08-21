declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

function waitForGrecaptcha(timeoutMs = 8000): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.grecaptcha) {
      resolve();
      return;
    }

    const intervalMs = 100;
    let waited = 0;
    const interval = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(interval);
        resolve();
        return;
      }
      waited += intervalMs;
      if (waited >= timeoutMs) {
        clearInterval(interval);
        reject(new Error("reCAPTCHA script did not load in time"));
      }
    }, intervalMs);
  });
}

/**
 * Runs invisible reCAPTCHA v3 (script loaded once globally in layout.tsx)
 * and resolves with a token, or null if the site key is missing or
 * execution fails.
 */
export async function executeRecaptchaV3(
  action: string
): Promise<string | null> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  if (!siteKey || typeof window === "undefined") return null;

  try {
    await waitForGrecaptcha();
    return await new Promise<string | null>((resolve) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(siteKey, { action })
          .then(resolve)
          .catch(() => resolve(null));
      });
    });
  } catch {
    return null;
  }
}
