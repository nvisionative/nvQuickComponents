export class NvqAutocomplete {
    handleInput(e) {
        let inputValue = e.target.value;
        let buildAutoCompleteItem = (name) => {
            let item = document.createElement("div");
            item.innerHTML = "<strong>" + name + "</strong>";
            return item;
        };
        let test1 = buildAutoCompleteItem("Test 1");
        let test2 = buildAutoCompleteItem("Andrew");
        let autocomplete = document.createElement("div");
        autocomplete.setAttribute("id", "autocomplete-list");
        autocomplete.setAttribute("class", "autocomplete-items");
        autocomplete.appendChild(test1);
        autocomplete.appendChild(test2);
        e.target.parentNode.appendChild(autocomplete);
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
            "type": "Any",
            "attr": "items-source"
        },
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
    static get style() { return "/**style-placeholder:nvq-autocomplete:**/"; }
}
