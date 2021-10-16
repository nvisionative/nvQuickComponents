import { Component, Prop, Event, EventEmitter, h} from '@stencil/core';
import Quill from 'quill';
//import * as QuillNamespace from 'quill';

export interface CustomOption {
    import: string;
    whitelist: Array<any>;
}

@Component({
    tag: 'nvq-editor',
    styleUrl: 'nvq-editor.scss',
    shadow: false
})
export class NvqEditor {

    emptyArray: any[] = [];
    
    @Prop() format: 'object' | 'html' | 'text' = 'html';
    @Prop({ mutable: true }) theme: string = 'snow'; // default theme to "snow", but make sure the theme can be changed in case user enters invalid theme name
    @Prop() modules: { [index: string]: Object } = { 
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'], 
            ['blockquote', 'code-block'],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
            [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
            [{ direction: 'rtl' }], // text direction
            [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
      
            [
              { color: this.emptyArray.slice() },
              { background: this.emptyArray.slice() }
            ], // dropdown with defaults from theme
            [{ font: this.emptyArray.slice() }],
            [{ align: this.emptyArray.slice() }],
      
            ['clean'], // remove formatting button
            ['link', 'image', 'video'] // link and image, video
        ] 
    };
    @Prop() readOnly: boolean;
    @Prop() placeholder: string;
    @Prop() maxLength: number;
    @Prop() minLength: number;
    @Prop() required: boolean;
    @Prop() formats: string[];
    /*@Prop() style: any = {};*/
    @Prop() strict: boolean = true;
    @Prop() scrollingContainer: HTMLElement | string;
    @Prop() bounds: HTMLElement | string;
    @Prop() customOptions: CustomOption[] = [];

    @Event() editorCreated: EventEmitter;
    @Event() contentChanged: EventEmitter;
    @Event() selectionChanged: EventEmitter;

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

        return (
            <div id="nvq-editor"></div>
        );
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

        let quill : any = Quill; //this one is important, otherwise 'Quill' is undefined
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
        new quill('#nvq-editor', options);
    }

    init(): Promise<any> {
 
        return new Promise((resolve, reject) => {
        
            this.initEditor().then(() => {
                resolve(true);
            }, (err) => {
                reject(err);
            });
        
        });
        
    }
    
    initEditor(): Promise<any> {
 
        return new Promise((resolve) => {

            // load Quill theme based on theme @Prop
            if(this.theme === 'bubble') {
                let loadQuillCss = document.createElement('link');
                loadQuillCss.href = 'https://cdn.quilljs.com/1.3.6/quill.bubble.css';
                loadQuillCss.rel = "stylesheet";
                document.body.appendChild(loadQuillCss);    
            } else {
                this.theme = 'snow';
                let loadQuillCss = document.createElement('link');
                loadQuillCss.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
                loadQuillCss.rel = "stylesheet";
                document.body.appendChild(loadQuillCss);
            }

            resolve(true);
        });
    }


}