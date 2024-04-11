//Wait foer the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded",function(){
    //preload images to cache
    preloadImagesIntoCache();
});

//Get references to DOM elements
let fullView = document.getElementById("fullView");
let fullImage = document.getElementById("fullImage");
let currentIndex = 0;

//Array to store extended images
const images = [
    "images/fullImage1.jpg",
    "images/fullImage2.jpg",
    "images/fullImage3.jpg",
    "images/fullImage4.jpg",
    "images/fullImage5.jpg",
    "images/fullImage6.jpg",
    "images/fullImage7.jpg",
    "images/fullImage8.jpg",
    "images/fullImage9.jpg",
    "images/fullImage10.jpg",
    "images/fullImage11.jpg",
    "images/fullImage12.jpg",
    "images/fullImage13.jpg",
    "images/fullImage14.jpg",
    "images/fullImage15.jpg",
    "images/fullImage16.jpg",
    "images/fullImage17.jpg",
    "images/fullImage18.jpg",
    "images/fullImage19.jpg",
    "images/fullImage20.jpg",
    "images/fullImage21.jpg",
    "images/fullImage22.jpg",
    "images/fullImage23.jpg",
    "images/fullImage24.jpg",
    "images/fullImage25.jpg",
    "images/fullImage26.jpg",
    "images/fullImage27.jpg",
    "images/fullImage28.jpg",
    "images/fullImage29.jpg",
    "images/fullimage30.jpg",
]

//function to preload the images into browser cache
function preloadImagesIntoCache(){
    for(let i=0; i<images.length; i++){
        const Extendedimage = new Image();
        Extendedimage.src = images[i];
    }
}

//function to print image descrptions
function PrintImageDescrption(index){

    //Array to store image descrptions
    const descriptionList = [
        "Two zebras are enjoying there life in sunshine. Ahead of them there is a woodland covered with green.",
        "A spotted leopard shows the beauty in nature. It is sleeping in a branch of tree.",
        "A herd of elephants are searching for water in a riverside. There are some bushes around. This might be a extreme sunny time period.",
        "A baby monkey is eating some buds. This illustrate hidden beauty in nature.",
        "Two rhinos are having their meal in a savanna. They can be represented as a symbol of power and energy in nature.",
        "A photograph which indicates the hidden beauty in animal world.A charming butterfly is collecting necta from a flower which is as beautiful as the butterfly.",
        "A colony of penguines are enjoying the first rays of the sun. Around them there is a snowy landscape and it is full of glaciers.",
        "A suitable photograph to show the biodiversity in nature. Two antilopes looking at somepoint in a grassland full of green.",
        "Two pink flamingos are having a bath in a river ahead of them the land is covered with mangroven trees. Rich biodiversity on earch can be represented.",
        "A snail can be seen on a metal piece.They are known as 'Mollusca' who are a type of invitebreaters",
        "An owl is sitting on a tree branch. Around the there are some trees can be seen.",
        "A green frog can be seen on a brance of a tree. These spices are known as amphibias.",
        "A misty forest full of huge pinus trees.These trees are a important part of the nature.",
        "The natural beauty of the earth.The moving clods over a mountain range is a breathtaking phenomenon.",
        "A swiftly moving river in a forest. Around the river the atmosphere is covered with green.",
        "A group of muntains which shows the mind blowing manner in nature. The brightly colored cloudes and the green forest cover shows the rich bio-diversity.",
        "A river which flows at an astonishing speed throughout a forest.This hidden beauty can be destroyed from some careless actions of a human being.",
        "A mountain range with brightly colored shades.The floating of clods overs the edges illustrate glorious incident to the human eye.",
        "A river which flows through a forest.This stunning piese of photograph she attractive natural beauty on the earth.",
        "A solar panel system in a green field, an eco-friendly way of generating energy without any environmental pollution.",
        "Wind turbines considered as an eco-friendly way of generating energy using wind.",
        "Air pollution can be considered as a type of environmental pollution.This can badly affect to the ozone layer.",
        "Deforestation is the destruction of tress. Effects of the deforestation are cilmate changes, soil erosion, fewer crops, increased greenhouse gases in the atmosphere,...etc ",
        "Water pollution is known to be another serious threat to the environment.Some factories discharge indusrial effluents(chemical discharges,...) directly into rivers, lakes or near by water bodies.",
        "Water pollution causes diseases like  diarrhoea, cholera, dysentery and polimoyelitis that kill more than 500,000 people worldwide everty year.",
        "The misuse of land for minding after deforestation is shown. Efeccts are habitat destruction, the extinction of wildlife,...etc",
        "Cutting down trees in forest called deforestation.The diversity of that area will decrese as a result of this.",
        "Land degradation is a process in which the value of the biophysical environment is affects by combination of human-induced processes.",
        "The resonsilibily of mankind must be to protect enviroment without making any harms.",
        "By planting trees and restoring lands we can have a healthy climate as well as healthy atmosphere. Lets join our hands to protect the nature as the children of mother nature.",
    ]

    const imageDescrption = document.getElementById("imageDescription");
    imageDescrption.textContent = descriptionList[index];
}

//Function to open extended image
function openFullImage(index){
    fullView.style.display = "flex";
    fullImage.src = images[index];
    currentIndex = index;
    PrintImageDescrption(index);
}

//Function to close extended image
function closeFullImage(){
    fullView.style.display = "none";
}

//Function to change the background color according to the customer's input
function changeBackgroundcolor(color){
    fullView.style.backgroundColor = color;
}

//Function to change the font-style according to the customer's input
function changeFontStyle(fontStyle){
    fullView.style.fontStyle = fontStyle;
}

//Function to navigate to the previous image
function goLeft(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    fullImage.src = images[currentIndex];
    PrintImageDescrption(currentIndex);
}

//Function to navigate to the next image
function goRight(){
    currentIndex = (currentIndex + 1) % images.length;
    fullImage.src = images[currentIndex];
    PrintImageDescrption(currentIndex);
}

//Event Listener to change the background color according to the customer's input
document.getElementById("color").addEventListener("input",function(){
    changeBackgroundcolor(this.value);
});

//Event listener to change the font-style according to the customer's input
document.getElementById("fontStyle").addEventListener("input",function(){
    changeFontStyle(this.value);
});


