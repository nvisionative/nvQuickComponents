import { Component, Prop, Element } from '@stencil/core';

@Component({
    tag: 'nvq-label',
    styleUrl: 'nvq-label.scss',
    shadow: true
})
export class NvqLabel {

    @Prop() text: string;
    @Prop() helpText: string;

    render() {
        return (
            <div>
                <div class="tooltip">
                    { this.text }
                    <span class="tooltiptext">
                        { this.helpText }
                    </span>
                </div>
            </div>
        );
    }
}