//Object property shorthand

const name = 'Ashley'
const userAge = 17

const user = {
    name, //shorthand for name: name
    age : userAge,
    location : 'California'
}

console.log(user)

//Object destructuring

const product = {
    name : 'notebook',
    price : 10,
    salePrice : undefined,
    stock : 50
}

// const name = product.name
// const stock = product.stock

// const {name : pName, stock, rating, sold = 10} = product
 //creating variables and renaming name to pName
// console.log(rating) 
//rating will be undefined
// console.log(pName)
// console.log(stock)
// console.log(sold)

const transaction = (type, {name, price}) =>{ //destructing the object here

    console.log(type, name, price)

}

transaction('order', product)