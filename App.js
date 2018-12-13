/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import Video from 'react-native-video'

import API from './utils/api'
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'

type Props = {};
export default class App extends Component<Props> {

  state = {
    suggestionList: [],
    categories: []
  }
  
  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    const categories = await API.getMovies()
    this.setState({
      suggestionList: movies,
      categories: categories
    })
    console.log(movies)
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>HI</Text>
        </Header>
        <Player></Player>
        <Text>Search</Text>
        <Text>Categories</Text>
        <CategoryList 
          list={this.state.categories}
        />
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}


