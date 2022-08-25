import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<div className="min-h-screen flex flex-col ">
			<main className="flex flex-col">
				<Header />
				<div className="container flex flex-col mx-auto max-w-sm ">
					<label className="mb-4 font-bold text-xl">Login</label>
					<input
						className="input mb-9 border-none"
						type="email"
						placeholder="e-mail"
					/>
					<label className="mb-4 font-bold text-xl">Senha</label>
					<input
						className="input mb-16 border-none"
						type="password"
						placeholder="senha"
					/>
					<Link href="/dashboard">
						<button className="h-12 bg-black rounded-2xl text-white font-bold text-x">
							Entrar
						</button>
					</Link>
				</div>
			</main>
		</div>
	);
};

export default Home;
