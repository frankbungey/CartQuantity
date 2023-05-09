let cartQuantity = 0;

 const buttonOne = document.querySelector(".btn1").addEventListener("click",
 function(){
    console.log(`CartQuantity: ${cartQuantity}`)
 })

 const buttonTwo = document.querySelector(".btn2").addEventListener("click",
 function(){
    cartQuantity +=  1;
    console.log(`CartQuantity: ${cartQuantity}`)
 })

 const buttonThree = document.querySelector(".btn3").addEventListener("click",
 function(){
    cartQuantity += 2;
    console.log(`CartQuantity: ${cartQuantity}`)
 })

 const buttonFour = document.querySelector(".btn4").addEventListener("click",
 function(){
    cartQuantity = 0;
    console.log('cart was reset.');
    console.log(`cartQuantity.${cartQuantity}`)
 })