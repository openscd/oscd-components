import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import { html, TemplateResult } from 'lit';

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
  render: ({ label, description, highlighted, secondary, level }) =>
    html`<oscd-action-pane
      .label=${label}
      ?highlighted=${highlighted}
      ?secondary=${secondary}
      .level=${level}
      >${description}</oscd-action-pane
    >`,
  args: {
    label: 'Label',
    description: 'Some Text',
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
