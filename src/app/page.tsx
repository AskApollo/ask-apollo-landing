
import { Suspense } from 'react'
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Problem from "@/src/components/Problem";
import FeaturesAccordion from "@/src/components/FeaturesAccordion";
import Pricing from "@/src/components/Pricing";
import FAQ from "@/src/components/FAQ";
import CTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Testimonials3 from '@/src/components/Testimonials3';
import FeaturesListicle from '../components/FeaturesListicle';
import WithWithout from '../components/WithWithout';
import TechUsed from '../components/TechUsed';
import LiveDemo from '../components/Demo';
import FeaturedOn from '../components/FeaturedOn';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        {/* <FeaturedOn /> */}
        <TechUsed />
        <FeaturesListicle />
        <Problem />
        <WithWithout />
        <FeaturesAccordion />
        <LiveDemo />
        <Pricing />
        <Testimonials3 />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}