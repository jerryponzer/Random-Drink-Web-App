var drinks = [
  'espresso', 'macchiato', 'cortado', 'cappuccino', 'latte', 'mocha', 'americano',
  'drip', 'toddy', 'manual brew', 'spirit tea', 'chai', 'cocoa', 'house soda',
  'iced latte', 'iced mocha', 'iced americano', 'flash iced coffee', 'iced tea',
  'iced chai', 'seasonal latte', 'iced seasonal latte'
]

function newDrink() {
  var randomNumber = Math.floor(Math.random() * (drinks.length));
  document.getElementById('drinkDisplay').innerHTML = drinks[randomNumber];
}
