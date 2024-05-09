import Image from "next/image";
// import config from "@/config";
import ButtonGradient from "./ButtonGradient";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen bg-accent-content">
      <Image
        src="https://images.unsplash.com/photo-1714548474523-4b075f19ec4a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Upgrade your customer support today!
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            {/* Power up your customer support with AI and keep your customers happy */}
            Enhance your customer support with AI, ensure customer satisfaction
          </p>

          {/* <button className="btn btn-primary btn-wide">
            Get {config.appName}
          </button> */}
          <Link href="#pricing"><ButtonGradient title="Get Access Now" /></Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
