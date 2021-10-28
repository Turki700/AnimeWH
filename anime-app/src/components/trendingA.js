import React, { useEffect, useState } from "react";
import axios from "axios";

function TrendingA() {

    const [trendingA, setTrendingA] = useState()

    useEffect(() => {
        async function getInfo() {
            try {
                const res = await axios.get("https://kitsu.io/api/edge/trending/anime")
                console.log(res);
                setTrendingA(res.data.data)
            } catch (err) {
                console.log(err);
            }
        }

        getInfo()
    }, [])

    return (
        <div className="trending" id="trendingA">
            <div>
                <h1>Trending Animes</h1>

                <div className="contentTrending">
                    <div className="items">
                        {trendingA && 
                            (trendingA.map((ele) => (
                                <div className="item">
                                    <img src={ele.attributes.posterImage.small} />
                                    <h5>{ele.attributes.canonicalTitle}</h5>
                                </div>
                            )))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingA