import { TemplateResult } from 'lit-element';
import { html } from 'lit-html';

import { withActions } from '@storybook/addon-actions/decorator';

export default {
  title: 'Form/OscdTextfield',
  component: 'OscdTextfield',
  argTypes: {},
  parameters: {
    actions: {},
  },
  decorators: [withActions],
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label: string;
  value?: string | null;
  maybeValue?: string | null;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  nullabe?: boolean;
  defaultValue?: string | null;
}

const Template: Story<ArgTypes> = ({
  label,
  value,
  maybeValue,
  required,
  disabled,
  readonly,
  nullabe,
  defaultValue,
}: ArgTypes) =>
  html` <oscd-textfield
    .label=${label}
    .value=${value}
    .maybeValue=${maybeValue}
    ?required=${required}
    ?disabled=${disabled}
    ?readonly=${readonly}
    ?nullable=${nullabe}
    .defaultValue=${defaultValue || null}
  ></oscd-textfield>`;

export const Regular = Template.bind({});

Regular.args = {
  label: 'Name',
  value: 'John Doe',
  maybeValue: null,
};

export const MaybeValue = Template.bind({});

MaybeValue.args = {
  ...Regular.args,
  value: null,
  maybeValue: 'Jane Doe',
};

export const Required = Template.bind({});

Required.args = {
  ...Regular.args,
  required: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...Regular.args,
  disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  ...Regular.args,
  readonly: true,
};

export const Nullable = Template.bind({});
Nullable.args = {
  ...Regular.args,
  nullabe: true,
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  ...Nullable.args,
  defaultValue: 'Jane Doe',
};
