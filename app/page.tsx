import Carasoul from './components/landingPage/Carasoul'
import IndustriesSection from './components/landingPage/IndustrialSection';
import ReachSection from './components/landingPage/ReachSection';
import PartnersSection from './components/landingPage/Testimonials';
import WhatsNew from './components/landingPage/WhatsNew';
import AnnouncementSection from './components/landingPage/announcementSection';

export default function Home() {
  return (
    <>
      <div className='flex-row'>
        <Carasoul />
        <WhatsNew/>
        <IndustriesSection />
        <PartnersSection/>
        <AnnouncementSection />
        <ReachSection />
      </div>
    </>
  )
}
