const argsString = (message, args) => {
  let variablesArray = args;

  variablesArray.map(variable => {
    message = message.replace("{}", variable);
  });

  return message;
};

export { argsString };
