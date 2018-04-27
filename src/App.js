import React from 'react'
import Media from './Media'
import Ticker, { fontFamilies } from './Ticker'

const verses = [
  {
    time: 44,
    duration: 15,
    color: '#f00',
    textColor: '#fff',
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
    color: '#f00',
    textColor: '#fff',
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
    color: '#f00',
    textColor: '#fff',
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
    color: '#f00',
    textColor: '#fff',
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
    color: '#f00',
    textColor: '#fff',
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
    color: '#f00',
    textColor: '#fff',
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
    color: '#f00',
    textColor: '#fff',
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
    color: '#f00',
    textColor: '#fff',
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
    color: '#f00',
    textColor: '#fff',
    lines: [
      'Can this be real?',
      'Can it possibly last?',
    ]
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeVerses: []
    }
  }

  onMediaPlay = () => {
    verses.forEach(verse => {
      const text = verse.lines.join('. ')
      verse.text = `${text}.`
      verse.fontFamily = fontFamilies[Math.floor(fontFamilies.length * Math.random())]
      verse.fontSize = Math.floor(36 + Math.random() * 36)
      verse.angle = Math.random() * 90

      setTimeout(() => {
        const activeVerses = this.state.activeVerses.concat(verse)
        this.setState({ activeVerses })
      }, verse.time * 1000 - 44000)
    })
  }

  render() {
    const { activeVerses } = this.state

    return (
      <div>
        <Media onPlay={this.onMediaPlay} />

        {activeVerses.map((verse, idx) => {
          return (
            <Ticker {...verse} key={idx} />
          )
        })}
      </div>
    )
  }
}

export default App
