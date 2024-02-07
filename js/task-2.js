const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const string = images.slice(0, 3).reduce((previousString, image) => {
  return (
    previousString +
    `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width = "360px"></li>`
  );
}, '');
console.log(string);

const gallery = document.querySelector('.gallery');
const galleryOfImages = gallery.insertAdjacentHTML('afterbegin', string);
const galleryItem = gallery.firstChild;
console.log(galleryItem);
const photos = gallery.querySelector('img');
console.log(photos);

gallery.style.flexWrap = 'wrap';
gallery.style.margin = '0';
gallery.style.padding = '0';
gallery.style.display = 'flex';
gallery.style.listStyleType = 'none';

// const photoSet = photos.forEach(photo => {
photos.slyle.display = 'block';
// photos.slyle.borderRadius = '50%';
// });

// galleryItem.style.width = 'calc((100% - 24px) / 3)';
// galleryItem.style.backgroundColor = 'red';
// gallery.style.displayFlex = flexWrap;
// photos.slyle.display = 'display';
