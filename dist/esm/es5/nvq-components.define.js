// NvqComponents: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './nvq-components.core.js';
import {
  NvqEditor,
  NvqLabel,
  NvqPagination,
  NvqProgressBar
} from './nvq-components.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    NvqEditor,
    NvqLabel,
    NvqPagination,
    NvqProgressBar
  ], opts);
}