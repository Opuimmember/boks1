import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Category.module.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import products from '../../../data/productData';

// Компонент `Category` отвечает за отображение товаров выбранной категории
const Category: React.FC = () => {
  // Получаем название категории из параметров URL
  const { category } = useParams<{ category: string }>();
  // Фильтруем продукты, чтобы отобразить только те, которые относятся к выбранной категории
  const categoryProducts = products.filter((product) => product.category === category);

  return (
    <>
      <Header />
      <div className={styles.category}>
        <main className={styles.main}>
          <h1>{category}</h1>
          <div className={styles.productGrid}>
            {categoryProducts.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price} руб.</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Category;
