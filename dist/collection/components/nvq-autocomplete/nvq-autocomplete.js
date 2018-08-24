var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class NvqAutocomplete {
    constructor() {
        this.items = [];
        this.endpoint = "";
        this.componentAttribubte = "data-nvq-autocomplete";
        this.style = {};
    }
    itemsSourceHandler(newValue) {
        let isURL = (uri) => {
            let anchor = document.createElement("a");
            anchor.href = uri;
            return anchor.host && anchor.host != window.location.host;
        };
        if (isURL(newValue)) {
            this.endpoint = newValue;
        }
        else {
            this.items = newValue.split(",");
        }
    }
    isLocal() {
        return this.endpoint == "" || this.endpoint == null || this.endpoint == undefined;
    }
    handleInput(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let target = e.target;
            if (this.items === [] || this.items.length == 0) {
                this.itemsSourceHandler(this.itemsSource);
            }
            let addComponentAttribute = (element) => {
                element.setAttribute(this.componentAttribubte, "");
                return element;
            };
            let buildAutoCompleteItem = (name) => {
                let item = document.createElement("div");
                item = addComponentAttribute(item);
                item.setAttribute("class", "autocomplete-row");
                item.innerHTML = "<strong>" + name + "</strong>";
                item.addEventListener('click', () => {
                    var control = this.el.querySelector('input');
                    control.value = name;
                    clear();
                });
                return item;
            };
            let createAutoCompleteContainer = (items) => {
                let autocomplete = document.createElement("div");
                autocomplete = addComponentAttribute(autocomplete);
                autocomplete.setAttribute("id", "autocomplete-list");
                autocomplete.setAttribute("class", "autocomplete-items");
                for (let autocompleteItem of items) {
                    autocomplete.appendChild(autocompleteItem);
                }
                return autocomplete;
            };
            let getLocalResults = () => {
                let data = [];
                for (let index in this.items) {
                    if (this.items[index].toLowerCase().includes(input.toLocaleLowerCase())) {
                        let autocompleteItem = buildAutoCompleteItem(this.items[index]);
                        data.push(autocompleteItem);
                    }
                }
                return data;
            };
            let getRequest = (query) => {
                let uri = this.endpoint + query;
                var promise = fetch(uri)
                    .then((response) => response.json())
                    .then((json) => json.toString());
                return promise;
            };
            let getRemoteResults = (input, callback) => {
                getRequest(input).then((json) => {
                    let rawData = json.split(",");
                    callback(rawData);
                });
            };
            let clear = () => {
                var container = target.parentNode.querySelector("#autocomplete-list");
                if (container != null && container != undefined) {
                    target.parentNode.removeChild(container);
                }
            };
            let hydrateAutocomplete = (results) => {
                clear();
                if (results.length > 0) {
                    let autocomplete = createAutoCompleteContainer(results);
                    target.parentNode.appendChild(autocomplete);
                }
            };
            let input = target.value;
            if (input === "" || input === undefined) {
                clear();
                return;
            }
            if (this.isLocal()) {
                let results = getLocalResults();
                hydrateAutocomplete(results);
            }
            else {
                getRemoteResults(input, (remoteItemsSource) => {
                    let results = [];
                    for (let index in remoteItemsSource) {
                        let currentElement = buildAutoCompleteItem(remoteItemsSource[index]);
                        results.push(currentElement);
                    }
                    hydrateAutocomplete(results);
                });
            }
        });
    }
    updateStyles() {
        this.style["width"] = this.width;
    }
    render() {
        this.updateStyles();
        return (h("div", null,
            h("div", { class: "autocomplete", style: this.style },
                h("input", { autocomplete: "off", onInput: (e) => __awaiter(this, void 0, void 0, function* () { return yield this.handleInput(e); }), type: "text", name: this.name, placeholder: this.placeholder, value: this.value }))));
    }
    static get is() { return "nvq-autocomplete"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
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
        },
        "width": {
            "type": String,
            "attr": "width"
        }
    }; }
    static get style() { return "/**style-placeholder:nvq-autocomplete:**/"; }
}
