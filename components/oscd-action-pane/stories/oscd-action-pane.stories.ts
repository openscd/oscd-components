import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';

import '../src/OscdActionPane';

import { createBadge } from '@oscd/utils';

import pckgJson from '../package.json';

const meta: Meta = {
  title: 'Action/OscdActionPane',
  component: 'oscd-action-pane',
  parameters: {
    status: {
      type: createBadge(pckgJson),
    },
  },
};

export default meta;

type Story = StoryObj;

/** Basic */
export const Basic: Story = {
  render: ({ label, description, highlighted, secondary, level, icon }) =>
    html`<oscd-action-pane
      .label=${label}
      ?highlighted=${highlighted}
      ?secondary=${secondary}
      .level=${level}
      .icon=${icon}
      >${description}</oscd-action-pane
    >`,
  args: {
    label: 'Label',
    description: 'Some Text',
    level: 0,
  },
};

/**
 * Nested
 */
export const Nested: Story = {
  render: ({ label, description, highlighted, secondary, level }) =>
    html`<oscd-action-pane>
      <oscd-action-pane
        .label=${label}
        ?highlighted=${highlighted}
        ?secondary=${secondary}
        .level=${level}
        >${description}</oscd-action-pane
      >
    </oscd-action-pane>`,
  args: {
    ...Basic.args,
  },
};

/**
 * With Icon
 */
export const WithIcon: Story = {
  render: ({ label, description, highlighted, secondary, level, icon }) =>
    html`<oscd-action-pane
      .label=${label}
      ?highlighted=${highlighted}
      ?secondary=${secondary}
      .level=${level}
      .icon=${icon}
      >${description}</oscd-action-pane
    >`,
  args: {
    ...Basic.args,
    icon: 'edit',
  },
};

/**
 * With Actions
 */
export const WithActions: Story = {
  render: ({ label, description, highlighted, secondary, level, icon }) =>
    html`<oscd-action-pane
      .label=${label}
      ?highlighted=${highlighted}
      ?secondary=${secondary}
      .level=${level}
      .icon=${icon}
    >
      ${description}
      <mwc-icon slot="action">edit</mwc-icon>
      <mwc-icon slot="action">delete</mwc-icon>
    </oscd-action-pane>`,
  args: {
    ...Basic.args,
    icon: 'edit',
  },
};
