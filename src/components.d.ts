/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  CustomOption,
} from './components/nvq-editor/nvq-editor';

declare global {

  namespace StencilComponents {
    interface NvqAutocomplete {
      'helpText': string;
      'itemsSource': string;
      'text': string;
    }
  }

  interface HTMLNvqAutocompleteElement extends StencilComponents.NvqAutocomplete, HTMLStencilElement {}

  var HTMLNvqAutocompleteElement: {
    prototype: HTMLNvqAutocompleteElement;
    new (): HTMLNvqAutocompleteElement;
  };
  interface HTMLElementTagNameMap {
    'nvq-autocomplete': HTMLNvqAutocompleteElement;
  }
  interface ElementTagNameMap {
    'nvq-autocomplete': HTMLNvqAutocompleteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'nvq-autocomplete': JSXElements.NvqAutocompleteAttributes;
    }
  }
  namespace JSXElements {
    export interface NvqAutocompleteAttributes extends HTMLAttributes {
      'helpText'?: string;
      'itemsSource'?: string;
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NvqEditor {
      'bounds': HTMLElement | string;
      'customOptions': CustomOption[];
      'format': 'object' | 'html' | 'text';
      'formats': string[];
      'maxLength': number;
      'minLength': number;
      'modules': { [index: string]: Object };
      'placeholder': string;
      'readOnly': boolean;
      'required': boolean;
      'scrollingContainer': HTMLElement | string;
      'strict': boolean;
      'theme': string;
    }
  }

  interface HTMLNvqEditorElement extends StencilComponents.NvqEditor, HTMLStencilElement {}

  var HTMLNvqEditorElement: {
    prototype: HTMLNvqEditorElement;
    new (): HTMLNvqEditorElement;
  };
  interface HTMLElementTagNameMap {
    'nvq-editor': HTMLNvqEditorElement;
  }
  interface ElementTagNameMap {
    'nvq-editor': HTMLNvqEditorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'nvq-editor': JSXElements.NvqEditorAttributes;
    }
  }
  namespace JSXElements {
    export interface NvqEditorAttributes extends HTMLAttributes {
      'bounds'?: HTMLElement | string;
      'customOptions'?: CustomOption[];
      'format'?: 'object' | 'html' | 'text';
      'formats'?: string[];
      'maxLength'?: number;
      'minLength'?: number;
      'modules'?: { [index: string]: Object };
      'onOnContentChanged'?: (event: CustomEvent) => void;
      'onOnEditorCreated'?: (event: CustomEvent) => void;
      'onOnSelectionChanged'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'readOnly'?: boolean;
      'required'?: boolean;
      'scrollingContainer'?: HTMLElement | string;
      'strict'?: boolean;
      'theme'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NvqLabel {
      'helpText': string;
      'text': string;
    }
  }

  interface HTMLNvqLabelElement extends StencilComponents.NvqLabel, HTMLStencilElement {}

  var HTMLNvqLabelElement: {
    prototype: HTMLNvqLabelElement;
    new (): HTMLNvqLabelElement;
  };
  interface HTMLElementTagNameMap {
    'nvq-label': HTMLNvqLabelElement;
  }
  interface ElementTagNameMap {
    'nvq-label': HTMLNvqLabelElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'nvq-label': JSXElements.NvqLabelAttributes;
    }
  }
  namespace JSXElements {
    export interface NvqLabelAttributes extends HTMLAttributes {
      'helpText'?: string;
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface NvqProgressBar {
      'max': number;
      'value': number;
    }
  }

  interface HTMLNvqProgressBarElement extends StencilComponents.NvqProgressBar, HTMLStencilElement {}

  var HTMLNvqProgressBarElement: {
    prototype: HTMLNvqProgressBarElement;
    new (): HTMLNvqProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    'nvq-progress-bar': HTMLNvqProgressBarElement;
  }
  interface ElementTagNameMap {
    'nvq-progress-bar': HTMLNvqProgressBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'nvq-progress-bar': JSXElements.NvqProgressBarAttributes;
    }
  }
  namespace JSXElements {
    export interface NvqProgressBarAttributes extends HTMLAttributes {
      'max'?: number;
      'value'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;