import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';

import { html } from 'lit';

import '../src/OscdDialog';

import { createBadge } from '@oscd/utils';

import pckgJson from '../package.json';

const meta: Meta = {
  title: 'Dialog/OscdDialog',
  component: 'oscd-dialog',
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
  render: ({ content, open, onClose }) =>
    html`<oscd-dialog ?open=${open} @closed=${onClose}
      >${content}</oscd-dialog
    >`,
  args: {
    content: html`This is the content for the dialog`,
    open: true,
    onClose: action('on close'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic oscd-dialog',
      },
    },
  },
};

/**
 * With Primary Action
 */
export const WithPrimaryAction: Story = {
  render: ({ content, open, onClose }) =>
    html`<oscd-dialog ?open=${open} @closed=${onClose}
      >${content}<button dialogAction="save" slot="primaryAction">
        Save
      </button></oscd-dialog
    >`,
  args: {
    ...Basic.args,
  },
};

/**
 * With Secondary Action
 */
export const WithSecondaryAction: Story = {
  render: ({ content, open, onClose }) =>
    html`<oscd-dialog ?open=${open} @closed=${onClose}
      >${content}<button dialogAction="cancel" slot="secondaryAction">
        Cancel
      </button></oscd-dialog
    >`,
  args: {
    ...Basic.args,
  },
};

/**
 * With Actions
 */
export const WithActions: Story = {
  render: ({ content, open, onClose }) =>
    html`<oscd-dialog ?open=${open} @closed=${onClose}
      >${content}<button dialogAction="cancel" slot="primaryAction">
        Cancel</button
      ><button dialogAction="save" slot="secondaryAction">
        Save
      </button></oscd-dialog
    >`,
  args: {
    ...Basic.args,
  },
};
