import { OscdComponent } from './oscd-component';

export function redispatchEvent(element: OscdComponent, event: Event) {
  element.requestUpdate();
  // For bubbling events in SSR light DOM (or composed), stop their propagation  // and dispatch the copy.
  const copy = Reflect.construct(event.constructor, [event.type, event]);
  if (event.bubbles && (!element.shadowRoot || event.composed)) {
    event.stopPropagation();
    copy.stopPropagation();
  }

  const dispatched = element.dispatchEvent(copy);
  if (!dispatched) {
    event.preventDefault();
  }
  return dispatched;
}
