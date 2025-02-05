import clsx from 'clsx';
import { FC } from 'react';

interface AlertProps {
  color?: 'red' | 'green' | 'yellow' | 'blue';
  title: string;
  message?: string;
  className?: string;
}

const colorClasses: Record<string, string> = {
  red: 'bg-red-100 border-red-500 text-red-700',
  green: 'bg-green-100 border-green-500 text-green-700',
  yellow: 'bg-yellow-100 border-yellow-500 text-yellow-700',
  blue: 'bg-blue-100 border-blue-500 text-blue-700'
};

export const Alert: FC<AlertProps> = ({ color = 'red', title, message, className }) => (
  <div
    className={clsx('flex  rounded-lg p-4 mb-4 text-sm border ', colorClasses[color], className)}
    role="alert"
  >
    <svg
      className="w-5 h-5 inline mr-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      ></path>
    </svg>
    <div>
      <span className="font-bold">{title}</span> {message && <span>{message}</span>}
    </div>
  </div>
);
