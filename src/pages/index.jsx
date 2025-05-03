import { render } from '@czechitas/render';
import '../global.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/banner/banner';
import { Menu } from '../components/menu/menu';
import { Gallery } from '../components/gallery/gallery';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/Footer/footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const btnElement = document.querySelector('.nav-btn');
btnElement.addEventListener('click', () => {
  const navigation = document.querySelector('.rollout-nav');
  navigation.classList.toggle('nav-closed');
  navigation.addEventListener('click', () => {
    navigation.classList.add('nav-closed');
  });
});
