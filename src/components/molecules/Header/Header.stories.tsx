import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Header } from './Header';

// Configuração do Storybook
const meta: Meta<typeof Header> = {
  title: 'Molecules/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: true // Desativa backgrounds padrão do Storybook
    },
    layout: 'fullscreen' // Garante que o componente preencha a tela
  },
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-tr from-[#0A1128] to-[#1C3041] min-h-screen p-4">
        <Story />
      </div>
    )
  ],
  args: {
    className: ''
  }
};

export default meta;

type Story = StoryObj<typeof Header>;

// Definindo o story principal
export const Default: Story = {};
