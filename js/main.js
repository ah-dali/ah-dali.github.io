function switchImage() {
    var img = document.getElementById("image");
    img.src = "https://github.com/ah-dali/ah-dali.github.io/tree/master/jpg";
    return true;
}
document.getElementById("pickArtist").onchange = switchImage;
