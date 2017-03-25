import { Component, forwardRef, ElementRef, NgZone, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


declare var UE:any;

@Component({
    selector: 'ng2-ueditor',
    template: '<textarea #host></textarea>',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Ng2UeditorComponent),
            multi: true
        }
    ]
})
export class Ng2UeditorComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
    private ueditor: any;
    private value: string;

    @Input() setting: any;

    @Output() onReady = new EventEmitter();
    @Output() onValueChange = new EventEmitter();
    @Output() onFocus = new EventEmitter();

    @ViewChild('host') host;

    onChange: Function = () => {};
    onTouched: Function = () => {};

    constructor(
        private el: ElementRef,
        private ngZone: NgZone
    ) {

    }

    ngAfterViewInit() {
        this.init();
    }

    ngOnDestroy() {
        this.destroy();
    }

    writeValue(value: string){
        this.value = value;
        if(this.ueditor){
            this.ueditor.setContent(this.value);
        }
    };

    registerOnChange(fn: Function){
        this.onChange = fn;
    }

    registerOnTouched(fn: Function){
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void{
        if(isDisabled){
            this.ueditor.setDisabled();
        }else{
            this.ueditor.setEnabled();
        }
    };

    init() {
        if(typeof UE === 'undefined'){
            console.error('UEditor is missing');
            return;
        }
        let ueditor =  new UE.ui.Editor(this.setting || {});
        ueditor.render(this.host.nativeElement);
        ueditor.addListener('ready', () => {
            this.ueditor = ueditor;
            this.value && this.ueditor.setContent(this.value);
            this.onReady.emit();
        });
        ueditor.addListener('contentChange', () => {
            this.updateValue(ueditor.getContent());
        });
        ueditor.addListener('focus', () => {
            this.onFocus.emit();
        });
    }

    destroy() {
        if(this.ueditor){
            this.ueditor.removeListener('ready');
            this.ueditor.removeListener('contentChange');
            this.ueditor.destroy();
            this.ueditor = null;
        }
        
    }

    updateValue(value: string){
        this.ngZone.run(() => {
            this.value = value;

            this.onChange(this.value);
            this.onTouched();
            
            this.onValueChange.emit(this.value);
        });
    }

    getContent(): string {
        return this.ueditor.getContent();
    };
    getPlainTxt(): string {
        return this.ueditor.getPlainTxt();
    };
    getContentTxt(): string {
        return this.ueditor.getContentTxt();
    };
    hasContents(): boolean {
        return this.ueditor.hasContents();
    };
}