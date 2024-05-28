import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './Product.module.scss';
import products from '../../../data/productData';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

// Компонент `Product` отвечает за отображение страницы отдельного продукта
const Product: React.FC = () => {
  // Получаем ID продукта из параметров URL
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  // Находим продукт по его ID
  const product = products.find((p) => p.name === productId);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.product}>
        <main className={styles.main}>
          {/* Кнопка для возврата на предыдущую страницу */}
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Назад
          </button>
          <div className={styles.productContent}>
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productDetails}>
              <h1>{product.name}</h1>
              <p className={styles.price}>{product.price} руб.</p>
              <p className={styles.description}>{product.description}</p>
              <h2>Характеристики</h2>
              <ul className={styles.specifications}>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Product;
