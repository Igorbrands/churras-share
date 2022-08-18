import EventCard from '../../components/EventCard';
import Header from '../../components/Header';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main className="bg-neutral-50 h-screen px-6 ">
        <div className=" container grid gap-6 grid-cols-2">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard variant="secondary" />
        </div>
      </main>
    </div>
  );
}
