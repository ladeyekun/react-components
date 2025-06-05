import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import pool from './images/pool.jpg';
import spa from './images/spa.jpg';
import food from './images/food.jpg';
import gym from './images/gym.jpg';


function App() {
  let title = "Prairie Hotels";
  let bannerTitle = 'Banner Title';
  let bannerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi. Distinctio accusantium fugit odit? Fugit ipsam. Sed ac fringilla ex. Nam mauris velit, ac cursus quis, non leo.';

  const links = [
    {index: 0, name: 'About', url: 'https://www.components.com/about'},
    {index: 1, name: 'Rooms', url: 'https://www.components.com/projects'},
    {index: 2, name: 'Services', url: 'https://www.components.com/services'},
    {index: 3, name: 'Contact', url: 'https://www.components.com/Contact'},
    {index: 4, name: 'Blogs', url: 'https://www.components.com/about'}
  ]

  const galleries = [
    {index: 0, src: pool, title: 'State of the earth pool', subtitle: 'Create a business account'},
    {index: 1, src: spa, title: 'World class spa', subtitle: 'Create a business account'},
    {index: 2, src: food, title: 'Intercontinental dishes', subtitle: 'Create a business account'},
    {index: 3, src: gym, title: 'Top notch gym', subtitle: 'Create a business account'}
  ]
  
  return (
    <>
      <Header title={title} links={links} />
      <main>
        <Banner title={bannerTitle} text={bannerText} />
        <Gallery galleries={galleries} />
      </main>
      <Footer />
    </>
  );
}

export default App;
