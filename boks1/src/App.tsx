import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login/Login';
import PrivateRoute from './components/auth/PrivateRoute/PriveteRoute';
import Register from './components/auth/Registration/Register';
import Catalog from './components/pages/Catalog/Catalog';
import Category from './components/pages/Category/Category';
import Contacts from './components/pages/Contacts/Contacts';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Profile from './components/pages/Profile/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Защищенные маршруты */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
