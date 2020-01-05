// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors:[],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution:'1080p'
        }
      }
    }
  }

  makeBitRateTwelve = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...previousState.settings,
          bitrate: 12
        }
      }
    })
  }

  makeResolution720 = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...previousState.settings,
          video: {
            resolution: '720p'
          }
        }
      } 
    })
  }
  
  render() {
    return (
      <div>
        <button 
          className = 'bitrate'
          onClick = {this.makeBitRateTwelve}
        >
          Bitrate: {this.state.settings.bitrate}
        </button>

        <button 
          className = 'resolution'
          onClick = {this.makeResolution720}
        >
          Resolution: {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}