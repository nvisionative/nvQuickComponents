import { Component, Prop, Element, Watch } from '@stencil/core';

@Component({
    tag: 'nvq-autocomplete',
    styleUrl: 'nvq-autocomplete.scss',
    shadow: true
})
export class NvqAutocomplete {

    @Prop() text: string;
    @Prop() helpText: string;
    @Prop() itemsSource: string;

    items:string[] = [];

    @Watch('itemsSource')
    itemsSourceHandler(newValue:string) {
        this.items = newValue.split(",");
    }

    handleInput(e) {     
        if (this.items === [] || this.items.length == 0) {
            this.itemsSourceHandler(this.itemsSource);
        }

        let buildAutoCompleteItem = (name:string) => {
            let item:HTMLElement = document.createElement("div");
            item.innerHTML = "<strong>" + name + "</strong>";

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

        let clear = () => {
            var container = e.target.parentNode.querySelector("#autocomplete-list");
            if (container != null && container != undefined) {
                e.target.parentNode.removeChild(container);
            }            
        }

        let input:string = e.target.value;
        let results:HTMLElement[] = [];

        if (input === "" || input === undefined) {
            clear();
            return;
        }

        for (let index in this.items) {
            if (this.items[index].toLowerCase().includes(input.toLocaleLowerCase())) {
                let autocompleteItem:HTMLElement = buildAutoCompleteItem(this.items[index]);
                results.push(autocompleteItem);
            }
        }
        
        clear();        
        if (results.length > 0) {            
            let autocomplete:HTMLElement = createAutoCompleteContainer(results);
            e.target.parentNode.appendChild(autocomplete);
        }
    }

    render() {
        return (
            <div>
                <form autocomplete="off">
                    <div class="autocomplete">
                        <input onInput={(e) => this.handleInput(e)} id="myInput" type="text" name="myCountry" placeholder="Country" />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}