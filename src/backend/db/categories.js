import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Paneer Recipe',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654434708/53251884_hodiog.jpg'
  },
  {
    _id: uuid(),
    categoryName: 'Snacks',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654434780/pk-SQ1vUOxSIZc-unsplash_u2fvmn.jpg'
  },
  {
    _id: uuid(),
    categoryName: 'Egg Recipes',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654434868/jona-novak-mvhUofbTEJc-unsplash_eqjwhx.jpg'
  },
  {
    _id: uuid(),
    categoryName: 'Sweets',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654434924/wojtek-mich-ZGj0_IjgXdo-unsplash_eco3cj.jpg'
  },
  {
    _id: uuid(),
    categoryName: 'South Indian',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654434946/shreyak-singh-gFB1IPmH6RE-unsplash_mad5fm.jpg'
  },
  {
    _id: uuid(),
    categoryName: 'Drinks',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654435029/kobby-mendez-xBFTjrMIC0c-unsplash_jtrauq.jpg'
  },
  {
    _id: uuid(),
    categoryName: 'Fast Food',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654435067/jonathan-borba-8l8Yl2ruUsg-unsplash_c6dvi6.jpg'
  },
  {
    _id: uuid(),
    categoryName: 'Parantha',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1654435096/indian-breakfast-aloo-paratha-potato-pancakes-served-yogurt-dip-87658775_c63ds8.jpg'
  }
];
