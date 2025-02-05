import { clsx } from 'clsx';
import React from 'react';

import { getWeatherIconSVG } from '@/lib/utils/icons';

export interface WeatherCardProps {
  location: string;
  temperature: number;
  windSpeed: number;
  datatime: string;
  weatherCode: number;
  className?: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  temperature,
  windSpeed,
  datatime,
  weatherCode,
  className
}) => {
  const { weatherCondition, weatherIcon } = getWeatherIconSVG(
    weatherCode,
    weatherCode !== 0 ? 300 : 400
  );

  const dayOfWeek = new Date(datatime).toLocaleDateString('en-US', { weekday: 'long' });
  const timeFormatted = new Date(datatime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  });

  return (
    <div
      className={clsx(
        'bg-gradient-to-tr from-[--card-bg] to-[--card-bg-gradient]   min-w-[355px] px-[52px] py-[40px] text-left justify-end h-auto text-white p-6 rounded-2xl shadow-lg flex flex-col',
        className
      )}
    >
      <div>{weatherIcon}</div>
      <div className=" leading-[65px] flex flex-row center gap-[8px]">
        <h2 className="text-3xl truncate leading-[65px] font-secondary font-bold capitalize">
          {location}
        </h2>
        <p className="text-3xl leading-[65px] font-secondary font-light  ">{temperature}°C</p>
      </div>

      <p className="text-2xl mt-[0px] leading-[65px] font-secondary font-light">
        Wind Speed: {windSpeed} km/h
      </p>
      <p className="text-2xl mt-[0px] leading-[65px] font-secondary font-light">{`${dayOfWeek}: ${timeFormatted}`}</p>
      <p className="capitalize mt-[0px] leading-[65px] text-2xl capitalize font-secondary font-light ">
        {weatherCondition}
      </p>
    </div>
  );
};
