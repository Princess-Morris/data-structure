const calculateTotalSalesWithTax =require('./calculate-total-sales')

const pruducts = [
    {name: 'Apple', price: 0.5, quantity: 10},
    {name: 'Banana', price: 0.3, quantity: 20},
    {name: 'Orange', price: 0.6, quantity: 15}
]

const result = calculateTotalSalesWithTax(pruducts, 8)

console.log(result)