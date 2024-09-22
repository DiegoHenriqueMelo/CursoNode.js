async function addIten(userCart, iten) {
  userCart.push(iten);
}

async function deleteIten(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, index) {
  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  }
  console.log(`\n❌ Você removeu o iten ${index} do Carrinho`)
  
}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, iten) => total + iten.subtotal(), 0);

  console.log(`\n🎁 Total da Compra: ${result}`)
}

async function displayCart(userCart) {
  console.log("\nCart List:\n");
  userCart.forEach((iten, index) => {
    console.log(
      `${index + 1}. ${iten.name} - R$${iten.price} | ${
        iten.quantity
      }x | Subtotal: R$${iten.subtotal()} `
    );
  });
}

export { addIten, calculateTotal, deleteIten, removeItem, displayCart };
