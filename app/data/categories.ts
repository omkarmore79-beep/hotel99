/* ========= TYPES ========= */
export interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string; // Added description field
}

export interface Category {
  id: string;
  name: string;
  caption?: string;
  image?: string;
  dishes: Dish[];
}

/* ========= DATA ========= */
export const categories: Category[] = [
  {
    id: "espresso",
    name: "Espresso",
    caption: "Strong & classic brews",
    image: "/categories/coffee.png",
    dishes: [
      { id: 1, name: "Classic Espresso", price: 120, image: "/dishes/espresso.jpg", description: "Rich and bold single shot of concentrated coffee." },
      { id: 2, name: "Double Shot Espresso", price: 150, image: "/dishes/doubleshot.jpg", description: "A powerful double dose of our signature classic espresso." },
      { id: 3, name: "Americano", price: 140, image: "/dishes/americano.jpg", description: "Espresso shots topped with hot water for a smooth, black coffee." },
      { id: 51, name: "Macchiato", price: 160, image: "/dishes/macchiato.jpg", description: "A bold shot of espresso 'stained' with a small dollop of creamy milk foam." },
      { id: 52, name: "Cortado", price: 170, image: "/dishes/cortado.webp", description: "Equal parts espresso and warm, silky steamed milk to reduce acidity." },
      { id: 53, name: "Affogato", price: 195, image: "/dishes/affogato.jpg", description: "A scoop of premium vanilla bean gelato 'drowned' in a hot shot of espresso." }
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    caption: "Gourmet patties and fresh buns",
    image: "/dishes/burger1.jpg",
    dishes: [
      { id: 4, name: "Classic Veg Burger", price: 215, image: "/dishes/burger1.jpg", description: "Home-made patty, tomato, and caramelized onion." },
      { id: 5, name: "Mexican Fiesta Burger", price: 230, image: "/dishes/burger2.jpg", description: "Home-made patty, tomato salsa, and caramelized onion." },
      { id: 6, name: "Spicy Paneer Burger", price: 240, image: "/dishes/burger3.jpg", description: "Harissa marinated patty-paneer and cocktail sauce." },
      { id: 7, name: "Jalapeno & Pepper Burger", price: 215, image: "/dishes/burher4.jpg", description: "Home-made patty made with jalapeno & three peppers and tomato salsa." }, 
      { id: 8, name: "Chicken Tikka Burger", price: 275, image: "/dishes/burger5.jpg", description: "Tandoori chicken tikka patty, onion, and mint mayo." },
      { id: 9, name: "BBQ Chicken Burger", price: 285, image: "/dishes/burger6.jpg", description: "BBQ chicken patty, caramelized onion, and cocktail sauce." }
      
    ]
  },
  {
    id: "matcha",
    name: "Matcha",
    caption: "Premium green tea infusions",
    image: "/dishes/matcha1.jpg",
    dishes: [
      { id: 11, name: "Iced Matcha Latte", price: 270, image: "/dishes/matcha1.jpg", description: "Chilled premium matcha whisked with cold milk and ice." },
      { id: 12, name: "Hot Matcha", price: 270, image: "/dishes/matcha2.jpg", description: "Warm and comforting whisked ceremonial grade matcha latte." },
      { id: 13, name: "Kokonut Matcha Cloud", price: 305, image: "/dishes/match3.jpg", description: "Tropical coconut flavored matcha with a light, airy foam." },
      { id: 14, name: "Tangerine Matcha", price: 320, image: "/dishes/matcha4.jpg", description: "A refreshing citrus twist of tangerine mixed with matcha." },
      { id: 15, name: "Minty Matcha Mojito", price: 330, image: "/dishes/matcha5.jpg", description: "Cool mint leaves blended with matcha for a mojito-inspired drink." },
      { id: 16, name: "Berry Matcha Smoothie", price: 340, image: "/dishes/matcha6.jpg", description: "A vibrant blend of mixed berries and matcha for a fruity treat." }
    ]
  },
  {
    id: "pasta",
    name: "Pasta La Vista",
    caption: "Authentic Italian flavors",
    image: "/categories/alfredopasta.webp",
    dishes: [
      { id: 17, name: "Aglio E Olio", price: 355, image: "/dishes/pasta1.jpg", description: "Olive oil, garlic, chilli, parmesan cheese, cherry tomatoes, black olives, and garlic butter." },
      { id: 18, name: "Alfredo Sauce Pasta", price: 330, image: "/dishes/pasta2.jpg", description: "Fresh cream, garlic, fresh herbs, olive oil, and parmesan cheese." },
      { id: 19, name: "Marinara Sauce Pasta", price: 345, image: "/dishes/pasta3.jpg", description: "Homemade fresh tomato sauce, garlic, olive oil, and parmesan cheese." },
      { id: 20, name: "Pink Sauce Pasta", price: 355, image: "/dishes/pasta4.jpg", description: "Fresh cream, tomato sauce, garlic, and parmesan cheese." },
      { id: 21, name: "Pesto Pasta", price: 365, image: "/dishes/pasta5.jpg", description: "Homemade basil pesto, garlic, olive oil, cherry tomatoes, and parmesan cheese." },
      { id: 22, name: "Arrabbiata Pasta", price: 355, image: "/dishes/pasta6.jpg", description: "Spicy tomato sauce, garlic, olive oil, red chilli flakes, and parmesan cheese." }
    ]
  },
  {
    id: "sandwiches",
    name: "The Artisanal Affair",
    caption: "Handcrafted artisanal sandwiches",
    image: "/dishes/sand1.jpg",
    dishes: [
      { id: 24, name: "California Sandwich", price: 225, image: "/dishes/sand1.jpg", description: "Zucchini, three bell peppers, baby corn, spinach pesto, carrot, and cheese." },
      { id: 25, name: "Spinach & Corn Sandwich", price: 215, image: "/dishes/sand2.jpg", description: "Spinach, corn, mushrooms, onion, garlic, and cheese." },
      { id: 26, name: "Tandoori Temptation", price: 235, image: "/dishes/sand3.jpg", description: "Tandoori paneer, onion, bell peppers, and cheese." },
      { id: 27, name: "Paneer Pesto Sandwich", price: 230, image: "/dishes/sand4.jpg", description: "Homemade pesto, paneer, roasted tomatoes, and mozzarella." },
      { id: 28, name: "Chicken Harissa Sandwich", price: 270, image: "/dishes/sand5.jpg", description: "In-house harissa paste, iceberg, and cocktail sauce." },
      { id: 29, name: "Chicken Seekhwich", price: 275, image: "/dishes/sand6.jpg", description: "Cilantro mayo, chicken seekh, and mozzarella." }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    caption: "Freshly baked artisanal pizzas",
    image: "/dishes/pizza1.jpg",
    dishes: [
      { id: 34, name: "Margherita Pizza", price: 320, image: "/dishes/pizza1.jpg", description: "Basil, cherry tomatoes, and mozzarella." },
      { id: 35, name: "Veg Nepolitana Pizza", price: 355, image: "/dishes/pizza2.jpg", description: "Basil, three bell-peppers, olives, sundried tomatoes, mozzarella, and spicy paprika." },
      { id: 36, name: "Sicilian Pizza", price: 355, image: "/dishes/pizza3.jpg", description: "Mushrooms, garlic, pickled onion, sundried tomatoes, mozzarella, and chilli oil." },
      { id: 37, name: "Paneer Heatwave Pizza", price: 370, image: "/dishes/pizza4.jpg", description: "Red paprika, paneer, bell-pepper, onion, and mozzarella." },
      { id: 38, name: "Chicken Pepperoni Pizza", price: 420, image: "/dishes/pizza5.webp", description: "Basil, chicken pepperoni, onion, and mozzarella." },
      { id: 39, name: "Overloaded Chicken Tikka Pizza", price: 445, image: "/dishes/pizza6.webp", description: "Basil, bell-peppers, chicken tikka, and mozzarella." }
    ]
  },
  {
    id: "the-yolk-folk",
    name: "The Yolk Folk",
    caption: "Egg-ceptional breakfast and brunch",
    image: "/dishes/egg1.jpg",
    dishes: [
      { id: 42, name: "Sunny Side Up", price: 140, image: "/dishes/egg1.jpg", description: "Perfectly fried eggs with a runny yolk." },
      { id: 43, name: "Masala Omelette / Bhurji", price: 165, image: "/dishes/egg2.jpg", description: "Classic spiced Indian style omelette or scrambled eggs." },
      { id: 44, name: "Turkish Egg", price: 205, image: "/dishes/egg3.jpg", description: "Two sunny side ups, garlic yogurt, chilli oil, and zaatar powder." },
      { id: 45, name: "Eggs Benedict", price: 240, image: "/dishes/egg4.jpg", description: "Two poached eggs, wilted spinach, hollandaise sauce, and chicken salami." },
      { id: 46, name: "Egg Shakshuka", price: 220, image: "/dishes/egg5.jpg", description: "Two eggs, olive oil, three bell peppers, and homemade tomato sauce." },
      { id: 47, name: "Sun-Kissed Avocado Toast", price: 320, image: "/dishes/egg6.jpg", description: "Guacamole, olive oil, parmesan cheese, sunny side up egg, and honey mustard." }
    ]
  },
  {
    id: "the-garden-gang",
    name: "The Garden Gang",
    caption: "Fresh and healthy greens",
    image: "/dishes/salad1.jpg",
    dishes: [
      { id: 48, name: "Caeser Salad", price: 225, image: "/dishes/salad1.jpg", description: "Iceberg, broccoli, cherry tomato, croutons, and parmesan." },
      { id: 49, name: "High Protein Salad", price: 220, image: "/dishes/salad2.jpg", description: "Paneer 100g, broccoli, bell-pepper, cherry tomatoes, corn, olive oil, and black salt." },
      { id: 50, name: "Avocado Salad", price: 315, image: "/dishes/salad3.jpg", description: "Avocado, iceberg, corn, black olives, cherry tomatoes, walnut dressing, and onion." },
      { id: 51, name: "Roasted Chicken Salad", price: 270, image: "/dishes/salad4.jpg", description: "Roasted chicken 100g, iceberg, cucumber, tomatoes, burnt garlic, black olives, and chilli oil." },
      { id: 52, name: "chciken salad", price: 270, image: "/dishes/salad5.jpg", description: "Roasted chicken 100g, iceberg, cucumber, tomatoes, burnt garlic, black olives, and chilli oil." },
      { id: 53, name: "Apple & Pear Salad", price: 255, image: "/dishes/salad6.webp", description: "Apple, pear, walnut, forest honey, iceberg, parsley, and lemon." }
      
    ]
  }
];