import { HomeContainer } from 'pages/Home/Home.style';
import Forms from 'components/Home/Forms/Forms';
import HeroSection from 'components/Home/HeroSection/HeroSection';

const Home = () => (
  <HomeContainer>
    <HeroSection />
    <Forms />
  </HomeContainer>
);

export default Home;
