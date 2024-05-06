export default function FounderStory() {
    return (
        <section className="bg-base-100" id="demo">
            <div className="py-24 max-md:px-8 max-w-3xl mx-auto">
                <div className="leading-relaxed text-base-content/80 mb-12 max-w-xl mx-auto">
                    <img alt="Marc Lou — Product Hunt Maker of the Year 2023" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"
                        className="w-32 h-32 md:w-52 md:h-52 rounded-lg float-left mr-8 mb-8 object-center object-cover"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaker-of-the-year-2023.285fe739.png&amp;w=640&amp;q=75"/>
                        <p className="mb-4 text-base-content md:text-lg font-medium">Hey, it{`'`}s Marc 👋</p>
                        <p className="mb-5">In 2018, I believed I was Mark Zuckerberg, built a startup for 1 year, and got 0 users...</p>
                        <p className="mb-5">A few years after my burnout, I restarted the journey differently: I shipped like a madman—
                            <a className="link text-base-content font-medium hover:link-accent whitespace-nowrap" target="_blank" href="https://marclou.com?ref=shipfast_intro">
                                16 startups in 2 years.
                            </a> Now I{`'`}m happy and earn $45,000 a month.
                        </p>
                        <p className="mb-5">I realized I was doing the same thing over and over: set up DNS records, listen to Stripe webhooks, design pricing section...
                            So I built ShipFast for 3 reasons:</p>
                        <ul className="list-inside list-decimal space-y-1.5 ml-5 mb-5">
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
                        </p>
                </div>
            </div>
        </section>
    )
}