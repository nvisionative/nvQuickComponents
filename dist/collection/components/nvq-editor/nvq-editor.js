import Quill from 'quill';
export class NvqEditor {
    constructor() {
        this.emptyArray = [];
        this.format = 'html';
        this.theme = 'snow'; // default theme to "snow", but make sure the theme can be changed in case user enters invalid theme name
        this.modules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }],
                [{ size: ['small', false, 'large', 'huge'] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [
                    { color: this.emptyArray.slice() },
                    { background: this.emptyArray.slice() }
                ],
                [{ font: this.emptyArray.slice() }],
                [{ align: this.emptyArray.slice() }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
        /*@Prop() style: any = {};*/
        this.strict = true;
        this.customOptions = [];
    }
    /*@State() available : boolean = false;*/
    /*@Event()
    myEvent() {
        // do something
    }*/
    /*@Method()
    myMethod() {
        //do something
    }*/
    render() {
        return (h("div", { id: "nvq-editor" }));
    }
    componentWillLoad() {
        // do something
    }
    componentDidLoad() {
        this.init().then(() => {
            //console.log("nvQuickEditor did load.")
        }, (err) => {
            console.log(err);
        });
        let quill = Quill; //this one is important, otherwise 'Quill' is undefined
        //let Quill: any = QuillNamespace;
        let options = {
            theme: this.theme,
            modules: this.modules,
            readOnly: this.readOnly,
            placeholder: this.placeholder,
            maxLength: this.maxLength,
            minLength: this.minLength,
            required: this.required,
            formats: this.formats,
            strict: this.strict
        };
        console.log(options);
        let editor = new quill('#nvq-editor', options);
    }
    init() {
        return new Promise((resolve, reject) => {
            this.initEditor().then(() => {
                resolve(true);
            }, (err) => {
                reject(err);
            });
        });
    }
    initEditor() {
        return new Promise((resolve) => {
            // load Quill theme based on theme @Prop
            if (this.theme === 'bubble') {
                let loadQuillCss = document.createElement('link');
                loadQuillCss.href = 'https://cdn.quilljs.com/1.3.6/quill.bubble.css';
                loadQuillCss.rel = "stylesheet";
                document.body.appendChild(loadQuillCss);
            }
            else {
                this.theme = 'snow';
                let loadQuillCss = document.createElement('link');
                loadQuillCss.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
                loadQuillCss.rel = "stylesheet";
                document.body.appendChild(loadQuillCss);
            }
            resolve(true);
        });
    }
    static get is() { return "nvq-editor"; }
    static get properties() { return {
        "bounds": {
            "type": String,
            "attr": "bounds"
        },
        "customOptions": {
            "type": "Any",
            "attr": "custom-options"
        },
        "format": {
            "type": String,
            "attr": "format"
        },
        "formats": {
            "type": "Any",
            "attr": "formats"
        },
        "maxLength": {
            "type": Number,
            "attr": "max-length"
        },
        "minLength": {
            "type": Number,
            "attr": "min-length"
        },
        "modules": {
            "type": "Any",
            "attr": "modules"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "readOnly": {
            "type": Boolean,
            "attr": "read-only"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "scrollingContainer": {
            "type": String,
            "attr": "scrolling-container"
        },
        "strict": {
            "type": Boolean,
            "attr": "strict"
        },
        "theme": {
            "type": String,
            "attr": "theme",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "onEditorCreated",
            "method": "onEditorCreated",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onContentChanged",
            "method": "onContentChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onSelectionChanged",
            "method": "onSelectionChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nvq-editor:**/"; }
}
