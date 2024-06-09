const weightInput = document.querySelector("#weight-input")
const heightInput = document.querySelector("#height-input")
const submit = document.querySelector("#submit")

const weightDescription = document.querySelector("#desc-weight")
const description = document.querySelector("#desc")

const imcCalc = () => {
    const weight = weightInput.value
    const height = heightInput.value

    let calc = weight/ (height * height)

    return calc.toFixed(2)
}

const updateDescription = () => {
    const imc = imcCalc()
    if (imc > 0) {
        updateDescriptionDOM("skinny", "do you should eat more")
    }
    if (imc > 18.5) {
        updateDescriptionDOM("normal", "you're ok")
    }
    if (imc > 25) {
        updateDescriptionDOM("overweight", "do you should make a diet")
    }
    if (imc > 30) {
        updateDescriptionDOM("obesity", "ok you should gonna to gym")
    }
    if (imc > 40) {
        updateDescriptionDOM("severe obesity", "you looks like renan mother")
    }

}

const updateDescriptionDOM = (weightDescriptionText, descriptionText) => {
    weightDescription.innerHTML = weightDescriptionText + ` - ${imcCalc().toString()}`
    description.innerHTML = descriptionText
}

submit.addEventListener("click", () => updateDescription())