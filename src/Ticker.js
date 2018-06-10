import React from 'react'
import styled, { keyframes } from 'react-emotion'

const Container = styled('div')`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 8px;
  padding: 8px 8px 4px 8px;
  white-space: pre;
  box-shadow: 0 20px 30px rgba(0,0,0,0.14), 0 15px 25px rgba(0,0,0,0.16), 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background: #000;
  color: #fff;
  font-weight: bold;

  & p {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
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
`

export const fontFamilies = [
  "'Inknut Antiqua', serif",
]

const Ticker = props => {
  const {
    text,
    fontFamily = fontFamilies[0],
  } = props

  const style = {
    fontFamily,
  }

  return (
    <Container style={style}>
      <TickerText>
        {(props.lines || [props.text]).map((l, i) => <p key={i}>{l}</p>)}
      </TickerText>
    </Container>
  )
}

export default Ticker
