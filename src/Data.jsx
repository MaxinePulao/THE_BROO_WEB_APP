import menu1 from './assets/01.jpg';
import menu2 from './assets/02.jpg';
import menu3 from './assets/03.jpg';
import menu4 from './assets/04.jpg';
import menu5 from './assets/05.jpg';
import menu6 from './assets/06.jpg';
import menu7 from './assets/07.jpg';
import menu8 from './assets/08.jpg';



import testimonial1 from './assets/testimonial1.png';
import testimonial2 from './assets/testimonial2.png';
import testimonial3 from './assets/testimonial3.png';


export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Menu',
    path: 'menu',
  },
];



export const menu = [
  {
    id: 1,
    img: menu1,
    title: 'Americano Coffee',
    description: 'Coffee but caucasian',
    sizes: [
      { name: '12oz', price: 59 },
      { name: '16oz', price: 79 },
      { name: '22oz', price: 99 },
    ],
  },
  {
    id: 2,
    img: menu2,
    title: 'Cappuccino Arabica',
    description: 'Coffee with steamed milk made from Arabica beans',
    sizes: [
      { name: '12oz', price: 79 },
      { name: '16oz', price: 99 },
      { name: '22oz', price: 119 },
    ],
  },
  {
    id: 3,
    img: menu3,
    title: 'Milk Cream Coffee',
    description: 'Cream with coffee duh.',
    sizes: [
      { name: '12oz', price: 59 },
      { name: '16oz', price: 79 },
      { name: '22oz', price: 99 },
    ],
  },
  {
    id: 4,
    img: menu4,
    title: 'Special Raw Coffee',
    description: 'Boring coffee but special',
    sizes: [
      { name: '12oz', price: 59 },
      { name: '16oz', price: 79 },
      { name: '22oz', price: 99 },
    ],
  },
  {
    id: 5,
    img: menu5,
    title: 'Fresh Black Coffee',
    description: 'Boring coffee but fresh',
    sizes: [
      { name: '12oz', price: 49 },
      { name: '16oz', price: 69 },
      { name: '22oz', price: 89 },
    ],
  },
  {
    id: 6,
    img: menu6,
    title: 'Cappuccino Robusta',
    description: 'Capuccino with Aphrodisiac. jk',
    sizes: [
      { name: '12oz', price: 79},
      { name: '16oz', price: 99 },
      { name: '22oz', price: 119 },
    ],
  },
  {
    id: 7,
    img: menu7,
    title: 'Cortado',
    description: 'Fancy name but boring coffee',
    sizes: [
      { name: '12oz', price: 59 },
      { name: '16oz', price: 79 },
      { name: '22oz', price: 99 },
    ],
  },
  {
    id: 8,
    img: menu8,
    title: 'Cold Coffee',
    description: 'Like your crush',
    sizes: [
      { name: '12oz', price: 49 },
      { name: '16oz', price: 5.49 },
      { name: '22oz', price: 6.49 },
    ],
  },
];


export const testimonials = [
  {
    id: 1,
    img: testimonial1,
    title: 'Coffee Beans are roasting',
    service: '1',
    description:
      'Your order is now at the kitchen, please wait as we are preparing your order.',
  },
  {
    id: 2,
    img: testimonial2,
    title: 'Brewing your coffee',
    service: '2',
    description:
      'Almost there! Please wait as we are preparing your order.',
  },
  {
    id: 3,
    img: testimonial3,
    title: 'Coffee is ready!',
    service: '3',
    description:
      'Your coffee is now ready for pickup. Enjoy!',
  },
];
