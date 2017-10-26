import imageType from './imageType';
import questionType from './questionType';

const questions = [
  {
    questionType: questionType.THREE_IMAGES,
    title: `Найдите рисунок среди изображений?`,
    images: [`http://6roundstudio.com/images/774b4422914295587d29bde164a.jpg?crc=4010533795`, `http://zoneonearts.com.au/wp-content/uploads/2015/03/zaria-forman-01.jpg`, `https://i.pinimg.com/736x/a0/c2/26/a0c2268b9f55a84f68f453ea46378beb--leaving-home-suitcases.jpg`],
    correctAnswer: 1
  },
  {
    questionType: questionType.ONE_IMAGE,
    title: `Угадай, фото или рисунок?`,
    image: `https://k32.kn3.net/5C7060EC5.jpg`,
    correctAnswer: imageType.PAINT
  },
  {
    questionType: questionType.TWO_IMAGES,
    title: `Угадайте для каждого изображения фото или рисунок?`,
    images: [`https://www.metal-archives.com/images/4/9/9/2/499252.jpg`, `http://amazingcentral.com/wp-content/uploads/2010/08/amazing-hand-painting-picture-24.jpg`],
    correctAnswer: [imageType.PAINT, imageType.PHOTO]
  },
  {
    questionType: questionType.ONE_IMAGE,
    title: `Угадай, фото или рисунок?`,
    image: `https://k32.kn3.net/5C7060EC5.jpg`,
    correctAnswer: imageType.PAINT
  },
  {
    questionType: questionType.TWO_IMAGES,
    title: `Угадайте для каждого изображения фото или рисунок?`,
    images: [`https://static.dezeen.com/uploads/2014/12/Dream-Houses-V-and-A-Museum-of-Childhood-Small-Stories_dezeen_468_20.jpg`, `https://i.pinimg.com/736x/d0/99/c5/d099c5e511104ebaf543bffbe7895cb4--rainy-night-rainy-days.jpg`],
    correctAnswer: [imageType.PAINT, imageType.PHOTO]
  },
  {
    questionType: questionType.THREE_IMAGES,
    title: `Найдите рисунок среди изображений?`,
    images: [`http://6roundstudio.com/images/774b4422914295587d29bde164a.jpg?crc=4010533795`, `http://zoneonearts.com.au/wp-content/uploads/2015/03/zaria-forman-01.jpg`, `https://i.pinimg.com/736x/a0/c2/26/a0c2268b9f55a84f68f453ea46378beb--leaving-home-suitcases.jpg`],
    correctAnswer: 1
  },
  {
    questionType: questionType.ONE_IMAGE,
    title: `Угадай, фото или рисунок?`,
    image: `https://k32.kn3.net/5C7060EC5.jpg`,
    correctAnswer: imageType.PHOTO
  },
  {
    questionType: questionType.THREE_IMAGES,
    title: `Найдите рисунок среди изображений?`,
    images: [`http://6roundstudio.com/images/774b4422914295587d29bde164a.jpg?crc=4010533795`, `http://zoneonearts.com.au/wp-content/uploads/2015/03/zaria-forman-01.jpg`, `https://i.pinimg.com/736x/a0/c2/26/a0c2268b9f55a84f68f453ea46378beb--leaving-home-suitcases.jpg`],
    correctAnswer: 2
  },
  {
    questionType: questionType.TWO_IMAGES,
    title: `Угадайте для каждого изображения фото или рисунок?`,
    images: [`http://prod-images.exhibit-e.com/www_matthewmarks_com/Price_32449_The_Pair2.png`, `https://i.pinimg.com/736x/c8/ee/d7/c8eed73ad90c591439758a062a48feb0--staircase-bookshelf-staircase-design.jpg`],
    correctAnswer: [imageType.PAINT, imageType.PHOTO]
  },
  {
    questionType: questionType.ONE_IMAGE,
    title: `Угадай, фото или рисунок?`,
    image: `https://k32.kn3.net/5C7060EC5.jpg`,
    correctAnswer: imageType.PHOTO
  }
];

export default questions;
