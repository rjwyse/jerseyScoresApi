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
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    { name: 'Detroit Red Wings', emoji: L<img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Detroit_Red_Wings_logo.svg/1024px-Detroit_Red_Wings_logo.svg.png"/>, category: categories[0], price: 209.99 },
    {name: 'Boston Bruins', emoji: '🥪', category: categories[0], price: 209.99},
    {name: 'Toronto Maple Leafs', emoji: '🌭', category: categories[0], price: 209.99},
    {name: 'Tampa Bay Lightning', emoji: '🦀', category: categories[0], price: 209.99},
    {name: 'Montreal Canadiens', emoji: '🍤', category: categories[0], price: 209.99},
    {name: 'Florida Panthers', emoji: '🦞', category: categories[0], price: 209.99},
    {name: 'Ottawa Senetors', emoji: '🌮', category: categories[0], price: 209.99},
    {name: 'Buffalo Sabres', emoji: '🌯', category: categories[0], price: 209.99},
    {name: 'New York Rangers', emoji: '🍕', category: categories[1], price: 209.99},
    {name: 'New Jersey Devils', emoji: '🍕', category: categories[1], price: 209.99},
    {name: 'Carolina Hurricanes', emoji: '🍕', category: categories[1], price: 209.99},
    {name: 'New York Islanders', emoji: '🍕', category: categories[1], price: 209.99},
    {name: 'Philadelphia Flyers', emoji: '🍝', category: categories[1], price: 209.99},
    {name: 'Columbus Blue Jackets', emoji: '🍞', category: categories[1], price: 209.99},
    {name: 'Washington Capitals', emoji: '🍟', category: categories[1], price: 209.99},
    {name: 'Pittsburgh Penguins', emoji: '🥗', category: categories[1], price: 209.99},
    {name: 'Colorado Avalanche', emoji: '🍨', category: categories[2], price: 209.99},
    {name: 'Dallas Stars', emoji: '🧁', category: categories[2], price: 209.99},
    {name: 'Winnipeg Jets', emoji: '🍮', category: categories[2], price: 209.99},
    {name: 'Nashville Predators', emoji: '🍰', category: categories[2], price: 209.99},
    {name: 'Minnesota Wild', emoji: '🥛', category: categories[2], price: 209.99},
    {name: 'St Louis Blues', emoji: '☕', category: categories[2], price: 209.99},
    {name: 'Arizona Coyotes', emoji: '🍹', category: categories[2], price: 209.99},
    {name: 'Chicago Blackhawks', emoji: '🍺', category: categories[2], price: 209.99},
    {name: 'Vegas Golden Knights', emoji: '🍷', category: categories[3], price: 209.99},
    {name: 'Vancouver Canucks', emoji: '🍷', category: categories[3], price: 209.99},
    {name: 'Los Angelas Kings', emoji: '🍷', category: categories[3], price: 209.99},
    {name: 'Anaheim Ducks', emoji: '🍷', category: categories[3], price: 209.99},
    {name: 'Seattle Kraken', emoji: '🍷', category: categories[3], price: 209.99},
    {name: 'Calgary Flames', emoji: '🍷', category: categories[3], price: 209.99},
    {name: 'Edmonton Oilers', emoji: '🍷', category: categories[3], price: 209.99},
    {name: 'San Jose Sharks', emoji: '🍷', category: categories[3], price: 209.99},
  ]);

  console.log(items)

  process.exit();

})();
