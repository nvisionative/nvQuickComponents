// NvqComponents: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './nvq-components.core.js';
import {
  NvqAutocomplete,
  NvqEditor,
  NvqLabel,
  NvqProgressBar
} from './nvq-components.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    NvqAutocomplete,
    NvqEditor,
    NvqLabel,
    NvqProgressBar
  ], opts);
}