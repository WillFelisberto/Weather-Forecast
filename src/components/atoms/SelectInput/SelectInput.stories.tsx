import type { Meta, StoryObj } from '@storybook/react';

import { SelectInput } from './SelectInput';

const meta: Meta<typeof SelectInput> = {
  title: 'Atoms/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  args: {
    options: ['Option 1', 'Option 2', 'Option 3']
  }
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    className: 'border border-blue-500'
  }
};
