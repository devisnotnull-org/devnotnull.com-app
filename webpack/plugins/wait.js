// WaitPlugin.js
import WebpackBeforeBuildPlugin from 'before-build-webpack'
import { existsSync } from 'fs'

export class WaitPlugin extends WebpackBeforeBuildPlugin {
  constructor(file, interval = 100, timeout = 10000) {
    super(function(stats, callback) {
      let start = Date.now()

      function poll() {
        if (existsSync(file)) {
          callback()
        } else if (Date.now() - start > timeout) {
          throw Error("Maybe it just wasn't meant to be.")
        } else {
          setTimeout(poll, interval)
        }
      }
      poll()
    })
  }
}

export default WaitPlugin