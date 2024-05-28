const passwordInput = document.querySelector("#passwordInput")

passwordInput.addEventListener("input", function () {
    const password = this.value

    const strenghtIndicator = document.querySelector(
        "#password-strenght-indicator"
    )

    const strenghtText = document.querySelector("#password-strenght-text")

    const stenghts = {
        0: "Muito fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito forte",
    }

    let score = 0

    // Requisitos
    if (password.lenght >= 8) score++
    if (password.match(/[a-z]/)) score++
    if (password.match(/[A-Z]/)) score++
    if (password.match(/[0-9]/)) score++
    if (password.match(/[^a-zA-Z0-9]/)) score++

    // Calculo da %, pq a largura vai ser em %
    const width = (score / 4) * 100

    strenghtIndicator.style.width = `${width}%`

    switch (score) {
        case 1:
            strenghtIndicator.style.backgroundColor = "#e70b0b"
            break
        case 2:
            strenghtIndicator.style.backgroundColor = "#FFB74D"
            break
        case 3:
            strenghtIndicator.style.backgroundColor = "#FFF176"
            break
        case 4:
            strenghtIndicator.style.backgroundColor = "#81C784"
            break
        default:
            strenghtIndicator.style.backgroundColor = "transparent"
            break
    }

    if (password.lenght > 0) {
        strenghtText.innerHTML = `Força: ${stenghts[score]}`
    } else {
        strenghtText.innerHTML = ""
    }
})