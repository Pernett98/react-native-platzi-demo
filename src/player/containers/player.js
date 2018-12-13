import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native';
import Video from 'react-native-video'

import Layout from '../components/layout'
import PlayPause from '../components/play-pause'
import ControlLayout from '../components/control-layout'

class Player extends Component {

  state = {
    loading: true,
    paused: false
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }

  onLoad = () => {
    this.setState({
      loading: false
    })
  }

  togglePause = () => {
    this.setState((prevState) => {
      return {
        paused: !prevState.paused  
      };
    })
  }

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={
          <ActivityIndicator color="white" />
        }
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.togglePause}
            />
          </ControlLayout>
        }
      >

      </Layout>
    )
  }

}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default Player