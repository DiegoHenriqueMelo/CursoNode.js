exports.connectToDatabase = (dataName) => {
  return `Conectando ao ${dataName}`;
};

exports.desconnectDataBase = (dataName) => {
  return `Desconectando de ${dataName}`;
};

exports.teste = (a, b) => {
  return (a * b) / (b - a);
};

