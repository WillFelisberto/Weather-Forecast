import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Atoms/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: true // Desativa os backgrounds padrão do Storybook
    },
    layout: 'fullscreen' // Faz o componente ocupar a tela toda
  },
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-tr from-[#0A1128] to-[#1C3041] min-h-screen flex items-center justify-center p-6">
        <Story />
      </div>
    )
  ],
  args: {
    title: 'Seeing the weather of the whole world with',
    highlight: 'Dark Weather',
    subtitle: 'Stay updated with real-time weather forecasts.',
    className: 'max-w-3xl'
  }
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
