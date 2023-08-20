require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([

    {name: 'Upcycled Art', sortOrder: 10},
    {name: 'Paintings', sortOrder: 20},
    {name: 'Digital Art', sortOrder: 30},
    {name: 'Vintage Art', sortOrder: 40},
    {name: 'Artistic Art', sortOrder: 50},
    {name: 'Oil Painting', sortOrder: 60},
   
  ]);

  await Item.deleteMany({});
  const items = await Item.create([

    {name: 'Frequencies Art',imageUrl:'/img/upcycled-art-frequencies.png', description: 'A frequency art creation assembled from dry cleaning tags, wax, resin, and dye.', category: categories[0], price: 1200},
    {name: 'Shaved Red Art', imageUrl: '/img/upcycled-art-red.png', description :'This artwork is composed of encaustic, dye, and a custom frame.', category: categories[0], price: 700},
    {name: 'Bullet Casings', imageUrl: '/img/upcycled-bullet.png', description: '"Braille Bullets" upcycled art piece, using bullet casings and mixed media to convey urgent messages of distress and conflict.', category: categories[0], price: 2000},
    {name: 'Urban Tapestry', imageUrl: '/img/upcycled-art-cigarbutt.png', description: 'Artwork created using cigarette butts dipped in street paint and intricately sewn onto canvas, merging urban materials with artistic expression.' ,category: categories[0], price: 2000},
    {name: 'Cat Painting', imageUrl: '/img/painting-cat.png', description: 'A vibrant and lifelike cat painting capturing feline grace and character.', category: categories[1], price: 1500},
    {name: 'Horse Painting', imageUrl: '/img/painting-horse-man.png', description: 'An evocative painting depicting the fusion of human and equine forms.', category: categories[1], price: 4200},
    {name: 'Mountain Painting', imageUrl: '/img/painting-mountain.png', description: 'A breathtaking mountain painting capturing the majesty of nature.', category: categories[1], price: 4500},
    {name: 'Museum Painting', imageUrl: '/img/painting-museum.png', description: 'An exquisite museum painting showcasing history and artistry in vibrant strokes.', category: categories[1], price: 5500},
    {name: 'Couple Painting', imageUrl: '/img/painting-pair.png', description: 'A tender and expressive painting capturing the bond between two souls.', category: categories[1], price: 4500},
    {name: 'Sky Glowing', imageUrl: '/img/digessel.pngital-art-glowing.png', description: 'A digital artwork portraying a radiant and enchanting glowing sky.', category: categories[2], price: 950},
    {name: 'Lamp', imageUrl: '/img/digital-lamp-art.png', description: 'A digital artwork showcasing the radiant glow and intricate details of a lamp.', category: categories[2], price: 2950},
    {name: 'Railway Track', imageUrl: '/img/digital-art-railway.png', description: 'A digital artwork capturing the perspective of a railway track disappearing into the horizon.', category: categories[2], price: 3950},
    {name: 'Ship Art', imageUrl: '/img/shipart.png',description: 'Ship Art captures maritime beauty through diverse visual forms, honoring historical and modern vessels while symbolizing our deep connection to the seas.',category: categories[2], price: 2700},
    {name: 'Leaf', imageUrl: '/img/digital-art-leaf.png', description: 'A digital artwork delicately capturing the intricate details of a single leaf.', category: categories[2], price: 1900},
    {name: 'BMW Bike', imageUrl: '/img/vintage-art-bmw.png', description: 'A vintage-style artwork showcasing the timeless allure of a BMW bike.', category: categories[3], price: 2000},
    {name: 'Camera Lens', imageUrl: '/img/vintage-art-lens.png', description: 'Vintage art depicting the intricate details of a classic camera lens.', category: categories[3], price: 3000},
    {name: 'Tyepwriter', imageUrl: '/img/vintage-art-typewriter.png', description: 'Vintage art capturing the nostalgic essence of a typewriter in intricate detail.', category: categories[3], price: 3500},
    {name: 'Telephone', imageUrl: '/img/vintage-art-phone.png', description: 'Vintage art evoking nostalgia with a meticulously detailed depiction of a telephone from yesteryears.', category: categories[3], price: 1500},
    {name: 'Blue', imageUrl: '/img/artistic-art-blue.png', description: 'Artistic art embracing the calming and expressive shades of blue in a mesmerizing composition.', category: categories[4], price: 2200},
    {name: 'Golden', imageUrl: '/img/artistic-or-art.png', description: 'Artistic creation featuring a captivating interplay of golden flares, adding a touch of enchantment to the canvas.', category: categories[4], price: 2000},
    {name: 'Pink', imageUrl: '/img/artistic-art-pink.png', description: 'A captivating pink smoke background, with swirling shades of delicate to vibrant pink hues, and imaginative atmosphere', category: categories[4], price: 3500},
    {name: 'Beige', imageUrl: '/img/artistic-beige.png', description: 'An elegant beige smoke background, blending subtle shades with a touch of sophistication for versatile design applications.', category: categories[4], price: 1500},
    {name: 'Reflection', imageUrl: '/img/oilpainting-reflection.png', description: 'An introspective oil painting evoking the beauty of reflection in tranquil waters.', category: categories[5], price: 2250},
    {name: 'Tree and Dark Sky', imageUrl: '/img/oilpainting-jbeerstraten.png', description: 'A captivating pink smoke background, with swirling shades of delicate to vibrant pink hues,and imaginative atmosphere.', category: categories[5], price: 2100},
    {name: 'Snow and Tree', imageUrl: '/img/oilpainting-snow-tree.png', description: 'An oil painting illustrating the serene beauty of a snow-covered tree in a winter landscape.', category: categories[5], price: 3450},
    {name: 'Sailing Ship', imageUrl: '/img/oilpainting-sailing-ship.png', description: 'An artistic portrayal of a majestic sailing ship navigating the open sea.', category: categories[5], price: 3950},
    
  ]);

  console.log(items)

  process.exit();

})();