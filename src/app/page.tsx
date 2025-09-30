import Header from './components/Header';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Service from './components/services';
import Clients from './components/Clients';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Aboutus />
      <Service />
      <Clients />
    </>
  );
}