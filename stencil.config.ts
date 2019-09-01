import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
    namespace: 'nvq-components',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader'
        },
        {
            type: 'docs-readme'
        },
        {
            type: 'www',
            copy: [
                { src: 'examples' }
            ],
            serviceWorker: null // disable service workers
        }
    ],
    bundles: [
        { components: ['nvq-progress-bar'] },
        { components: ['nvq-editor'] },
        { components: ['nvq-label'] } ,
        { components: ['nvq-autocomplete'] }
    ],
    plugins: [
        sass()
    ]
};