import { React } from "react"
import localFont from "next/font/local";

const PPNeueMontrealFont = localFont({
    src: [
        {
            path: "../../public/fonts/PPNeueMontreal-Medium.otf",
            weight: "500",
            style: "normal",
        },
    ],
});

function Statistics() {

    return (
        <div className="statistics relative w-full overflow-clip md:py-16 mt-10 md:mt-0">
            <img src={'images/stats_torous.png'} alt="torous" className="torous absolute w-[180px] h-[180px] md:w-[300px] md:h-[400px] -z-[1] -right-12 top-24" />
            <div className="stats_heading flex justify-center items-center mr-10 mb-2">
                <img src={'images/stats_gems.png'} alt="gem" className="gem " />
                <h2 className={`text-[16px] md:text-2xl font-normal text-center text-white ${PPNeueMontrealFont.className}`}>
                    this year we bring
                </h2>
            </div>
            <div className="statistics_items">
                <span> <span className="statisticsNumber">10+</span> <span className="StatisticsName"> informals    </span> </span>
                <span> <span className="statisticsNumber">8+</span>  <span className="StatisticsName"> workshops    </span></span>
                <span className="third"> <span className="statisticsNumber">5+</span>  <span className="StatisticsName"> pre events   </span> </span>
                <span className="fourth"> <span className="statisticsNumber">4+</span>  <span className="StatisticsName"> talk sessions</span> </span>
            </div>
        </div>
    )
}

export default Statistics;