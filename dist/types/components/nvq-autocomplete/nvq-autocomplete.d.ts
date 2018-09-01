import '../../stencil.core';
export declare class NvqAutocomplete {
    name: string;
    placeholder: string;
    value: string;
    itemsSource: string;
    width: string;
    remote: boolean;
    el: HTMLElement;
    items: string[];
    endpoint: string;
    style: {
        [key: string]: string;
    };
    itemsSourceHandler(newValue: string): void;
    isLocal(): boolean;
    handleInput(e: any): Promise<void>;
    updateStyles(): void;
    render(): JSX.Element;
}
