export interface Category {
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    name: 'Фитнес и тренировки',
    image: '/assets/img/fitness.jpg',
    link: '/category/fitness',
  },
  {
    name: 'Командные виды спорта',
    image: '/assets/img/team-sports.jpg',
    link: '/category/team-sports',
  },
  {
    name: 'Единоборства',
    image: '/assets/img/martial-arts.jpg',
    link: '/category/martial-arts',
  },
  {
    name: 'Зимние виды спорта',
    image: '/assets/img/winter-sports.jpg',
    link: '/category/winter-sports',
  },
  {
    name: 'Летние виды спорта',
    image: '/assets/img/summer-sports.jpg',
    link: '/category/summer-sports',
  },
];

export default categories;
