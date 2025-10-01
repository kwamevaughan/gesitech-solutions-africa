import "../styles/globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

function MyApp({ Component, pageProps }) {

  return (
    <div
      className={dmSans.variable}
      style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}
    >
      
      <Component
        {...pageProps}
      />
    </div>
  );
}

export default MyApp;
