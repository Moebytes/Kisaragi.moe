import {defineConfig} from "@rsbuild/core"
import {pluginReact} from "@rsbuild/plugin-react"
import {pluginLess} from "@rsbuild/plugin-less"
import {pluginNodePolyfill} from "@rsbuild/plugin-node-polyfill"
import {pluginTypeCheck} from "@rsbuild/plugin-type-check"
import dotenv from "dotenv"

const env = dotenv.config().parsed!

let minimize = env.TESTING === "no"
let typecheck = env.TYPECHECK === "yes"

export default defineConfig({
    tools: {
        rspack(config) {
            config.module = config.module || {}
            config.module.rules = config.module.rules || []

            config.module.rules.push({
                test: /\.svg$/i,
                type: "asset/inline",
            })

            return config
        }
    },
    plugins: [
        pluginReact(),
        pluginLess(),
        pluginNodePolyfill(),
        pluginTypeCheck({enable: typecheck})
    ],
    source: {
        entry: {server: "./server.tsx"}
    },
    output: {
        target: "node",
        minify: minimize,
        dataUriLimit: 0,
        filenameHash: false,
        sourceMap: false,
        distPath: {root: "./dist/server"},
        legalComments: "none"
    }
})