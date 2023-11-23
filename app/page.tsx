'use client'
import styled from 'styled-components';
import Preloader from './components/Preloader';
import Carasoul from './components/landingPage/Carasoul';
import IndustriesSection from './components/landingPage/IndustrialSection';
import ReachSection from './components/landingPage/ReachSection';
import PartnersSection from './components/landingPage/Testimonials';
import WhatsNew from './components/landingPage/WhatsNew';
import WhoSection from './components/landingPage/Who_Intro';
import AnnouncementSection from './components/landingPage/announcementSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;

export default function Home() {
  return (
    <Container>
      <Preloader />
      <ContentWrapper>
        <Carasoul />
        <WhoSection />
        <IndustriesSection />
        {/* <PartnersSection/> */}
        <WhatsNew />
        <AnnouncementSection />
        <ReachSection />
      </ContentWrapper>
    </Container>
  );
}
