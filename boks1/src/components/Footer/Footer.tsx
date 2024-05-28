import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

// Компонент `Footer` отвечает за отображение нижней части страницы (футера)
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Секция с контактной информацией */}
        <div className={styles.contactInfo}>
          <h3>Контактная информация</h3>
          <p>Email: info@sportshop.com</p>
          <p>Телефон: +1 234 567 890</p>
          <p>Адрес: 1234 Спортивная улица, Город спорта, Страна</p>
        </div>
        {/* Секция с полезными ссылками */}
        <div className={styles.links}>
          <h3>Полезные ссылки</h3>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/catalog?category=Фитнес%20и%20тренировки">Фитнес и тренировки</Link>
            </li>
            <li>
              <Link to="/catalog?category=Командные%20виды%20спорта">Командные виды спорта</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
          </ul>
        </div>
        {/* Секция для подписки на новости */}
        <div className={styles.newsletter}>
          <h3>Подписка на новости</h3>
          <form>
            <input type="email" placeholder="Ваш email" />
            <button type="submit">Подписаться</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
