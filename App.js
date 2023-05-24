const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = 3;

    if (number > 0.5) {
      console.log("promise resolved at promise 1", number);
      resolve(number);
    } else {
      reject(
        new Error(`The number is less than 0.5 :${number} from first Promise`)
      );
    }
  }, 6000);
});

prom
  .then(
    (number) => {
      if (number > 0.9) {
        console.log("promise resolved at promise 2", number * number);
        return number * number;
      } else {
        throw new Error(`number: ${number} is less than 0.9 from promise 2`);
      }
    }

    // (error) => {
    //   console.log(error);
    //   return 0.5 * 0.5;
    // }
  )
  .then(
    (number) => {
      if (number > 10) {
        console.log("promise resolved at promise 3", number);
      } else {
        throw new Error(`number ${number} is less than 10 from third promise`);
      }
    }

    // (error) => {
    //   console.log(error, "from promise 2");
    //   console.log(0.6 * 0.6);
    // }
  )
  .catch((error) => console.log(error));
