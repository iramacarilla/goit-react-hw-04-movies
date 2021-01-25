import React, { Component } from 'react'
import Navigation from './navigation/Navigation'
import HomePage from '../pages/homePage/HomePage'
import MoviesPage from '../pages/moviesPage/MoviesPage'
import MovieDetailsPage from '../pages/movieDetailsPage/MovieDetailsPage'
import DefaultPage from '../pages/defaultPage/DefaultPage'
import { Switch, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Loading from '../components/loader/Loading'


const App = () => (

      <Layout>
      <Navigation/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/movies/:movieId' component={MovieDetailsPage}/>
            <Route path='/movies' component={MoviesPage}/>
            <Route  component={DefaultPage}/>
           
        </Switch>
        </Layout>
    )
  

export default  App 

