import { UsersIcon } from '@heroicons/react/outline';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import Guest from '../../components/Guest';
import Header from '../../components/Header';

export default function Barbecue() {
	return (
		<div>
			<Header />
			<main className=" bg-neutral-50  h-screen sm:px-6">
				<div className="container mx-auto grid px-6">
					<div className="container w-full bg-white shadow-md rounded-md p-6 -mt-12 flex flex-col">
						<div className="flex justify-between mb-11">
							<ul className="flex flex-col">
								<li className="date">28/09</li>
								<li className="font-bold text-black opacity-80 text-4xl">
									Niver do Igor
								</li>
							</ul>
							<ul className="flex flex-col">
								<li className="inline-flex items-center mb-5">
									<UsersIcon className="icon" />
									<span className="font-medium text-xl">
										15
									</span>
								</li>
								<li className="inline-flex items-center">
									<CurrencyDollarIcon className="icon" />
									<span className="font-medium text-xl">
										R$280
									</span>
								</li>
							</ul>
						</div>
						<div className="flex flex-col">
							<Guest />
							<Guest />
							<Guest />
							<Guest />
							<Guest />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
