import { Component, Prop, Element } from '@stencil/core';

@Component({
    tag: 'nvq-progress-bar',
    styleUrl: 'nvq-progress-bar.scss',
    shadow: true
})
export class NvqProgressBar {

    @Prop() value: number;
    @Prop() max: number = 100;

    @Element() el: HTMLElement;

    render() {
        this.el.style.setProperty('--current-value', this.value.toString());
        this.el.style.setProperty('--max-value', this.max.toString());

        return (
            <div class="progress-container">
                <div class="progress-bar"> </div>
                <div class="progress-bar-remainder" />
            </div>
        );
    }
}