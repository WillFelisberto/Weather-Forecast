import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Example'
  },
  argTypes: {
    variant: {
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      control: { type: 'select' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Success: Story = {
  args: {
    variant: 'success'
  }
};

export const Warning: Story = {
  args: {
    variant: 'warning'
  }
};

export const Danger: Story = {
  args: {
    variant: 'danger'
  }
};
