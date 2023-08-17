import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import { html, TemplateResult } from 'lit';

import { createBadge } from '@oscd/utils';

import pckgJson from '../package.json';

import '../src/OscdSwitch';

const meta: Meta = {
  title: 'Forms/OscdSwitch',
  component: 'oscd-switch',
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
  render: ({ selected, disabled, name, value, onChange }) =>
    html`<oscd-switch
      ?selected=${selected}
      ?disabled=${disabled}
      .name=${name}
      .value=${value}
      @change=${onChange}
    />`,
  args: {
    onChange: action('Changed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic OSCD Switch',
      },
    },
  },
};

/** Selected */
export const Selected: Story = {
  render: ({ selected, onChange }) =>
    html`<oscd-switch ?selected=${selected} @change=${onChange} />`,
  args: {
    selected: true,
    onChange: action('Changed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default Selected OSCD Switch',
      },
    },
  },
};
/** Disabled */
export const Disabled: Story = {
  render: ({ disabled, onChange }) =>
    html`<oscd-switch ?disabled=${disabled} @change=${onChange}></oscd-switch>`,
  args: {
    disabled: true,
    onChange: action('Changed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default disabled OSCD Switch',
      },
    },
  },
};
