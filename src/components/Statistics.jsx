import {React } from "react"
import Image from "next/image";
import gem from "@/assets/images/stats_gems.png";
import torous from "@/assets/images/stats_torous.png";
function Statistics (){

    return(

        <div className="statistics">
            
           
            <Image src={torous} alt="torous" className="torous"/>

            <div className="stats_heading">   <Image src={gem} alt="gem" className="gem"/> <h3>This Year We Brings</h3> </div>

            <div className="statistics_items">
                
                <span> <span className="statisticsNumber">10+</span> <span className = "StatisticsName"> informals    </span> </span>
                <span> <span className="statisticsNumber">8+</span>  <span className = "StatisticsName"> workshops    </span></span>
                <span className="third"> <span className="statisticsNumber">5+</span>  <span className = "StatisticsName"> pre events   </span> </span>
                <span className="fourth"> <span className="statisticsNumber">4+</span>  <span className = "StatisticsName"> talk sessions</span> </span>

            </div>

        </div>



    )
}

export default Statistics;