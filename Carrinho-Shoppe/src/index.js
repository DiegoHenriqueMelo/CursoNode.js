import createItem from "./services/iten.js";
import * as cartService from "./services/cart.js";

const myCart = [];

const myWhishList = [];

console.log("Welcome to the your Shopping Cart");

const iten1 = await createItem("Mouse Gamer", 9, 1);
const iten2 = await createItem("Mikey Mouse", 12, 5);

await cartService.addIten(myCart, iten1);
await cartService.addIten(myCart, iten2);

await cartService.displayCart(myCart);

await cartService.removeItem(myCart, 1)

await cartService.calculateTotal(myCart);
