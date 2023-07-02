function fixCartBug(cart){
    const fixedCart=cart.map(quanitiy=>quanitiy*2);
    return fixedCart;
}
const cart=[1,2,3,4,5];
const fixedCart=fixCartBug(cart);
console.log('Fixed cart: ',fixedCart);

// Output : Fixed cart:  [ 2, 4, 6, 8, 10 ]