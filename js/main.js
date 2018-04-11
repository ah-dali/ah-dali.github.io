function switchImage() {
    var img = document.getElementById("image");
    img.src = "https://github.com/ah-dali/ah-dali.github.io/edit/master/jpg";
    return false;
}
document.getElementById("pickArtist").onchange = setImage;
