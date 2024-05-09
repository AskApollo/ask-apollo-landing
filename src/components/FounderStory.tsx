import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FounderStory() {
    return (
        <section className="bg-base-100">
            <div className="py-24 max-md:px-8 max-w-3xl mx-auto">
                <div className="leading-relaxed text-base-content/80 mb-12 max-w-xl mx-auto">
                    <Image alt="Anshul Kumar - Dreamer, Builder" loading="lazy" width="200" height="200"
                        className="w-32 h-32 md:w-52 md:h-52 rounded-lg float-left mr-8 mb-8 object-center object-cover"
                        src="/assets/mine.png" />
                    <p className="mb-4 text-base-content md:text-lg font-medium">Hey, it{`'`}s Anshul 👋</p>
                    <p className="mb-5">
                        I have worked for big corporations for well over a decade.
                        I{`'`}ve extensive experience in Business Sales and Support software development.
                        I{`'`}ve worked with 20+ clients from various industries( Banking, Healthcare, Education) in my career.
                    </p>
                    <p className="mb-5">
                        After feeling not so fulfilled in my job, in 2022, I left my corporate job and started my Solopreneur journey.
                        As I had experience in development of Customer support software, CyanArrow is my attemp to help businesses serve their customers better.
                    </p>
                    <p className=" flex gap-2 mb-5 items-start">Feel free to reachout to me at
                        <Link href="https://www.linkedin.com/in/anshul-kumar-812b9a18/" target="_blank"  rel="noreferrer" title="LinkedIn"><Linkedin className=" size-5" /></Link> 
                        or 
                        <Link href="https://twitter.com/AnshCooll" target="_blank"  rel="noreferrer" title="X (Twitter)"><XTwitter /></Link>
                    </p>
                    {/* <ul className="list-inside list-decimal space-y-1.5 ml-5 mb-5">
                        <li>
                            <span className="text-base-content font-medium">Save time</span>
                            and focus on what matters: building a business
                        </li>
                        <li>
                            <span className="text-base-content font-medium">Avoid headaches</span>
                            like emails ending in spam or handling Stripe subscriptions
                        </li>
                        <li>
                            <span className="text-base-content font-medium">Get profitable fast</span>—the more you ship, the more you learn, the more you earn
                        </li>
                    </ul>
                    <p>
                        <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" target="_blank" href="https://twitter.com/marc_louvion">
                            65,000+ people
                        </a> trust me on Twitter, Product Hunt awarded me
                        <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group"
                            target="_blank" href="https://www.producthunt.com/golden-kitty-awards/hall-of-fame#maker-of-the-year">
                            Maker of the Year 2023
                        </a>, and
                        <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" href="/#testimonials">2934 indie makers</a>
                        are using ShipFast to launch startups quickly, scroll to see what they say.
                    </p> */}
                </div>
            </div>
        </section>
    )
}

function XTwitter() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 300" version="1.1" className=" size-4 mt-0.5 fill-base-content">
            <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
        </svg>
    )
}