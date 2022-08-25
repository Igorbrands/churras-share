import create from 'zustand';
import { persist } from 'zustand/middleware';
import { createId } from '../../utils/createId';

type State = {
	barbecues: Bbq[];
	actions: UseBarbecuesStoreActions;
};

type Guests = {
	id: string;
	name: string;
	payedAmount: number;
	hasPayed: boolean;
};

export type Bbq = {
	id: string;
	title: string;
	description: string;
	date: Date;
	noBeerValue: number;
	withBeerValue: number;
	totalPayedValue: number;
	guests: Guests[];
};

type UseBarbecuesStoreActions = {
	createsBbq: (bbq: Bbq) => void;
	deleteBbq: (id: string) => void;
};

export const useBarbecuesStore = create(
	persist<State>(
		set => ({
			barbecues: [],

			actions: {
				createsBbq: (bbq: Bbq) => {
					set(state => {
						const newSteakData = {
							...bbq,
							id: createId(),
							peoples: [],
							amountPayed: 0
						};

						state.barbecues = [...state.barbecues, newSteakData];
					});
				},
				deleteBbq: (id: string) => {
					set(state => ({
						...state,
						barbecues: state.barbecues.filter(bbq => bbq.id !== id)
					}));
				}
			}
		}),
		{
			name: 'useEventStore'
		}
	)
);
