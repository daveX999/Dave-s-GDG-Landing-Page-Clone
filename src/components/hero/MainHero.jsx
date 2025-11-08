import AboutSection from "../about/AboutSection";
import AvatarGenerator from "../avatar/AvatarGenCom";
import Footer from "../footer/Footer";
import HeroContent from "../hero/Hero";
import Merch from "../merch/Merch";
import Navbar from "../hero/Navbar";
import PartnersSection from "../partners/Partners";
import GetInsideScoop from "../scoop/GetScoopComp";
import Speakers from "../speakers/Sponsors";
import TeamsSection from "../teams/TeamComp";
import ThrowbackSection from '../Throwback'
import VideoComp from "../videoComp/VideoComp";

function MainHero() {
  return (
    <div className="relative">
      <Navbar />
      <HeroContent />
      <VideoComp />
      <AboutSection />
      <ThrowbackSection />
      <Speakers />
      <PartnersSection />
      <TeamsSection />
      <Merch />
      <AvatarGenerator />
      <GetInsideScoop />
      <Footer />
    </div>
  );
}

export default MainHero;
