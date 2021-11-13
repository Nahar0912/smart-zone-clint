import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Home/Products/Products';
import Footer from './Pages/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddProduct from './Pages/AddProduct/AddProduct';
import OrderReview from './Pages/OrderReview/OrderReview';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            < PrivateRoute path="/review/:productId">
              <OrderReview></OrderReview>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
