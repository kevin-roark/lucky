import React from 'react'
import styled from 'react-emotion'
import Media from './Media'
import Ticker from './Ticker'

const TickerContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`

const lines = [
  { text: 'I can finally breathe', time: 44 },
  { text: 'I can finally think', time: 48 },
  { text: 'I can finally sing', time: 52 },
  { text: 'I can finally say… I love you', time: 56 },
  { text: 'To feel the sun on my skin', time: 59 },
  { text: 'And the touch of your hand', time: 63 },
  { text: 'To see sunlight in your eyes', time: 67 },
  { text: 'And the warmth of your smile', time: 71 },
  { text: 'I buy fresh fruit from the store', time: 74 },
  { text: 'We eat it all then buy more', time: 78 },
  { text: 'I shoot the ball through the hoop', time: 82 },
  { text: 'I can feel pure — I feel true', time: 85 },
  { text: 'Hot water slides down my skin', time: 88 },
  { text: 'I stretch my body again', time: 93 },
  { text: 'Reach down and grasp the soap we share', time: 98 },
  { text: 'Feel the water running through my hair', time: 103 },
  { text: 'I guess I’m just lucky', time: 111 },
  { text: 'A little guy like me, got lucky', time: 115 },
  { text: 'How’d I get so lucky?', time: 119 },
  { text: 'How’d it happen to me..', time: 123 },
  { text: 'I guess I’m just lucky', time: 132 },
  { text: 'A little guy like me, got lucky', time: 136 },
  { text: 'I guess I’m just lucky', time: 140 },
  { text: 'A little guy like me, got lucky', time: 143.5 },
  { text: 'Cooking pasta for two', time: 147 },
  { text: 'Or for one - it’s all fun', time: 152 },
  { text: 'Maybe I’ll go on a walk', time: 157 },
  { text: 'Or call up my friend — just to talk', time: 162 },
  { text: 'We hear a bird in the morning', time: 170 },
  { text: 'Its gentle song rising note by note', time: 176 },
  { text: 'We share a kiss once night falls', time: 182 },
  { text: 'I watch my favorite show and   smile', time: 188 },
  { text: 'Can this be real?', time: 198 },
  { text: 'Can it possibly last?', time: 203 },
]

const verses = [
  {
    time: 44,
    duration: 15,
    lines: [
      'I can finally breathe',
      'I can finally think',
      'I can finally sing',
      'I can finally say… I love you',
    ]
  },
  {
    time: 59,
    duration: 15,
    lines: [
      'To feel the sun on my skin',
      'And the touch of your hand',
      'To see sunlight in your eyes',
      'And the warmth of your smile',
    ]
  },
  {
    time: 74,
    duration: 15,
    lines: [
      'I buy fresh fruit from the store',
      'We eat it all then buy more',
      'I shoot the ball through the hoop',
      'I can feel pure — I feel true',
    ]
  },
  {
    time: 88,
    duration: 20,
    lines: [
      'Hot water slides down my skin',
      'I stretch my body again',
      'Reach down and grasp the soap we share',
      'Feel the water running through my hair',
    ]
  },
  {
    time: 111,
    duration: 15,
    lines: [
      'I guess I’m just lucky',
      'A little guy like me, got lucky',
      'How’d I get so lucky?',
      'How’d it happen to me..',
    ]
  },
  {
    time: 132,
    duration: 15,
    lines: [
      'I guess I’m just lucky',
      'A little guy like me, got lucky',
      'I guess I’m just lucky',
      'A little guy like me, got lucky',
    ]
  },
  {
    time: 147,
    duration: 20,
    lines: [
      'Cooking pasta for two',
      'Or for one - it’s all fun',
      'Maybe I’ll go on a walk',
      'Or call up my friend — just to talk',
    ]
  },
  {
    time: 170,
    duration: 25,
    lines: [
      'We hear a bird in the morning',
      'Its gentle song rising note by note',
      'We share a kiss once night falls',
      'I watch my favorite show and   smile',
    ]
  },
  {
    time: 198,
    duration: 10,
    lines: [
      'Can this be real?',
      'Can it possibly last?',
    ]
  }
]

class App extends React.Component {
  nextVerseIndex = 0

  constructor(props) {
    super(props)
    this.state = {
      activeVerses: []
    }
  }

  onTimeUpdate = (time) => {
    const verse = this.nextVerseIndex < verses.length ? lines[this.nextVerseIndex] : null
    if (!verse) {
      return
    }

    if (time >= verse.time) {
      const activeVerses = this.state.activeVerses.concat(verse)
      this.setState({ activeVerses })

      this.nextVerseIndex += 1
    }
  }

  render() {
    const { activeVerses } = this.state

    return (
      <div>
        <Media
          onTimeUpdate={this.onTimeUpdate}
          startTime={44}
        />

        <TickerContainer>
          {activeVerses.map((verse, idx) => <Ticker {...verse} key={idx} />)}
        </TickerContainer>
      </div>
    )
  }
}

export default App
