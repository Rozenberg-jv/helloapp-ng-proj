import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBgButton]'
})
export class BgButtonDirective {

  @HostBinding('style.borderRadius') borderRadius: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    const {nativeElement} = this.el;

    this.borderRadius = '16px';
    this.renderer.addClass(nativeElement, 'bg-color-button');
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    const {nativeElement} = this.el;

    this.borderRadius = '8px';
    this.renderer.removeClass(nativeElement, 'bg-color-button');
  }


}
