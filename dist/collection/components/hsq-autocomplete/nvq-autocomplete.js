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
            h("form", { autocomplete: "off" },
                h("div", { class: "autocomplete" },
                    h("input", { onInput: (e) => this.handleInput(e), id: "myInput", type: "text", name: "myCountry", placeholder: "Country" })),
                h("input", { type: "submit" }))));
    }
    static get is() { return "nvq-autocomplete"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "helpText": {
            "type": String,
            "attr": "help-text"
        },
        "itemsSource": {
            "type": String,
            "attr": "items-source",
            "watchCallbacks": ["itemsSourceHandler"]
        },
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
    static get style() { return "/**style-placeholder:nvq-autocomplete:**/"; }
}
