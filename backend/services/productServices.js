import pool from '../config/db.js';
const products = [
    { id: 1, name: "Keyboard", price: 50, stock:12},
    {id: 2, name: "Mouse", price: 25, stock: 30},
    {id: 3, name: "Monitor", price: 199.99, stock: 5},
]


async function getAllProducts(){
    const [rows] = await pool.query('SELECT * FROM products WHERE is_active = ?',[true]);
    console.log(rows);
    return rows;
}


async function getProductWithIDService(id){
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ? and is_active = ?',[id,true]);
    return rows[0];
}
export {getAllProducts, getProductWithIDService};