function round(number) {
    return +number.toFixed(10);
}

const allGnomes = [
    { file: "garden.jpg", description: "garden gnome", price: 400 },
    { file: "lady.jpg", description: "lady gnome", price: 120 },
    { file: "laugh.jpg", description: "laughing gnome", price: 300 },
    { file: "military.jpg", description: "military gnome", price: 240 },
    { file: "red-hat.jpg", description: "red hat", price: 10 },
    { file: "summer.jpg", description: "double summer", price: 80 }
]

function buttonClicked() {
    let firstValue = document.querySelector(".first").value
    let secondValue = document.querySelector(".second").value
    let sum = parseFloat(firstValue) + parseFloat(secondValue)
    const result = document.querySelector(".result")
    result.classList.remove("wow")
    result.innerHTML = round(sum)
    if (sum >= 100)
        result.classList.add("wow")
}
