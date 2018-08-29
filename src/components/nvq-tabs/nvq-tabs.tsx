import { Component, Element } from '@stencil/core';

@Component({
    tag: 'nvq-tabs',
    styleUrl: 'nvq-tabs.scss',
    shadow: false
})
export class NvqPagination{

    @Element() el: HTMLElement;
    
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

            let name:string = tab.getAttribute("name");
            let id:string = tab.getAttribute("key");               
                
            let tabHeader:HTMLElement = createTabHeader(name, id);
            let tabContent:HTMLElement = createTabContent(tab);
            
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
        return (
            <div id="tabs-container" class="tabs">
            </div>
        );
    }
}