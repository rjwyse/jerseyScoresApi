require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Atlantic', sortOrder: 10},
    {name: 'Metropolitan', sortOrder: 20},
    {name: 'Central', sortOrder: 30},
    {name: 'Pacific', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Detroit Red Wings', emoji: '🍔', category: categories[0], price: 5.95},
    {name: 'Boston Bruins', emoji: '🥪', category: categories[0], price: 6.95},
    {name: 'Toronto Maple Leafs', emoji: '🌭', category: categories[0], price: 3.95},
    {name: 'Tampa Bay Lightning', emoji: '🦀', category: categories[1], price: 14.95},
    {name: 'Montreal Canadiens', emoji: '🍤', category: categories[1], price: 13.95},
    {name: 'Florida Panthers', emoji: '🦞', category: categories[1], price: 25.95},
    {name: 'Ottawa Senetors', emoji: '🌮', category: categories[2], price: 1.95},
    {name: 'Buffalo Sabres', emoji: '🌯', category: categories[2], price: 4.95},
    {name: 'New York Rangers', emoji: '🍕', category: categories[3], price: 3.95},
    {name: 'Philadelphia Flyers', emoji: '🍝', category: categories[3], price: 7.95},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();
