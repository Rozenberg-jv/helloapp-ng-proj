import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

  @Input('appBackground') hoverColor: string = 'gray';
  @Input() defaultColor: string = 'transparent';

  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') mouseEnter() {

    this.bgColor = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {

    this.bgColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.bgColor = this.defaultColor;
  }

}
