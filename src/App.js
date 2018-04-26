import React from 'react'

const lines = [
  'I can finally breathe',
  'I can finally think',
  'I can finally sing',
  'I can finally say… I love you',

  'To feel the sun on my skin',
  'And the touch of your hand',
  'To see sunlight in your eyes',
  'And the warmth of your smile ',

  'I buy fresh fruit from the store',
  'We eat it all then buy more',
  'I shoot the ball through the hoop ',
  'I can feel pure — I feel true ',

  'Hot water slides down my skin',
  'I stretch my body again',
  'Reach down and grasp the soap we share',
  'Feel the water running through my hair',

  'I guess I’m just lucky',
  'A little guy like me, got lucky',
  'How’d I get so lucky?',
  'How’d it happen to me..',

  'I guess I’m just lucky',
  'A little guy like me, got lucky',
  'I guess I’m just lucky',
  'A little guy like me, got lucky',

  'Cooking pasta for two',
  'Or for one - it’s all fun',
  'Maybe I’ll go on a walk',
  'Or call up my friend — just to talk ',

  'We hear a bird in the morning',
  'Its gentle song rising note by note',
  'We share a kiss once night falls',
  'I watch my favorite show and   smile',

  'Can this be real?',
  'Can it possibly last?',
]

const App = () => {
  return (
    <div>
      {lines.map(line => <div key={line}>{line}</div>)}
    </div>
  )
}

export default App
