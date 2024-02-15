// packages/my-ui-library/src/index.ts

import { init } from 'snabbdom/build/package/init';
import { h } from 'snabbdom/build/package/h';

type TemplateFunction = (state: any, updateState: (newState: any) => void) => any;

interface Component {
  template: TemplateFunction;
  onMount?: () => void;
}

export function createComponent(component: Component) {
  let vnode: any;

  function updateState(newState: any) {
    vnode = patch(vnode, component.template(newState, updateState));
  }

  function mount(container: Element) {
    vnode = patch(container, component.template({}, updateState));
    if (component.onMount) {
      component.onMount();
    }
  }

  const patch = init([]);

  return {
    mount,
    updateState,
  };
}
