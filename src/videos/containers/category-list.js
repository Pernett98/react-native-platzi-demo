import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import Layout from '../components/category-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/horizontal-separator'
import Category from '../components/category'
class CategoryList extends Component {

  renderEmpty = () => <Empty text="Categories not found" />
  renderSeparator = () => <Separator />
  renderItem = ({ item }) => <Category {...item} />

  keyExtractor = item => item.id.toString()

  render() {
    return (
      <Layout title="Categories">
        <FlatList
          horizontal
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

export default CategoryList