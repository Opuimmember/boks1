import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebaseConfig';

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
