export default function LiveDemo() {
    return (
        <section className="bg-base-100 overflow-hidden py-24" id="demo">
            <div className="flex flex-col text-center w-full ">
                <p className="font-medium text-primary mb-8">Live Demo</p>
                {/* <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
                    Save hours of repetitive code and ship faster!
                </h2> */}
            </div>
            <div className=" flex w-full mb-12 p-4 justify-center ">
                <iframe title="Chatbot"
                    src="https://app.askapollohq.com/chatbot/e2bf4ca8-f931-48c9-8886-701eda3434e7?i=1"
                    width="100%" height="650px" className=" max-w-xl rounded-3xl border hard-shadow ">
                </iframe>
            </div>
        </section>
    )
}