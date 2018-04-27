import React from 'react'

class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canPlay: false
    }
  }

  setRef = (el) => {
    this.audioEl = el
    this.playIfPossible()
  }

  onCanPlay = () => {
    this.setState({ canPlay: true }, this.playIfPossible)
  }

  playIfPossible = () => {
    if (this.state.canPlay && this.audioEl) {
      this.audioEl.play()

      if (this.props.onPlay) {
        this.props.onPlay()
      }
    }
  }

  render() {
    const { audioPath } = this.props

    return (
      <audio
        ref={this.setRef}
        src={audioPath}
        preload="auto"
        onCanPlay={this.onCanPlay}
      />
    )
  }
}

export default Music
