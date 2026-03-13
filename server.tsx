/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Kisaragi - A kawaii discord bot ❤                         *
 * Copyright © 2026 Moebytes <moebytes.com>                  *
 * Licensed under CC BY-NC 4.0. See license.txt for details. *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import path from "path"
import mime from "mime"
import cors from "cors"
import bodyParser from "body-parser"
import express from "express"
import config from "./webpack.config"
import favicon from "express-favicon"
import dotenv from "dotenv"
import ReactDOMServer from "react-dom/server"
import {StaticRouter as Router} from "react-router-dom"
import React from "react"
import App from "./App"
import fs from "fs"
const __dirname = path.resolve()

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.disable("x-powered-by")
app.set("trust proxy", true)

dotenv.config()
app.use(express.static(path.join(__dirname, "./public")))
app.use(express.static(path.join(__dirname, "./assets")))
app.use(express.static(path.join(__dirname, "./dist/client"), {index: false}))
app.use(favicon(__dirname + "/assets/icons/favicon.gif"))

const writePictures = () => {
  const indexImages: string[] = []
  const indexPath = path.join(__dirname, "assets/waifu")
  const folders = fs.readdirSync(indexPath)
  for (let i = 0; i < folders.length; i++) {
      if (folders[i] === "files.json") continue
      if (folders[i] === ".DS_Store") continue
      const images: string[] = []
      const folderPath = path.join(__dirname, `assets/waifu/${folders[i]}`)
      const files = fs.readdirSync(folderPath)
      for (let j = 0; j < files.length; j++) {
          if (files[j] === "files.json") continue
          if (files[j] === ".DS_Store") continue
          images.push(encodeURI(`https://kisaragi.moe/assets/waifu/${folders[i]}/${path.basename(files[j])}`))
      }
      indexImages.push(...images)
      fs.writeFileSync(path.join(folderPath, "files.json"), JSON.stringify(images, undefined, 4))
  }
  fs.writeFileSync(path.join(indexPath, "files.json"), JSON.stringify(indexImages, undefined, 4))
}

writePictures()

app.get("/{*page}", function(req, res) {
  res.setHeader("Content-Type", mime.getType(req.path) ?? "")
  if (process.env.TESTING === "yes") {
    res.sendFile(path.join(__dirname, "./dist/client/index.html"))
  } else {
    const html = ReactDOMServer.renderToString(<Router location={req.url}><App/></Router>)
    const data = fs.readFileSync(path.join(__dirname, "./dist/client/index.html"), {encoding: "utf-8"})
    const document = data.replace(`<div id="app"></div>`, `<div id="app">${html}</div>`)
    res.send(document)
  }
})

const start = () => {
  let port = process.env.PORT || 8090
  app.listen(port, () => console.log(`Started the website server! http://localhost:${port}`))
}

start()