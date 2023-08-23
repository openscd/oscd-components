import type { Meta, StoryObj } from '@storybook/web-components';
import { userEvent, within } from '@storybook/testing-library';

import { html } from 'lit';

import '../src/OscdTextfield';

import { createBadge } from '@oscd/utils';

import pckgJson from '../package.json';

const meta: Meta = {
  title: 'Forms/OscdTextfield',
  component: 'oscd-textfield',
  parameters: {
    status: {
      type: createBadge(pckgJson),
    },
  },
};

export default meta;

type Story = StoryObj;

/**
 * Basic
 */
export const Basic: Story = {
  render: ({ label, value }) =>
    html`<oscd-textfield .label=${label} .value=${value}></oscd-textfield>`,
  args: {
    label: 'Name',
    value: 'John Doe',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic OSCD Textfield',
      },
    },
  },
};

/**
 * Disabled
 */
export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled OSCD Textfield',
      },
    },
  },
};

/**
 * Required
 */
export const Required: Story = {
  args: {
    ...Basic.args,
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Required OSCD Textfield',
      },
    },
  },
};

/**
 * Nullable
 */
export const Nullable: Story = {
  args: {
    ...Basic.args,
    nullable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Nullable OSCD Textfield',
      },
    },
  },
};

/**
 * Nullable With Default Value
 */
export const NullableWithDefaultValue: Story = {
  args: {
    ...Nullable.args,
    defaultValue: 'James Bond',
  },
  parameters: {
    docs: {
      description: {
        story: 'Nullable OSCD Textfield with Default Value',
      },
    },
  },
};

/**
 * Suffix
 */
export const WithSuffix: Story = {
  args: {
    value: 'John.Doe',
    label: 'Email',
    suffix: '@example.org',
  },
};
/**
 * MaybeValue
 */
export const MaybeValue: Story = {
  args: {
    ...Basic.args,
    maybeValue: 'Jane Doe',
  },
};

/**
 * Helper
 */
export const WithHelper: Story = {
  args: {
    ...Basic.args,
    helper: 'Please enter your name',
  },
};

/**
 * Persistent Helper
 */
export const WithPersistentHelper: Story = {
  args: {
    ...WithHelper.args,
    helperPersistent: true,
  },
};

/** Validation Message */
export const WithValidationMessage: Story = {
  args: {
    ...Required.args,
    validationMessage: 'We need your name',
  },
};

/**
 * Multiplier
 */
export const WithMultiplier: Story = {
  args: {
    ...Basic.args,
    label: 'Memory',
    value: 4096,
    multipliers: ['Kilo', 'Mega', 'Giga'],
    unit: 'Byte',
  },
};
