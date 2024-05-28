import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SpecialOffers.module.scss';
import products from '../../../data/productData';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

// Компонент `SpecialOffers` отвечает за отображение страницы с акциями и скидками
const SpecialOffers: React.FC = () => {
  // Фильтруем продукты, чтобы отобразить только те, которые находятся на скидке
  const saleProducts = products.filter((product) => product.isOnSale);

  return (
    <>
      <Header />
      <div className={styles.specialOffers}>
        <main className={styles.main}>
          <h1>Специальные предложения</h1>
          <div className={styles.productGrid}>
            {saleProducts.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <Link to={`/product/${product.name}`}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price} руб.</p>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SpecialOffers;
