const recipes = [
  {
    name: "Tomato Omelette",
    ingredients: ["egg", "tomato", "salt", "pepper"],
    image: "IMG_20250710_214451.jpg",
    steps: [
      "Crack 2 eggs into a mixing bowl.",
      "Finely chop 1 tomato and add it to the eggs.",
      "Add 1/4 tsp salt and 1/4 tsp pepper, and whisk until well combined.",
      "Heat 1 tsp oil in a nonstick pan over medium heat.",
      "Pour the egg mixture into the pan and spread evenly.",
      "Cook for 2-3 minutes until the bottom sets and edges lift easily.",
      "Flip carefully and cook another 1-2 minutes until fully cooked.",
      "Transfer to a plate, cut into wedges, and serve hot."
    ]
  },
  {
    name: "Simple Maggi",
    ingredients: ["maggi", "water", "masala"],
    image:"maggi.jpg",
    steps: [
      "Bring 1.5 cups of water to a boil in a saucepan.",
      "Add the Maggi noodles and the tastemaker masala.",
      "Stir gently to separate the noodles.",
      "Cook for 2 minutes on medium heat, stirring occasionally.",
      "Let the water absorb until desired consistency is reached.",
      "Turn off the heat and serve hot."
    ]
  },
  {
    name: "Fruit Salad",
    ingredients: ["apple", "banana", "milk", "sugar"],
    steps: [
      "Peel and dice 1 apple and 1 banana into small cubes.",
      "Add them to a large bowl.",
      "Pour 2-3 tbsp of chilled milk over the fruits.",
      "Sprinkle 1 tsp sugar (optional).",
      "Gently mix to coat the fruits evenly.",
      "Chill in the fridge for 10-15 minutes before serving."
    ]
  },
  {
    name: "Peanut Butter Toast",
    ingredients: ["bread", "peanut butter"],
    steps: [
      "Toast 2 slices of bread until golden brown and crispy.",
      "Spread a generous amount of peanut butter over each slice.",
      "Cut into halves or serve whole, warm or cold."
    ]
  },
  {
    name: "Masala Tea",
    ingredients: ["tea", "milk", "sugar", "ginger", "cardamom"],
    steps: [
      "Crush 2 cardamom pods and slice 1 small piece of ginger.",
      "Boil 1 cup of water in a saucepan with the spices for 2-3 minutes.",
      "Add 1 tsp tea leaves and let simmer for 1 minute.",
      "Pour in 1/2 cup milk and add 1 tsp sugar.",
      "Bring the mixture to a gentle boil.",
      "Simmer for another 2-3 minutes for strong flavor.",
      "Strain into cups and serve hot."
    ]
  },
  {
    name: "Lemon Rice",
    ingredients: ["rice", "lemon", "mustard seeds", "turmeric", "curry leaves"],
    steps: [
      "Cook 1 cup rice and allow it to cool slightly.",
      "Heat 1 tbsp oil in a pan and add 1 tsp mustard seeds.",
      "Once they splutter, add curry leaves and 1/4 tsp turmeric.",
      "Sauté for a few seconds.",
      "Add the cooked rice and squeeze juice from 1/2 lemon over it.",
      "Mix well and cook on low for 1-2 minutes.",
      "Serve hot or pack for lunch."
    ]
  },
  {
    name: "Boiled Egg",
    ingredients: ["egg", "water"],
    steps: [
      "Place eggs in a saucepan and cover with cold water.",
      "Bring to a rolling boil over medium heat.",
      "Once boiling, cover the pan and turn off the heat.",
      "Let the eggs sit in the hot water for 10 minutes.",
      "Transfer to a bowl of cold water for 5 minutes.",
      "Peel and serve whole, sliced, or seasoned."
    ]
  },
  {
    name: "Vegetable Sandwich",
    ingredients: ["bread", "tomato", "cucumber", "butter"],
    steps: [
      "Spread butter on two slices of bread.",
      "Thinly slice tomato and cucumber.",
      "Layer tomato and cucumber over one buttered slice.",
      "Sprinkle a pinch of salt and pepper if desired.",
      "Top with the second slice and press gently.",
      "Cut diagonally and serve."
    ]
  },
  {
    name: "Roti and Dal",
    ingredients: ["wheat", "water", "dal", "salt"],
    steps: [
      "For roti: Knead wheat flour with water to make a soft dough.",
      "Divide into balls, roll into thin rounds.",
      "Cook each on a hot tawa until brown spots appear, flip and repeat.",
      "For dal: Rinse 1/2 cup dal and pressure cook with salt and water.",
      "Once cooked, mash lightly and temper with mustard seeds or ghee.",
      "Serve roti hot with dal on the side."
    ]
  },
  {
    name: "Paneer Bhurji",
    ingredients: ["paneer", "onion", "tomato", "salt", "spices"],
    steps: [
      "Crumble 200g paneer using your fingers or a fork.",
      "Heat 1 tbsp oil in a pan, sauté chopped onions until golden.",
      "Add chopped tomatoes, cook until soft.",
      "Add spices (1/4 tsp turmeric, chili powder, garam masala) and salt.",
      "Add paneer, mix well, and cook for 2-3 minutes.",
      "Garnish with coriander and serve with roti or toast."
    ]
  },
  {
    name: "Poha",
    ingredients: ["poha", "mustard seeds", "onion", "lemon", "salt"],
    steps: [
      "Rinse 1 cup poha in a colander under running water until soft.",
      "Let it drain completely without breaking the flakes.",
      "Heat 1 tbsp oil in a pan; add 1 tsp mustard seeds and let them splutter.",
      "Add chopped onion and sauté until translucent.",
      "Add 1/4 tsp turmeric and salt to taste.",
      "Add the soaked poha and mix gently without mashing.",
      "Cover and steam for 2 minutes on low heat.",
      "Turn off the heat, sprinkle lemon juice, and garnish with coriander."
    ]
  },
  {
    name: "Upma",
    ingredients: ["rava", "water", "vegetables", "mustard seeds"],
    steps: [
      "Dry roast 1/2 cup rava (semolina) on low flame until aromatic; set aside.",
      "Heat 1 tbsp oil; add 1 tsp mustard seeds and let splutter.",
      "Add chopped vegetables (carrot, peas, beans) and sauté 2 minutes.",
      "Pour in 1.5 cups water and add salt to taste.",
      "Bring to a boil, then slowly add roasted rava while stirring constantly.",
      "Stir until mixture thickens and absorbs all water.",
      "Cover and cook on low for 2-3 minutes.",
      "Fluff with a fork and serve hot."
    ]
  },
  {
    name: "Khichdi",
    ingredients: ["rice", "dal", "salt", "turmeric"],
    steps: [
      "Rinse 1/2 cup rice and 1/2 cup moong dal together.",
      "In a pressure cooker, add the rice and dal with 3 cups water.",
      "Add 1/2 tsp turmeric and 1 tsp salt.",
      "Pressure cook for 3-4 whistles until soft.",
      "Mash lightly for a porridge-like consistency.",
      "Serve hot with ghee, papad, or pickle."
    ]
  },
  {
    name: "Egg Curry",
    ingredients: ["egg", "onion", "tomato", "spices"],
    steps: [
      "Boil and peel 4 eggs; optionally slice in half.",
      "Heat 2 tbsp oil in a pan, sauté finely chopped onions until golden.",
      "Add 1 tbsp ginger-garlic paste, cook until raw smell goes.",
      "Add chopped tomatoes and cook until soft and oil separates.",
      "Add spices: 1/2 tsp turmeric, 1 tsp coriander powder, 1/2 tsp chili powder.",
      "Add 1 cup water and bring to a boil.",
      "Drop in the boiled eggs and simmer for 5 minutes.",
      "Garnish with chopped coriander leaves and serve hot."
    ]
  },
  {
    name: "Vegetable Pulao",
    ingredients: ["rice", "vegetables", "spices"],
    steps: [
      "Wash and soak 1 cup rice for 15 minutes.",
      "Heat 1 tbsp ghee or oil; add cumin seeds, bay leaf, cloves (optional).",
      "Add chopped mixed vegetables and sauté for 3-4 minutes.",
      "Add the drained rice, 2 cups water, and salt to taste.",
      "Cover and cook on low flame for 12-15 minutes or until rice is done.",
      "Fluff gently and garnish with coriander before serving."
    ]
  },
  {
    name: "Cucumber Raita",
    ingredients: ["curd", "cucumber", "salt", "cumin"],
    steps: [
      "Grate or finely chop 1 medium cucumber.",
      "Whisk 1 cup curd until smooth in a bowl.",
      "Add the cucumber, 1/2 tsp salt, and 1/4 tsp roasted cumin powder.",
      "Mix well and chill for 15 minutes.",
      "Serve cold as a side dish."
    ]
  },
  {
    name: "Mango Shake",
    ingredients: ["mango", "milk", "sugar"],
    steps: [
      "Peel and chop 1 ripe mango into cubes.",
      "Add mango, 1 cup chilled milk, and 1-2 tsp sugar to a blender.",
      "Blend until smooth and creamy.",
      "Pour into a glass and serve chilled.",
      "Optionally garnish with chopped nuts or saffron."
    ]
  },
  {
    name: "Banana Smoothie",
    ingredients: ["banana", "milk", "honey"],
    steps: [
      "Slice 1 ripe banana into chunks.",
      "Add banana, 1 cup chilled milk, and 1 tbsp honey to a blender.",
      "Blend until smooth and frothy.",
      "Serve immediately in a tall glass."
    ]
  },
  {
    name: "Garlic Bread",
    ingredients: ["bread", "butter", "garlic"],
    steps: [
      "Finely mince 2 garlic cloves and mix into 2 tbsp softened butter.",
      "Spread the garlic butter evenly over bread slices.",
      "Toast on a pan or bake at 180°C (350°F) for 5-7 minutes until golden.",
      "Serve warm as a snack or side."
    ]
  },
  {
    name: "Oats Porridge",
    ingredients: ["oats", "milk", "sugar"],
    steps: [
      "Boil 1 cup milk in a saucepan.",
      "Add 1/2 cup oats and stir well.",
      "Simmer on low heat for 5 minutes, stirring occasionally.",
      "Add 1 tsp sugar (or to taste) and cook until thickened.",
      "Serve warm. Optionally garnish with fruits or nuts."
    ]
  },
  {
    name: "Chana Salad",
    ingredients: ["chana", "onion", "tomato", "lemon"],
    steps: [
      "Boil 1 cup of soaked chana (chickpeas) until tender, then drain.",
      "Chop 1 onion and 1 tomato finely.",
      "In a mixing bowl, combine boiled chana, chopped onion, and tomato.",
      "Squeeze in juice from half a lemon.",
      "Add salt and a pinch of black pepper or chaat masala.",
      "Mix well and garnish with coriander leaves before serving."
    ]
  },
  {
    name: "Corn Chaat",
    ingredients: ["corn", "butter", "lemon", "salt"],
    steps: [
      "Boil 1 cup of sweet corn kernels until soft, then drain.",
      "In a pan, melt 1 tsp butter and toss in the corn.",
      "Add salt to taste and mix well.",
      "Turn off heat and squeeze juice from half a lemon.",
      "Mix and serve hot with chili flakes or chaat masala if desired."
    ]
  },
  {
    name: "Pasta",
    ingredients: ["pasta", "tomato", "cheese", "salt"],
    steps: [
      "Boil 1 cup of pasta in salted water as per package instructions, then drain.",
      "In a pan, cook 1 chopped tomato until mushy or use 1/2 cup tomato puree.",
      "Add a pinch of salt and 1/2 tsp oregano or mixed herbs.",
      "Toss in the boiled pasta and mix well.",
      "Grate cheese over the pasta and let it melt for a minute.",
      "Serve warm, garnished with more cheese or herbs."
    ]
  },
  {
    name: "Fried Rice",
    ingredients: ["rice", "soy sauce", "vegetables"],
    steps: [
      "Use 1 cup leftover cooked rice for best texture.",
      "Chop mixed vegetables (carrot, beans, capsicum).",
      "Heat 1 tbsp oil in a wok; stir-fry the veggies for 2-3 minutes.",
      "Add the cooked rice and 1-2 tsp soy sauce.",
      "Mix everything on high flame for 1-2 minutes.",
      "Serve hot, optionally with spring onions."
    ]
  },
  {
    name: "Curd Rice",
    ingredients: ["curd", "rice", "salt"],
    steps: [
      "Use 1 cup cooked and cooled rice.",
      "Mash the rice lightly and mix with 1 cup plain curd.",
      "Add salt to taste and mix well.",
      "Optional tempering: heat 1 tsp oil, splutter mustard seeds, add curry leaves and green chili, then mix into rice.",
      "Serve chilled or at room temperature."
    ]
  },
  {
    name: "Methi Thepla",
    ingredients: ["wheat", "methi", "spices"],
    steps: [
      "Mix 1 cup wheat flour, 1/2 cup chopped methi leaves, salt, turmeric, chili powder.",
      "Add water gradually to make a soft dough.",
      "Divide into balls and roll out into thin flat discs.",
      "Heat a tawa, cook each thepla with a little oil on both sides until golden.",
      "Serve hot with pickle or curd."
    ]
  },
  {
    name: "Sabudana Khichdi",
    ingredients: ["sabudana", "peanut", "potato", "salt"],
    steps: [
      "Rinse and soak 1 cup sabudana for 4 hours until soft.",
      "Dry roast 2 tbsp peanuts and grind coarsely.",
      "Heat oil; sauté 1 diced potato until golden.",
      "Add soaked sabudana, ground peanuts, and salt.",
      "Cook while stirring until sabudana turns translucent.",
      "Serve hot with lemon juice on top."
    ]
  },
  {
    name: "Chole",
    ingredients: ["chickpeas", "onion", "tomato", "spices"],
    steps: [
      "Soak 1 cup chickpeas overnight; pressure cook until soft.",
      "Sauté chopped onions in oil until golden.",
      "Add ginger-garlic paste and cook till raw smell fades.",
      "Add tomatoes and cook till mushy.",
      "Add turmeric, garam masala, cumin, coriander powder.",
      "Add boiled chole with some water and simmer 10 minutes.",
      "Garnish with coriander and serve with roti or rice."
    ]
  },
  {
    name: "Aloo Paratha",
    ingredients: ["wheat", "potato", "spices"],
    steps: [
      "Boil and mash 2 potatoes.",
      "Add chopped green chili, coriander, salt, cumin, and mix well.",
      "Make dough with wheat flour and water.",
      "Roll dough balls, place stuffing inside, seal and roll again.",
      "Cook on tawa with ghee or oil until both sides are browned.",
      "Serve with curd or pickle."
    ]
  },
  {
    name: "Matar Paneer",
    ingredients: ["paneer", "peas", "onion", "tomato"],
    steps: [
      "Heat oil; sauté chopped onions till golden.",
      "Add ginger-garlic paste and chopped tomatoes.",
      "Add turmeric, chili powder, coriander powder, salt.",
      "Cook till oil separates from the masala.",
      "Add 1/2 cup boiled peas and 200g paneer cubes.",
      "Add 1/2 cup water and simmer 5 minutes.",
      "Garnish with coriander and serve hot."
    ]
  },
    {
    name: "Rice Kheer",
    ingredients: ["rice", "milk", "sugar", "cardamom"],
    steps: [
      "Wash 2 tablespoons of rice and soak for 15 minutes.",
      "In a heavy-bottom pan, bring 1 liter of milk to a boil.",
      "Drain soaked rice and add it to the milk.",
      "Simmer on low heat, stirring frequently to prevent sticking.",
      "Cook for 30–40 minutes until rice is soft and milk thickens.",
      "Add 4 tablespoons sugar and 1/4 teaspoon cardamom powder.",
      "Cook for another 5 minutes. Serve warm or chilled."
    ]
  },
  {
    name: "Bread Pizza",
    ingredients: ["bread", "cheese", "tomato", "capsicum"],
    steps: [
      "Toast bread slices lightly on a pan or toaster.",
      "Spread pizza sauce or ketchup on each slice.",
      "Top with chopped tomato and capsicum.",
      "Grate cheese generously on top.",
      "Bake in oven at 180°C or toast covered on pan until cheese melts.",
      "Serve hot with chili flakes and oregano."
    ]
  },
  {
    name: "Besan Chilla",
    ingredients: ["besan", "onion", "spices", "water"],
    steps: [
      "In a bowl, mix 1 cup besan, 1 chopped onion, salt, turmeric, and chili powder.",
      "Add water gradually to make a smooth pourable batter.",
      "Heat a non-stick tawa and grease it lightly.",
      "Pour a ladle of batter and spread it gently.",
      "Cook on medium heat till golden on both sides.",
      "Serve hot with chutney or ketchup."
    ]
  },
  {
    name: "Paneer Roll",
    ingredients: ["paneer", "roti", "onion", "spices"],
    steps: [
      "Sauté sliced onions in oil until soft.",
      "Add crumbled paneer, salt, turmeric, and garam masala.",
      "Cook for 2–3 minutes and let it cool slightly.",
      "Take a cooked roti, spread paneer filling along the center.",
      "Roll tightly and wrap in foil or parchment if needed.",
      "Serve as a snack or light lunch."
    ]
  },
  {
    name: "Dosa",
    ingredients: ["dosa batter", "oil"],
    steps: [
      "Heat a non-stick tawa until hot, then lower to medium heat.",
      "Pour a ladle of dosa batter and spread it thin in a circular motion.",
      "Drizzle 1 tsp oil around the edges.",
      "Cook until the bottom is golden brown and crispy.",
      "Fold and serve hot with chutney and sambar."
    ]
  },
  {
    name: "Idli",
    ingredients: ["idli batter", "water"],
    steps: [
      "Grease idli moulds with oil.",
      "Pour fermented idli batter into each mould, filling 3/4th.",
      "Place moulds in steamer with boiling water.",
      "Steam for 10–12 minutes or until a toothpick comes out clean.",
      "Let them cool slightly, then remove with a spoon.",
      "Serve hot with coconut chutney and sambar."
    ]
  },
  {
    name: "Vegetable Soup",
    ingredients: ["vegetables", "salt", "pepper"],
    steps: [
      "Chop vegetables like carrot, beans, cabbage, and capsicum finely.",
      "Boil 2 cups of water in a saucepan.",
      "Add chopped veggies and simmer for 10–12 minutes until soft.",
      "Season with salt and black pepper.",
      "Optional: add cornflour slurry for thickness or butter for richness.",
      "Serve hot as a light appetizer."
    ]
  },
  {
    name: "French Toast",
    ingredients: ["egg", "bread", "sugar", "milk"],
    steps: [
      "Whisk 1 egg with 1/4 cup milk and 1 tsp sugar in a bowl.",
      "Dip bread slices into the egg mixture, coating both sides.",
      "Heat butter in a pan and place soaked bread slices.",
      "Cook on low-medium heat until golden brown on both sides.",
      "Serve hot with syrup, jam, or fruits."
    ]
  },
  {
    name: "Omelette",
    ingredients: ["egg", "onion", "salt", "chili"],
    steps: [
      "Crack 2 eggs into a bowl and beat well.",
      "Add chopped onion, green chili, salt, and mix thoroughly.",
      "Heat oil in a pan over medium heat.",
      "Pour the egg mixture and spread evenly.",
      "Cook 2–3 minutes until set underneath, flip and cook 1 more minute.",
      "Serve hot with toast or paratha."
    ]
  },
  {
    name: "Paneer Tikka",
    ingredients: ["paneer", "yogurt", "spices"],
    steps: [
      "Cut paneer into 1-inch cubes.",
      "Prepare marinade: mix 1/2 cup yogurt, 1 tsp chili powder, 1/2 tsp turmeric, 1/2 tsp garam masala, salt, and 1 tsp oil.",
      "Coat paneer pieces with marinade and let sit for 30 minutes.",
      "Skewer or place in a greased tray, grill or pan-sear till edges are charred.",
      "Serve hot with mint chutney."
    ]
  },  {
    name: "Bhindi Fry",
    ingredients: ["bhindi", "onion", "spices"],
    steps: [
      "Wash and dry 250g bhindi (okra), then slice into thin rounds.",
      "Chop 1 medium onion finely.",
      "Heat 2 tbsp oil in a pan and add chopped onion.",
      "Sauté until golden, then add bhindi slices.",
      "Stir-fry for 8–10 minutes on medium flame until slightly crispy.",
      "Add salt, turmeric, red chili powder, and garam masala.",
      "Cook 2 more minutes; serve hot with roti or dal rice."
    ]
  },
  {
    name: "Cabbage Sabzi",
    ingredients: ["cabbage", "onion", "mustard seeds"],
    steps: [
      "Finely shred 2 cups of cabbage and slice 1 onion.",
      "Heat 1 tbsp oil in a pan and add 1 tsp mustard seeds.",
      "Once they splutter, add onion and sauté till translucent.",
      "Add shredded cabbage, salt, and turmeric.",
      "Mix well and cover to cook on low for 10–12 minutes, stirring occasionally.",
      "Serve warm with roti or paratha."
    ]
  },
  {
    name: "Egg Fried Rice",
    ingredients: ["egg", "rice", "soy sauce", "vegetables"],
    steps: [
      "Beat 2 eggs with a pinch of salt and scramble in hot oil; set aside.",
      "Heat 1 tbsp oil in a wok, sauté chopped vegetables like carrots, beans, and spring onions.",
      "Add 2 cups cooked rice and mix thoroughly.",
      "Add 1 tbsp soy sauce and salt to taste.",
      "Fold in scrambled eggs and stir-fry 2 minutes more.",
      "Serve hot with chili sauce."
    ]
  },
  {
    name: "Samosa",
    ingredients: ["maida", "potato", "peas", "spices"],
    steps: [
      "Prepare dough with 1 cup maida, 2 tbsp oil, and water; rest 20 minutes.",
      "For filling: boil and mash 2 potatoes, add boiled peas, cumin, chili, and garam masala.",
      "Divide dough into balls, roll into oval shapes, cut in half.",
      "Make a cone, fill with mixture, seal edges with water.",
      "Deep fry in medium hot oil until golden and crisp.",
      "Serve with chutney or sauce."
    ]
  },
  {
    name: "Pakora",
    ingredients: ["besan", "onion", "spices"],
    steps: [
      "Slice 1 large onion thinly and place in a bowl.",
      "Add 1 cup besan, salt, chili powder, and ajwain (optional).",
      "Mix with water gradually to form a thick batter.",
      "Heat oil in a kadai and drop spoonfuls of batter.",
      "Fry on medium heat till golden brown and crisp.",
      "Drain on paper towel and serve with chutney."
    ]
  },
  {
    name: "Pancake",
    ingredients: ["flour", "milk", "egg", "sugar"],
    steps: [
      "In a bowl, whisk 1 cup flour, 1 egg, 1 tbsp sugar, and 1 cup milk into a smooth batter.",
      "Heat a nonstick pan and grease lightly with butter.",
      "Pour a ladle of batter and cook until bubbles form.",
      "Flip and cook the other side till golden.",
      "Serve warm with honey or syrup."
    ]
  },
  {
    name: "Moong Dal",
    ingredients: ["moong dal", "onion", "tomato", "spices"],
    steps: [
      "Rinse 1/2 cup moong dal and pressure cook with 2 cups water until soft.",
      "In a pan, heat 1 tbsp oil and sauté chopped onion until golden.",
      "Add chopped tomato, turmeric, chili powder, and salt; cook until mushy.",
      "Add cooked dal and simmer for 5 minutes.",
      "Garnish with coriander and serve with rice or roti."
    ]
  },
  {
    name: "Tea",
    ingredients: ["milk", "tea", "sugar", "water"],
    steps: [
      "In a saucepan, boil 1/2 cup water with 1 tsp tea leaves.",
      "Add 1/2 cup milk and 1 tsp sugar (adjust to taste).",
      "Simmer on low for 3–4 minutes.",
      "Strain into a cup and serve hot."
    ]
  },
  {
    name: "Chole",
    ingredients: ["chickpeas", "onion", "tomato", "spices"],
    steps: [
      "Soak 1 cup chickpeas overnight and pressure cook until soft.",
      "In a pan, heat oil, add cumin, then sauté chopped onion until golden.",
      "Add ginger-garlic paste, chopped tomato, and spices (turmeric, cumin, chole masala).",
      "Cook until oil separates, then add boiled chickpeas.",
      "Simmer for 10–15 minutes, mash a few chickpeas for thick gravy.",
      "Garnish with coriander and serve with rice or bhature."
    ]
  },
  {
    name: "Aloo Paratha",
    ingredients: ["wheat", "potato", "spices"],
    steps: [
      "Boil and mash 2 potatoes, mix with salt, chili, cumin, and coriander leaves.",
      "Knead dough with wheat flour and water; divide into balls.",
      "Roll out one ball, place potato filling in center, seal and roll again gently.",
      "Cook on a hot tawa with ghee until both sides are golden brown.",
      "Serve hot with curd or pickle."
    ]
  },
  {
    name: "Chicken Curry",
    ingredients: ["chicken", "onion", "tomato", "spices", "oil"],
    steps: [
      "Heat oil in a pan, sauté chopped onions until golden.",
      "Add ginger-garlic paste and cook for 2 minutes.",
      "Add chopped tomatoes and cook till soft.",
      "Mix in spices (turmeric, chili, garam masala) and stir well.",
      "Add chicken pieces and cook until sealed.",
      "Pour water, cover, and simmer for 25-30 minutes until chicken is cooked.",
      "Garnish with coriander leaves and serve hot."
    ]
  },
  {
    name: "Egg Bhurji",
    ingredients: ["egg", "onion", "tomato", "spices", "oil"],
    steps: [
      "Heat oil in a pan and sauté chopped onions till translucent.",
      "Add chopped tomatoes and cook until soft.",
      "Mix in salt, turmeric, chili powder, and garam masala.",
      "Break eggs directly into the pan and scramble quickly.",
      "Cook until eggs are soft but cooked through.",
      "Garnish with coriander and serve with toast or roti."
    ]
  },
  {
    name: "Chicken Biryani",
    ingredients: ["chicken", "rice", "yogurt", "spices", "onion"],
    steps: [
      "Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for 30 mins.",
      "Fry onions till golden and set aside.",
      "Partially cook basmati rice with whole spices.",
      "In a pot, layer chicken, rice, fried onions, and saffron milk.",
      "Seal the pot and cook on low heat (dum) for 30 minutes.",
      "Serve hot with raita."
    ]
  },
  {
    name: "Grilled Chicken",
    ingredients: ["chicken", "yogurt", "spices", "lemon", "oil"],
    steps: [
      "Marinate chicken with yogurt, lemon juice, garlic, and spices for at least 2 hours.",
      "Preheat grill or oven to medium-high heat.",
      "Grill chicken pieces for 6–8 minutes per side until fully cooked.",
      "Brush with oil while grilling for extra juiciness.",
      "Serve hot with mint chutney or salad."
    ]
  },
  {
    name: "Chicken Sandwich",
    ingredients: ["chicken", "bread", "mayonnaise", "lettuce", "pepper"],
    steps: [
      "Boil and shred chicken.",
      "Mix chicken with mayonnaise, salt, and pepper.",
      "Place mixture on bread slices with lettuce.",
      "Grill or toast lightly if desired.",
      "Serve warm or cold."
    ]
  },
  {
    name: "Egg Curry",
    ingredients: ["egg", "onion", "tomato", "spices", "oil"],
    steps: [
      "Boil eggs and peel them.",
      "Sauté chopped onions, garlic, and ginger until golden.",
      "Add tomatoes and cook till soft.",
      "Add spices and mix well.",
      "Add water and bring to a boil.",
      "Gently add boiled eggs and simmer for 10 mins.",
      "Serve with rice or roti."
    ]
  },
  {
    name: "Chicken Fried Rice",
    ingredients: ["chicken", "rice", "egg", "soy sauce", "vegetables"],
    steps: [
      "Cook and cool rice.",
      "Stir-fry diced chicken until cooked and set aside.",
      "Scramble egg and remove.",
      "Stir-fry veggies, add rice, chicken, egg, and soy sauce.",
      "Mix well and cook for 3–5 mins.",
      "Serve hot with chili sauce."
    ]
  },
  {
    name: "Chicken Pakora",
    ingredients: ["chicken", "gram flour", "spices", "oil"],
    steps: [
      "Marinate chicken pieces with spices, ginger-garlic paste, and lemon juice.",
      "Dip in a thick batter of gram flour and water.",
      "Deep fry until golden and crispy.",
      "Serve hot with green chutney."
    ]
  },
  {
    name: "Omelette",
    ingredients: ["egg", "onion", "green chili", "salt", "oil"],
    steps: [
      "Crack 2 eggs in a bowl, add chopped onions and green chilies.",
      "Add salt and beat well.",
      "Heat oil in a pan and pour the mixture.",
      "Cook on medium heat until set.",
      "Flip and cook the other side.",
      "Serve hot with toast."
    ]
  },
  {
    name: "Chicken Kebab",
    ingredients: ["chicken", "spices", "yogurt", "skewers"],
    steps: [
      "Marinate chicken cubes with yogurt, lemon juice, and spices for 2–3 hours.",
      "Thread chicken onto skewers.",
      "Grill or roast until cooked and slightly charred.",
      "Serve with sliced onions and lemon wedges."
    ]
  },
  {
    name: "Chicken Soup",
    ingredients: ["chicken", "carrot", "onion", "pepper", "garlic"],
    steps: [
      "Boil chicken with water, salt, and pepper until tender.",
      "Remove chicken, shred, and return to broth.",
      "Add chopped vegetables and simmer until soft.",
      "Adjust salt and serve hot."
    ]
  },
  {
    name: "Chicken Wrap",
    ingredients: ["chicken", "tortilla", "lettuce", "mayonnaise", "cheese"],
    steps: [
      "Cook and shred chicken with spices.",
      "Spread mayo on tortilla, layer with lettuce, chicken, and cheese.",
      "Roll tightly and grill for 2 minutes.",
      "Cut and serve."
    ]
  },
  {
    name: "Egg Fried Rice",
    ingredients: ["egg", "rice", "soy sauce", "vegetables", "oil"],
    steps: [
      "Scramble eggs in hot oil and set aside.",
      "Stir-fry vegetables, add rice and soy sauce.",
      "Mix in scrambled eggs.",
      "Stir-fry for 2–3 mins and serve hot."
    ]
  },
  {
    name: "Chicken Nuggets",
    ingredients: ["chicken", "breadcrumbs", "egg", "spices", "oil"],
    steps: [
      "Grind chicken with salt and pepper, shape into nuggets.",
      "Dip in egg, then coat with breadcrumbs.",
      "Deep fry until golden brown.",
      "Serve with ketchup or sauce."
    ]
  },
  {
    name: "Chicken Tikka",
    ingredients: ["chicken", "yogurt", "spices", "lemon", "oil"],
    steps: [
      "Marinate chicken in yogurt, lemon juice, and tikka masala for 4 hours.",
      "Grill or bake till chicken is tender and charred.",
      "Serve with mint chutney and onions."
    ]
  },
  {
    name: "Chicken Popcorn",
    ingredients: ["chicken", "flour", "breadcrumbs", "egg", "oil"],
    steps: [
      "Cut chicken into small pieces, marinate with spices.",
      "Coat with flour, dip in egg, then breadcrumbs.",
      "Deep fry until golden and crisp.",
      "Serve with dip."
    ]
  },
  {
    name: "Chicken Shawarma",
    ingredients: ["chicken", "spices", "garlic", "yogurt", "pita bread"],
    steps: [
      "Marinate chicken in shawarma spices, yogurt, and garlic for 4 hours.",
      "Grill or pan-fry until fully cooked.",
      "Serve in pita bread with salad and garlic sauce."
    ]
  },
  {
    name: "Keema Pav",
    ingredients: ["minced meat", "onion", "tomato", "spices", "pav"],
    steps: [
      "Cook onion and garlic in oil till golden.",
      "Add tomatoes and spices, cook till soft.",
      "Add minced meat and cook until browned.",
      "Simmer till oil separates.",
      "Serve with butter-toasted pav."
    ]
  },
  {
    name: "Chicken Lollipop",
    ingredients: ["chicken wings", "cornflour", "spices", "sauce", "oil"],
    steps: [
      "Marinate lollipop-shaped chicken with spices and cornflour.",
      "Deep fry until crisp.",
      "Toss in spicy sauce if desired and serve hot."
    ]
  },
  {
    name: "Boiled Egg Sandwich",
    ingredients: ["egg", "bread", "mayonnaise", "pepper"],
    steps: [
      "Boil eggs, peel and mash with mayo, salt, and pepper.",
      "Spread on bread and assemble sandwich.",
      "Toast if desired and serve warm."
    ]
  }
];
