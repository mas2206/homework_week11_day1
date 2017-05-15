var catsArray = [
  {name: "Boba", favFood: "Sock fluff", image: "http://bit.ly/2riTB4W"},
  {name: "Barnaby", favFood: "Tuna", image: "http://bit.ly/2aI3Nw4"},
  {name: "Max", favFood: "Whiskas Temptations", image: "http://bit.ly/2qkvGoE"},
  {name: "Rascal", favFood: "Ham", image: "http://bit.ly/2pDsCF4"}
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
  listItemFood.appendChild(catImage);
  listItemName.appendChild(listItemFood);
  cats.appendChild(listItemName);
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
