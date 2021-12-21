import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import * as productsAction from './store/product'
import * as reviewsAction from './store/review'
import LandingPage from './components/Home/LandingPage';
import ProductsPage from './components/Products/ProductsPage';
import ReviewSection from './components/Reviews/ReviewSection';
import IndividualProductPage from './components/Products/IndividualProductPage';
import StarRating from './components/Reviews/StarRating/StarRating';
import Event from './components/Events/Event';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(productsAction.getAllProducts());
      await dispatch(reviewsAction.getAllReviews());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <LandingPage/>
        </Route>
        <Route path='/all/products' exact={true}>
          <ProductsPage/>
        </Route>
        <Route path='/product/:id' exact={true}>
          <IndividualProductPage/>
        </Route>
        <Route path='/events' exact={true}>
          <Event />
        </Route>
        <Route path='/contact' exact={true}>

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
