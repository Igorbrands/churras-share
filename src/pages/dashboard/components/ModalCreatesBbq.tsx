import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ModalOverlay from '../../../components/ModalOverlay';
import { parseDate } from '../../../utils';
import { Bbq, useBarbecuesStore } from '../../store/barbecues';

type FormData = {
	title: string;
	description?: string;
	date: string;
	noBeerValue: number;
	withBeerValue: number;
};

const schema = yup.object().shape({
	title: yup.string().required('O título é obrigatório'),
	description: yup.string().optional(),
	date: yup.date().required('A data é obrigatória'),
	noBeerValue: yup
		.number()
		.required('O valor sem bebida é obrigatório')
		.min(1, 'Digite um valor válido'),
	withBeerValue: yup
		.number()
		.required('O valor com bebida é obrigatório')
		.min(1, 'Digite um valor válido')
});

interface ModalCreatesBbqProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function ModalCreatesBbq({
	isOpen,
	onClose
}: ModalCreatesBbqProps) {
	const {
		actions: { createsBbq }
	} = useBarbecuesStore();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			noBeerValue: 0,
			withBeerValue: 0
		}
	});

	const onSubmit = handleSubmit(
		async ({ title, description, date, noBeerValue, withBeerValue }) => {
			createsBbq({
				title,
				description,
				date: parseDate(date) as Date,
				noBeerValue,
				withBeerValue
			} as Bbq);

			onClose();
		}
	);

	return (
		<ModalOverlay
			title="Crie aqui o seu Churras!"
			isOpen={isOpen}
			onClose={onClose}
		>
			<form
				onSubmit={onSubmit}
				className="flex flex-col justify-center items-center"
			>
				<label htmlFor="title">Título</label>
				<input
					id="title"
					{...register('title')}
					type="text"
					placeholder="Churras da firma"
					className="input mb-4"
				/>
				<span className="text-red-500 -mt-3 mb-4">
					{errors.title?.message}
				</span>

				<label htmlFor="description">Descrição</label>
				<textarea
					id="description"
					{...register('description')}
					placeholder="Descreva detalhes do churras"
					className="mb-4 !h-28 input"
				/>
				<label htmlFor="date">Data</label>
				<input
					id="date"
					{...register('date')}
					type="date"
					className="input mb-4"
				/>
				<span className="text-red-500 -mt-3 mb-4">
					{errors.date?.message}
				</span>

				<label htmlFor="noBeerValue">Valor sem cerveja</label>
				<input
					id="noBeerValue"
					{...register('noBeerValue')}
					name="noBeerValue"
					autoComplete="transaction-currency"
					type="number"
					className="input mb-4"
				/>
				<span className="text-red-500 -mt-3 mb-4">
					{errors.noBeerValue?.message}
				</span>

				<label htmlFor="withBeerValue">Valor com cerveja</label>
				<input
					id="withBeerValue"
					{...register('withBeerValue')}
					name="withBeerValue"
					autoComplete="transaction-currency"
					type="number"
					className="input mb-4"
				/>
				<span className="text-red-500 -mt-3 mb-4">
					{errors.withBeerValue?.message}
				</span>

				<div className="inline-flex justify-between">
					<button
						type="submit"
						className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
					>
						Confirmar
					</button>
					<button
						type="button"
						className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
						onClick={onClose}
					>
						Cancelar
					</button>
				</div>
			</form>
		</ModalOverlay>
	);
}
