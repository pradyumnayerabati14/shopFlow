const products = [
    { id: 1, name: "Keyboard", price: 50, stock:12},
    {id: 2, name: "Mouse", price: 25, stock: 30},
    {id: 3, name: "Monitor", price: 199.99, stock: 5},
]


function getAllProducts(){
    const p = products;
    return(p);
}


function getProductWithIDService(id){
    for(let i=0; i<products.length; i++){
        if(products[i].id===Number(id)){
            return(products[i])
        }
    }
    return(false);
}
export {getAllProducts, getProductWithIDService};