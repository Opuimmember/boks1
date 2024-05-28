import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

// Компонент `Header` отвечает за отображение верхней части страницы (хедера)
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Логотип сайта с ссылкой на главную страницу */}
      <div className={styles.logo}>
        <Link to="/">SportShop</Link>
      </div>
      {/* Навигационное меню */}
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/profile">Профиль</Link>
      </nav>
    </header>
  );
};

export default Header;
