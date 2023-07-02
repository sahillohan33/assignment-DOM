// Sample shoppingcast with duplicates
const shoppingCart=['item1','item2','item1','item3','item4','item5','item2','item3'];
//Remove Duplicates items from the shopping cart
const unqireCart=shoppingCart.filter((item,index)=>{
    return shoppingCart.indexOf(item)==index;
})
console.log('Updated shopping cart: ',unqireCart);

// Output : Updated shopping cart:  [ 'item1', 'item2', 'item3', 'item4', 'item5' ]