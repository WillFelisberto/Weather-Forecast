import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';

import svg from '../../../../public/icons/cloudy-2-day.svg';
import { CustomIcon } from './CustomIcon';

const meta: Meta<typeof CustomIcon> = {
  title: 'Atoms/CustomIcon',
  component: CustomIcon,
  tags: ['autodocs'],
  args: {
    iconSVG: <Image src={svg} alt="Ícone de nuvem parcialmente nublado" />,
    size: 64
  }
};

export default meta;

type Story = StoryObj<typeof CustomIcon>;

export const Default: Story = {};
