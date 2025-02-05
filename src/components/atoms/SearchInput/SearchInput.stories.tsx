/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Atoms/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  args: {
    placeholder: 'Search here...'
  }
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    onSearchCallback: async (query) => {
      console.log(`Searching for: ${query}`);
    }
  }
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Type something...',
    onSearchCallback: async (query) => {
      console.log(`Searching for: ${query}`);
    }
  }
};

export const Focused: Story = {
  args: {
    placeholder: 'Start typing...',
    onSearchCallback: async (query) => {
      console.log(`Searching for: ${query}`);
    }
  },
  play: ({ canvasElement }) => {
    const input = canvasElement.querySelector('input');
    input?.focus();
  }
};
