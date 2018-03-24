import { Directive,
    Renderer,
    HostListener,
    HostBinding,

    ElementRef, } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') private isopen = false;

    // constructor(private el: ElementRef,
    //             private renderer: Renderer) {
    //     // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    // }

    @HostListener('click') toggleOpen() {
        this.isopen = !this.isopen;
    }

    // @HostListener('click') onclick() {
    //     let part = this.el.nativeElement.querySelector('.drop');
    //     this.renderer.setElementStyle(part, 'display', 'none');
    // }
}




