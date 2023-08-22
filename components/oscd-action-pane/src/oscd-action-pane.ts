import {
  html,
  CSSResultGroup,
  TemplateResult,
  property,
  nothing,
} from 'lit-element';
import { classMap } from 'lit/directives/class-map.js';

import { OscdComponent } from '@openscd/core';

import styles from './oscd-action-pane.styles.js';

function closestTo<E extends Element>(node: Node, selector: string): E | null {
  const closest =
    node.nodeType === Node.ELEMENT_NODE
      ? (<Element>node).closest<E>(selector)
      : null;

  if (closest) return closest;

  const root = <Document | DocumentFragment>node.getRootNode();

  if (root instanceof ShadowRoot) return closestTo(root.host, selector);

  return null;
}

/**
 *
 * @slot `action` - May contain up to eight icon buttons.
 * @slot `icon` - If filled overrides the icon property.
 * @slot `[default]` - The default slot will be rendered into the pane body in a single column.
 *
 * @cssprop [--oscd-action-icon-theme-primary=--oscd-theme-primary] - Color for border on even levels.
 * @cssprop [--oscd-action-icon-theme-on-primary=--oscd-theme-on-primary] - Pane color for the uneven levels.
 * @cssprop [--oscd-action-icon-theme-secondary=--oscd-theme-secondary] - Color for border on uneven levels.
 * @cssprop [--oscd-action-pane-theme-surface=--oscd-theme-surface] - Pane color for the even levels.
 * @cssprop [--oscd-action-icon-theme-on-surface=--oscd-theme-on-surface] - Icon and label color.
 * @cssprop [--oscd-action-icon-theme-font=--oscd-theme-font] - Font for label.
 *
 * @prop {string} label - Caption text, displayed in the header
 * @prop {string} icon - Icon name, displayed unless the "icon" slot is filled
 * @prop {boolean} secondary - Color header with Secondary theme color while focus is within
 * @prop {boolean} highlighted - Highlight pane with dotted outline
 * @prop {number} level - Nesting level, default (closes pane ancestors level) + 1
 *
 * @summary A responsive container rendering actions in a header.
 * @tag oscd-action-pane
 */
export class OscdActionPane extends OscdComponent {
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
  @property({ type: Boolean })
  secondary = false;

  /** highlight pane with dotted outline */
  @property({ type: Boolean })
  highlighted = false;

  /** nesting level, default (closest pane ancestor's level) + 1 */
  @property({ type: Number })
  level = 1;

  async firstUpdated(): Promise<void> {
    this.tabIndex = 0;

    const parentPane = closestTo<OscdActionPane>(
      this.parentNode!,
      'oscd-action-pane'
    );
    if (parentPane) this.level = parentPane.level + 1;

    this.level = Math.floor(this.level);
  }

  private renderHeader(): TemplateResult {
    const content = html`<span
        ><slot name="icon"
          >${this.icon
            ? html`<mwc-icon>${this.icon}</mwc-icon>`
            : nothing}</slot
        ></span
      >
      ${this.label ?? nothing}
      <nav><slot name="action"></slot></nav>`;

    const headingLevel = Math.floor(Math.max(this.level, 1));
    // Sometimes a TemplateResult is passed in as Label, not a string. So only when it's a string show a title.
    const title = typeof this.label === 'string' ? this.label : '';
    switch (headingLevel) {
      case 1:
        return html`<h1 title="${title}">${content}</h1>`;
      case 2:
        return html`<h2 title="${title}">${content}</h2>`;
      case 3:
        return html`<h3 title="${title}">${content}</h3>`;
      default:
        return html`<h4 title="${title}">${content}</h4>`;
    }
  }

  render(): TemplateResult {
    return html`<section
      class="${classMap({
        secondary: this.secondary,
        highlighted: this.highlighted,
        contrasted: this.level % 2 === 0,
      })}"
    >
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`;
  }
}
