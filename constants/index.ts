import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from '@/public/assets/index'
import { home, cart, order } from '@/public/assets/icons';

export const carouselImages = [
    {
        id: 1,
        imgSrc: image1,
    },
    {
        id: 2,
        imgSrc: image2
    },
    {
        id: 3,
        imgSrc: image3
    },
    {
        id: 4,
        imgSrc: image4
    },
    {
        id: 5,
        imgSrc: image5
    },
    {
        id: 6,
        imgSrc: image6
    },
    {
        id: 7,
        imgSrc: image7
    },
    {
        id: 8,
        imgSrc: image8
    },
    {
        id: 9,
        imgSrc: image9
    }

];

export const navItems = [
    {
        label: 'Home',
        link: '/',
        authenticate: true,
        icon: home
    },
    {
        label: 'My Orders',
        link: '/myorders',
        authenticate: true,
        icon: order
    },
    {
        label: 'My Cart',
        link: '/mycart',
        authenticate: true,
        icon: cart
    },
];