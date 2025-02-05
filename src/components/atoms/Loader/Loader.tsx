import { Loader2 } from 'lucide-react';
import { FC } from 'react';

interface LoaderProps {
  text?: string;
}

export const Loader: FC<LoaderProps> = ({ text }) => (
  <div role="status" className="flex flex-col items-center justify-center pt-8 ">
    <Loader2 className="animate-spin animate-pulse text-gray-500" size={50} />
    {text && <p className="mt-2 text-gray-100 text-sm animate-pulse">{text}</p>}
  </div>
);
