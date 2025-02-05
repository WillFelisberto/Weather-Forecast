import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Garante que o componente use a tela toda no Storybook
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1C3041' },
        { name: 'light', value: '#ffffff' }
      ]
    }
  },
  args: {
    className: ''
  }
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="text-center text-white py-16">
        <h1 className="text-4xl font-bold">Welcome to Dark Weather</h1>
        <p className="mt-4 text-lg">Stay updated with real-time weather forecasts.</p>
      </div>
    )
  }
};

export const WithCustomStyles: Story = {
  args: {
    className: 'bg-gradient-to-r from-blue-500 to-blue-300 py-20',
    children: (
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Container with Custom Styles</h1>
        <p className="mt-4 text-lg">Custom gradient and padding applied!</p>
      </div>
    )
  }
};
