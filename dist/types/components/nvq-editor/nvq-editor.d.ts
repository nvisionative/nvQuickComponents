import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export interface CustomOption {
    import: string;
    whitelist: Array<any>;
}
export declare class NvqEditor {
    emptyArray: any[];
    format: 'object' | 'html' | 'text';
    theme: string;
    modules: {
        [index: string]: Object;
    };
    readOnly: boolean;
    placeholder: string;
    maxLength: number;
    minLength: number;
    required: boolean;
    formats: string[];
    strict: boolean;
    scrollingContainer: HTMLElement | string;
    bounds: HTMLElement | string;
    customOptions: CustomOption[];
    onEditorCreated: EventEmitter;
    onContentChanged: EventEmitter;
    onSelectionChanged: EventEmitter;
    render(): JSX.Element;
    componentWillLoad(): void;
    componentDidLoad(): void;
    init(): Promise<any>;
    initEditor(): Promise<any>;
}
