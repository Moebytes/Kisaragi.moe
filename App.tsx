/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React, {useEffect, useReducer} from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import HomePage from "./components/HomePage"
import Commands from "./components/Commands"
import TermsOfService from "./components/TermsOfService"
import $404 from "./components/404"
import About from "./components/About"
import ScrollToTop from "./components/ScrollToTop"
import "./index.less"
import functions from "./structures/Functions"

const App: React.FunctionComponent = () => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    functions.preventDoubleClick()
    functions.preventDragging()
    functions.dragScroll(true)
  }, [])

  const reRender = () => {
    forceUpdate()
  }

  let theme: string | null = null
    if (typeof window !== "undefined") {
      theme = localStorage.getItem("theme")
      if (!theme) {
        theme = "dark"
        localStorage.setItem("theme", "dark")
      }
    } else {
      theme = "dark"
    }
    return (
      <div className={theme === "dark" ? "app dark-theme" : "app"} onTouchStart={() => ""}>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<HomePage reRender={reRender}/>}/>
              <Route path="/home" element={<HomePage reRender={reRender}/>}/>
              <Route path="/kisaragi" element={<HomePage reRender={reRender}/>}/>
              <Route path="/commands" element={<Commands reRender={reRender}/>}/>
              <Route path="/privacy" element={<Navigate to="/terms#privacy" replace/>}/>
              <Route path="/terms" element={<TermsOfService reRender={reRender}/>}/>
              <Route path="/about" element={<About reRender={reRender}/>}/>
              <Route path="*" element={<$404 reRender={reRender} />}/>
            </Routes>
          </ScrollToTop>
      </div>
    )
}

export default App