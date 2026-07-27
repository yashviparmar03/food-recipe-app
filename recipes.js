const recipes = [

{
    id: 1,
    title: "Paneer Butter Masala",
    category: "Curry",
    image: "http://localhost:5000/images/paneer-butter-masala.jpg",

    readyInMinutes: 30,
    servings: 4,

    rating: 4.8,
    reviews: 1250,

    summary:
        "Paneer Butter Masala is one of the most popular North Indian dishes made with soft paneer cubes cooked in a rich buttery tomato gravy.",

    ingredients: [

        "250g Paneer",
        "2 Tomatoes",
        "1 Onion",
        "2 tbsp Butter",
        "Fresh Cream",
        "Ginger Garlic Paste",
        "Red Chilli Powder",
        "Garam Masala",
        "Salt"

    ],

    instructions: [

        "Heat butter in a pan.",
        "Saute onion until golden.",
        "Add ginger garlic paste.",
        "Add tomatoes and cook well.",
        "Blend the gravy until smooth.",
        "Add spices and butter.",
        "Add paneer cubes.",
        "Cook for 5 minutes.",
        "Add fresh cream.",
        "Serve hot with naan."

    ]
},

{
    id: 2,
    title: "Palak Paneer",
    category: "Curry",
    image: "http://localhost:5000/images/palak-paneer.jpg",

    readyInMinutes: 35,
    servings: 4,

    rating: 4.7,
    reviews: 980,

    summary:
        "Palak Paneer is a healthy Indian curry prepared with spinach puree and soft paneer cubes.",

    ingredients: [

        "250g Paneer",
        "Spinach",
        "1 Onion",
        "2 Tomatoes",
        "Garlic",
        "Green Chilli",
        "Butter",
        "Salt",
        "Garam Masala"

    ],

    instructions: [

        "Boil spinach for 3 minutes.",
        "Transfer into cold water.",
        "Blend spinach into puree.",
        "Cook onion and garlic.",
        "Add tomatoes.",
        "Add spinach puree.",
        "Add spices.",
        "Add paneer cubes.",
        "Cook for 5 minutes.",
        "Serve with roti."

    ]
},

{
    id: 3,
    title: "Shahi Paneer",
    category: "Curry",
    image: "http://localhost:5000/images/shahi-paneer.jpg",
    readyInMinutes: 40,
    servings: 4,

    rating: 4.9,
    reviews: 1400,

    summary:
        "Shahi Paneer is a royal Mughlai curry made using paneer, cream, cashew paste and aromatic spices.",

    ingredients: [

        "250g Paneer",
        "Cashew Paste",
        "Fresh Cream",
        "Tomato Puree",
        "Butter",
        "Cardamom",
        "Cinnamon",
        "Sugar",
        "Salt"

    ],

    instructions: [

        "Heat butter.",
        "Cook tomato puree.",
        "Add cashew paste.",
        "Add cream.",
        "Mix spices.",
        "Add paneer cubes.",
        "Cook for 6 minutes.",
        "Garnish with cream.",
        "Add coriander.",
        "Serve hot."

    ]
},

{
    id: 4,
    title: "Kadai Paneer",
    category: "Curry",
    image: "http://localhost:5000/images/kadai-paneer.jpg",
    readyInMinutes: 35,
    servings: 4,

    rating: 4.8,
    reviews: 1025,

    summary:
        "Kadai Paneer is a spicy North Indian curry prepared with paneer, onions, capsicum and freshly ground kadai masala.",

    ingredients: [

        "250g Paneer",
        "1 Onion",
        "1 Capsicum",
        "2 Tomatoes",
        "Ginger Garlic Paste",
        "Kadai Masala",
        "Red Chilli Powder",
        "Oil",
        "Salt"

    ],

    instructions: [

        "Heat oil in a kadai.",
        "Saute onion until golden.",
        "Add ginger garlic paste.",
        "Cook tomatoes until soft.",
        "Add capsicum.",
        "Mix kadai masala.",
        "Add paneer cubes.",
        "Cook for 5 minutes.",
        "Garnish with coriander.",
        "Serve hot."

    ]
},

{
    id: 5,
    title: "Chole Masala",
    category: "Curry",
    image: "http://localhost:5000/images/chole-masala.jpg",

    readyInMinutes: 45,
    servings: 5,

    rating: 4.9,
    reviews: 1600,

    summary:
        "Chole Masala is a delicious Punjabi curry made with chickpeas cooked in spicy onion-tomato gravy.",

    ingredients: [

        "2 Cups Boiled Chickpeas",
        "2 Tomatoes",
        "1 Onion",
        "Ginger Garlic Paste",
        "Chole Masala",
        "Turmeric",
        "Red Chilli Powder",
        "Oil",
        "Salt"

    ],

    instructions: [

        "Heat oil in a pan.",
        "Cook onion until golden.",
        "Add ginger garlic paste.",
        "Add tomatoes and cook well.",
        "Mix all spices.",
        "Add boiled chickpeas.",
        "Cook for 15 minutes.",
        "Mash few chickpeas for thickness.",
        "Garnish with coriander.",
        "Serve with bhature or rice."

    ]
},

{
    id: 6,
    title: "Rajma Curry",
    category: "Curry",
    image: "http://localhost:5000/images/rajma-curry.jpg",

    readyInMinutes: 45,
    servings: 5,

    rating: 4.7,
    reviews: 930,

    summary:
        "Rajma Curry is a classic North Indian dish made with kidney beans cooked in a rich tomato onion gravy.",

    ingredients: [

        "2 Cups Boiled Rajma",
        "2 Tomatoes",
        "1 Onion",
        "Ginger Garlic Paste",
        "Turmeric",
        "Red Chilli Powder",
        "Garam Masala",
        "Oil",
        "Salt"

    ],

    instructions: [

        "Heat oil in a pan.",
        "Cook onions until golden.",
        "Add ginger garlic paste.",
        "Cook tomatoes.",
        "Add spices.",
        "Mix boiled rajma.",
        "Cook for 20 minutes.",
        "Mash few rajma beans.",
        "Garnish with coriander.",
        "Serve with rice."

    ]
},

{
    id: 7,
    title: "Dal Makhani",
    category: "Curry",
    image: "http://localhost:5000/images/dal-makhani.jpg",

    readyInMinutes: 60,
    servings: 5,

    rating: 4.9,
    reviews: 1850,

    summary:
        "Dal Makhani is a creamy Punjabi lentil curry prepared with black lentils and butter.",

    ingredients: [

        "Black Lentils",
        "Kidney Beans",
        "Butter",
        "Fresh Cream",
        "Tomatoes",
        "Onion",
        "Garlic",
        "Spices",
        "Salt"

    ],

    instructions: [

        "Pressure cook dal.",
        "Cook onion and tomato.",
        "Add spices.",
        "Mix cooked dal.",
        "Cook for 30 minutes.",
        "Add butter.",
        "Add cream.",
        "Mix well.",
        "Garnish with coriander.",
        "Serve hot."

    ]
},

{
    id: 8,
    title: "Mix Veg Curry",
    category: "Curry",
    image: "http://localhost:5000/images/mix-veg-curry.jpg",

    readyInMinutes: 35,
    servings: 4,

    rating: 4.5,
    reviews: 650,

    summary:
        "Mix Veg Curry is a healthy curry prepared with seasonal vegetables and aromatic spices.",

    ingredients: [

        "Carrot",
        "Beans",
        "Peas",
        "Potato",
        "Tomatoes",
        "Onion",
        "Spices",
        "Oil",
        "Salt"

    ],

    instructions: [

        "Heat oil.",
        "Cook onion.",
        "Add tomatoes.",
        "Add vegetables.",
        "Mix spices.",
        "Cook until vegetables become soft.",
        "Add little water.",
        "Cook for 10 minutes.",
        "Garnish with coriander.",
        "Serve hot."

    ]
},

{
    id: 9,
    title: "Veg Biryani",
    category: "Rice",
    image: "http://localhost:5000/images/veg-biryani.jpg",

    readyInMinutes: 50,
    servings: 5,

    rating: 4.8,
    reviews: 2200,

    summary:
        "Veg Biryani is a fragrant rice dish cooked with vegetables and aromatic spices.",

    ingredients: [

        "Basmati Rice",
        "Carrot",
        "Beans",
        "Peas",
        "Biryani Masala",
        "Curd",
        "Mint Leaves",
        "Oil",
        "Salt"

    ],

    instructions: [

        "Cook rice 80%.",
        "Cook vegetables.",
        "Mix biryani masala.",
        "Layer rice and vegetables.",
        "Add mint leaves.",
        "Cover tightly.",
        "Cook on low flame.",
        "Rest for 10 minutes.",
        "Mix gently.",
        "Serve hot."

    ]
},

{
    id: 10,
    title: "Jeera Rice",
    category: "Rice",
    image: "http://localhost:5000/images/jeera-rice.jpg",
    readyInMinutes: 25,
    servings: 4,

    rating: 4.4,
    reviews: 550,

    summary:
        "Jeera Rice is a simple and flavorful rice recipe prepared with cumin seeds and basmati rice.",

    ingredients: [

        "Basmati Rice",
        "Cumin Seeds",
        "Butter",
        "Green Chilli",
        "Coriander",
        "Salt",
        "Water"

    ],

    instructions: [

        "Heat butter.",
        "Add cumin seeds.",
        "Add green chilli.",
        "Add soaked rice.",
        "Mix gently.",
        "Add water.",
        "Cook until rice is soft.",
        "Fluff rice.",
        "Garnish with coriander.",
        "Serve hot."

    ]
},

{
    id: 11,
    title: "Aloo Paratha",
    category: "Paratha",
    image: "http://localhost:5000/images/aloo-paratha.jpg",

    readyInMinutes: 35,
    servings: 4,

    rating: 4.9,
    reviews: 2500,

    summary:
        "Aloo Paratha is a stuffed Indian flatbread filled with spicy mashed potatoes.",

    ingredients: [

        "Wheat Flour",
        "Boiled Potatoes",
        "Green Chilli",
        "Coriander",
        "Garam Masala",
        "Salt",
        "Butter"

    ],

    instructions: [

        "Prepare dough.",
        "Mash potatoes with spices.",
        "Stuff dough with potato filling.",
        "Roll gently.",
        "Cook on hot tawa.",
        "Apply butter.",
        "Flip both sides.",
        "Cook until golden.",
        "Serve with curd.",
        "Enjoy hot."

    ]
},

{
    id: 12,
    title: "Paneer Paratha",
    category: "Paratha",
    image: "http://localhost:5000/images/paneer-paratha.jpg",

    readyInMinutes: 40,
    servings: 4,

    rating: 4.8,
    reviews: 1450,

    summary:
        "Paneer Paratha is a delicious stuffed flatbread filled with spiced grated paneer.",

    ingredients: [

        "Wheat Flour",
        "Paneer",
        "Green Chilli",
        "Coriander",
        "Salt",
        "Butter"

    ],

    instructions: [

        "Prepare dough.",
        "Grate paneer.",
        "Mix spices.",
        "Stuff dough.",
        "Roll carefully.",
        "Cook on tawa.",
        "Apply butter.",
        "Cook both sides.",
        "Serve hot.",
        "Enjoy."

    ]
},

{
    id: 13,
    title: "Butter Naan",
    category: "Paratha",
    image: "http://localhost:5000/images/butter-naan.jpg",

    readyInMinutes: 50,
    servings: 5,

    rating: 4.7,
    reviews: 1200,

    summary:
        "Butter Naan is a soft Indian bread traditionally cooked in a tandoor and brushed with butter.",

    ingredients: [

        "Maida",
        "Curd",
        "Yeast",
        "Butter",
        "Salt",
        "Sugar"

    ],

    instructions: [

        "Prepare soft dough.",
        "Rest dough for 2 hours.",
        "Divide into balls.",
        "Roll naan.",
        "Cook on hot tawa.",
        "Flip directly on flame.",
        "Apply butter.",
        "Serve hot.",
        "Enjoy.",
        "Best with curry."

    ]
},

{
    id: 14,
    title: "Tandoori Roti",
    category: "Paratha",
    image: "http://localhost:5000/images/tandoori-roti.jpg",

    readyInMinutes: 30,
    servings: 4,

    rating: 4.6,
    reviews: 800,

    summary:
        "Tandoori Roti is a healthy whole wheat flatbread served with Indian curries.",

    ingredients: [

        "Wheat Flour",
        "Salt",
        "Water"

    ],

    instructions: [

        "Prepare dough.",
        "Rest for 20 minutes.",
        "Make balls.",
        "Roll into circles.",
        "Cook on tawa.",
        "Cook over flame.",
        "Serve hot.",
        "Apply butter if desired.",
        "Enjoy.",
        "Best with dal."

    ]
},

{
    id: 15,
    title: "Samosa",
    category: "Snacks",
    image: "http://localhost:5000/images/samosa.jpg",

    readyInMinutes: 45,
    servings: 5,

    rating: 4.9,
    reviews: 3100,

    summary:
        "Samosa is a crispy fried snack filled with spicy potato stuffing.",

    ingredients: [

        "Maida",
        "Boiled Potatoes",
        "Green Peas",
        "Green Chilli",
        "Coriander",
        "Oil",
        "Salt"

    ],

    instructions: [

        "Prepare dough.",
        "Prepare potato filling.",
        "Make cone shape.",
        "Fill stuffing.",
        "Seal properly.",
        "Heat oil.",
        "Deep fry.",
        "Cook until golden.",
        "Serve with chutney.",
        "Enjoy hot."

    ]
},
{
    id: 16,
    title: "Khaman Dhokla",
    category: "Snacks",
    image: "http://localhost:5000/images/khaman-dhokla.jpg",

    readyInMinutes: 35,
    servings: 4,

    rating: 4.7,
    reviews: 900,

    summary:
        "Khaman Dhokla is a soft and fluffy Gujarati snack made from gram flour and served with green chutney.",

    ingredients: [

        "2 Cups Gram Flour (Besan)",
        "1 tsp Eno",
        "Green Chilli",
        "Mustard Seeds",
        "Curry Leaves",
        "Sugar",
        "Lemon Juice",
        "Oil",
        "Salt"

    ],

    instructions: [

        "Prepare besan batter.",
        "Add eno just before steaming.",
        "Steam for 20 minutes.",
        "Cool and cut into squares.",
        "Prepare tempering.",
        "Pour tempering over dhokla.",
        "Garnish with coriander.",
        "Serve with chutney.",
        "Enjoy fresh.",
        "Best served warm."

    ]
},

{
    id: 17,
    title: "Veg Cutlet",
    category: "Snacks",
    image: "http://localhost:5000/images/veg-cutlet.jpg",

    readyInMinutes: 40,
    servings: 4,

    rating: 4.5,
    reviews: 670,

    summary:
        "Veg Cutlet is a crispy snack made with mashed vegetables and breadcrumbs.",

    ingredients: [

        "Boiled Potatoes",
        "Carrot",
        "Beans",
        "Peas",
        "Breadcrumbs",
        "Green Chilli",
        "Oil",
        "Salt",
        "Garam Masala"

    ],

    instructions: [

        "Mash vegetables.",
        "Mix spices.",
        "Shape into cutlets.",
        "Coat with breadcrumbs.",
        "Heat oil.",
        "Shallow fry.",
        "Flip until golden.",
        "Serve hot.",
        "Serve with ketchup.",
        "Enjoy."

    ]
},

{
    id: 18,
    title: "Poha",
    category: "Snacks",
    image: "http://localhost:5000/images/poha.jpg",


    readyInMinutes: 20,
    servings: 3,

    rating: 4.6,
    reviews: 1100,

    summary:
        "Poha is a light and healthy breakfast made with flattened rice, peanuts and mild spices.",

    ingredients: [

        "Poha",
        "Onion",
        "Peanuts",
        "Mustard Seeds",
        "Turmeric",
        "Green Chilli",
        "Curry Leaves",
        "Lemon",
        "Salt"

    ],

    instructions: [

        "Wash poha.",
        "Heat oil.",
        "Add mustard seeds.",
        "Add peanuts.",
        "Cook onions.",
        "Add spices.",
        "Mix poha.",
        "Cook for 5 minutes.",
        "Add lemon juice.",
        "Serve hot."

    ]
},

{
    id: 19,
    title: "Gulab Jamun",
    category: "Dessert",
    image: "http://localhost:5000/images/gulab-jamun.jpg",

    readyInMinutes: 45,
    servings: 6,

    rating: 5.0,
    reviews: 4200,

    summary:
        "Gulab Jamun is a famous Indian dessert made from milk solids and soaked in sugar syrup.",

    ingredients: [

        "Milk Powder",
        "Maida",
        "Baking Soda",
        "Sugar",
        "Water",
        "Cardamom",
        "Oil"

    ],

    instructions: [

        "Prepare dough.",
        "Make small balls.",
        "Heat oil.",
        "Fry on low flame.",
        "Prepare sugar syrup.",
        "Add cardamom.",
        "Soak gulab jamun.",
        "Rest for 2 hours.",
        "Serve warm.",
        "Enjoy."

    ]
},

{
    id: 20,
    title: "Rasmalai",
    category: "Dessert",
    image: "http://localhost:5000/images/rasmalai.jpg",
    readyInMinutes: 60,
    servings: 5,

    rating: 4.9,
    reviews: 3600,

    summary:
        "Rasmalai is a soft paneer dessert served in sweet flavored milk with dry fruits.",

    ingredients: [

        "Paneer Balls",
        "Milk",
        "Sugar",
        "Cardamom",
        "Saffron",
        "Pistachios",
        "Almonds"

    ],

    instructions: [

        "Boil milk.",
        "Add sugar.",
        "Add saffron.",
        "Cook until thick.",
        "Add paneer balls.",
        "Cook for 10 minutes.",
        "Cool completely.",
        "Garnish with dry fruits.",
        "Refrigerate.",
        "Serve chilled."

    ]
},
{
    id: 21,
    title: "Kheer",
    category: "Dessert",
    image:  "http://localhost:5000/images/kheer.jpg",

    readyInMinutes: 40,
    servings: 5,

    rating: 4.8,
    reviews: 1850,

    summary:
        "Kheer is a traditional Indian rice pudding made with milk, rice, sugar and dry fruits.",

    ingredients: [

        "1 Litre Milk",
        "1/2 Cup Rice",
        "Sugar",
        "Cardamom",
        "Almonds",
        "Cashews",
        "Raisins"

    ],

    instructions: [

        "Boil milk.",
        "Wash rice.",
        "Add rice into milk.",
        "Cook on low flame.",
        "Add sugar.",
        "Mix cardamom.",
        "Add dry fruits.",
        "Cook until thick.",
        "Cool slightly.",
        "Serve hot or chilled."

    ]
},

{
    id: 22,
    title: "Gajar Halwa",
    category: "Dessert",
    image: "http://localhost:5000/images/gajar-halwa.jpg",

    readyInMinutes: 50,
    servings: 6,

    rating: 4.9,
    reviews: 2400,

    summary:
        "Gajar Halwa is a delicious Indian dessert prepared using carrots, milk and dry fruits.",

    ingredients: [

        "Carrots",
        "Milk",
        "Sugar",
        "Ghee",
        "Cardamom",
        "Cashews",
        "Almonds"

    ],

    instructions: [

        "Grate carrots.",
        "Heat ghee.",
        "Cook carrots.",
        "Add milk.",
        "Cook until milk evaporates.",
        "Add sugar.",
        "Cook for 10 minutes.",
        "Add dry fruits.",
        "Mix well.",
        "Serve warm."

    ]
},

{
    id: 23,
    title: "Jalebi",
    category: "Dessert",
    image: "http://localhost:5000/images/jalebi.jpg",


    readyInMinutes: 45,
    servings: 5,

    rating: 4.9,
    reviews: 3100,

    summary:
        "Jalebi is a famous Indian sweet prepared by deep frying fermented batter and soaking it in sugar syrup.",

    ingredients: [

        "Maida",
        "Corn Flour",
        "Curd",
        "Sugar",
        "Saffron",
        "Oil"

    ],

    instructions: [

        "Prepare batter.",
        "Ferment for 8 hours.",
        "Prepare sugar syrup.",
        "Heat oil.",
        "Pipe batter in circles.",
        "Deep fry.",
        "Soak in syrup.",
        "Drain excess syrup.",
        "Serve hot.",
        "Enjoy."

    ]
},

{
    id: 24,
    title: "Chocolate Cake",
    category: "Dessert",
    image: "http://localhost:5000/images/chocolate-cake.jpg",



    readyInMinutes: 60,
    servings: 8,

    rating: 4.9,
    reviews: 5200,

    summary:
        "Chocolate Cake is a soft, moist and delicious dessert loved by everyone.",

    ingredients: [

        "Flour",
        "Cocoa Powder",
        "Milk",
        "Sugar",
        "Butter",
        "Baking Powder",
        "Chocolate"

    ],

    instructions: [

        "Mix dry ingredients.",
        "Add milk and butter.",
        "Prepare smooth batter.",
        "Pour into cake tin.",
        "Bake for 35 minutes.",
        "Cool completely.",
        "Apply chocolate frosting.",
        "Decorate.",
        "Slice.",
        "Serve."

    ]
},

{
    id: 25,
    title: "Vanilla Ice Cream",
    category: "Dessert",
    image: "http://localhost:5000/images/vanilla-ice-cream.jpg",

    readyInMinutes: 20,
    servings: 6,

    rating: 4.8,
    reviews: 4100,

    summary:
        "Vanilla Ice Cream is a creamy frozen dessert made with milk, cream and vanilla essence.",

    ingredients: [

        "Milk",
        "Fresh Cream",
        "Sugar",
        "Vanilla Essence",
        "Corn Flour"

    ],

    instructions: [

        "Boil milk.",
        "Mix corn flour.",
        "Add sugar.",
        "Cool mixture.",
        "Add cream.",
        "Add vanilla.",
        "Freeze for 4 hours.",
        "Blend once.",
        "Freeze again.",
        "Serve chilled."

    ]
},

];


module.exports = recipes;