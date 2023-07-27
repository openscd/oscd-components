import { html, TemplateResult } from 'lit';

export default {
  title: 'oscd-select/OscdSelect',
  component: 'oscd-select',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = ({}: ArgTypes) =>
  html`<oscd-select></oscd-select>`;

export const Regular = Template.bind({});
