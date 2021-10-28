import React from "react";
import Img from '../../src/logo.png'


function Header() {
    return (
        <div className="header">
            <nav>
                <img src={Img} alt="" className="logo" width="66" height="66" />

                <ul>
                    <li><a href="#trendingA">Trending Animes</a></li>
                    <span>|</span> 
                    <li><a href="#trendingM">Trending Manga</a></li> 
                    <span>|</span> 
                    <li><a href="#AnMa">Anime & Manga</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header