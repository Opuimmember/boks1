import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import categories from '../../../data/categoriesData';
import styles from './Catalog.module.scss';
import products from '../../../data/productData';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

// Хук для получения параметров из URL
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// Компонент `Catalog` отвечает за отображение страницы каталога товаров
const Catalog: React.FC = () => {
  const query = useQuery(); // Получаем параметры из URL
  const navigate = useNavigate(); // Хук для навигации
  const initialCategory = query.get('category') || 'Все категории'; // Получаем начальную категорию из параметров URL
  const initialOnSale = query.get('onSale') === 'true'; // Получаем параметр "только на скидке" из URL

  // Локальные состояния для хранения фильтров
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [showOnSale, setShowOnSale] = useState(initialOnSale);

  // Обновляем состояния при изменении параметров URL
  useEffect(() => {
    setSelectedCategory(initialCategory);
    setShowOnSale(initialOnSale);
  }, [initialCategory, initialOnSale]);

  // Обработчик изменения значения поиска
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Обработчик изменения выбранной категории
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  // Обработчик изменения состояния "только на скидке"
  const handleOnSaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowOnSale(e.target.checked);
  };

  // Фильтрация продуктов на основе выбранных фильтров
  const filteredProducts = products.filter((product) => {
    const isInCategory =
      selectedCategory === 'Все категории' || product.category === selectedCategory;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isOnSale = !showOnSale || product.isOnSale;
    return isInCategory && matchesSearchTerm && isOnSale;
  });

  return (
    <>
      <Header />
      <div className={styles.catalog}>
        <main className={styles.main}>
          <h1>Каталог товаров</h1>
          {/* Кнопка для возврата на предыдущую страницу */}
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Назад
          </button>
          {/* Фильтры для поиска и выбора категории */}
          <div className={styles.filters}>
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className={styles.categorySelect}>
              <option value="Все категории">Все категории</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <label className={styles.onSaleLabel}>
              <input
                type="checkbox"
                checked={showOnSale}
                onChange={handleOnSaleChange}
                className={styles.onSaleCheckbox}
              />
              Только товары по скидке
            </label>
          </div>
          {/* Сетка продуктов */}
          <div className={styles.productGrid}>
            {filteredProducts.map((product, index) => (
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

export default Catalog;
