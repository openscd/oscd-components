import { html, TemplateResult } from 'lit';

import { ifDefined } from 'lit-html/directives/if-defined.js';

import '../src/OscdButton';

export default {
  title: 'oscd-button/OscdButton/Raised',
  component: 'oscd-button',
  argTypes: {},
  parameters: {
    actions: {},
    status: {
      type: 'beta',
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  content: TemplateResult;
  raised?: boolean;
  icon?: string;
  label?: string;
  disabled?: boolean;
}

const Template: Story<ArgTypes> = ({
  content,
  raised,
  label,
  disabled,
  icon,
}: ArgTypes) =>
  html`<oscd-button
    ?raised=${ifDefined(raised)}
    .label=${label || ''}
    ?disabled=${disabled}
    .icon=${icon}
    >${content}</oscd-button
  >`;

export const Regular = Template.bind({});
Regular.args = {
  content: html`<span>Click me</span>`,
  raised: true,
};

export const Label = Template.bind({});
Label.args = {
  ...Regular.args,
  label: 'My label',
};

export const Icon = Template.bind({});

Icon.args = {
  ...Regular.args,
  icon: 'edit',
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...Regular.args,
  disabled: true,
};
