import React from 'react';
import { Link } from 'react-router-dom';

import categories from '../../../data/categoriesData';
import styles from './Home.module.scss';
import products from '../../../data/productData';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

// Компонент `Home` отвечает за отображение главной страницы
const Home: React.FC = () => {
  // Выбираем первые 2 продукта для отображения в разделе "Рекомендуемые товары"
  const recommendedProducts = products.slice(0, 2);

  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <h1>Добро пожаловать в наш магазин спортивного инвентаря</h1>
          <p>Откройте для себя лучшие товары для фитнеса и активного отдыха</p>
        </section>
        <section className={styles.categories}>
          <h2>Категории товаров</h2>
          <div className={styles.categoryGrid}>
            {categories.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <Link to={`/catalog?category=${encodeURIComponent(category.name)}`}>
                  <h3>{category.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.recommended}>
          <h2>Рекомендуемые товары</h2>
          <div className={styles.productGrid}>
            {recommendedProducts.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <Link to={`/product/${product.name}`}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price} руб.</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.specialOffers}>
          <h2>Акции и скидки</h2>
          <div className={styles.offersGrid}>
            <div className={styles.offerCard}>
              <Link to="/catalog?onSale=true">
                <h3>Скидка 20% на фитнес оборудование</h3>
                <p>Только до конца месяца!</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
