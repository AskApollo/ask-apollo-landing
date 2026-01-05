import { ReactNode } from "react";
import { Open_Sans, Anek_Latin } from "next/font/google";
import { Viewport } from "next";
// import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/src/libs/seo";
import ClientLayout from "@/src/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import Script from "next/script";

const font = Open_Sans({ subsets: ["latin"] });
const bgr1 = Anek_Latin({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-brigro",
});

export const viewport: Viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags({
  title: "AskApollo - AI-First Help Desk!",
  keywords: [
    "ai customer service",
    "ai chatbot",
    "ai chatbots",
    "chatbot ai",
    "chat bot",
    "customer support",
  ],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme={config.colors.theme}
      className={`${font.className} ${bgr1.variable}`}
    >
      {config.domainName && (
        <head>
          {/* Third-party scripts – only load in production */}
          {process.env.NODE_ENV !== "development" && (
            <>
              {/* GrowSurf Affiliate Tracking */}
              <Script id="growsurf-tag" strategy="afterInteractive">
                {`
                  (function(g,r,s,f){
                    g.grsfSettings = { campaignId: "7o3fgk", version: "2.0.0" };
                    s = r.getElementsByTagName("head")[0];
                    f = r.createElement("script");
                    f.async = 1;
                    f.src = "https://app.growsurf.com/growsurf.js" + "?v=" + g.grsfSettings.version;
                    f.setAttribute("grsf-campaign", g.grsfSettings.campaignId);
                    !g.grsfInit ? s.appendChild(f) : "";
                  })(window, document);
                `}
              </Script>

              {/*
                If you want to re-enable Clarity / GTM / GA later,
                we can add them here as additional <Script> blocks.
              */}
            </>
          )}

          {/* AskApollo widget script – keep as is */}
          <Script
            async
            id={`${process.env.BOT_ID}`}
            src="https://app.askapollohq.com/lib/widget/v1/prod/agent.min.js"
          >
            {`(function(doc, tag, id) {
              const sct = doc.querySelector(tag + "#" + id);
              if (sct) {
                sct.remove();
              }
              let js = doc.createElement(tag);
              js.id = id;
              js.src = 'https://app.askapollohq.com/lib/widget/v1/prod/agent.min.js';
              js.type = 'text/javascript';
              js.defer = 1;
              doc.head.appendChild(js);
              window.supportagentloaded = false;
            }(document, 'script', '${process.env.BOT_ID}'));`}
          </Script>
        </head>
      )}
      <body className={`${process.env.NODE_ENV === "development" ? "" : ""}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
