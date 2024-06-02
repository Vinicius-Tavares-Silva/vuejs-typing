import { App } from 'vue'
import typing from './directive.ts'

export default {
  install: (app: App, _options: unknown) => {
    app.directive('typing', typing)
  }
}

export { typing }
