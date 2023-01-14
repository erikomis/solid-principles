import { Messaging } from './service/messaging';
import { Order } from './entities/order';
import { Persistency } from './service/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const cart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);
cart.addItem(new Product('Camiseta', 49.9));
cart.addItem(new Product('Caderno', 9.9));
cart.addItem(new Product('Lápis', 1.59));

console.log(cart.items);
console.log(cart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
