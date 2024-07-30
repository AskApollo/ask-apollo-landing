"use client";


// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.


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
            src={`https://app.askapollohq.com/chatbot/${process.env.BOT_ID}?i=1&faq=1`}
            width="100%" height="650px" className=" rounded-3xl border hard-shadow">
          </iframe>
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
