import type { Meta, StoryObj } from '@storybook/react';

import { WeatherCard } from './WeatherCard';

const meta: Meta<typeof WeatherCard> = {
  title: 'Molecules/WeatherCard',
  component: WeatherCard,
  tags: ['autodocs'],
  args: {
    location: 'New York',
    temperature: 25,
    windSpeed: 15,
    datatime: '2025-02-04T19:15',
    weatherCode: 0
  },
  argTypes: {
    location: { control: 'text' },
    temperature: { control: 'number' },
    windSpeed: { control: 'number' },
    datatime: { control: 'text' },
    weatherCode: {
      control: 'select',
      options: [
        0, 1, 2, 3, 45, 48, 51, 53, 55, 61, 63, 65, 66, 67, 71, 73, 75, 80, 81, 82, 95, 96, 99
      ]
    }
  }
};

export default meta;

type Story = StoryObj<typeof WeatherCard>;

export const Default: Story = {};

export const PartlyCloudy: Story = {
  args: {
    location: 'London',
    temperature: 18,
    windSpeed: 10,
    datatime: '2025-02-04T19:15',
    weatherCode: 2
  }
};

export const Thunderstorm: Story = {
  args: {
    location: 'São Paulo',
    temperature: 22,
    windSpeed: 20,
    datatime: '2025-02-04T19:15',
    weatherCode: 80
  }
};
