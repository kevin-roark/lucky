import React from 'react'
import styled from 'react-emotion'

const BigVideo = styled('video')`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
`

class Media extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      canPlayCount: 0
    }
  }

  setAudioRef = (el) => {
    this.audioEl = el
    this.playIfPossible()
  }

  setVideoRef = (el) => {
    this.videoEl = el
    this.playIfPossible()
  }

  onCanPlay = () => {
    const canPlayCount = this.state.canPlayCount + 1
    this.setState({ canPlayCount }, this.playIfPossible)
  }

  playIfPossible = () => {
    if (this.state.canPlayCount === 2 && this.audioEl && this.videoEl) {
      this.audioEl.play()
      this.videoEl.play()

      if (this.props.onPlay) {
        this.props.onPlay()
      }
    }
  }

  render() {
    const audioPath = 'media/lucky.mp3'
    const videoPath = 'media/luckysun1.mp4'

    return (
      <div>
        <audio src={audioPath} preload="auto" onCanPlay={this.onCanPlay} ref={this.setAudioRef} />
        <BigVideo src={videoPath} preload="auto" onCanPlay={this.onCanPlay} innerRef={this.setVideoRef} />
      </div>
    )
  }
}

export default Media
