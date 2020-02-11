function solve() {
   let buttons = document.getElementsByClassName("add-product");
   let checkout = document.getElementsByClassName("checkout")[0];
   let textarea = document.getElementsByTagName("textarea")[0];
   let list = [];
   const shoppingCart = {
      bread: 0,
      milk: 0,
      tomatoes: 0,
      totalPrice: 0
   };

   function button1() {
      shoppingCart.bread += 1;
      shoppingCart.totalPrice += 0.8;
      textarea.value += "Added Bread for 0.80 to the cart.\n";
      if (!list.includes("Bread")) {
         list.push("Bread");
      }
   }

   function button2() {
      shoppingCart.milk += 1;
      shoppingCart.totalPrice += 1.09;
      textarea.value += "Added Milk for 1.09 to the cart.\n";
      if (!list.includes("Milk")) {
         list.push("Milk");
      }
   }
   
   function button3() {
      shoppingCart.tomatoes += 1;
      shoppingCart.totalPrice += 0.99;
      textarea.value += "Added Tomatoes for 0.99 to the cart.\n";
      if (!list.includes("Tomatoes")) {
         list.push("Tomatoes");
      }
   }

   function checkoutBttn() {
      textarea.value += `You bought ${list.join(", ")} for ${shoppingCart.totalPrice.toFixed(2)}.`;
      buttons[0].removeEventListener('click', button1);
      buttons[1].removeEventListener('click', button2);
      buttons[2].removeEventListener('click', button3);
      checkout.removeEventListener('click', checkoutBttn);
   }
   
   buttons[0].addEventListener("click", button1);

   buttons[1].addEventListener("click", button2);

   buttons[2].addEventListener("click", button3);

   checkout.addEventListener("click", checkoutBttn);
}