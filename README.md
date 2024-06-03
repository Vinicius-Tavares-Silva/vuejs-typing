<h1 align="center">
VueJs-Typing
</h1>
<p align="center">
Vue Typing is a lightweight directive compatible with both Vue 2 and Vue 3. It simulates the typing of text for any HTML tag, providing a dynamic typing effect. It's perfect for creating typing animations in your Vue.js applications.
</p>



## Installation Guide

This guide will help you install and use the directive in your Vue.js project.

### Prerequisites

Ensure you have the following installed on your system:

- Node.js and npm
- Vue.js/Nuxt

### Installation

1. **Install the package**

   Open your terminal and run the following command:

   ```bash
   npm install vuejs-typing
   ```

### Usage

You can use the directive either globally in your Vue application or locally in a single Vue component.

1. **Global import**

   Import the directive and use it in your Vue application:

   ```javascript
   import { createApp } from 'vue'
   import App from './App.vue'
   import typing from 'vuejs-typing'

   const app = createApp(App)

   app.use(typing)
   ```

2. **Local import**

   Import the directive and use it in your Vue component:

   ```javascript
   import { typing } from 'vuejs-typing'

   export default {
     directives: {
       typing
     }
   }
   ```
   
Use the directive

You can now use the directive in your Vue template:

```vue
<div v-typing="'Hello World'"></div>
```

Or with an object configuration:

```vue
<div v-typing="{ text: 'Hello World', typeSpeed: 100, hasCaret: true, caretSymbol: '|', wordSplit: false }"></div>
```

<p align="center">
<img src="https://github.com/Vinicius-Tavares-Silva/vuejs-typing/blob/master/src/demo/vuejs-typing-gif.gif" alt="Vuejs-Typing demo gif"/>
</p>


### Configuration

| Property    | Type    | Default | Description                                                                 |
|-------------|---------|---------|-----------------------------------------------------------------------------|
| text        | string  | ''      | The text to be typed out.                                                   |
| typeSpeed   | number  | 100     | The speed at which the text is typed out. (ms)                              |
| hasCaret    | boolean | true    | Whether to display a caret at the end of the typing.                        |
| caretSymbol | string  | 'I'     | The symbol to use for the caret.                                            |
| wordSplit   | boolean | false   | Whether to split the text into words. If true, each word is typed out separately. |
| caret       | object  | null    | The caret object. This is managed internally and should not be set manually. |
