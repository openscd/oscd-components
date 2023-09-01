import { html, CSSResultGroup, TemplateResult, nothing } from 'lit-element';

import { property } from 'lit/decorators.js';

import '@material/mwc-icon';

import { OscdComponent } from '@openscd/core';

import styles from './oscd-action-icon.styles.js';

/**
 * @slot action - May contain up to eight icon buttons.
 * @slot icon - If filled overrides the icon property.
 * @slot - The default slot will be rendered into the pane body in a single column.
 * @cssprop [--oscd-action-icon-theme-primary=--oscd-theme-primary] - Border and hover color.
 *
 * @cssprop [--oscd-action-icon-theme-on-primary=--oscd-theme-on-primary] - Font color inside hover field.
 * @cssprop [--oscd-action-icon-theme-secondary=--oscd-theme-secondary] - Secondary border and hover color.
 * @cssprop [--oscd-action-icon-theme-on-surface=--oscd-theme-on-surface] - Icon and label color.
 * @cssprop [--oscd-action-icon-theme-font=--oscd-theme-font] - Font for label and hover text.
 *
 * @prop {string} label - Caption text, displayed in the header
 * @prop {string} icon - Icon name, displayed unlesss the "icon" slot is filled
 * @prop {boolean} secondary - Color header with secondary theme color while focus is within
 * @prop {boolean} highlighted - Highlight pane with dotted outline
 * @prop {boolean} hideActions - Disabled CSS adoption
 *
 * @summary A responsive container rendering actions in a header.
 * @tag oscd-action-icon
 */
export class OscdActionIcon extends OscdComponent {
  static styles: CSSResultGroup = styles;

  /**
   * @internal
   */
  static get scopedElements() {
    return {};
  }

  /** caption text, displayed in the header */
  @property({ type: String })
  label?: string;

  /** icon name, displayed unless the "icon" slot is filled */
  @property({ type: String })
  icon?: string;

  /** color header with secondary theme color while focus is within */
  @property({ type: Boolean, reflect: true })
  secondary = false;

  /** highlight pane with dotted outline */
  @property({ type: Boolean, reflect: true })
  highlighted = false;

  /** disables CSS adoption to action buttons */
  @property({ type: Boolean, reflect: true })
  hideActions = false;

  async firstUpdated(): Promise<void> {
    this.tabIndex = 0;
  }

  private renderIcon(): TemplateResult {
    return html`<span ?highlighted=${this.highlighted}>
      <slot name="icon"
        >${this.icon ? html`<mwc-icon>${this.icon}</mwc-icon>` : nothing}</slot
      ></span
    > `;
  }

  render(): TemplateResult {
    return html`${this.label ? html`<header>${this.label}</header>` : nothing}
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      ${this.label ? html`<footer>${this.label}</footer>` : nothing}`;
  }
}
