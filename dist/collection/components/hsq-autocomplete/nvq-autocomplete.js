export class NvqAutocomplete {
    constructor() {
        this.items = [];
    }
    itemsSourceHandler(newValue) {
        this.items = newValue.split(",");
    }
    handleInput(e) {
        if (this.items === [] || this.items.length == 0) {
            this.itemsSourceHandler(this.itemsSource);
        }
        let buildAutoCompleteItem = (name) => {
            let item = document.createElement("div");
            item.innerHTML = "<strong>" + name + "</strong>";
            return item;
        };
        let createAutoCompleteContainer = (items) => {
            let autocomplete = document.createElement("div");
            autocomplete.setAttribute("id", "autocomplete-list");
            autocomplete.setAttribute("class", "autocomplete-items");
            for (let autocompleteItem of items) {
                autocomplete.appendChild(autocompleteItem);
            }
            return autocomplete;
        };
        let clear = () => {
            var container = e.target.parentNode.querySelector("#autocomplete-list");
            if (container != null && container != undefined) {
                e.target.parentNode.removeChild(container);
            }
        };
        let input = e.target.value;
        let results = [];
        if (input === "" || input === undefined) {
            clear();
            return;
        }
        for (let index in this.items) {
            if (this.items[index].toLowerCase().includes(input.toLocaleLowerCase())) {
                let autocompleteItem = buildAutoCompleteItem(this.items[index]);
                results.push(autocompleteItem);
            }
        }
        clear();
        if (results.length > 0) {
            let autocomplete = createAutoCompleteContainer(results);
            e.target.parentNode.appendChild(autocomplete);
        }
    }
    render() {
        return (h("div", null,
            h("div", { class: "autocomplete" },
                h("input", { autocomplete: "off", onInput: (e) => this.handleInput(e), type: "text", name: this.name, placeholder: this.placeholder, value: this.value }))));
    }
    static get is() { return "nvq-autocomplete"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "itemsSource": {
            "type": String,
            "attr": "items-source",
            "watchCallbacks": ["itemsSourceHandler"]
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get style() { return "/**style-placeholder:nvq-autocomplete:**/"; }
}
