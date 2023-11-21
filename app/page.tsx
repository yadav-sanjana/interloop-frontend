import Carasoul from './components/landingPage/Carasoul'
import IndustriesSection from './components/landingPage/IndustrialSection';
import ReachSection from './components/landingPage/ReachSection';
import PartnersSection from './components/landingPage/Testimonials';
import WhatsNew from './components/landingPage/WhatsNew';
import WhoSection from './components/landingPage/Who_Intro';
import AnnouncementSection from './components/landingPage/announcementSection';

export default function Home() {
  return (
    <>
      <div className='flex-row'>
        <Carasoul />
        <WhoSection/>
        <IndustriesSection />
        {/* <PartnersSection/> */}
        <WhatsNew/>
        <AnnouncementSection />
        <ReachSection />
      </div>
    </>
  )
}
