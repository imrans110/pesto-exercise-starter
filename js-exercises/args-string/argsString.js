// const argsString = (message, args) => {
//   let variablesArray = args;

//   variablesArray.map(variable => {
//     message = message.replace("{}", variable);
//   });

//   return message;
// };

const argsString = (message, args) => {
  let interpolatedString = "";
  let argsIndex = 0;
  let argsQuantity = args.length;
  for (let i = 0; i < message.length; i++) {
    if (message[i] === "{" && message[i + 1] === "}") {
      if (argsQuantity) {
        interpolatedString += args[argsIndex];
        argsIndex += 1;
        argsQuantity -= 1;
        i += 1;
      }
    } else {
      interpolatedString += message[i];
    }
  }
  return interpolatedString;
};

export { argsString };
