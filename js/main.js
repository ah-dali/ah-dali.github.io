function switchImage() {
    var img = document.getElementById("image");
    img.src = this.value;
    return true;
}
document.getElementById("pickArtist").onchange = switchImage;
