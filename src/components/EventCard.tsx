import { UsersIcon } from '@heroicons/react/outline';
import { CurrencyDollarIcon } from '@heroicons/react/solid';

export interface EventCardProps {
	title: string;
	description: string;
	date: Date;
	amountGuests: number;
	amountGuestsPaid: number;
	styleClass?: string;
}

export default function EventCard({
	styleClass,
	title,
	description,
	date,
	amountGuests,
	amountGuestsPaid
}: EventCardProps) {
	console.log('date', new Date().toLocaleDateString('pt-BR'));

	return (
		<li
			className={`${
				styleClass || ''
			} bg-white hover:bg-slate-100 transition-colors duration-400 ease-in-out list-none h-48 w-64 px-6 pt-5 pb-8 max-w-xs cursor-pointer rounded-md shadow-md flex flex-col `}
		>
			<h1 className="date">{date.toLocaleDateString('pt-BR')}</h1>
			<h2 className="opacity-80 font-bold text-xl">{title}</h2>
			<span>{description}</span>
			<div className="inline-flex justify-between mt-auto w-full">
				<div className="inline-flex items-center">
					<UsersIcon className="icon" />
					<span className="font-medium text-xl">15</span>
				</div>
				<div className="inline-flex items-center">
					<CurrencyDollarIcon className="icon" />
					<span className="font-medium text-xl">R$280</span>
				</div>
			</div>
		</li>
	);
}
