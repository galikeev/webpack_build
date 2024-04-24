import {BuildOptions} from "../types/types";
import {removeDataTIdBabelPlugin} from "./removeDataTIdBabelPlugin";


export function buildBabelLoader(options: BuildOptions) {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTIdBabelPlugin,
      {
        props: ['data-tid']
      }
    ])
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env', "@babel/preset-typescript", ["@babel/preset-react", {"runtime": "automatic"}]],
        plugins: plugins.length ? plugins : undefined
      }
    }
  }
}