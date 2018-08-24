import '../../stencil.core';
export declare class NvqAutocomplete {
    name: string;
    placeholder: string;
    value: string;
    itemsSource: string;
    items: string[];
    endpoint: string;
    componentAttribubte: string;
    itemsSourceHandler(newValue: string): void;
    isLocal(): boolean;
    handleInput(e: any): Promise<void>;
    render(): JSX.Element;
}
