import '../../stencil.core';
export declare class NvqAutocomplete {
    name: string;
    placeholder: string;
    value: string;
    itemsSource: string;
    items: string[];
    itemsSourceHandler(newValue: string): void;
    handleInput(e: any): void;
    render(): JSX.Element;
}
