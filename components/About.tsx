/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React, {useEffect} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import kisaragiChibi from "../assets/images/kisaragichibi2.png"
import moebytes from "../assets/icons/moebytes-icon.png"
import discordJS from "../assets/icons/discordjs.png"
import nodeJS from "../assets/icons/nodejs.png"
import typescript from "../assets/icons/typescript.png"
import postgreSQL from "../assets/icons/postgresql.png"
import react from "../assets/icons/react.png"
import "./styles/about.less"

interface Props {
    reRender: () => void
}

const About: React.FunctionComponent<Props> = (props) => {
    useEffect(() => {
        document.title = "About"
    }, [])

    return (
        <>
        <Navbar/>
        <section className="about">
            <h1 className="about-header">About</h1>
            <div className="about-paragraph-container">
                <p className="about-paragraph">
                    <a href="https://azurlane.koumakan.jp/Kisaragi" className="about-link" target="_blank">Kisaragi</a> was a Mutsuki-class destroyer of the Imperial Japanese Navy during World War II.
                    She was sunken at the <a href="https://en.wikipedia.org/wiki/Battle_of_Wake_Island" className="about-link" target="_blank">Battle of Wake Island</a> by American aircraft. Kisaragi is part of
                    <a href="https://en.wikipedia.org/wiki/Azur_Lane" className="about-link" target="_blank"> Azur Lane</a>, which is basically a game where cute anime girl personifications of World War II battleships
                    battle each other. Azur Lane also has an <a href="https://myanimelist.net/anime/38328/Azur_Lane" className="about-link" target="_blank">anime</a> series.
                </p>
                <img src={kisaragiChibi} width="150" height="150" className="about-img"/>
            </div>
            <ul className="about-ul">
                <li className="about-list"><span>Creator: Moebytes</span> <img src={moebytes} width="30" height="30"/></li>
                <li className="about-list"><span>Library: Discord.js</span> <img src={discordJS} width="30" height="30"/></li>
                <li className="about-list"><span>Runtime: Node.js</span> <img src={nodeJS} width="30" height="30"/></li>
                <li className="about-list"><span>Language: Typescript</span> <img src={typescript} width="30" height="30"/></li>
                <li className="about-list"><span>Database: PostgreSQL</span> <img src={postgreSQL} width="30" height="30"/></li>
                <li className="about-list"><span>Website: React</span> <img src={react} width="30" height="30"/></li>
            </ul>
        </section>
        <Footer reRender={props.reRender}/>
        </>
    )
}

export default About