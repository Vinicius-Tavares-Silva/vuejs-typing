import { MyDirectiveBinding, DirectiveConfig} from './types'

const defaultConfig: DirectiveConfig = {
  text: '',
  typeSpeed: 100,
  hasCaret: true,
  caretSymbol: '|',
  caret: null,
  wordSplit: false,
  onStart: () => {},
  onEnd: () => {},
}

function setupDirective(binding: MyDirectiveBinding) {
  if (typeof binding.value !== 'object' && typeof binding.value !== 'string') {
    throw new Error('Invalid binding value')
  }
  const userConfig = typeof binding.value == 'string' ? { text: binding.value } : binding.value
  const config = { ...defaultConfig, ...userConfig }
  const { text, hasCaret, caretSymbol, caret, wordSplit, onStart } = config

  config.text = wordSplit ? (typeof text === 'string' ? text.split(' ') : text) : text

  if (hasCaret && !caret) {
    const caret = document.createElement('span')
    caret.id = 'caret'
    caret.textContent = caretSymbol
    config.caret = caret
  }
  onStart()

  return config
}

function simTyping(el: HTMLElement, config: DirectiveConfig, index: number = 0, displayCaret: boolean = true) {
  const { text, typeSpeed, wordSplit, caret, onEnd } = config

  if (index < text.length) {
    setTimeout(() => {
      if (caret && !displayCaret) {
        caret.remove();
      }
      const textToInsert = wordSplit ? text[index] + ' ' : text[index]
      el.innerHTML += textToInsert
      if (caret && displayCaret) {
        el.appendChild(caret)
      }
      simTyping(el, config, index + 1, !displayCaret)
    }, typeSpeed)
  }

  if (index === text.length) {
    onEnd()
    if (caret) {
      caret.remove()
    }
  }
}

export default {
  created: function (el: HTMLElement, binding: MyDirectiveBinding) {
    const directiveConfig = setupDirective(binding)
    el.innerHTML = ''
    simTyping(el, directiveConfig)
  },
  updated: function () {
    return
  },

  //for V 2.x
  bind: function (el: HTMLElement, binding: MyDirectiveBinding) {
    const directiveConfig = setupDirective(binding)
    el.innerHTML = ''
    simTyping(el, directiveConfig)
  },
  componentUpdated: function () {
    return
  },
}
