let index = 0;
let src = ["a2.jpeg", "hero_image.jpg"];

for (let index = 0; index < src.length; index++) {
  setInterval(function () {
    console.log(src[index]);
    let a = document.getElementById("img");
    a.style.backgroundImage = `url(${src[index]})`;
  }, 2000 * (index + 1));
}
