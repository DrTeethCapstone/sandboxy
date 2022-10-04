const tf = require('@tensorflow/tfjs-core');
// // npm i @tensorflow-models/universal-sentence-encoder
require('@tensorflow/tfjs'); 
const use = require('@tensorflow-models/universal-sentence-encoder');

const init = async (words) => {
  const model = await use.load();
  const embeddings = await model.embed(words);
  console.log(embeddings)

  for (let i = 0; i < words.length; i++) {
    for (let j = i; j < words.length; j++) {
      const wordI = tf.slice(embeddings, [i, 0], [1]);
      const wordJ = tf.slice(embeddings, [j, 0], [1]);
      const wordITranspose = false;
      const wordJTranspose = true;

      const score = tf
        .matMul(wordI, wordJ, wordITranspose, wordJTranspose)
        .dataSync();
      console.log(`${words[i]} -- ${words[j]}`, score);
    }
  }
};

// const words = [
//       'Cat',
//       'Dog',
//     ];

const words = [
'cat',
'lion',
'computer',
'phone',
'dog',
'tiger',
'mouse',
'keyboard',
'laptop'
]

// const words = ['sand', 'puppy', 'rock', 'cat']
init(words);