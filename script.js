
var imgs = [
    
    "Pets/Dog-4.jpg",
    "Pets/Puppy-2.jpg",
    "Pets/Puppy-3.jpg",
    "Pets/Dog-1.jpg",

];

var button = document.querySelector("button");
var img = document.querySelector("img");
var count = 1;

button.addEventListener("click", function () {
    count %= imgs.length
    img.src = imgs[count]
    count++
});
