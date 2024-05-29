import { App, DirectiveBinding, Directive } from 'vue';

const typing: Directive = {
  beforeMount: (el: HTMLElement, binding: DirectiveBinding) => {
    el.style.backgroundColor = binding.value;
  }
}

export default {
  install: (app: App, _options: unknown) => {
    app.directive('typing', typing);
  }
}