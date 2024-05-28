import fitnessImage from '../assets/img/fitnessImage.jpg';
import ballfImage from '../assets/img/ballfImage.jpg';
import boksImage from '../assets/img/boksImage.webp';
import lishiImage from '../assets/img/lishiImage.png';
import velikImage from '../assets/img/velikImage.jpg';
import ganteliImage from '../assets/img/ganteliImage.webp';
import basketImage from '../assets/img/basketImage.jpg';
import konkiImage from '../assets/img/konkiImage.jpg';
import raketkaImage from '../assets/img/raketkaImage.jpg';
import rezinkiImage from '../assets/img/rezinkiImage.webp';
import shtangaImage from '../assets/img/shtangaImage.jpg';
import voleybolImage from '../assets/img/voleybolImage.webp';
import yogaImage from '../assets/img/yogaImage.jpg';
import grushaImage from '../assets/img/grushaImage.jpg';
import rolikiImage from '../assets/img/rolikiImage.webp';
import klushkaImage from '../assets/img/klushkaImage.jpg';
import raketka2Image from '../assets/img/raketka2Image.jpg';
import snowboardImage from '../assets/img/snowboardImage.jpg';
import fitballImage from '../assets/img/fitballImage.jpg';
import palatkaImage from '../assets/img/palatkaImage.png';

export interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  specifications: string[];
  isOnSale?: boolean; // Добавляем поле для специальных предложений
}

