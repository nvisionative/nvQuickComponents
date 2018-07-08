export class NvqProgressBar {
    constructor() {
        this.max = 100;
    }
    render() {
        this.el.style.setProperty('--current-value', this.value.toString());
        this.el.style.setProperty('--max-value', this.max.toString());
        return (h("div", { class: "progress-container" },
            h("div", { class: "progress-bar" }, " "),
            h("div", { class: "progress-bar-remainder" })));
    }
    static get is() { return "nvq-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "value": {
            "type": Number,
            "attr": "value"
        }
    }; }
    static get style() { return "/**style-placeholder:nvq-progress-bar:**/"; }
}
