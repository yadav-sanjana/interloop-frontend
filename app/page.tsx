import Carasoul from './components/landingPage/Carasoul'
import IndustriesSection from './components/landingPage/IndustrialSection';
import ReachSection from './components/landingPage/ReachSection';
import WhatsNew from './components/landingPage/WhatsNew';
import AnnouncementSection from './components/landingPage/announcementSection';

export default function Home() {
  return (
    <>
      <div className='flex-row'>
        <Carasoul />
        <WhatsNew/>
        <IndustriesSection />
        <AnnouncementSection />
        <ReachSection />
      </div>
    </>
  )
}
