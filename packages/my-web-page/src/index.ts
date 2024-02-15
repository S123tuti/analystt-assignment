// packages/my-web-page/src/index.ts

import { createComponent } from 'my-ui-library'; // Correct import path

const App = createComponent({
  template: (state, updateState) => {
    return h('div', [
      h('h1', state.count.toString()),
      h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add'),
    ]);
  },
  onMount: () => {
    console.log('Component is mounted');
  },
});

const container = document.getElementById('app');
if (container) {
  App.mount(container);
}
