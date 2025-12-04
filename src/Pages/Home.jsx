import Title from '../Components/Title';
import Image from '../Components/Image';
import ContentBox from '../Components/ContentBox';
import OurMission from '../Components/Services';
import About from '../Components/About';
import Email from '../Components/Email';
import CertificatesPage from './CertificatesPage';
import ProjectsPage from './ProjectsPage';


const Home = () => {
  return (
    <div>
      <section id="home"><Title /><Image /></section>
      <section id="about"><About /></section>
      <section id="service"><ContentBox /><OurMission /></section>
      <section id="certificates"><CertificatesPage /></section>
      <section id="projects"><ProjectsPage /></section>
      <section id="contact"><Email /></section>
    </div>
  );
};

export default Home;
