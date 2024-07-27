"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { JSX } from "react";
import config from "@/config";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What do I get exactly?",
    answer: <p className="space-y-2 leading-relaxed">Loreum Ipseum</p>,
  },
  {
    question: "Can I get a refund?",
    answer: (
      <p className="space-y-2 leading-relaxed">
        Yes! You can request a refund within 7 days of your purchase. Reach out
        by <Link href={`mailto:${config.mailgun.supportEmail}`} target="_blank" className=" underline">email</Link>.
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <p className="space-y-2 leading-relaxed">Cool, contact us by email</p>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "rotate-180 hidden"
              }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 md:px-8 px-2 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2 max-md:px-6">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2  flex justify-center ">
          {/* {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))} */}
          <iframe
            src="https://app.askapollohq.com/chatbot/e2bf4ca8-f931-48c9-8886-701eda3434e7?i=1&faq=1"
            width="100%" height="650px" className=" rounded-3xl border hard-shadow">
          </iframe>
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
