import { useState } from 'react';
import EventCard from '../../components/EventCard';
import GrillIcon from '../../components/GrillIcon';
import Header from '../../components/Header';
import { useBarbecuesStore } from '../store/barbecues';
import ModalCreatesBbq from './components/ModalCreatesBbq';

export default function Dashboard() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const {
		barbecues,
		actions: { createsBbq }
	} = useBarbecuesStore();

	return (
		<div>
			<Header />
			<main className=" bg-neutral-50  h-screen sm:px-6">
				<div className="container mx-auto grid justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 ">
					{barbecues.map(bbq => (
						<EventCard
							styleClass="-mt-12"
							date={bbq.date}
							title={bbq.title}
							description={bbq.description}
							amountGuests={bbq.guests.length}
							amountGuestsPaid={bbq.totalPayedValue}
						/>
					))}

					<button
						className="bg-gray hover:bg-slate-200 transition-colors  duration-400 ease-in-out list-none h-48 w-64 cursor-pointer rounded-md shadow-md flex flex-col items-center justify-center"
						onClick={() => setIsOpenModal(true)}
					>
						<div className="flex flex-col justify-center items-center">
							<GrillIcon />
							<span className="mt-2 font-bold">
								Adicionar Churras
							</span>
						</div>
					</button>
				</div>
			</main>

			<ModalCreatesBbq
				isOpen={isOpenModal}
				onClose={() => setIsOpenModal(false)}
			/>
		</div>
	);
}
