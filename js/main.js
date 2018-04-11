var imageList = Array();
for (var i = 1; i <= 10; i++) {
    imageList[i] = new Image(70, 70);
    imageList[i].src = "https://github.com/ah-dali/ah-dali.github.io/tree/master/jpg";
}

function switchImage() {
    var selectedImage = document.myForm.switch.options[document.myForm.switch.selectedIndex].value;
    document.myImage.src = imageList[selectedImage].src;
}
