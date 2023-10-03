import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import { html } from 'lit';

import { createBadge } from '@oscd/utils';

import pckgJson from '../package.json';

import '../src/OscdActionIcon';

const meta: Meta = {
  title: 'Action/OscdActionIcon',
  component: 'oscd-action-icon',
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
    icon: 'edit',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic OSCD Action Icon',
      },
    },
  },
};

/**
 * With Label
 */
export const WithLabel: Story = {
  args: {
    ...Basic.args,
    label: 'Custom Label',
  },
  parameters: {
    docs: {
      description: {
        story: 'OSCD Action Icon with a Label',
      },
    },
  },
};

/**
 * Secondary
 */
export const Secondary: Story = {
  args: {
    ...Basic.args,
    secondary: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'OSCD Action Icon Secondary',
      },
    },
  },
};

/** Secondary Label */
export const SecondaryWithLabel: Story = {
  args: {
    ...Secondary.args,
    label: 'Custom Label',
  },
  parameters: {
    docs: {
      description: {
        story: 'Oscd Action Icon Secondary with Label',
      },
    },
  },
};

/** Hightlighted */
export const Highlighted: Story = {
  args: {
    ...Basic.args,
    highlighted: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Oscd Action Icon Highlighted',
      },
    },
  },
};

/** Actions */
export const WithActions: Story = {
  render: ({ icon }) => html` <oscd-action-icon .icon=${icon}>
    <oscd-action-icon icon="edit" slot="action"></oscd-action-icon>
    <oscd-action-icon icon="add" slot="action"></oscd-action-icon>
    <oscd-action-icon icon="delete" slot="action"></oscd-action-icon>
  </oscd-action-icon>`,
  args: {
    ...Basic.args,
    icon: 'visibility',
  },
  parameters: {
    docs: {
      description: {
        story: 'Oscd Action Icon with Actions',
      },
    },
  },
};
