/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {createRoot} from "react-dom/client"
import {BrowserRouter as Router} from "react-router-dom"

const rootElement = document.getElementById("app")!
createRoot(rootElement).render(<Router><App/></Router>)