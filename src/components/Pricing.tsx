"use client"

import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";
import { useState } from "react";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  const [yearly, setyearly] = useState(true)

  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      {/* <button className="btn btn-accent btn-block mt-2">Create Anonymous User</button>
      <button className="btn btn-accent btn-block mt-2">Associate Email</button>
      <button className="btn btn-accent btn-block mt-2">Associate Password</button> */}
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20 items-center">
          <p className="font-medium text-primary mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8">
            Choose the Perfect Plan for Your Business
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
            Find the right plan that fits your business needs and budget
          </div>
          <div className=" flex gap-4 items-center">
            <span className=" w-40">Monthly</span>
            <input type="checkbox" className="toggle toggle-lg" checked={yearly} onChange={(e) => setyearly(e.target.checked)} />
            <span className=" w-40">Yearly <br /><span className=" text-primary">(2 months free 🎉)</span></span>
          </div>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.m_priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-primary-content font-semibold border-0 bg-primary`}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-primary z-10`}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {!plan.subscription && plan.m_priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-base-content/80">
                          ${plan.m_priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  {plan.subscription && !yearly && plan.m_priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-base-content/80">
                          ${plan.m_priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  {plan.subscription && yearly && plan.y_priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-base-content/80">
                          ${plan.y_priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  {!plan.subscription && <p className={`text-5xl tracking-tight font-extrabold`}>
                    ${plan.m_price}
                  </p>}
                  {plan.subscription && !yearly && <p className={`text-5xl tracking-tight font-extrabold`}>
                    ${plan.m_price}
                  </p>}
                  {plan.subscription && yearly && <p className={`text-5xl tracking-tight font-extrabold`}>
                    ${plan.y_price}
                  </p>}
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-base-content/60 uppercase font-semibold">
                      USD
                    </p>
                  </div>
                </div>
                <p className="text-base-content/80 -mt-7">
                  {plan.subscription ? (yearly ? "Yearly" : "Monthly") : "1 Year Access"}
                </p>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  {!plan.subscription && <ButtonCheckout priceId={plan.m_priceId} mode="payment" label="Checkout"/>}
                  {plan.subscription && !yearly && <ButtonCheckout priceId={plan.m_priceId} mode="subscription" label="Subscribe monthly"/>}
                  {plan.subscription && yearly && <ButtonCheckout priceId={plan.y_priceId} mode="subscription" label="Subscribe yearly"/>}

                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    {plan.subscription ? "Subscribe" : "1 Year Access"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
