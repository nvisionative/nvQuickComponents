const sass = require('@stencil/sass');

exports.config = {
    namespace: 'nvq-components',
    outputTargets: [
     { type: 'dist' }
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