import { html, TemplateResult } from 'lit';

import '../src/OscdButton';

export default {
  title: 'oscd-button/OscdButton/Regular',
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
    ?raised=${raised}
    .lable=${label}
    ?disabled=${disabled}
    .icon=${icon}
    >${content}</oscd-button
  >`;

export const Regular = Template.bind({});
Regular.args = {
  content: html`<span>Click me</span>`,
};

export const Raised = Template.bind({});
Raised.args = {
  ...Regular.args,
  raised: true,
};

export const Label = Template.bind({});
Label.args = {
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
