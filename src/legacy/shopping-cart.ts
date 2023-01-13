type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShopingCart {
  private readonly _items: CartItem[] = [];
  private orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty) {
      console.log('Seu carrinho está vazio');
      return;
    }

    console.log('Seu pedido foi recebido.');
    this.orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  get isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

const cart = new ShopingCart();
cart.addItem({ name: 'Camiseta', price: 49.9 });
