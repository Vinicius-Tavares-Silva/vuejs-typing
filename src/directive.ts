import { MyDirectiveBinding, DirectiveConfig} from './types'

const defaultConfig: DirectiveConfig = {
  text: '',
  typeSpeed: 100,
  hasCaret: true,
  caretSymbol: '|',
  caret: null,
  wordSplit: false,
}

function setupDirective(el: HTMLElement, binding: MyDirectiveBinding) {
  if (typeof binding.value !== 'object' && typeof binding.value !== 'string') {
    throw new Error('Invalid binding value')
  }
  const userConfig = typeof binding.value == 'string' ? { text: binding.value } : binding.value
  const config = { ...defaultConfig, ...userConfig }
  const { text, hasCaret, caretSymbol, caret, wordSplit } = config

  config.text = wordSplit ? (typeof text === 'string' ? text.split(' ') : text) : text

  if (hasCaret && !caret) {
    const caret = document.createElement('span')
    caret.id = 'caret'
    caret.innerHTML = caretSymbol
    el.innerHTML = ''
    config.caret = caret
  }

  return config
}

function simTyping(el: HTMLElement, config: DirectiveConfig, index: number = 0, displayCaret: boolean = true) {
  const { text, typeSpeed, wordSplit, caret } = config
  index === 0 && (el.innerHTML = '')

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
    if (caret) {
      caret.remove()
    }
  }
}

export default function (el: HTMLElement, binding: MyDirectiveBinding) {
  const directiveConfig = setupDirective(el, binding)
  simTyping(el, directiveConfig)
}