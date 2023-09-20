import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import { html, TemplateResult } from 'lit';

import '../src/OscdButton';

import { createBadge } from '@oscd/utils';

import pckgJson from '../package.json';

const meta: Meta = {
  title: 'Buttons/OscdButton',
  component: 'oscd-button',
  parameters: {
    status: {
      type: createBadge(pckgJson),
    },
  },
  args: {
    onclick: action('Clicked'),
  },
};

export default meta;

type Story = StoryObj;

/**
 * Basic
 */
export const Basic: Story = {
  args: {
    label: 'Click me!',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic oscd-button',
      },
    },
  },
};

/**
 * Raised
 */
export const Raised: Story = {
  args: {
    ...Basic.args,
    raised: true,
  },
};

/**
 * Outliend
 */
export const Outlined: Story = {
  args: {
    ...Basic.args,
    outlined: true,
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
 * Raised Disabled
 */
export const RaisedDisabled: Story = {
  args: {
    ...Raised.args,
    ...Disabled.args,
  },
};

/**
 * Outlined Disabled
 */
export const OutlinedDisabled: Story = {
  args: {
    ...Outlined.args,
    ...Disabled.args,
  },
};

/**
 * With Icon
 */
export const WithIcon: Story = {
  args: {
    ...Basic.args,
    icon: 'edit',
  },
};

/**
 * Raised with Icon
 */
export const RaisedWithIcon: Story = {
  args: {
    ...Raised.args,
    ...WithIcon.args,
  },
};

/**
 * Outlined with Icon
 */
export const OutlinedWithIcon: Story = {
  args: {
    ...Outlined.args,
    ...WithIcon.args,
  },
};
