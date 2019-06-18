import ButtonGroup from "./ButtonGroup"

export default class SettingsBar {
    constructor() {
        this.div = this.createDiv()
        this.pressed = {}
        this.buttonText = [
            ["Top", "Middle", "Bottom", "Left", "Center", "Right"]
        ]
        this.buttons = new ButtonGroup("alignmentButtons", 1, 6, this.buttonText, (e) => this.buttonClicked(e), this.div)
    }

    buttonClicked(e) {
        this.pressed[e.target.innerText] = true
        if (e.target.innerText === ("Top" || "Middle" || "Bottom")) {
            for (let x = 0; x < 3; x++) {
                if (Object.keys(this.pressed)[x] != e.target.innerText) {
                    this.pressed[Object.keys(this.pressed)[x]] = false
                }
            }
        } else {
            for (let x = 3; x < 6; x++) {
                if (Object.keys(this.pressed)[x] != e.target.innerText) {
                    this.pressed[Object.keys(this.pressed)[x]] = false
                }
            }
        }
        this.updateButtonColors()
        
    }

    updateButtonColors() {
        for (let x = 0; x < 6; x++) {
            let button = document.getElementById(`alignmentButtons-${this.pressed[Object.keys(this.pressed)[x]]}-row-0-column-${x}`)
            if (this.pressed[Object.keys(this.pressed)[x]]) {
                button.style.backgroundColor = "#444444"
            } else {
                button.style.backgroundColor = ""
            }
        }
    }

    createDiv() {
        let div = document.createElement("div")
        div.className = "div-SettingsBar"
        document.body.appendChild(div)
        return div
    }
}