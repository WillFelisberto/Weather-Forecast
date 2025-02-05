import { getCityCoordinatesMock, getWeatherForecastMock } from '@/mocks/weatherApiMocks';
import { fireEvent } from '@/tests/test-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { WeatherSearch } from './WeatherSearch';

const meta: Meta<typeof WeatherSearch> = {
  title: 'Molecules/WeatherSearch',
  component: WeatherSearch,
  tags: ['autodocs'],
  args: {
    getCityCoordinates: getCityCoordinatesMock,
    getWeatherForecast: getWeatherForecastMock
  }
};

export default meta;

type Story = StoryObj<typeof WeatherSearch>;

export const Default: Story = {};

export const WithSearch: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input');
    if (input) {
      fireEvent.change(input, { target: { value: 'New York' } });
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    }
  }
};
