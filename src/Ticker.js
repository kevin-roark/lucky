import React from 'react'
import { cx } from 'emotion'
import styled, { keyframes } from 'react-emotion'

const Container = styled('div')`
  position: fixed;
  left: 0;
  padding: 8px;
  white-space: nowrap;
  overflow-x: hidden;

  &.vertical {
    transform: translate(-100vw, 100%) rotate(90deg);
  }
`

const tickerAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(-50%, 0, 0);
  }
`

const TickerText = styled('div')`
  font-family: 'Overpass Mono', monospace;
  font-size: 44px;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${tickerAnimation};
`

const Ticker = props => {
  const {
    text,
    duration = 10,
    top = 10,
    color = '#fff',
    textColor = '#000',
    vertical = false
  } = props

  const className = cx({ vertical })

  const style = {
    backgroundColor: color,
    color: textColor,
    top
  }

  const textStyle = {
    animationDuration: `${duration}s`
  }

  return (
    <Container className={className} style={style}>
      <TickerText style={textStyle}>
        {text}
      </TickerText>
    </Container>
  )
}

export default Ticker
