import { ReactNode } from "react";
import { Open_Sans, Anek_Latin } from "next/font/google";
import { Viewport } from "next";
// import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/src/libs/seo";
import ClientLayout from "@/src/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import Script from "next/script";

// const font = Inter({ subsets: ["latin"] });
const font = Open_Sans({subsets: ["latin"]});
const bgr1 = Anek_Latin({ subsets: ["latin"], display: "swap", adjustFontFallback: false, variable: '--font-brigro' });

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags({ title: "AskApollo - AI-First Help Desk!", keywords: ["ai customer service", "ai chatbot", "ai chatbots", "chatbot ai", "chat bot", "customer support"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={`${font.className} ${bgr1.variable}`}>
      {config.domainName && (
        <head>
          {/* <PlausibleProvider domain={config.domainName} /> */}
          {
            process.env.NODE_ENV != "development" &&
            <>
              {/* <Script type="text/javascript" id="clarity-tag">
                {`
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window, document, "clarity", "script", "iou18u3cgf");
                            `}
              </Script>
<script type="text/javascript">
  /* To enable Participant Auto Authentication for your logged-in users, uncomment this code below (https://docs.growsurf.com/getting-started/participant-auto-authentication) */
  /*
  window.grsfConfig = {
    email: "participant@email.com",// Replace this with the participant's email address
    hash: "HASH_VALUE" // Replace this with the SHA-256 HMAC value
  };
  */
  (function(g,r,s,f){g.grsfSettings={campaignId:"7o3fgk",version:"2.0.0"};s=r.getElementsByTagName("head")[0];f=r.createElement("script");f.async=1;f.src="https://app.growsurf.com/growsurf.js"+"?v="+g.grsfSettings.version;f.setAttribute("grsf-campaign", g.grsfSettings.campaignId);!g.grsfInit?s.appendChild(f):"";})(window,document);
</script>










              
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
                                gtag('config', 'AW-11397979838');
                            `}
              </Script> */}
            </>
          }

          <Script async id={`${process.env.BOT_ID}`} src="https://app.askapollohq.com/lib/widget/v1/prod/agent.min.js">
            {`(function(doc, tag, id) {
              const sct = doc.querySelector(tag+"#"+id);
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
      <body className={`${process.env.NODE_ENV == "development" ? "" : "" } `}>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
