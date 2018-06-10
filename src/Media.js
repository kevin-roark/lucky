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

const QuarterVideo = styled('video')`
  position: fixed;
  width: calc(50vw - 30px);
  top: 50vh;
  transform: translateY(-50%);
  z-index: -1;
`

class Media extends React.Component {
  videoEls = []

  constructor(props) {
    super(props)

    this.state = {
      canPlayCount: 0
    }
  }

  setAudioRef = (el) => {
    this.audioEl = el
    this.playIfPossible()

    el.currentTime = this.props.startTime || 0

    el.ontimeupdate = () => {
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(el.currentTime)
      }
    }
  }

  setVideoRef = (el) => {
    this.videoEls.push(el)
    this.playIfPossible()

    el.currentTime = this.props.startTime || 0
  }

  onCanPlay = () => {
    const canPlayCount = this.state.canPlayCount + 1
    this.setState({ canPlayCount }, this.playIfPossible)
  }

  playIfPossible = () => {
    if (this.state.canPlayCount === 3) {
      this.audioEl.play()
      this.videoEls.forEach(vid => vid.play())

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
        <QuarterVideo src={videoPath} preload="auto" onCanPlay={this.onCanPlay} innerRef={this.setVideoRef} style={{left: 20 }} />
        <QuarterVideo src={videoPath} preload="auto" onCanPlay={this.onCanPlay} innerRef={this.setVideoRef} style={{right: 20 }} />
      </div>
    )
  }
}

export default Media
