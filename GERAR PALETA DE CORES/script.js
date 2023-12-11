const generatePaletteButton = document.getElementById("generatePalette");
const colors = document.querySelectorAll(".color");
const colorCodes = document.querySelectorAll(".color-code");

generatePaletteButton.addEventListener("click", generatePalette);

function generatePalette() {
    const generatedColors = generateVarietyColors(5);
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.backgroundColor = generatedColors[i];
        colorCodes[i].textContent = generatedColors[i];
    }
}

function generateVarietyColors(numColors) {
    const varietyColors = [];

    for (let i = 0; i < numColors; i++) {
        const randomColor = getRandomColor();
        varietyColors.push(randomColor);
    }

    return varietyColors;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
