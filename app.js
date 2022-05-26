function colorSelector(selectorVar) {
    const colorThief = new ColorThief();
    const element = document.querySelector(selectorVar)
    const img = document.querySelector(selectorVar + " .imgMain");
    let rgbVar = []

    if (img.complete) {
        rgbVar = colorThief.getColor(img);
    } else {
        image.addEventListener('load', function () {
            rgbVar = colorThief.getColor(img);
        });
    }
    element.style.backgroundColor = `rgb(${rgbVar[0]},${rgbVar[1]},${rgbVar[2]})`
    return rgbVar;
}

console.log(colorSelector(".section1 .main"))
