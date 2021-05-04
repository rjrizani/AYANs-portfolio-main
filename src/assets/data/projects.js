import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'football score',
    desc:
      'PWA with workbox, so this app can offline in every device in simple way',
    img: UTrackerImg,
    // https://push-notification-5729b.web.app/
  },
  {
    id: uuidv4(),
    name: 'Covid Tracker',
    desc: 'An app to help people to get data covid around the world.',
    img: GreenCtgImg,
    // https://672n4.csb.app/
  },
  {
    id: uuidv4(),
    name: 'Rahasia Pintar',
    desc:
      'My first project was building an app with react js to finish the bootcamp',
    img: CoinTrackerImg,
    // https://gzegs.csb.app/
  },
];

export default projects;
