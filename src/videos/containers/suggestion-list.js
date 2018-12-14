import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from '../components/suggestion'

class SuggestionList extends Component {

  renderEmpty = () => <Empty text="Videos not found" />
  renderSeparator = () => <Separator />
  renderItem = ({ item }) => (
    <Suggestion 
      onPress={() => { this.viewMovie(item) }}
      {...item}
    />
  )

  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
  }

  keyExtractor = item => item.id.toString()

  render() {
    return (
      <Layout title="Suggested for you">
      <FlatList
        keyExtractor={this.keyExtractor} 
        data={this.props.list}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderItem}
        ListEmptyComponent={this.renderEmpty}
      />
      </Layout>
      
    )
  }

}

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}

export default connect(mapStateToProps)(SuggestionList)