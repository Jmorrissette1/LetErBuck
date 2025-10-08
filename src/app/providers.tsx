// app/providers.tsx
"use client";

import { GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_APP_INTEGRATION_ID ?? "";

  if (!siteKey && process.env.NODE_ENV !== "production") {
   console.log("reCAPTCHA site key (v3) in use:", siteKey.slice(0, 6) + "…");
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </GoogleReCaptchaProvider>
  );
}
