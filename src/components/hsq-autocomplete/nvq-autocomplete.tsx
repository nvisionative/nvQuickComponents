import { Component, Prop, Element } from '@stencil/core';

@Component({
    tag: 'nvq-autocomplete',
    styleUrl: 'nvq-autocomplete.scss',
    shadow: true
})
export class NvqAutocomplete {

    @Prop() text: string;
    @Prop() helpText: string;
    @Prop() itemsSource: string[]

    handleInput(e) {
        let inputValue:string = e.target.value;
             
        let buildAutoCompleteItem = (name:string) => {
            let item:HTMLElement = document.createElement("div");
            item.innerHTML = "<strong>" + name + "</strong>";

            return item;
        }

        let test1:HTMLElement = buildAutoCompleteItem("Test 1");
        let test2:HTMLElement = buildAutoCompleteItem("Andrew");

        let autocomplete:HTMLElement = document.createElement("div");
        autocomplete.setAttribute("id", "autocomplete-list");
        autocomplete.setAttribute("class", "autocomplete-items");
        autocomplete.appendChild(test1);
        autocomplete.appendChild(test2);
        
        e.target.parentNode.appendChild(autocomplete);
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