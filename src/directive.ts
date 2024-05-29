import { DirectiveBinding } from 'vue';

interface MyDirectiveBinding extends DirectiveBinding {
  value: {
    text: string;
    typeSpeed: number;
  };
}

function simTyping(el: HTMLElement, binding: MyDirectiveBinding, index: number = 0) {
  const { text, typeSpeed } = binding.value;
  const caret = document.createElement('span');
  caret.classList.add('blink');
  caret.id = 'caret';
  caret.innerHTML = '|';
  index === 0 && (el.innerHTML = '');
  const existingCaret = el.querySelector('#caret');
  if (existingCaret) {
    existingCaret.remove();
  }
  if (index < text.length) {
    el.innerHTML += text[index];
    el.appendChild(caret);
    setTimeout(() => {
      simTyping(el, binding, index + 1);
    }, typeSpeed);
  }
}

export default function (el: HTMLElement, binding: MyDirectiveBinding) {
  simTyping(el, binding);
}