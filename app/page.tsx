import Carasoul from './components/landingPage/Carasoul'
import IndustriesSection from './components/landingPage/IndustrialSection';

export default function Home() {
  const images = [
    'https://images.app.goo.gl/HTZceEWP9A5yeLdN6',
    'https://images.app.goo.gl/HTZceEWP9A5yeLdN6',
    'https://images.app.goo.gl/HTZceEWP9A5yeLdN6',
    // Add more image URLs as needed
  ];
  return (
    <>
      <div className="flex">
        <Carasoul/>
        <IndustriesSection/>
      </div>
    </>
  )
}
