import { DirectiveBinding } from 'vue'

interface MyDirectiveBinding extends DirectiveBinding {
  value: {
    caret: HTMLSpanElement
    text: string | string[]
    typeSpeed: number
    hasCaret: boolean
    caretSymbol: string
    wordSplit: boolean
  } | string
}

interface DirectiveConfig {
  text: string | string[]
  typeSpeed: number
  hasCaret: boolean
  caretSymbol: string
  caret: HTMLSpanElement | null
  wordSplit: boolean
}

export type {
  MyDirectiveBinding,
  DirectiveConfig,
}
