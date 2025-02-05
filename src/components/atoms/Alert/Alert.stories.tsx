import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    title: 'Alert Title',
    message: 'This is an alert message.'
  }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const GreenAlert: Story = {
  args: {
    color: 'green',
    title: 'Success!',
    message: 'Everything is fine.'
  }
};

export const RedAlert: Story = {
  args: {
    color: 'red',
    title: 'Error!',
    message: 'Something went wrong.'
  }
};
