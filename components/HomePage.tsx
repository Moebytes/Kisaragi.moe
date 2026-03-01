/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React, {useEffect} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Section1 from "./Section1"
import Section2 from "./Section2"

interface Props {
    reRender: () => void
}

const HomePage: React.FunctionComponent<Props> = (props) => {
    useEffect(() => {
        document.title = "Kisaragi Bot"
    }, [])

    return (
        <>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Footer fanart reRender={props.reRender}/>
        </>
    )
}

export default HomePage