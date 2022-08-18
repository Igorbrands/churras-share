import type { NextPage } from 'next';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex flex-col w-64">
        <Header />
        <label className="mb-4 font-bold text-xl">Login</label>
        <input
          className="placeholder:italic h-12 rounded-sm mb-9 border-none"
          type="email"
          placeholder="e-mail"
        />
        <label className="mb-4 font-bold text-xl">Senha</label>
        <input
          className="placeholder:italic h-12 rounded-sm mb-16 border-none"
          type="password"
          placeholder="senha"
        />

        <button className="h-12 bg-black rounded-2xl text-white font-bold text-x">
          Entrar
        </button>
      </main>
    </div>
  );
};

export default Home;
