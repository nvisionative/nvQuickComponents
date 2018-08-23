import '../../stencil.core';
export declare class NvqAutocomplete {
    text: string;
    helpText: string;
    itemsSource: string;
    items: string[];
    itemsSourceHandler(newValue: string): void;
    handleInput(e: any): void;
    render(): JSX.Element;
}
