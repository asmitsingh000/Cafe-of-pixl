export const CATEGORIZE = [
    { id: 'cakes', name: 'Cakes', color: '#C9611F', desc: 'Freshly baked slices of happiness' },
    { id: 'pancakes', name: 'Pancakes', color: '#D99A32', desc: 'Fluffy pancakes with delicious toppings' },
    { id: 'waffles', name: 'Waffles', color: '#B87935', desc: 'Golden waffles, crispy on the outside' },
    { id: 'pastries', name: 'Pastries', color: '#C47B8A', desc: 'Delicate pastries baked to perfection' },
    { id: 'donuts', name: 'Donuts', color: '#E58B9B', desc: 'Sweet rings with delightful toppings' },
    { id: 'cookies', name: 'Cookies', color: '#95613D', desc: 'Freshly baked crunchy treats' },
    { id: 'ice-cream', name: 'Ice Cream', color: '#8C9ED6', desc: 'Creamy scoops of frozen delight' },
    { id: 'hot-coffee', name: 'Hot Coffee', color: '#6F422D', desc: 'Warm and freshly brewed coffee' },
    { id: 'cold-coffee', name: 'Cold Coffee', color: '#8B6A50', desc: 'Chilled coffee for refreshing moments' },
    { id: 'tea', name: 'Tea', color: '#789568', desc: 'Comforting cups of freshly brewed tea' },
    { id: 'milkshakes', name: 'Milkshakes', color: '#B77AC8', desc: 'Thick, creamy and delicious shakes' },
    { id: 'smoothies', name: 'Smoothies', color: '#71A88A', desc: 'Fresh fruit blended into goodness' },
    { id: 'burgers', name: 'Burgers', color: '#C77A36', desc: 'Juicy burgers with irresistible fillings' },
    { id: 'pizza', name: 'Pizza', color: '#D65B45', desc: 'Freshly baked pizzas loaded with toppings' },
    { id: 'sandwiches', name: 'Sandwiches', color: '#A4A05C', desc: 'Freshly prepared bites for every craving' },
    { id: 'pasta', name: 'Pasta', color: '#D18B52', desc: 'Delicious pasta tossed in rich sauces' },
    { id: 'fries', name: 'Fries & Sides', color: '#E0B54B', desc: 'Crispy sides to complete your meal' },
    { id: 'breakfast', name: 'Breakfast', color: '#7D9FBB', desc: 'A delicious start to your morning' },
    { id: 'mocktails', name: 'Mocktails', color: '#48A6A0', desc: 'Refreshing blends of fruity flavours' }
];
const make= (category,list) =>{
    list.map(([file,name,price]) =>({
        id: file,category,name,price,img:'/photos/${file}.jpg',
    }))
}

export const menu = [
    ...make('cake',[
        
    ])
]

// export const menu = [
//     { id: 1, name: "Cold Coffee", type: "drinks", price: 120, image: "/photos/cold-coffee.jpg" },
//     { id: 2, name: "Hot Coffee", type: "drinks", price: 130, image: "/photos/hot-coffee.jpg" },
//     { id: 3, name: "Black Coffee", type: "drinks", price: 140, image: "/photos/black-coffee.jpg" },
//     { id: 4, name: "Burger", type: "fast food", price: 150, image: "/photos/burger.jpg" },
//     { id: 5, name: "Pizza", type: "fast food", price: 200, image: "/photos/pizza.jpg" },
//     { id: 6, name: "Pizza", type: "fast food", price: 200, image: "/photos/pizza.jpg" },
//     { id: 7, name: "Pizza", type: "fast food", price: 200, image: "/photos/pizza.jpg" },
//     { id: 8, name: "Pizza", type: "fast food", price: 200, image: "/photos/pizza.jpg" },
//     { id: 9, name: "Pizza", type: "fast food", price: 200, image: "/photos/pizza.jpg" },
//     { id: 10, name: "Pizza", type: "fast food", price: 200, image: "/photos/pizza.jpg" },
//     { id: 11, name: "Pizza", type: "fast food", price: 200, image: "/photos/pizza.jpg" },

// ];