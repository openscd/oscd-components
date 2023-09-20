import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import { html, TemplateResult } from 'lit';

import '../src/OscdCheckbox';

import { createBadge } from '@oscd/utils';

import pckgJson from '../package.json';

const meta: Meta = {
  title: 'Forms/OscdCheckbox',
  component: 'oscd-checkbox',
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
  args: {
    label: 'I agree with the terms and conditions',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic oscd-checkbox',
      },
    },
  },
};

/**
 * Checked
 */
export const Checked: Story = {
  args: {
    ...Basic.args,
    checked: true,
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
};

/**
 * Default Checked
 */
export const DefaultChecked: Story = {
  args: {
    ...Basic.args,
    nullable: true,
    defaultChecked: true,
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
};

/**
 * Disabled nullable
 */
export const DisabledNullable: Story = {
  args: {
    ...Nullable.args,
    disabled: true,
  },
};