const products: Product[] = [
  {
    name: 'Тренажер для фитнеса',
    price: 5000,
    image: fitnessImage,
    category: 'Фитнес и тренировки',
    description: 'Отличный тренажер для фитнеса, который поможет вам поддерживать форму.',
    specifications: ['Вес: 50 кг', 'Материал: Сталь', 'Размер: 120x60x80 см'],
    isOnSale: true, // Добавляем товар на скидку
  },
  {
    name: 'Футбольный мяч',
    price: 1500,
    image: ballfImage,
    category: 'Командные виды спорта',
    description: 'Профессиональный футбольный мяч для игры на любом покрытии.',
    specifications: ['Размер: 5', 'Материал: Синтетика', 'Вес: 450 г'],
    isOnSale: false,
  },
  {
    name: 'Боксерские перчатки',
    price: 2000,
    image: boksImage,
    category: 'Единоборства',
    description: 'Качественные боксерские перчатки для тренировок и соревнований.',
    specifications: ['Вес: 12 унций', 'Материал: Кожа', 'Размер: Универсальный'],
    isOnSale: true, // Добавляем товар на скидку
  },
  {
    name: 'Лыжи',
    price: 8000,
    image: lishiImage,
    category: 'Зимние виды спорта',
    description: 'Высококачественные лыжи для профессиональных спортсменов.',
    specifications: ['Длина: 170 см', 'Материал: Карбон', 'Вес: 1.5 кг'],
    isOnSale: false,
  },
  {
    name: 'Велосипед',
    price: 12000,
    image: velikImage,
    category: 'Летние виды спорта',
    description: 'Горный велосипед для езды по пересеченной местности.',
    specifications: ['Вес: 15 кг', 'Материал: Алюминий', 'Размер колес: 26 дюймов'],
    isOnSale: false,
  },
  {
    name: 'Гантели',
    price: 3000,
    image: ganteliImage,
    category: 'Фитнес и тренировки',
    description: 'Набор гантелей для домашних тренировок.',
    specifications: ['Вес: 10 кг', 'Материал: Чугун', 'Кол-во: 2 шт'],
    isOnSale: true, // Добавляем товар на скидку
  },
  {
    name: 'Баскетбольный мяч',
    price: 1800,
    image: basketImage,
    category: 'Командные виды спорта',
    description: 'Профессиональный баскетбольный мяч для игры на любой площадке.',
    specifications: ['Размер: 7', 'Материал: Кожа', 'Вес: 600 г'],
    isOnSale: false,
  },
  {
    name: 'Коньки',
    price: 6000,
    image: konkiImage,
    category: 'Зимние виды спорта',
    description: 'Коньки для фигурного катания с лезвиями из нержавеющей стали.',
    specifications: ['Размер: 42', 'Материал: Кожа', 'Вес: 2 кг'],
    isOnSale: true, // Добавляем товар на скидку
  },
  {
    name: 'Теннисная ракетка',
    price: 3500,
    image: raketkaImage,
    category: 'Летние виды спорта',
    description: 'Легкая теннисная ракетка для профессиональных игроков.',
    specifications: ['Вес: 300 г', 'Материал: Карбон', 'Длина: 68 см'],
    isOnSale: false,
  },
  {
    name: 'Фитнес-резинки',
    price: 1000,
    image: rezinkiImage,
    category: 'Фитнес и тренировки',
    description: 'Набор фитнес-резинок разной жесткости для тренировок дома и в зале.',
    specifications: ['Количество: 5 шт', 'Материал: Латекс'],
    isOnSale: true,
  },
  {
    name: 'Штанга',
    price: 7000,
    image: shtangaImage,
    category: 'Фитнес и тренировки',
    description: 'Штанга для тяжелой атлетики с набором блинов.',
    specifications: ['Вес: 100 кг', 'Материал: Сталь'],
    isOnSale: false,
  },
  {
    name: 'Мяч для волейбола',
    price: 1500,
    image: voleybolImage,
    category: 'Командные виды спорта',
    description: 'Профессиональный мяч для волейбола.',
    specifications: ['Размер: 5', 'Материал: Синтетика'],
    isOnSale: false,
  },
  {
    name: 'Коврик для йоги',
    price: 2000,
    image: yogaImage,
    category: 'Фитнес и тренировки',
    description: 'Удобный коврик для йоги и фитнеса.',
    specifications: ['Длина: 180 см', 'Ширина: 60 см', 'Толщина: 6 мм'],
    isOnSale: true,
  },
  {
    name: 'Боксерская груша',
    price: 5000,
    image: grushaImage,
    category: 'Единоборства',
    description: 'Боксерская груша для тренировок.',
    specifications: ['Высота: 150 см', 'Материал: Кожа'],
    isOnSale: false,
  },
  {
    name: 'Ролики',
    price: 4000,
    image: rolikiImage,
    category: 'Летние виды спорта',
    description: 'Роликовые коньки для активного отдыха.',
    specifications: ['Размер: 42', 'Материал: Пластик, полиуретан'],
    isOnSale: true,
  },
  {
    name: 'Клюшка для хоккея',
    price: 3500,
    image: klushkaImage,
    category: 'Зимние виды спорта',
    description: 'Профессиональная клюшка для хоккея.',
    specifications: ['Длина: 160 см', 'Материал: Карбон'],
    isOnSale: false,
  },
  {
    name: 'Ракетка для настольного тенниса',
    price: 1200,
    image: raketka2Image,
    category: 'Летние виды спорта',
    description: 'Ракетка для настольного тенниса.',
    specifications: ['Материал: Дерево, резина', 'Вес: 150 г'],
    isOnSale: true,
  },
  {
    name: 'Сноуборд',
    price: 15000,
    image: snowboardImage,
    category: 'Зимние виды спорта',
    description: 'Сноуборд для профессиональных спортсменов.',
    specifications: ['Длина: 155 см', 'Материал: Карбон, стекловолокно'],
    isOnSale: false,
  },
  {
    name: 'Фитбол',
    price: 1200,
    image: fitballImage,
    category: 'Фитнес и тренировки',
    description: 'Фитнес-мяч для гимнастики и йоги.',
    specifications: ['Диаметр: 65 см', 'Материал: ПВХ'],
    isOnSale: true,
  },
  {
    name: 'Палатка туристическая',
    price: 8000,
    image: palatkaImage,
    category: 'Летние виды спорта',
    description: 'Просторная палатка для кемпинга и походов.',
    specifications: ['Вместимость: 4 человека', 'Материал: Полиэстер'],
    isOnSale: false,
  },
];

export default products;
