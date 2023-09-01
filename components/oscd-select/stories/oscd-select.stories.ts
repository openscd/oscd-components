import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';

import '../src/OscdSelect';

import { createBadge } from '@oscd/utils';

import pckgJson from '../package.json';

const VALUES = [
  'Asia',
  'Africa',
  'North America',
  'South America',
  'Antarctica',
  'Europe',
  'Australia',
];

const meta: Meta = {
  title: 'Forms/OscdSelect',
  component: 'oscd-select',
  parameters: {
    status: {
      type: createBadge(pckgJson),
    },
  },
  argTypes: {
    value: {
      options: [null, ...VALUES],
      control: {
        type: 'select',
      },
    },
    maybeValue: {
      options: [null, ...VALUES],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

/**
 * Basic
 */
export const Basic: Story = {
  args: {
    label: 'Contintent',
    value: 'Asia',
  },
  render: ({ label, required, disabled, value, nullable }) => html`<oscd-select
    .label=${label}
    ?required=${required}
    ?disabled=${disabled}
    .value=${value}
    ?nullable=${nullable}
  >
    ${VALUES.map((value) => {
      return html`<mwc-list-item .value=${value}>${value}</mwc-list-item>`;
    })}
  </oscd-select>`,
  parameters: {
    docs: {
      description: {
        story: 'Basic oscd-select',
      },
    },
  },
};

/**
 * Nullable
 */
export const Nullable: Story = {
  args: {
    label: 'Contintent',
    nullable: true,
    maybeValue: 'North America',
  },
  render: ({
    label,
    required,
    disabled,
    maybeValue,
    nullable,
  }) => html`<oscd-select
    .label=${label}
    ?required=${required}
    ?disabled=${disabled}
    .maybeValue=${maybeValue}
    ?nullable=${nullable}
  >
    ${VALUES.map((value) => {
      return html`<mwc-list-item .value=${value}>${value}</mwc-list-item>`;
    })}
  </oscd-select>`,
};

/**
 * With Default Value
 */
export const WithDefaultValue: Story = {
  args: {
    label: 'Contintent',
    nullable: true,
    maybeValue: 'North America',
    defaultValue: 'Europe',
  },
  render: ({
    label,
    required,
    disabled,
    maybeValue,
    nullable,
    defaultValue,
  }) => html`<oscd-select
    .label=${label}
    ?required=${required}
    ?disabled=${disabled}
    .maybeValue=${maybeValue}
    ?nullable=${nullable}
    .defaultValue=${defaultValue}
  >
    ${VALUES.map((value) => {
      return html`<mwc-list-item .value=${value}>${value}</mwc-list-item>`;
    })}
  </oscd-select>`,
};

/**
 * With Helper
 */
export const WithHelper: Story = {
  args: {
    label: 'Contintent',
    nullable: true,
    maybeValue: 'North America',
    defaultValue: 'Europe',
    helper: 'Please select a continent',
  },
  render: ({
    label,
    required,
    disabled,
    maybeValue,
    nullable,
    defaultValue,
    helper,
  }) => html`<oscd-select
    .label=${label}
    ?required=${required}
    ?disabled=${disabled}
    .maybeValue=${maybeValue}
    ?nullable=${nullable}
    .defaultValue=${defaultValue}
    .helper=${helper}
  >
    ${VALUES.map((value) => {
      return html`<mwc-list-item .value=${value}>${value}</mwc-list-item>`;
    })}
  </oscd-select>`,
};

/**
 * With Validation Mesage
 */
export const WithValidationMessage: Story = {
  args: {
    required: true,
    label: 'Contintent',
    nullable: true,
    maybeValue: 'North America',
    defaultValue: 'Europe',
    validationMessage: 'You must fill in a continent',
  },
  render: ({
    label,
    required,
    disabled,
    maybeValue,
    nullable,
    defaultValue,
    validationMessage,
  }) => html`<oscd-select
    .label=${label}
    ?required=${required}
    ?disabled=${disabled}
    .maybeValue=${maybeValue}
    ?nullable=${nullable}
    .defaultValue=${defaultValue}
    .validationMessage=${validationMessage}
  >
    <mwc-list-item></mwc-list-item>
    ${VALUES.map((value) => {
      return html`<mwc-list-item .value=${value}>${value}</mwc-list-item>`;
    })}
  </oscd-select>`,
};

/**
 * Disabled
 */
export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  render: Basic.render,
};

/**
 * Disabled
 */
export const DisabledNullable: Story = {
  args: {
    ...Nullable.args,
    ...Disabled.args,
  },
  render: Basic.render,
};
