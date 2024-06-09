export default function FeaturedOn() {
    return (
        <section className=" lg:-mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-base ">
            <div className=" flex gap-2 items-center justify-center">
                {/* <span className="text-xs text-[10px] opacity-50">Featured on</span> */}
                <a href="https://www.producthunt.com/posts/cyanarrow?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cyanarrow" target="_blank" className="opaci hover:grayscale-0 hover:opacity-100 transition-all "
                    title="Product Hunt link">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=457583&theme=neutral" alt="CyanArrow - Save&#0032;Time&#0032;&#0038;&#0032;Reduce&#0032;Costs&#0032;with&#0032;AI&#0032;Support&#0032;Agent | Product Hunt" style={{ width: "250px", height: "54px" }} width="250" height="54" className=" max-lg:scale-[0.8] lg:scale-[1]  " />
                </a>
                <a href="https://theresanaiforthat.com/ai/cyanarrow/?ref=featured&v=1632854" target="_blank" rel="nofollow" className="  opacit hover:grayscale-0 hover:opacity-100 transition-all ">
                    <img width="300" src="https://media.theresanaiforthat.com/featured-on-taaft.png?width=600"  className=" max-lg:scale-[0.8] lg:scale-[1]  " />
                </a>
            </div>
        </section>
    )
}