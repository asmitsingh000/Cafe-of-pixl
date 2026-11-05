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
    // { id: 'chines', name: 'Chinese', color: '#D18B52', desc: 'Delicious italia pasta tossed in rich sauces' }
];
const make = (category, list) =>
    list.map(([file, name, price]) => ({
        id: file, category, name, price, img: `/photos/${file}.webp`,
    }))

export const menu = [
    ...make('cakes', [
        ['ChocolateCake', 'Chocolate Cake', 120],
        ['RedVelvetCake', 'Red Velvet Cake', 140],
        ['BlackForestCake', 'Black Forest Cake', 130],
        ['CheeseCake', 'Cheesecake', 160],
        ['PineappleCake', 'Pineapple Cake', 110],
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

    // used ai bellow for writing the names
    ...make('donuts', [
        ['chocolate-donut', 'Chocolate Donut', 70],
        ['Pixel Art Café Treats Sprite Sheet_22', 'Strawberry Donut', 70],
        ['Pixel Art Café Treats Sprite Sheet_23', 'Glazed Donut', 60],
        ['Pixel Art Café Treats Sprite Sheet_24', 'Sprinkle Donut', 70],
        ['Pixel Art Café Treats Sprite Sheet_25', 'Boston Cream Donut', 80],
    ]),
    ...make('cookies', [
        ['Pixel Art Café Treats Sprite Sheet_26', 'Choco Chip Cookie', 60],
        ['Pixel Art Café Treats Sprite Sheet_27', 'Oatmeal Cookie', 50],
        ['Pixel Art Café Treats Sprite Sheet_28', 'Double Chocolate Cookie', 70],
        ['Pixel Art Café Treats Sprite Sheet_29', 'Butter Cookie', 50],
        ['Pixel Art Café Treats Sprite Sheet_30', 'Peanut Butter Cookie', 60],
    ]),
    ...make('ice-cream', [
        ['Pixel Art Café Treats Sprite Sheet_31', 'Vanilla Scoop', 80],
        ['Pixel Art Café Treats Sprite Sheet_32', 'Chocolate Scoop', 90],
        ['Pixel Art Café Treats Sprite Sheet_34', 'Strawberry Scoop', 90],
        ['Pixel Art Café Treats Sprite Sheet_35', 'Butterscotch Scoop', 90],
        ['Pixel Art Café Treats Sprite Sheet_35', 'Brownie Sundae', 180],
    ]),
    ...make('coffee', [
        ['Pixel Art Café Treats Sprite Sheet_39', 'Espresso', 100],
        ['Pixel Art Café Treats Sprite Sheet_41', 'Americano', 110],
        ['Pixel Art Café Treats Sprite Sheet_44', 'Cappuccino', 130],
        ['Pixel Art Café Treats Sprite Sheet_45', 'Latte', 140],
        ['Pixel Art Café Treats Sprite Sheet_48', 'Cold Coffee', 150],
    ]),
    ...make('tea', [
        ['Pixel Art Café Treats Sprite Sheet_33', 'Milk Tea', 40],
        ['Pixel Art Café Treats Sprite Sheet_41', 'Black Tea', 40],
        ['Pixel Art Café Treats Sprite Sheet_36', 'Green Tea', 60],
        ['Pixel Art Café Treats Sprite Sheet_38', 'Masala Tea', 50],
        ['Pixel Art Café Treats Sprite Sheet_40', 'Lemon Tea', 50],
    ]),
    ...make('milkshakes', [
        ['Pixel Art Café Treats Sprite Sheet._1', 'Chocolate Shake', 150],
        ['Pixel Art Café Treats Sprite Sheet_47', 'Vanilla Shake', 140],
        ['Pixel Art Café Treats Sprite Sheet_46', 'Strawberry Shake', 150],
        ['Pixel Art Café Treats Sprite Sheet_49', 'Oreo Shake', 170],
        ['Pixel Art Café Treats Sprite Sheet_50', 'Banana Shake', 130],
    ]),
    ...make('fastfoods', [
        ['Pixel Art Café Treats Sprite Sheet_51', 'Veg Burger', 150],
        ['Pixel Art Café Treats Sprite Sheet_53', 'Chicken Burger', 200],
        ['Pixel Art Café Treats Sprite Sheet_54', 'Cheese Burger', 190],
        ['Pixel Art Café Treats Sprite Sheet_52', 'Cheese Pizza', 220],
        ['Pixel Art Café Treats Sprite Sheet_55', 'French Fries', 100],
        ['Pixel Art Café Treats Sprite Sheet_56', 'Chicken Wings', 220],
    ]),
    ...make('pasta', [
        ['Pixel Art Café Treats Sprite Sheet_57', 'White Sauce Pasta', 220],
        ['Pixel Art Café Treats Sprite Sheet_58', 'Red Sauce Pasta', 210],
        ['Pixel Art Café Treats Sprite Sheet_59', 'Pink Sauce Pasta', 230],
        ['Pixel Art Café Treats Sprite Sheet_60', 'Mac and Cheese', 240],
        ['Pixel Art Café Treats Sprite Sheet_61', 'Chicken Alfredo', 280],
    ]),
]