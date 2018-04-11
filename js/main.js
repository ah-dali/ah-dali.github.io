function switchImage() {
    var img = document.getElementById("image");
    img.src = this.value;
    return false;
}
document.getElementById("pickArtist").onchange = setImage;
