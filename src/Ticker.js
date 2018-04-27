import React from 'react'
import styled, { keyframes } from 'react-emotion'

const Container = styled('div')`
  position: fixed;
  left: 0;
  padding: 8px;
  white-space: pre;
  overflow-x: hidden;
  transform-origin: 0% 100%;
  min-width: 100vw;
`

const tickerAnimation = keyframes`
  0% {
    transform: translate3d(100vw, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
`

const TickerText = styled('div')`
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${tickerAnimation};
`

export const fontFamilies = [
  "'Work Sans', sans-serif",
  "'Overpass Mono', monospace",
  "'MedievalSharp', cursive",
  "'Times New Roman', serif"
]

const Ticker = props => {
  const {
    text,
    duration = 10,
    top = 0,
    fontFamily = fontFamilies[0],
    fontSize = 44,
    color = '#fff',
    textColor = '#000',
    angle = 0
  } = props

  const style = {
    top, fontFamily, fontSize,
    backgroundColor: color,
    color: textColor,
    transform: `rotate(${angle}deg)`
  }

  const textStyle = {
    animationDuration: `${duration}s`
  }

  return (
    <Container style={style}>
      <TickerText style={textStyle}>
        {text}
      </TickerText>
    </Container>
  )
}

export default Ticker
