import "../styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }) {

  return (
    <div
      className={poppins.variable}
      style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}
    >
      
      <Component
        {...pageProps}
      />
    </div>
  );
}

export default MyApp;
