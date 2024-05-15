import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./src/types/config";

const config = {
  // REQUIRED
  appName: "CyanArrow",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "AI powered Chatbots and Ticketing System to Boost efficiency, Save time and Reduce cost on customer support.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "cyanarrow.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        m_priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PEmoRSIKpTeZ6VRVfoZLpM4"
            // ? "price_1PEYdmSIKpTeZ6VRjB4HDLHd" //usd
            : "price_1PGknNSIKpTeZ6VRnMUkySa1",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "1 Year Access 🔥",
        isFeatured: true,
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Launch offer for the first 100 customers",
        // The price you want to display, the one user will be charged on Stripe.
        m_price: 99,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        m_priceAnchor: 790,
        features: [
          { name: "6,000 AI Credits" },
          { name: "5 Chatbots", },
          { name: "50,000,000 Characters training data", },
          { name: "Unlimited Lead Forms" },
          { name: "5 Ticket Forms" },
          { name: "10 Webhooks" },
          { name: "API Access" },
          { name: "Custom Domain" },
          { name: "White Label" },
        ],
      },
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        m_priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PEmpeSIKpTeZ6VReMPFpKzr"
            : "price_1PGknISIKpTeZ6VRJ6dU7Uzv",
        y_priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PEmq0SIKpTeZ6VRfuhQCCme"
            : "price_1PGknISIKpTeZ6VRn2nyhIeG",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Growth 🚀",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "All the essential features, run customer support at scale.",
        // The price you want to display, the one user will be charged on Stripe.
        m_price: 49,
        y_price: 490,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        m_priceAnchor: 79,
        y_priceAnchor: 790,
        subscription: true,
        features: [
          { name: "6,000 AI Credits" },
          { name: "5 Chatbots", },
          { name: "50,000,000 Characters training data", },
          { name: "Unlimited Lead Forms" },
          { name: "5 Ticket Forms" },
          { name: "10 Webhooks" },
          { name: "API Access" },
          { name: "Custom Domain" },
          { name: "White Label" },
        ],
      }, {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        m_priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PEmqzSIKpTeZ6VR9mAhrFJI"
            : "price_1PGknCSIKpTeZ6VR0QzfahX2",
        y_priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PEmrKSIKpTeZ6VROMY1RQZh"
            : "price_1PGknCSIKpTeZ6VRPObnT9wY",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter 🏍️",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "All the basic features, make customer support efficient.",
        // The price you want to display, the one user will be charged on Stripe.
        m_price: 19,
        y_price: 190,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        m_priceAnchor: 29,
        y_priceAnchor: 290,
        subscription: true,
        features: [
          { name: "2,500 AI Credits" },
          { name: "2 Chatbots", },
          { name: "20,000,000 Characters training data", },
          { name: "Unlimited Lead Forms" },
          { name: "2 Ticket Forms" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `CyanArrow <noreply@mg.cyanarrow.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Anshul at CyanArrow <anshulkumar@mg.cyanarrow.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "anshulkumar@cyanarrow.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "anshulkumar@cyanarrow.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    // theme: "bumblebee",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes[`dark`]["accent"],
    // main: "#22d3ee"
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
