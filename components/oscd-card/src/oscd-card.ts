import { html, CSSResultGroup, TemplateResult, property } from 'lit-element';

import { OscdComponent } from '@openscd/core';

import styles from './oscd-card.styles.js';

/**
 * @slot - Card Content
 *
 * @tag oscd-card
 */
export class OscdCard extends OscdComponent {
  static styles: CSSResultGroup = styles;

  @property({ type: Number }) stackLevel = 0;

  // eslint-disable-next-line class-methods-use-this
  render(): TemplateResult {
    const scale = `${1 - this.stackLevel * 0.05}`;
    const translateY = `${-this.stackLevel * 60}px`;
    const translateX = `0px`;

    const style = `
        --scale: ${scale};
        --translate-x: ${translateX};
        --translate-y: ${translateY};
      `;

    return html`
      <div class="container" style=${style}>
        <div class="surface">
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
