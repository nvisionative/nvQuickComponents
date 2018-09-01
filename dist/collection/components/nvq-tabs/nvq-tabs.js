export class NvqPagination {
    componentDidLoad() {
        this.buildTabs();
    }
    buildTabs() {
        let createTab = (tab) => {
            let createTabContent = (t) => {
                var element = document.createElement("article");
                element.setAttribute("id", id);
                element.innerHTML = t.outerHTML;
                return element;
            };
            let createTabHeader = (name, id) => {
                var element = document.createElement("a");
                element.setAttribute("class", "tab");
                element.setAttribute("href", "#" + id);
                element.innerHTML = name;
                return element;
            };
            let name = tab.getAttribute("name");
            let id = tab.getAttribute("key");
            let tabHeader = createTabHeader(name, id);
            let tabContent = createTabContent(tab);
            var container = this.el.querySelector('#tabs-container');
            container.appendChild(tabContent);
            container.appendChild(tabHeader);
        };
        let removePreExistingSlots = (slots) => {
            for (let current of slots) {
                this.el.removeChild(current);
            }
        };
        var tabs = Array.prototype.slice.call(this.el.querySelectorAll('[slot]'));
        for (var index = 1; index < tabs.length; index++) {
            createTab(tabs[index]);
        }
        createTab(tabs[0]); // This is by design - create the first tab as the last element in the DOM
        removePreExistingSlots(tabs);
    }
    render() {
        return (h("div", { id: "tabs-container", class: "tabs" }));
    }
    static get is() { return "nvq-tabs"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        }
    }; }
    static get style() { return "/**style-placeholder:nvq-tabs:**/"; }
}
