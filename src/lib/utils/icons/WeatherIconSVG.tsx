import Image from 'next/image';
import React from 'react';

import { CustomIcon } from '@/components/atoms/CustomIcon';

import ClearDay from '../../../../public/icons/clear-day.svg';
import ClearNight from '../../../../public/icons/clear-night.svg';
import PartlyCloudyDay from '../../../../public/icons/cloudy-3-day.svg';
import PartlyCloudyNight from '../../../../public/icons/cloudy-3-night.svg';
import Overcast from '../../../../public/icons/cloudy.svg';
import Fog from '../../../../public/icons/fog.svg';
import LightRain from '../../../../public/icons/rainy-2.svg';
import HeavyRain from '../../../../public/icons/rainy-3.svg';
import Snow from '../../../../public/icons/snowy-1.svg';
import Thunderstorm from '../../../../public/icons/thunderstorms.svg';

type WeatherType = {
  weatherCondition: string;
  weatherIcon: React.ReactElement;
};

export function getWeatherIconSVG(weatherCode: number, size: number): WeatherType {
  switch (weatherCode) {
    case 0:
      return {
        weatherCondition: 'Clear Day',
        weatherIcon: <CustomIcon iconSVG={<Image src={ClearDay} alt="Clear Day" />} size={size} />
      };
    case 1:
      return {
        weatherCondition: 'Partly Cloudy Day',
        weatherIcon: (
          <CustomIcon
            iconSVG={<Image src={PartlyCloudyDay} alt="Partly Cloudy Day" />}
            size={size}
          />
        )
      };
    case 2:
      return {
        weatherCondition: 'Partly Cloudy Night',
        weatherIcon: (
          <CustomIcon
            iconSVG={<Image src={PartlyCloudyNight} alt="Partly Cloudy Night" />}
            size={size}
          />
        )
      };
    case 3:
      return {
        weatherCondition: 'Overcast',
        weatherIcon: <CustomIcon iconSVG={<Image src={Overcast} alt="Overcast" />} size={size} />
      };
    case 45:
      return {
        weatherCondition: 'Fog',
        weatherIcon: <CustomIcon iconSVG={<Image src={Fog} alt="Fog" />} size={size} />
      };
    case 48:
      return {
        weatherCondition: 'Depositing Rime Fog',
        weatherIcon: (
          <CustomIcon iconSVG={<Image src={Fog} alt="Depositing Rime Fog" />} size={size} />
        )
      };
    case 51:
    case 53:
    case 55:
      return {
        weatherCondition: 'Drizzle',
        weatherIcon: <CustomIcon iconSVG={<Image src={LightRain} alt="Drizzle" />} size={size} />
      };
    case 61:
    case 63:
    case 65:
      return {
        weatherCondition: 'Rain',
        weatherIcon: <CustomIcon iconSVG={<Image src={LightRain} alt="Rain" />} size={size} />
      };
    case 66:
    case 67:
      return {
        weatherCondition: 'Freezing Rain',
        weatherIcon: (
          <CustomIcon iconSVG={<Image src={LightRain} alt="Freezing Rain" />} size={size} />
        )
      };
    case 71:
    case 73:
    case 75:
      return {
        weatherCondition: 'Snow',
        weatherIcon: <CustomIcon iconSVG={<Image src={Snow} alt="Snow" />} size={size} />
      };
    case 80:
    case 81:
    case 82:
      return {
        weatherCondition: 'Showers',
        weatherIcon: <CustomIcon iconSVG={<Image src={HeavyRain} alt="Showers" />} size={size} />
      };
    case 95:
      return {
        weatherCondition: 'Thunderstorm',
        weatherIcon: (
          <CustomIcon iconSVG={<Image src={Thunderstorm} alt="Thunderstorm" />} size={size} />
        )
      };
    case 96:
    case 99:
      return {
        weatherCondition: 'Thunderstorm with Hail',
        weatherIcon: (
          <CustomIcon
            iconSVG={<Image src={Thunderstorm} alt="Thunderstorm with Hail" />}
            size={size}
          />
        )
      };
    default:
      return {
        weatherCondition: 'Rain',
        weatherIcon: <CustomIcon iconSVG={<Image src={ClearNight} alt="Rain" />} size={size} />
      };
  }
}
