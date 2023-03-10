let burgerData;

export default {
    "success": true,
    "data": {
        "burgers": [
  {
    "id": 1,
    "name": "\"New Bacon-ings\" - Comes with Bacon",
    "price": "$5.95",
    "season": 1,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/1",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/1"
  },
  {
    "id": 2,
    "name": "The Child Molester - Comes with Candy!",
    "price": "$5.95",
    "season": 1,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/1",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/1"
  },
  {
    "id": 3,
    "name": "Foot Feta-ish Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/2",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/2"
  },
  {
    "id": 4,
    "name": "Tunami",
    "price": "$5.95",
    "season": 1,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/2",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/2"
  },
  {
    "id": 5,
    "name": "Mission A-Corn-Plished Burger - Comes with Corn Salsa.",
    "price": "$5.95",
    "season": 1,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/3",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/3"
  },
  {
    "id": 6,
    "name": "Pepper Don't Preach Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/3",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/3"
  },
  {
    "id": 7,
    "name": "Rest in Peas Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/3",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/3"
  },
  {
    "id": 8,
    "name": "Fig-eta Bout It Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/4",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/4"
  },
  {
    "id": 9,
    "name": "Chevre Which Way But Loose Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/4",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/4"
  },
  {
    "id": 10,
    "name": "The Roquefort Files Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/4",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/4"
  },
  {
    "id": 11,
    "name": "These Collards Don't Run Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/4",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/4"
  },
  {
    "id": 12,
    "name": "Camembert-ly Legal Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/7",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/5"
  },
  {
    "id": 13,
    "name": "Krauted House Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/7",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/5"
  },
  {
    "id": 14,
    "name": "Poblano Picasso Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/8",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/6"
  },
  {
    "id": 15,
    "name": "Salvador Cauliflower Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/8",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/6"
  },
  {
    "id": 16,
    "name": "Hit Me With Your Best Shallot Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/10",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/7"
  },
  {
    "id": 17,
    "name": "The Sound & The Curry Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/10",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/7"
  },
  {
    "id": 18,
    "name": "I've Created a Muenster Burger",
    "price": "$5.95",
    "season": 1,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/11",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/8"
  },
  {
    "id": 19,
    "name": "Something's NOT Fishy Burger - (100% Beef)",
    "price": "$5.95",
    "season": 1,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/12",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/9"
  },
  {
    "id": 20,
    "name": "Neither Fish Nor Fowl Burger - (100% Beef)",
    "price": "$5.95",
    "season": 1,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/12",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/9"
  },
  {
    "id": 21,
    "name": "One Fish, Two Fish, Red Fish Hamburger",
    "price": "$5.95",
    "season": 1,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/12",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/9"
  },
  {
    "id": 22,
    "name": "Take Me Out To The Burger - Comes with Peanuts and Crackerjacks.",
    "price": "$5.95",
    "season": 2,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/13",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/10"
  },
  {
    "id": 23,
    "name": "I'm Mad About Saffron - (Made with no saffron).",
    "price": "$5.95",
    "season": 2,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/14",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/11"
  },
  {
    "id": 24,
    "name": "Chard To A Crisp Burger",
    "price": "$5.95",
    "season": 2,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/15",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/12"
  },
  {
    "id": 25,
    "name": "Burger A La Mode - Comes with ice cream (Not on top)",
    "price": "$5.95",
    "season": 2,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/16",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/13"
  },
  {
    "id": 26,
    "name": "Shake Your Honeymaker Burger - (Comes with Honey Mustard)",
    "price": "$5.95",
    "season": 2,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/16",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/13"
  },
  {
    "id": 27,
    "name": "Use It Or Bleus It Burger - (Comes with Bleu Cheese)",
    "price": "$5.95",
    "season": 2,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/16",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/13"
  },
  {
    "id": 28,
    "name": "The One Yam Band Burger - (Comes with yams)",
    "price": "$5.95",
    "season": 2,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/16",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/13"
  },
  {
    "id": 29,
    "name": "Do Brussel Burger - (Comes with brussel sprouts)",
    "price": "$5.95",
    "season": 2,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/16",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/13"
  },
  {
    "id": 30,
    "name": "Papaya Was A Rolling Stone Burger",
    "price": "$5.95",
    "season": 2,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/17",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/14"
  },
  {
    "id": 31,
    "name": "Good Night and Good Leek Burger",
    "price": "$5.95",
    "season": 2,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/17",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/14"
  },
  {
    "id": 32,
    "name": "Band On The Bun Burger - Comes with Wings.",
    "price": "$5.95",
    "season": 2,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/17",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/14"
  },
  {
    "id": 33,
    "name": "Chorizo Your Own Adventure Burger",
    "price": "$5.95",
    "season": 2,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/18",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/15"
  },
  {
    "id": 34,
    "name": "What's The Worcestershire That Could Happen Burger.",
    "price": "$5.95",
    "season": 2,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/18",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/15"
  },
  {
    "id": 35,
    "name": "Where Have You Bean All My Life Burger - Comes with Baked Beans.",
    "price": "$5.95",
    "season": 2,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/18",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/15"
  },
  {
    "id": 36,
    "name": "It's fun to eat at the rYeMCA Burger - (Comes on Rye w/ Mustard, Cheese & Avocado)",
    "price": "$5.95",
    "season": 2,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/19",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/16"
  },
  {
    "id": 37,
    "name": "If Looks Could Kale Burger",
    "price": "$5.95",
    "season": 2,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/20",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/17"
  },
  {
    "id": 38,
    "name": "Little Swiss Bunshine Burger - (Comes on a buttered bun)",
    "price": "$5.95",
    "season": 2,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/20",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/17"
  },
  {
    "id": 39,
    "name": "Girls Just Wanna Have Fennel Burger",
    "price": "$5.95",
    "season": 2,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/20",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/17"
  },
  {
    "id": 40,
    "name": "The Final Kraut Down Burger (Comes with sauerkraut)",
    "price": "$5.95",
    "season": 2,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/20",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/17"
  },
  {
    "id": 41,
    "name": "Sit and Spinach Burger",
    "price": "$5.95",
    "season": 2,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/21",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/18"
  },
  {
    "id": 42,
    "name": "Sweaty Palms Burger - (Comes with hearts of palm)",
    "price": "$5.95",
    "season": 2,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/21",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/18"
  },
  {
    "id": 43,
    "name": "Poutine on the Ritz Burger - (Comes with poutine fries)",
    "price": "$5.95",
    "season": 3,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/22",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/19"
  },
  {
    "id": 44,
    "name": "The Don't Get Creme Fraiche With Me Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/22",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/19"
  },
  {
    "id": 45,
    "name": "The Jack-O-Lentil Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/24",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/20"
  },
  {
    "id": 46,
    "name": "Itsy Bitsy Teeny Weenie Yellow Polka-Dot Zucchini Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/25",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/21"
  },
  {
    "id": 47,
    "name": "Summer Thyme Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/25",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/21"
  },
  {
    "id": 48,
    "name": "Butterface Burger - (served with butter lettuce)",
    "price": "$5.95",
    "season": 3,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/25",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/21"
  },
  {
    "id": 49,
    "name": "Beets Me Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/25",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/21"
  },
  {
    "id": 50,
    "name": "We're Here We're Gruyere, Get Used to It Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/25",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/21"
  },
  {
    "id": 51,
    "name": "Plymouth Roquefort Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/27",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/22"
  },
  {
    "id": 52,
    "name": "She's a Super Leek Burger - (Comes with braised leeks)",
    "price": "$5.95",
    "season": 3,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/28",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/23"
  },
  {
    "id": 53,
    "name": "Let's Get Fris????e Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/28",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/23"
  },
  {
    "id": 54,
    "name": "Open Sesame Burger (Served open-faced on a sesame seed bun)",
    "price": "$5.95",
    "season": 3,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/29",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/24"
  },
  {
    "id": 55,
    "name": "Chipotle Off the Old Block Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/29",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/24"
  },
  {
    "id": 56,
    "name": "Don't Give Me No Chive Burger (served with no chives)",
    "price": "$5.95",
    "season": 3,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/29",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/24"
  },
  {
    "id": 57,
    "name": "Pickle My Funny Bone Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/29",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/24"
  },
  {
    "id": 58,
    "name": "Yes I Cayenne Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/30",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/25"
  },
  {
    "id": 59,
    "name": "Bean Spirit - (Comes with beans)",
    "price": "$5.95",
    "season": 3,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/30",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/25"
  },
  {
    "id": 60,
    "name": "One Horse Open Slaw Burger - (Comes with slaw, no horse)",
    "price": "$5.95",
    "season": 3,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/31",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/26"
  },
  {
    "id": 61,
    "name": "Santa Claus Is Cumin to Town Burger - (with cumin)",
    "price": "$5.95",
    "season": 3,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/31",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/26"
  },
  {
    "id": 62,
    "name": "Fifth Day of Christmas Burger - (Comes with five golden rings of onion)",
    "price": "$5.95",
    "season": 3,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/31",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/26"
  },
  {
    "id": 63,
    "name": "Jingle Bell Pepper Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/31",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/26"
  },
  {
    "id": 64,
    "name": "Home for the Challah-Days Burger - (Comes on a challah roll)",
    "price": "$5.95",
    "season": 3,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/31",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/26"
  },
  {
    "id": 65,
    "name": "The Silentil Night Burger - (Comes with lentils)",
    "price": "$5.95",
    "season": 3,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/31",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/26"
  },
  {
    "id": 66,
    "name": "50 Ways to Leave Your Guava Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/32",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/27"
  },
  {
    "id": 67,
    "name": "Ruta-Bag-A Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/32",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/27"
  },
  {
    "id": 68,
    "name": "Don't Go Brocking My Heart Burger - (with broccoli and artichoke hearts)",
    "price": "$5.95",
    "season": 3,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/33",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/28"
  },
  {
    "id": 69,
    "name": "Eggers Can't Be Cheesers Burger - (with fried egg and cheese)",
    "price": "$5.95",
    "season": 3,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/33",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/28"
  },
  {
    "id": 70,
    "name": "Freedom of Choys Burger - (comes with bok choy)",
    "price": "$5.95",
    "season": 3,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/33",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/28"
  },
  {
    "id": 71,
    "name": "Grandpa Muenster Burger - (10% Senior Discount)",
    "price": "$5.95",
    "season": 3,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/34",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/29"
  },
  {
    "id": 72,
    "name": "Mushroom With A View Burger - (Porcini on a double decker)",
    "price": "$5.95",
    "season": 3,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/34",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/29"
  },
  {
    "id": 73,
    "name": "I Heartichoke You Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/35",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/30"
  },
  {
    "id": 74,
    "name": "Don't You Four Cheddar 'Bout Me Burger - (Comes with four kinds of cheddar)",
    "price": "$5.95",
    "season": 3,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/36",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/31"
  },
  {
    "id": 75,
    "name": "I Mint to Do That Burger - (Comes with mint relish)",
    "price": "$5.95",
    "season": 3,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/36",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/31"
  },
  {
    "id": 76,
    "name": "Only the Provolonely Burger - (Comes with provolone)",
    "price": "$5.95",
    "season": 3,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/36",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/31"
  },
  {
    "id": 77,
    "name": "Sharp Cheddar Dressed Man (Comes with sharp cheddar)",
    "price": "$5.95",
    "season": 3,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/37",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/32"
  },
  {
    "id": 78,
    "name": "I Know Why the Cajun Burger Sings",
    "price": "$5.95",
    "season": 3,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/38",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/33"
  },
  {
    "id": 79,
    "name": "Tarragon in Sixty Seconds Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/38",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/33"
  },
  {
    "id": 80,
    "name": "Chile Relleno-You-Didn't Burger",
    "price": "$5.95",
    "season": 3,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/39",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/34"
  },
  {
    "id": 81,
    "name": "Bob's Burgers is closed for fumigation, and the Belchers drive to Florida, so there are no Burgers of the Day in this episode.",
    "price": "$5.95",
    "season": 3,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/40",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/35"
  },
  {
    "id": 82,
    "name": "Top Bun Burger (comes on our best seven-grain bun)",
    "price": "$5.95",
    "season": 3,
    "episode": 20,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/42",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/36"
  },
  {
    "id": 83,
    "name": "Top Butt Burger (your face looks like a butt)",
    "price": "$5.95",
    "season": 3,
    "episode": 20,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/42",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/36"
  },
  {
    "id": 84,
    "name": "So Many Fennel So Little Thyme Burger - (comes with lots of fennel, no thyme)",
    "price": "$5.50",
    "season": 3,
    "episode": 22,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/44",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/37"
  },
  {
    "id": 85,
    "name": "National Pass-Thyme Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 23,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/45",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/38"
  },
  {
    "id": 86,
    "name": "Free To Brie You and Me Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 23,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/45",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/38"
  },
  {
    "id": 87,
    "name": "The Cauliflower's Cumin from Inside the House Burger - (Comes with cauliflower and cumin)",
    "price": "$5.95",
    "season": 4,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/47",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/39"
  },
  {
    "id": 88,
    "name": "Sprouts! Sprouts! Sprouts It All Out! Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/48",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/40"
  },
  {
    "id": 89,
    "name": "A Leek of Their Own Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/49",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/41"
  },
  {
    "id": 90,
    "name": "Gourdon-Hamsey Burger (Comes with squash and ham).",
    "price": "$5.95",
    "season": 4,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/50",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/42"
  },
  {
    "id": 91,
    "name": "I'm OK, You're Ok-ra Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/52",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/43"
  },
  {
    "id": 92,
    "name": "Bohemian Radishy Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/52",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/43"
  },
  {
    "id": 93,
    "name": "Edward James Olive-most Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/52",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/43"
  },
  {
    "id": 94,
    "name": "Winter Muensterland Burger with Muenster cheese - Side of snow peas",
    "price": "$5.95",
    "season": 4,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/56",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/44"
  },
  {
    "id": 95,
    "name": "The Longest Chard Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/56",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/44"
  },
  {
    "id": 96,
    "name": "Kale Mary Burger - Served with kale",
    "price": "$5.95",
    "season": 4,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/56",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/44"
  },
  {
    "id": 97,
    "name": "The Troy Oinkman Burger - Served with bacon",
    "price": "$5.95",
    "season": 4,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/56",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/44"
  },
  {
    "id": 98,
    "name": "Onion Ring Around the Rosemary Burger",
    "price": "$5.95",
    "season": 4,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/64",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/45"
  },
  {
    "id": 99,
    "name": "Not fully visible- Sgt Poblano's....",
    "price": "$5.95",
    "season": 4,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/64",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/45"
  },
  {
    "id": 100,
    "name": "Entire episode takes place at Wagstaff School. No Burger of the Day.",
    "price": "$5.95",
    "season": 5,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/68",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/46"
  },
  {
    "id": 101,
    "name": "Texas Chainsaw Massa-curd Burger",
    "price": "$5.95",
    "season": 5,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/69",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/47"
  },
  {
    "id": 102,
    "name": "The Human Polenta-pede Burger",
    "price": "$5.95",
    "season": 5,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/69",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/47"
  },
  {
    "id": 103,
    "name": "Kales From the Crypt Burger",
    "price": "$5.95",
    "season": 5,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/69",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/47"
  },
  {
    "id": 104,
    "name": "Paranormal Pepper Jack-tivity Burger",
    "price": "$5.95",
    "season": 5,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/69",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/47"
  },
  {
    "id": 105,
    "name": "Run Gorgonzola Run Burger - Made with Gorgonzola",
    "price": "$5.95",
    "season": 5,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/72",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/48"
  },
  {
    "id": 106,
    "name": "Cajun Gracefully Burger",
    "price": "$5.95",
    "season": 5,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/74",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/49"
  },
  {
    "id": 107,
    "name": "Blondes Have More Fun-gus Burger - Comes with mushrooms",
    "price": "$5.95",
    "season": 5,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/74",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/49"
  },
  {
    "id": 108,
    "name": "The Yam Ship Burger (comes with yams)",
    "price": "$5.95",
    "season": 6,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/90",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/50"
  },
  {
    "id": 109,
    "name": "You can't fight City Challa Burger (comes on a Challah roll)",
    "price": "$5.95",
    "season": 6,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/90",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/50"
  },
  {
    "id": 110,
    "name": "Snipwrecked Burger - (comes with parsnips)",
    "price": "$5.95",
    "season": 6,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/90",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/50"
  },
  {
    "id": 111,
    "name": "Breaking Radish Burger (comes with a slice of Radish)",
    "price": "$5.95",
    "season": 6,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/91",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/51"
  },
  {
    "id": 112,
    "name": "The Pear Tree Burger (with sliced pears - partridge not included)",
    "price": "$5.95",
    "season": 6,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/93",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/52"
  },
  {
    "id": 113,
    "name": "Be My Valen-thyme Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/95",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/53"
  },
  {
    "id": 114,
    "name": "The Say Cheese Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/96",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/54"
  },
  {
    "id": 115,
    "name": "It Takes Bun to Know Bun Burger (comes on a fancy bun)",
    "price": "$5.95",
    "season": 6,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/96",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/54"
  },
  {
    "id": 116,
    "name": "Heads Shoulders Knees and Tomatoes Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/96",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/54"
  },
  {
    "id": 117,
    "name": "I'm Picklish Burger (comes with pickles)",
    "price": "$5.95",
    "season": 6,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/96",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/54"
  },
  {
    "id": 118,
    "name": "Runny Out of Thyme Burger (comes with a runny fried egg)",
    "price": "$5.95",
    "season": 6,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/96",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/54"
  },
  {
    "id": 119,
    "name": "Total Eclipse of the Havarti Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/98",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/55"
  },
  {
    "id": 120,
    "name": "Ring Around the Collard Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/99",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/56"
  },
  {
    "id": 121,
    "name": "To Thine Own Self be Bleu Burger (served with bleu cheese)",
    "price": "$5.95",
    "season": 6,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/100",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/57"
  },
  {
    "id": 122,
    "name": "Edamame Dearest Burger (comes with edamame)",
    "price": "$5.95",
    "season": 6,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/101",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/58"
  },
  {
    "id": 123,
    "name": "Barley Davidson Burger (comes on a barley roll)",
    "price": "$5.95",
    "season": 6,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/101",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/58"
  },
  {
    "id": 124,
    "name": "Captain Pepper Jack Marrow Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/102",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/59"
  },
  {
    "id": 125,
    "name": "Curry On My Wayward Bun Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/102",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/59"
  },
  {
    "id": 126,
    "name": "Frisee It, Don't Spray It Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/102",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/59"
  },
  {
    "id": 127,
    "name": "We Bought a Zucchini Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/102",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/59"
  },
  {
    "id": 128,
    "name": "All In A Glaze Work Burger (Served with Balsamic Glaze)",
    "price": "$5.95",
    "season": 6,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/103",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/60"
  },
  {
    "id": 129,
    "name": "If At First You Sesame Seed, Thai, Thai, Again Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/103",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/60"
  },
  {
    "id": 130,
    "name": "Turn the Other Leek Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/103",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/60"
  },
  {
    "id": 131,
    "name": "Fig Lebowski Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/104",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/61"
  },
  {
    "id": 132,
    "name": "My Farro Lady Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/104",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/61"
  },
  {
    "id": 133,
    "name": "Chutney the Front Door Burger (Comes with Mango Chutney)",
    "price": "$5.95",
    "season": 6,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/105",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/62"
  },
  {
    "id": 134,
    "name": "You're Kimchi the Best Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/105",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/62"
  },
  {
    "id": 135,
    "name": "Teriyaki a New One Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/105",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/62"
  },
  {
    "id": 136,
    "name": "Aw Nuts Burger (comes with peanut butter)",
    "price": "$5.95",
    "season": 6,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/106",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/63"
  },
  {
    "id": 137,
    "name": "The Glass Fromagerie Burger",
    "price": "$5.95",
    "season": 6,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/106",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/63"
  },
  {
    "id": 138,
    "name": "The Hand That Rocks the Bagel Burger (comes with an everything bagel)",
    "price": "$5.95",
    "season": 7,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/107",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/64"
  },
  {
    "id": 139,
    "name": "Put Me in Poached Burger (comes with a poached egg)",
    "price": "$5.95",
    "season": 7,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/107",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/64"
  },
  {
    "id": 140,
    "name": "Endive Had the Time of My Life Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/108",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/65"
  },
  {
    "id": 141,
    "name": "You Spinach Me Right Round Spinach Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/109",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/66"
  },
  {
    "id": 142,
    "name": "Wasabi My Guest Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/109",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/66"
  },
  {
    "id": 143,
    "name": "Muenster Under the Bun Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/110",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/67"
  },
  {
    "id": 144,
    "name": "Do Fry for Me Argentina Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/111",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/68"
  },
  {
    "id": 145,
    "name": "-zel Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/111",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/68"
  },
  {
    "id": 146,
    "name": "I Know What You Did Last Summer Squash Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/111",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/68"
  },
  {
    "id": 147,
    "name": "Chili Wonka Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/111",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/68"
  },
  {
    "id": 148,
    "name": "Corned Identity Burger (comes with corned beef)",
    "price": "$5.95",
    "season": 7,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/111",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/68"
  },
  {
    "id": 149,
    "name": "Tangled Up in Blueberry Burger (comes with a blueberry compote)",
    "price": "$5.95",
    "season": 7,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/111",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/68"
  },
  {
    "id": 150,
    "name": "When Harry Met Salumi Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/111",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/68"
  },
  {
    "id": 151,
    "name": "The Olives Kitteridge Burger (with olive tapenade)",
    "price": "$5.95",
    "season": 7,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/112",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/69"
  },
  {
    "id": 152,
    "name": "Away in a Mango Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/114",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/70"
  },
  {
    "id": 153,
    "name": "Caper the Friendly Goat Cheese Burger (s/w capers & feta)",
    "price": "$5.95",
    "season": 7,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/115",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/71"
  },
  {
    "id": 154,
    "name": "Video Killed the Radicchio Star Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/115",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/71"
  },
  {
    "id": 155,
    "name": "If You've Got It, Croissant It Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/115",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/71"
  },
  {
    "id": 156,
    "name": "Andrew Diced Carrots Burger (comes with pickled diced carrots)",
    "price": "$5.95",
    "season": 7,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/116",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/72"
  },
  {
    "id": 157,
    "name": "Garlic Shandling Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/117",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/73"
  },
  {
    "id": 158,
    "name": "Little Red Bruschett-a Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/117",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/73"
  },
  {
    "id": 159,
    "name": "Walking in a Winter Comes-with-cran Burger (comes with cranberry sauce)",
    "price": "$5.95",
    "season": 7,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/117",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/73"
  },
  {
    "id": 160,
    "name": "Stilton on the Dock of the Bun Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/117",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/73"
  },
  {
    "id": 161,
    "name": "It's My Havarti and I'll Rye If I Want To",
    "price": "$5.95",
    "season": 7,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/118",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/74"
  },
  {
    "id": 162,
    "name": "Fingerling Brothers and Barnum and Bay Leaves Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/118",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/74"
  },
  {
    "id": 163,
    "name": "Bites-",
    "price": "$5.95",
    "season": 7,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/119",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/75"
  },
  {
    "id": 164,
    "name": "Citizen Kale Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/119",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/75"
  },
  {
    "id": 165,
    "name": "It Takes Two to Mango",
    "price": "$5.95",
    "season": 7,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/119",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/75"
  },
  {
    "id": 166,
    "name": "Nothing Compares 2 Blue (Cheese) Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/120",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/76"
  },
  {
    "id": 167,
    "name": "For Those About to Roquefort We Salute You Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/121",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/77"
  },
  {
    "id": 168,
    "name": "The Oh Con-Pear Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/121",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/77"
  },
  {
    "id": 169,
    "name": "The Choys are Bok in Town Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/122",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/78"
  },
  {
    "id": 170,
    "name": "Easy as.....",
    "price": "$5.95",
    "season": 7,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/122",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/78"
  },
  {
    "id": 171,
    "name": "Emergency Eggs-it Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/123",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/79"
  },
  {
    "id": 172,
    "name": "Passion of the Cress Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/123",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/79"
  },
  {
    "id": 173,
    "name": "Another Burger of the Day is just about visible in the establishing shot of the restaurant when Teddy gives masks to the family.",
    "price": "$5.95",
    "season": 7,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/123",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/79"
  },
  {
    "id": 174,
    "name": "Glory Glory Jalape????o Burger",
    "price": "$5.95",
    "season": 7,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/126",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/80"
  },
  {
    "id": 175,
    "name": "Riding in Cars with Bok Choys",
    "price": "$5.95",
    "season": 7,
    "episode": 21,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/128",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/81"
  },
  {
    "id": 176,
    "name": "Pear Goes the Neighborhood (comes with a side of pear salad)",
    "price": "$5.95",
    "season": 8,
    "episode": 22,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/129",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/82"
  },
  {
    "id": 177,
    "name": "The Blanc Canvas Burger (comes with a fromage blanc)",
    "price": "$5.95",
    "season": 8,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/130",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/83"
  },
  {
    "id": 178,
    "name": "Topless the Morning To You Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/130",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/83"
  },
  {
    "id": 179,
    "name": "Burrata Be -law Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/131",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/84"
  },
  {
    "id": 180,
    "name": "Weekend at Bearnaise Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/131",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/84"
  },
  {
    "id": 181,
    "name": "The Clear and Present Ginger Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/133",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/85"
  },
  {
    "id": 182,
    "name": "The Shut Up and Swiss Me Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/137",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/86"
  },
  {
    "id": 183,
    "name": "Step Into the Okra-tagon Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/138",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/87"
  },
  {
    "id": 184,
    "name": "Havarti Like It's 1999 Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/138",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/87"
  },
  {
    "id": 185,
    "name": "Smells Like Bean Spirit Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/138",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/87"
  },
  {
    "id": 186,
    "name": "Corn This Way Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/138",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/87"
  },
  {
    "id": 187,
    "name": "The Sous-vide and the Banshees Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/139",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/88"
  },
  {
    "id": 188,
    "name": "The Full Head of Heir-loom Tomato Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/139",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/88"
  },
  {
    "id": 189,
    "name": "The What's Kala-mata with You Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/139",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/88"
  },
  {
    "id": 190,
    "name": "The We Bought a Zucchini Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/139",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/88"
  },
  {
    "id": 191,
    "name": "The Turn ... Around...",
    "price": "$5.95",
    "season": 8,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/140",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/89"
  },
  {
    "id": 192,
    "name": "The Olive What She's Having Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/140",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/89"
  },
  {
    "id": 193,
    "name": "The Rosemary's Baby Spinach Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/140",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/89"
  },
  {
    "id": 194,
    "name": "The Wasabi with You Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/141",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/90"
  },
  {
    "id": 195,
    "name": "The Heirloom Where it Happens Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/141",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/90"
  },
  {
    "id": 196,
    "name": "Judy Garlic Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/142",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/91"
  },
  {
    "id": 197,
    "name": "You Won't Believe It's Not Buttersquash Burger (served with zucchini)",
    "price": "$5.95",
    "season": 8,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/144",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/92"
  },
  {
    "id": 198,
    "name": "The Paprika Smurf Burger (comes with blue potato fries)",
    "price": "$5.95",
    "season": 8,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/144",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/92"
  },
  {
    "id": 199,
    "name": "The Here I Am Broccoli Like a Hurricane Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/145",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/93"
  },
  {
    "id": 200,
    "name": "The Older with More Eggs-perience Burger (-aged burger with a fried egg on top)",
    "price": "$5.95",
    "season": 8,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/145",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/93"
  },
  {
    "id": 201,
    "name": "Portobello the Belt Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/146",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/94"
  },
  {
    "id": 202,
    "name": "Walk This Waioli Burger (comes with wasabi aioli)",
    "price": "$5.95",
    "season": 8,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/146",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/94"
  },
  {
    "id": 203,
    "name": "Shishito Corleone Burger (comes with shishito peppers)",
    "price": "$5.95",
    "season": 8,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/146",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/94"
  },
  {
    "id": 204,
    "name": "Quantum of Sal- Burger (comes with -pote)",
    "price": "$5.95",
    "season": 8,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/146",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/94"
  },
  {
    "id": 205,
    "name": "The Gouda Wife Burger (comes with Mature Gouda)",
    "price": "$5.95",
    "season": 8,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/146",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/94"
  },
  {
    "id": 206,
    "name": "The Sun'll Come Out To-Marrow Burger (comes with bone marrow)",
    "price": "$5.95",
    "season": 8,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/147",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/95"
  },
  {
    "id": 207,
    "name": "The Sneakin' Celery Down the Alley Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/147",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/95"
  },
  {
    "id": 208,
    "name": "The 500 Glaze of Summer Burger (comes with Pomegranate Glaze)",
    "price": "$5.95",
    "season": 8,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/147",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/95"
  },
  {
    "id": 209,
    "name": "The I'm Getting Too Old For This Shishito Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 20,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/149",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/96"
  },
  {
    "id": 210,
    "name": "The Don't Dream It's Okra Burger",
    "price": "$5.95",
    "season": 8,
    "episode": 20,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/149",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/96"
  },
  {
    "id": 211,
    "name": "THE DRAGONFRUIT ME TO HELL BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/151",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/97"
  },
  {
    "id": 212,
    "name": "WON'T BAGUETTE FOOLED AGAIN BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/152",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/98"
  },
  {
    "id": 213,
    "name": "TURMERIC-A THE BEAUTIFUL BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/153",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/99"
  },
  {
    "id": 214,
    "name": "THE FINDERS CAPERS BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/153",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/99"
  },
  {
    "id": 215,
    "name": "THE COPS AND RABE-ERS BURGER (Topped with Broccoli Rabes)",
    "price": "$5.95",
    "season": 9,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/153",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/99"
  },
  {
    "id": 216,
    "name": "LITTLE CHOP OF HORSERADISH BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/153",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/99"
  },
  {
    "id": 217,
    "name": "MY BLOODY KALE-ENTINE BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/154",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/100"
  },
  {
    "id": 218,
    "name": "THE ABSENTEE SHALLOT BURGER (Comes with crispy shallots)",
    "price": "$5.95",
    "season": 9,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/155",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/101"
  },
  {
    "id": 219,
    "name": "THE LAND OF THE SLAW-ST BURGER (Comes with pickle slaw)",
    "price": "$5.95",
    "season": 9,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/155",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/101"
  },
  {
    "id": 220,
    "name": "FOCACCIA RED HANDED BURGER (on focaccia with beets)",
    "price": "$5.95",
    "season": 9,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/156",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/102"
  },
  {
    "id": 221,
    "name": "THE FRANKIE GOES TO HOLLANDAISE BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/158",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/103"
  },
  {
    "id": 222,
    "name": "THE FIFTY GLAZE TO EAT YOUR BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/158",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/103"
  },
  {
    "id": 223,
    "name": "THE THROW YOUR HANDS IN THE HEIRLOOM BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/158",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/103"
  },
  {
    "id": 224,
    "name": "THE COLBY BY YOUR NAME BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/159",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/104"
  },
  {
    "id": 225,
    "name": "THE AROUND THE WORLD IN EIGHTY DATES BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/159",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/104"
  },
  {
    "id": 226,
    "name": "THE FIGGY SMALLS BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/159",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/104"
  },
  {
    "id": 227,
    "name": "THE DILL CRAZY AFTER ALL THESE GRUYERES BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/159",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/104"
  },
  {
    "id": 228,
    "name": "THE SMILLA'S SENSE OF SNOWPEAS BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/160",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/105"
  },
  {
    "id": 229,
    "name": "THE SANTA SLAWS IS COMING TO TOWN BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/160",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/105"
  },
  {
    "id": 230,
    "name": "THE BUSTLE AND FLOW BURGER (served with Brussel Sprouts)",
    "price": "$5.95",
    "season": 9,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/161",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/106"
  },
  {
    "id": 231,
    "name": "THE MUSH-AROOM ABOUT NOTHING BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/162",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/107"
  },
  {
    "id": 232,
    "name": "THE THROW YOUR HANDS IN THE GRUYERE BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/164",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/108"
  },
  {
    "id": 233,
    "name": "THE SEALED WITH A SWISS BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/164",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/108"
  },
  {
    "id": 234,
    "name": "THE TWO LEFT BEET BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/164",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/108"
  },
  {
    "id": 235,
    "name": "THE I LOVE YOU JUST THE WHEY YOU ARE BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/164",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/108"
  },
  {
    "id": 236,
    "name": "VIDEO KILLED THE RADICCHIO STAR BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/165",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/109"
  },
  {
    "id": 237,
    "name": "THE I HATE TO SEE YOU BRIE-VE BUT I LOVE TO WATCH YOU GO BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/166",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/110"
  },
  {
    "id": 238,
    "name": "MURDER, KIMCHI WROTE BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/166",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/110"
  },
  {
    "id": 239,
    "name": "THE CHEVRE LITTLE THING SHE DOES IS MAGIC BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/167",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/111"
  },
  {
    "id": 240,
    "name": "THE GORGON-BABY-GONE BURGER (comes with gorgonzola cheese)",
    "price": "$5.95",
    "season": 9,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/167",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/111"
  },
  {
    "id": 241,
    "name": "THE STRAIGHT AND MARROW BURGER (comes with marrow)",
    "price": "$5.95",
    "season": 9,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/167",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/111"
  },
  {
    "id": 242,
    "name": "THE ALL HOT AND COLLARD BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/167",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/111"
  },
  {
    "id": 243,
    "name": "THE SOMEONE RACLETTE THE BED BURGER (comes with raclette cheese)",
    "price": "$5.95",
    "season": 9,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/167",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/111"
  },
  {
    "id": 244,
    "name": "THE RUTH TOMATER GINSBURGER (comes with heirloom tomatoes and pickled ginger)",
    "price": "$5.95",
    "season": 9,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/168",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/112"
  },
  {
    "id": 245,
    "name": "THE DEVIL'S AVOCADO-CATE BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/169",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/113"
  },
  {
    "id": 246,
    "name": "THE FLEETWOOD JACK BURGER (comes with sweet little pies, jack cheese)",
    "price": "$5.95",
    "season": 9,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/169",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/113"
  },
  {
    "id": 247,
    "name": "THE JUDGE BRINE-HOLD BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 21,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/171",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/114"
  },
  {
    "id": 248,
    "name": "ONE FLEW OKRA THE COUSCOUS NEST BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 20,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/170",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/115"
  },
  {
    "id": 249,
    "name": "LORDY LORDY LOOK WHO'S ROQUEFORT-Y BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 20,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/170",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/115"
  },
  {
    "id": 250,
    "name": "THE HICKORY CHICORY GUAC BURGER",
    "price": "$5.95",
    "season": 9,
    "episode": 20,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/170",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/115"
  },
  {
    "id": 251,
    "name": "THE PEA-BRIE'S BIG ADVENTURE BURGER (Pea Protein Burger w/Brie)",
    "price": "$5.95",
    "season": 10,
    "episode": 22,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/172",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/116"
  },
  {
    "id": 252,
    "name": "THE OLIVE ME WHY NOT TAKE OLIVE ME? BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/173",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/117"
  },
  {
    "id": 253,
    "name": "THE HUNT FOR RED ONION-TOBER BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/174",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/118"
  },
  {
    "id": 254,
    "name": "THE WHAT IF PEAPOD WAS ONE OF US BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/175",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/119"
  },
  {
    "id": 255,
    "name": "THE THOUSAND CHARD STARE BURGER (comes with thousand island dressing and swiss chard)",
    "price": "$5.95",
    "season": 10,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/178",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/120"
  },
  {
    "id": 256,
    "name": "THE HAWK AND CHICKPEAS BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/178",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/120"
  },
  {
    "id": 257,
    "name": "THE TWISTED SWISS-STER BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/179",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/121"
  },
  {
    "id": 258,
    "name": "THE OAXACA WAKA WAKA BURGER (comes with oaxaca cheese)",
    "price": "$5.95",
    "season": 10,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/181",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/122"
  },
  {
    "id": 259,
    "name": "THE CREME FRAICHE PRINCE OF BELL PEPPERS BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/181",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/122"
  },
  {
    "id": 260,
    "name": "THE FRIED OFF INTO THE SUNSET BURGER (comes with a fried egg)",
    "price": "$5.95",
    "season": 10,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/181",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/122"
  },
  {
    "id": 261,
    "name": "THE BER-GOUDA TRIANGLE BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/183",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/123"
  },
  {
    "id": 262,
    "name": "THE MAMA SAID THERE'D BE GLAZE LIKE THIS BURGER (Comes with a Worcestershire glaze)",
    "price": "$5.95",
    "season": 10,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/183",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/123"
  },
  {
    "id": 263,
    "name": "THE EASY COME, ASIAGO BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/183",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/123"
  },
  {
    "id": 264,
    "name": "THE RANDOM JACKS OF CHIVE-NESS BURGER (With Monterrey Jack cheese and chives)",
    "price": "$5.95",
    "season": 10,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/184",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/124"
  },
  {
    "id": 265,
    "name": "THE IF IT'S YELLOW LET IT PORTOBELLO BURGER (With yellow peppers and portobello mushrooms)",
    "price": "$5.95",
    "season": 10,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/184",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/124"
  },
  {
    "id": 266,
    "name": "THE THIN RED PEPPER BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/184",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/124"
  },
  {
    "id": 267,
    "name": "THE GOAT TELL IT ON THE MOUNTAIN BURGER (comes with goat cheese)",
    "price": "$5.95",
    "season": 10,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/185",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/125"
  },
  {
    "id": 268,
    "name": "THE GLAZED AND INFUSED BURGER (bourbon glazed and infused with bacon)",
    "price": "$5.95",
    "season": 10,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/185",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/125"
  },
  {
    "id": 269,
    "name": "THE 'SHROOM WHERE IT HAPPENS BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/186",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/126"
  },
  {
    "id": 270,
    "name": "CLOVES ENCOUNTERS BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/186",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/126"
  },
  {
    "id": 271,
    "name": "IN RICOTTA DA VIDA BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/186",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/126"
  },
  {
    "id": 272,
    "name": "NICE GUYS SPINACH LAST BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/186",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/126"
  },
  {
    "id": 273,
    "name": "THIS IS WHAT IT SOUNDS LIKE WHEN CLOVES FRY BURGER (with fried garlic cloves)",
    "price": "$5.95",
    "season": 10,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/187",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/127"
  },
  {
    "id": 274,
    "name": "THE HAPPY PAINT PATTY'S DAY BURGER (whiskey brushed patty)",
    "price": "$5.95",
    "season": 10,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/188",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/128"
  },
  {
    "id": 275,
    "name": "THE HOLLANDAISE RO-O-OH-O-OH-O-OH-OH-OH-OLL BURGER (comes with hollandaise sauce on a Kaiser roll)",
    "price": "$5.95",
    "season": 10,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/189",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/129"
  },
  {
    "id": 276,
    "name": "BETTER CAULIFLOWER SAUL BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/190",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/130"
  },
  {
    "id": 277,
    "name": "THE CHILI-DELPHIA STORY BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/191",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/131"
  },
  {
    "id": 278,
    "name": "THE DEEP BLUE BRIE BURGER (comes with blue cheese and brie)",
    "price": "$5.95",
    "season": 10,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/191",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/131"
  },
  {
    "id": 279,
    "name": "THE STAYIN' A-CHIVE BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/191",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/131"
  },
  {
    "id": 280,
    "name": "THE ALMOND BUTTERS BAND BURGER (comes with toasted ... utter)",
    "price": "$5.95",
    "season": 10,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/191",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/131"
  },
  {
    "id": 281,
    "name": "THE INTO THIN HEIRLOOM BURGER",
    "price": "$5.95",
    "season": 10,
    "episode": 21,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/193",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/132"
  },
  {
    "id": 282,
    "name": "BRIGHT LEEKS, BIG CITY BURGER (comes with grilled leeks)",
    "price": "$5.95",
    "season": 11,
    "episode": 22,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/194",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/133"
  },
  {
    "id": 283,
    "name": "THE WHAT'S THE MATTER-HORN BURGER (with Swiss cheese crisps)",
    "price": "$5.95",
    "season": 11,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/195",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/134"
  },
  {
    "id": 284,
    "name": "PAINT IT BLACKBERRY BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/197",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/135"
  },
  {
    "id": 285,
    "name": "PLAY IT AGAIN YAM BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/197",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/135"
  },
  {
    "id": 286,
    "name": "THE NIGHT-PEAR ON ELM BEET BURGER (comes with pear and beet relish)",
    "price": "$5.95",
    "season": 11,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/198",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/136"
  },
  {
    "id": 287,
    "name": "THE BLEU COLLARD BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/199",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/137"
  },
  {
    "id": 288,
    "name": "THE UNBREAKABLE KIMCHI SCHMIDT BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/199",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/137"
  },
  {
    "id": 289,
    "name": "",
    "price": "$5.95",
    "season": 11,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/199",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/137"
  },
  {
    "id": 290,
    "name": "THE CHIMICHURRI UP AND WAIT BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/200",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/138"
  },
  {
    "id": 291,
    "name": "THE GUAC! OR MY MOM WILL SHOOT BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/200",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/138"
  },
  {
    "id": 292,
    "name": "THE EGGPLANT ONE ON ME BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 8,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/202",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/139"
  },
  {
    "id": 293,
    "name": "THE RYE OF THE STORM BURGER (served with a balsamic drizzle on a rye bun)",
    "price": "$5.95",
    "season": 11,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/203",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/140"
  },
  {
    "id": 294,
    "name": "ASIAGO FOR BROKE BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/203",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/140"
  },
  {
    "id": 295,
    "name": "THE TIKKA LOOK AT ME NOW BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/205",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/141"
  },
  {
    "id": 296,
    "name": "THE FOR BUTTER OR FOR WURST BURGER (with butter pickles and sausage)",
    "price": "$5.95",
    "season": 11,
    "episode": 13,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/207",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/142"
  },
  {
    "id": 297,
    "name": "THE GREEN A LITTLE BEAN OF ME BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 14,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/208",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/143"
  },
  {
    "id": 298,
    "name": "GRATERS OF THE SAUCED HAVART(i) BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 15,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/209",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/144"
  },
  {
    "id": 299,
    "name": "THE PECORINO ON SOMEONE YOUR OWN SIZE BURGER(comes with pecorino crisps)",
    "price": "$5.95",
    "season": 11,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/210",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/145"
  },
  {
    "id": 300,
    "name": "THE THREE CHEEKS TO THE WIND BURGER(comes with guaniciale)",
    "price": "$5.95",
    "season": 11,
    "episode": 16,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/210",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/145"
  },
  {
    "id": 301,
    "name": "THE GROOVE IS IN THE CHARD BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/211",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/146"
  },
  {
    "id": 302,
    "name": "STEP UP 2: THE BEETS BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/211",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/146"
  },
  {
    "id": 303,
    "name": "",
    "price": "$5.95",
    "season": 11,
    "episode": 17,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/211",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/146"
  },
  {
    "id": 304,
    "name": "THE MO, LARRY, AND CURRY BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 18,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/212",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/147"
  },
  {
    "id": 305,
    "name": "THE SHOULD I SAUTEE OR SHOULD I MANGO BURGER (comes with sauteed onions and mango salsa)",
    "price": "$5.95",
    "season": 11,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/213",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/148"
  },
  {
    "id": 306,
    "name": "DO THE CREMINI, DO THE THYME BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 19,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/213",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/148"
  },
  {
    "id": 307,
    "name": "PARME-JEAN-CLAUDE VAN HAMBURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 20,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/214",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/149"
  },
  {
    "id": 308,
    "name": "THE YOU CAN LEAD A HORSERADISH TO WATERCRESS BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 21,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/215",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/150"
  },
  {
    "id": 309,
    "name": "THE BREWSTER'S SCALLIONS BURGER",
    "price": "$5.95",
    "season": 11,
    "episode": 21,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/215",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/150"
  },
  {
    "id": 310,
    "name": "...YOU CALL ME BURGER (With mango chutney)",
    "price": "$5.95",
    "season": 11,
    "episode": 21,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/215",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/150"
  },
  {
    "id": 311,
    "name": "TAKE A BITE OUT OF LIME BURGER (With lime chutney)",
    "price": "$5.95",
    "season": 11,
    "episode": 21,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/215",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/150"
  },
  {
    "id": 312,
    "name": "...I AM... FATHER",
    "price": "$5.95",
    "season": 11,
    "episode": 21,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/215",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/150"
  },
  {
    "id": 313,
    "name": "STILTON CRAZY AFTER ALL THESE GRUYERES BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 22,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/216",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/151"
  },
  {
    "id": 314,
    "name": "THE IF I HAD A (PUMPER)NICKEL BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 1,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/217",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/152"
  },
  {
    "id": 315,
    "name": "THE YOU HAD ME AT HELLOKRA BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/218",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/153"
  },
  {
    "id": 316,
    "name": "GRIN AND CARROT BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 2,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/218",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/153"
  },
  {
    "id": 317,
    "name": "THE LEEK-Y CAULDRON BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 3,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/219",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/154"
  },
  {
    "id": 318,
    "name": "THE MARVELOUS MRS. BASIL BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 4,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/220",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/155"
  },
  {
    "id": 319,
    "name": "SON OF A PEACH-ER MAN BURGER (comes with peach glaze)",
    "price": "$5.95",
    "season": 12,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/221",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/156"
  },
  {
    "id": 320,
    "name": "LIVIN' ON A PEAR BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/221",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/156"
  },
  {
    "id": 321,
    "name": "FULL NETTLE JACKET BURGER (comes with saut????ed nettles)",
    "price": "$5.95",
    "season": 12,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/221",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/156"
  },
  {
    "id": 322,
    "name": "BABY GOT BAK CHOY BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 5,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/221",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/156"
  },
  {
    "id": 323,
    "name": "YOUR CRESS IS ON MY LIST BURGER (comes with watercress)",
    "price": "$5.95",
    "season": 12,
    "episode": 6,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/222",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/157"
  },
  {
    "id": 324,
    "name": "I BEAN OF GREENIE BURGER (comes with black bean parsley puree)",
    "price": "$5.95",
    "season": 12,
    "episode": 7,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/223",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/158"
  },
  {
    "id": 325,
    "name": "A WRINKLE IN THYME BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/225",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/159"
  },
  {
    "id": 326,
    "name": "IT'S CHIVE O'CLOCK SOME-PEAR BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/225",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/159"
  },
  {
    "id": 327,
    "name": "THE LOST IN YAM-SLATION BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 9,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/225",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/159"
  },
  {
    "id": 328,
    "name": "THE CHALLAH AND THE CHIVE-Y BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/226",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/160"
  },
  {
    "id": 329,
    "name": "YOU CHEDDAR WATCH OUT, YOU CHEDDER ON RYE BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/226",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/160"
  },
  {
    "id": 330,
    "name": "JINGLE BELL PEPPERS ROCK BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/226",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/160"
  },
  {
    "id": 331,
    "name": "IT CAME UPON A MIDNIGHT GRUYERE BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 10,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/226",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/160"
  },
  {
    "id": 332,
    "name": "THROW CARDAMOM-MA FROM THE TRAIN BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 11,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/227",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/161"
  },
  {
    "id": 333,
    "name": "DON'T DREAM IT'S OKRA BURGER",
    "price": "$5.95",
    "season": 12,
    "episode": 12,
    "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes/228",
    "url": "https://bobsburgers-api.herokuapp.com/burgerOfTheDay/162"
  }
]
}
}