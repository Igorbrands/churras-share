import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-yellow">
      <header className="bg-yellow">
        <h1 className="font-bold">Agenda de Churras</h1>
      </header>
      <main className="flex flex-col">
        <label>Login</label>
        <input
          className="placeholder:italic rounded-sm"
          type="email"
          placeholder="e-mail"
        />
        <label>Senha</label>
        <input
          className="placeholder:italic rounded-sm"
          type="password"
          placeholder="senha"
        />
      </main>
    </div>
  );
};

export default Home;
