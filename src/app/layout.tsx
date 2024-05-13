import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
// import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/src/libs/seo";
import ClientLayout from "@/src/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import Script from "next/script";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags({ keywords: ["ai customer service", "ai chatbot", "ai chatbots", "chatbot ai", "chat bot", "customer support"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          {/* <PlausibleProvider domain={config.domainName} /> */}
          {
            process.env.NODE_ENV != "development" &&
            <>
              <Script type="text/javascript" id="clarity-tag">
                {`
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window, document, "clarity", "script", "iou18u3cgf");
                            `}
              </Script>
              {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=GTM-KDFPLPP9"></Script> */}
              <Script id="google-tag-manager">
                {`
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-KDFPLPP9');
                            `}
              </Script>

              <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PQ6YK9QZ4K"></Script>
              <Script id="google-analytics">
                {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-PQ6YK9QZ4K');
                            `}
              </Script>
            </>
          }
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
