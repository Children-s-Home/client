import { Flex } from 'antd';
import Hero from './Components/Hero';
import HomeAbout from './Components/HomeAbout';
import HomeServices from './Components/HomeServices';
import Testimonials from './Components/Testimonials';

const Home = () => {
  return (
    <Flex vertical className='home-container'>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <Testimonials />
    </Flex>
  );
};

export default Home;
