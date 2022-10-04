import React, { useEffect, useState } from 'react'
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs')
const use = require('@tensorflow-models/universal-sentence-encoder');



function App() {

  const [userInput, setUserInput] = useState('')
  const [scoresOut, setScoresOut] = useState([])
  const [inputObj, setInputObj] = useState({})
  // Load the model.
  // use.loadQnA().then(model => {

  //   const input = {
  //     queries: ['dog'],
  //     responses: [
  //       'dog',
  //       'puppy',
  //       'rock',
  //       'burger',
  //       'sand',
  //       'goose',
  //       'justice'
  //     ]
  //   };

  //   const embeddings = model.embed(input);
  //   console.log(embeddings)

  //   const scores = tf.matMul(embeddings['queryEmbedding'],
  //     embeddings['responseEmbedding'], false, true).dataSync();

  //   console.log(scores)
  // });

  let embeddings


  useEffect(() => {
    use.loadQnA().then(model => {
      // console.log(model)
      const input = {
        queries: [userInput],
        responses: [
          userInput,
          'puppy',
          'rock',
          'burger',
          'sand',
          'goose',
          'justice',
          'teacher'
        ]
      };
      embeddings = model.embed(input);
      // console.log(embeddings['queryEmbedding'].toString())
    })
  }, [])




  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    use.loadQnA().then(model => {

      const input = {
        queries: [userInput],
        responses: [
          userInput,
          'puppy',
          'rock',
          'burger',
          'sand',
          'goose',
          'justice',
          'teacher'
        ]
      };
      const embeddings = model.embed(input);
      const scores = tf.matMul(embeddings['queryEmbedding'],
        embeddings['responseEmbedding'], false, true).dataSync();
      setScoresOut(scores)
      console.log(scores)
    })
  }

  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     // console.log(input)
  //     // use.loadQnA().then(model => {

  //     //   const input = {
  //     //     queries: [userInput],
  //     //     responses: [
  //     //       userInput,
  //     //       'puppy',
  //     //       'rock',
  //     //       'burger',
  //     //       'sand',
  //     //       'goose',
  //     //       'justice',
  //     //       'teacher'
  //     //     ]
  //     //   };

  //     //   const embeddings = model.embed(input);
  //     console.log(embeddings['queryEmbedding'].toString())

  //     const scores = tf.matMul(embeddings['queryEmbedding'],
  //       embeddings['responseEmbedding'], false, true).dataSync();

  //     console.log(scores)
  //     setScoresOut(scores)
  //   });

  // }
  // console.log(scoresOut)

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const model = await use.load()
  //   const input = [
  //     'cat',
  //     'puppy',
  //     'rock',
  //     'burger',
  //     'sand',
  //     'goose',
  //     'justice',
  //     'teacher'
  //   ]

  //   const embeddings = await model.embed(input)

  //   for (let i = 0; i < input.length; i++) {
  //     for (let j = i; j < input.length; j++) {
  //       const wordI = tf.slice(embeddings, [i, 0], [1]);
  //       const wordJ = tf.slice(embeddings, [j, 0], [1]);
  //       const wordITranspose = false;
  //       const wordJTranspose = true;

  //       const score = tf
  //         .matMul(wordI, wordJ, wordITranspose, wordJTranspose)
  //         .dataSync();
  //       console.log(`${input[i]} -- ${input[j]}`, score);

  //     }
  //   }

  // }

  const dummy = [
    userInput,
    'puppy',
    'rock',
    'burger',
    'sand',
    'goose',
    'justice',
    'teacher'
  ]

  return (
    <div className="App">
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <p>input</p>
        <input onChange={handleChange} />
        <button>check</button>
      </form>
      {dummy.map((ele, idx) =>
        <p>{ele} = {((scoresOut[idx] / scoresOut[0]) * 100).toFixed(2)}% match</p>
      )}


    </div>
  );
}

export default App;
