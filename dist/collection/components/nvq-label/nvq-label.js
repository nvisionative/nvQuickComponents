export class NvqLabel {
    render() {
        return (h("div", null,
            h("div", { class: "tooltip" },
                this.text,
                h("span", { class: "tooltiptext" }, this.helpText))));
    }
    static get is() { return "nvq-label"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "helpText": {
            "type": String,
            "attr": "help-text"
        },
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
    static get style() { return "/**style-placeholder:nvq-label:**/"; }
}
