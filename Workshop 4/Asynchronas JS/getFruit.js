function getFruit(fruitName) {
    return new Promise((resolve, reject) => {
      if (fruitName === 'watermelon') {
        setTimeout(() => {
          reject(new Error("Sorry, we're out of watermelons"));
        }, 2000);
      } else {
        setTimeout(() => {
          resolve(`Here is your ${fruitName}`);
        }, 1000);
      }
    });
  }

getFruit('apple')
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

getFruit('watermelon')
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
