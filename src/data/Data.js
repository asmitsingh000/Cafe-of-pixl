export const CATEGORIZE = [
    { id: 'cakes', name: 'Cakes', color: '#C9611F', desc: 'Freshly baked slices of happiness' },
    { id: 'pancakes', name: 'Pancakes', color: '#D99A32', desc: 'Fluffy pancakes with delicious toppings' },
    { id: 'waffles', name: 'Waffles', color: '#B87935', desc: 'Golden waffles, crispy on the outside' },
    { id: 'pastries', name: 'Pastries', color: '#C47B8A', desc: 'Delicate pastries baked to perfection' },
    { id: 'donuts', name: 'Donuts', color: '#E58B9B', desc: 'Sweet rings with delightful toppings' },
    { id: 'cookies', name: 'Cookies', color: '#95613D', desc: 'Freshly baked crunchy treats' },
    { id: 'ice-cream', name: 'Ice Cream', color: '#8C9ED6', desc: 'Creamy scoops of frozen delight' },
    { id: 'coffee', name: 'Hot Coffee', color: '#6F422D', desc: 'Warm, cold and freshly brewed refreshing coffee' },
    { id: 'tea', name: 'Tea', color: '#789568', desc: 'Comforting cups of freshly brewed tea' },
    { id: 'milkshakes', name: 'Milkshakes', color: '#B77AC8', desc: 'Thick, creamy and delicious shakes' },
    { id: 'fastfoods', name: 'Fast Food', color: '#C77A36', desc: 'Here you go with some delicious fast foods' },
    { id: 'pasta', name: 'Pasta', color: '#D18B52', desc: 'Delicious italia pasta tossed in rich sauces' },
    { id: 'chines', name: 'Chinese', color: '#D18B52', desc: 'Delicious italia pasta tossed in rich sauces' }
];
const make = (category, list) =>
    list.map(([file, name, price]) => ({
        id: file, category, name, price, img: `/photos/${file}.jpg`,
    }))

export const menu = [
    ...make('cakes', [
        ['chocolate-cake', 'Chocolate Cake', 120],
        ['red-velvet-cake', 'Red Velvet Cake', 140],
        ['black-forest-cake', 'Black Forest Cake', 130],
        ['cheesecake', 'Cheesecake', 160],
        ['pineapple-cake', 'Pineapple Cake', 110],
    ]),
    ...make('pancakes', [
        ['classic-pancakes', 'Classic Pancakes', 150],
        ['chocolate-pancakes', 'Chocolate Pancakes', 170],
        ['berry-pancakes', 'Berry Pancakes', 180],
        ['banana-pancakes', 'Banana Pancakes', 160],
        ['honey-pancakes', 'Honey Pancakes', 160],
    ]),
    ...make('waffles', [
        ['classic-waffle', 'Classic Waffle', 140],
        ['chocolate-waffle', 'Chocolate Waffle', 160],
        ['strawberry-waffle', 'Strawberry Waffle', 170],
        ['ice-cream-waffle', 'Ice Cream Waffle', 190],
        ['nutella-waffle', 'Nutella Waffle', 180],
    ]),
    ...make('pastries', [
        ['croissant', 'Croissant', 90],
        ['chocolate-croissant', 'Chocolate Croissant', 110],
        ['danish-pastry', 'Danish Pastry', 100],
        ['cinnamon-roll', 'Cinnamon Roll', 100],
        ['puff-pastry', 'Puff Pastry', 80],
    ]),
    ...make('donuts', [
        ['chocolate-donut', 'Chocolate Donut', 70],
        ['strawberry-donut', 'Strawberry Donut', 70],
        ['glazed-donut', 'Glazed Donut', 60],
        ['sprinkle-donut', 'Sprinkle Donut', 70],
        ['boston-cream-donut', 'Boston Cream Donut', 80],
    ]),
    ...make('cookies', [
        ['choco-chip-cookie', 'Choco Chip Cookie', 60],
        ['oatmeal-cookie', 'Oatmeal Cookie', 50],
        ['double-chocolate-cookie', 'Double Chocolate Cookie', 70],
        ['butter-cookie', 'Butter Cookie', 50],
        ['peanut-butter-cookie', 'Peanut Butter Cookie', 60],
    ]),
    ...make('ice-cream', [
        ['vanilla-ice-cream', 'Vanilla Scoop', 80],
        ['chocolate-ice-cream', 'Chocolate Scoop', 90],
        ['strawberry-ice-cream', 'Strawberry Scoop', 90],
        ['butterscotch-ice-cream', 'Butterscotch Scoop', 90],
        ['brownie-sundae', 'Brownie Sundae', 180],
    ]),
    ...make('coffee', [
        ['espresso', 'Espresso', 100],
        ['americano', 'Americano', 110],
        ['cappuccino', 'Cappuccino', 130],
        ['latte', 'Latte', 140],
        ['cold-coffee', 'Cold Coffee', 150],
    ]),
    ...make('tea', [
        ['milk-tea', 'Milk Tea', 40],
        ['black-tea', 'Black Tea', 40],
        ['green-tea', 'Green Tea', 60],
        ['masala-tea', 'Masala Tea', 50],
        ['lemon-tea', 'Lemon Tea', 50],
    ]),
    ...make('milkshakes', [
        ['chocolate-shake', 'Chocolate Shake', 150],
        ['vanilla-shake', 'Vanilla Shake', 140],
        ['strawberry-shake', 'Strawberry Shake', 150],
        ['oreo-shake', 'Oreo Shake', 170],
        ['banana-shake', 'Banana Shake', 130],
    ]),
    ...make('fastfoods', [
        ['veg-burger', 'Veg Burger', 150],
        ['pizza', 'Cheese Pizza', 220],
        ['chicken-burger', 'Chicken Burger', 200],
        ['cheese-burger', 'Cheese Burger', 190],
        ['french-fries', 'French Fries', 100],
        ['chicken-wings', 'Chicken Wings', 220],
    ]),
    ...make('pasta', [
        ['white-sauce-pasta', 'White Sauce Pasta', 220],
        ['red-sauce-pasta', 'Red Sauce Pasta', 210],
        ['pink-sauce-pasta', 'Pink Sauce Pasta', 230],
        ['mac-and-cheese', 'Mac and Cheese', 240],
        ['chicken-alfredo', 'Chicken Alfredo', 280],
    ]),
    ...make('Chainese', [
        ['white-sauce-pasta', 'White Sauce Pasta', 220],
        ['red-sauce-pasta', 'Red Sauce Pasta', 210],
        ['pink-sauce-pasta', 'Pink Sauce Pasta', 230],
        ['mac-and-cheese', 'Mac and Cheese', 240],
        ['chicken-alfredo', 'Chicken Alfredo', 280],
    ]),
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