import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Atoms/Loader',
  component: Loader,
  tags: ['autodocs']
};
export default meta;

export const Default: StoryObj<typeof Loader> = {};

export const WithText: StoryObj<typeof Loader> = {
  args: {
    text: 'Loading, please wait...'
  }
};
