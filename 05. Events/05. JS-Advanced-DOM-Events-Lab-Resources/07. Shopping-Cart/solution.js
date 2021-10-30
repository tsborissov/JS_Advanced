function solve() {
   const shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   shoppingCart.addEventListener('click', onClick);
   const checkoutBtn = document.getElementsByClassName('checkout')[0];
   checkoutBtn.addEventListener('click', checkout);
   
   const output = document.getElementsByTagName('textarea')[0];
   output.value = '';
   const cart = [];

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            name,
            price
         });

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function checkout() {
      shoppingCart.removeEventListener('click', onClick);
      checkoutBtn.removeEventListener('click', checkout);

      let totalPrice = 0;
      const products = [];

      for (const product of cart) {
         totalPrice += product.price;
         if (!products.includes(product.name)) {
            products.push(product.name);
         }
      }

      output.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;
   }
}