import { CurrencyDollarIcon, UsersIcon } from '@heroicons/react/outline';
import GrillIcon from './GrillIcon';

export interface EventCardProps {
  variant?: 'primary' | 'secondary';
}

export default function EventCard({ variant = 'primary' }: EventCardProps) {
  if (variant === 'secondary') {
    return (
      <div className="bg-gray max-w-xs cursor-pointer rounded-sm flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <GrillIcon />
          <span className="mt-2 font-bold">Adicionar Churras</span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white px-6 pt-5 pb-8 max-w-xs cursor-pointer rounded-sm shadow-md first-of-type:">
      <h1>01/12</h1>
      <h2>Niver do Igor</h2>
      <div>
        <div>
          <UsersIcon className="text-yellow h-5 w-5 " />
          <span>15</span>
        </div>
        <div>
          <CurrencyDollarIcon className="text-yellow h-5 w-5" />
          <span>R$280</span>
        </div>
      </div>
    </div>
  );
}
