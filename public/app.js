var catsArray = [
  {name: "Boba", favFood: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", favFood: "Tuna", image: "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg"},
  {name: "Max", favFood: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Rascal", favFood: "Ham", image: "http://img.huffingtonpost.com/asset/scalefit_720_noupscale/582cb2601a00002400cc8426.jpeg?cache=wltod2kvw5"},
  {name: "Garfield", favFood: "Lasagne", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png"}
];

var createCatList = function() {
  var catList = document.createElement("ul");
  catList.classList.add("cat");
  return catList;
};

var createListItemName = function(name) {
  var listItemName = document.createElement("li");
  listItemName.innerText = "Name: " + name;
  return listItemName;
};

var createListItemFood = function(favFood) {
  var listItemFood = document.createElement("li");
  listItemFood.innerText = "Favourite food: " + favFood;
  return listItemFood;
};

var createCatImage = function(image) {
  var catImage = document.createElement("img");
  catImage.setAttribute("src", image);
  catImage.setAttribute("height", 250);
  catImage.setAttribute("width", 250);
  return catImage;
};

var appendElements = function(cats, listItemName, listItemFood, catImage) {
  // listItemFood.appendChild(catImage);
  // listItemName.appendChild(listItemFood);
  // cats.appendChild(listItemName);
  cats.appendChild(listItemName);
  cats.appendChild(listItemFood);
  cats.appendChild(catImage);
};

var addCat = function(name, favFood, image) {
  var listItemName = createListItemName(name);
  var listItemFood = createListItemFood(favFood);
  var catImage = createCatImage(image);
  var cats = document.getElementById("cats");
  appendElements(cats, listItemName, listItemFood, catImage);
};

var app = function() {
  for (var cat of catsArray) {
    addCat(cat.name, cat.favFood, cat.image);
  }
};

window.onload = app;
