import { html, HTMLTemplateResult, TemplateResult } from 'lit';

export default {
  title: 'oscd-card/OscdCard',
  component: 'oscd-card',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  content: HTMLTemplateResult;
  stackLevel: number;
}

const Template: Story<ArgTypes> = ({ content, stackLevel }: ArgTypes) =>
  html`<oscd-card .stackLevel=${stackLevel}>${content}</oscd-card>`;

export const Regular = Template.bind({});

Regular.args = {
  content: html`<div>This is the card content</div>`,
  stackLevel: 1,
};
