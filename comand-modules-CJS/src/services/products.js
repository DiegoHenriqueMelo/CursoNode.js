// fica todas as  funções que lidam com produto

async function getFullName(codeId, productName) {
  console.log(`Código: ${codeId} --- Produto: ${productName}`);
}

async function getProductLabel(productName) {
    console.log(`Produto: ${productName}`)
}

module.exports = {
  getFullName,
  getProductLabel,
};

