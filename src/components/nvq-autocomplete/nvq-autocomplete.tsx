import { Component, Prop, Element, Watch } from '@stencil/core';

@Component({
    tag: 'nvq-autocomplete',
    styleUrl: 'nvq-autocomplete.scss',
    shadow: false
})
export class NvqAutocomplete {  

    @Prop() name: string;
    @Prop() placeholder: string;
    @Prop() value: string;
    @Prop() itemsSource: string;
    @Prop() width: string;
    
    @Element() el: HTMLElement;

    items:string[] = [];
    endpoint:string = "";
    style:{ [key:string]:string } = {};

    @Watch('itemsSource')
    itemsSourceHandler(newValue:string) {
        let isURL = (uri:string) => {
            let anchor:HTMLAnchorElement = document.createElement("a");
            anchor.href = uri;

            return anchor.host && anchor.host != window.location.host;
        }

        if (isURL(newValue)) {
            this.endpoint = newValue;
        } else {
            this.items = newValue.split(",");
        }
    }

    isLocal() {
        return this.endpoint == "" || this.endpoint == null || this.endpoint == undefined;
    }

    async handleInput(e) {   
        let target = e.target;  
        if (this.items === [] || this.items.length == 0) {
            this.itemsSourceHandler(this.itemsSource);
        }

        let buildAutoCompleteItem = (name:string) => {
            let item:HTMLElement = document.createElement("div");
            item.setAttribute("class", "autocomplete-row");
            item.innerHTML = "<strong>" + name + "</strong>";
            
            item.addEventListener('click', () => {
                target.value = name;
                clear();
            });

            return item;
        }

        let createAutoCompleteContainer = (items:HTMLElement[]) => {
            let autocomplete:HTMLElement = document.createElement("div");
            autocomplete.setAttribute("id", "autocomplete-list");
            autocomplete.setAttribute("class", "autocomplete-items");

            for (let autocompleteItem of items) {
                autocomplete.appendChild(autocompleteItem);
            }

            return autocomplete;
        }   

        let getLocalResults = () => {
            let data:HTMLElement[] = [];
            for (let index in this.items) {
                if (this.items[index].toLowerCase().includes(input.toLocaleLowerCase())) {
                    let autocompleteItem:HTMLElement = buildAutoCompleteItem(this.items[index]);
                    data.push(autocompleteItem);
                }
            }

            return data;
        }

        let getRequest = (query:string) => {
            let uri:string = this.endpoint + query;
            var promise = fetch(uri)
                .then((response) => response.json())
                .then((json) => json.toString());

            return promise;
        }

        let getRemoteResults = (input:string, callback: (newData:string[]) => any) => {
            getRequest(input).then((json) => {
                if (json) {
                    let rawData:string[] = json.split(",");
                    callback(rawData);
                } else {
                    clear();
                }                
            });
        }

        let clear = () => {
            var container = target.parentNode.querySelector("#autocomplete-list");
            if (container != null && container != undefined) {
                target.parentNode.removeChild(container);
            }            
        }

        let hydrateAutocomplete = (results:HTMLElement[]) => {
            clear();
            if (results.length > 0) {            
                let autocomplete:HTMLElement = createAutoCompleteContainer(results);
                target.parentNode.appendChild(autocomplete);
            }
        }

        
        let input:string = target.value;
        if (input === "" || input === undefined) {
            clear();
            return;
        }
        
        if (this.isLocal()) {
            let results:HTMLElement[] = getLocalResults();
            hydrateAutocomplete(results);
        } else {
            getRemoteResults(input, (remoteItemsSource) => {
                let results:HTMLElement[] = [];
                for (let index in remoteItemsSource) {
                    let currentElement:HTMLElement = buildAutoCompleteItem(remoteItemsSource[index]);
                    results.push(currentElement);
                }

                hydrateAutocomplete(results);
            });
        }
    }

    updateStyles() {
        this.style["width"] = this.width;
    }

    render() {
        this.updateStyles();

        return (
            <div>
                <div class="autocomplete" style={this.style}>
                    <input autocomplete="off" onInput={async (e) => await this.handleInput(e)} type="search" name={this.name} placeholder={this.placeholder} value={this.value} />
                </div>
            </div>
        );
    }
}