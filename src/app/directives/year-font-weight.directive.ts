import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appYearFontWeight]'
})

export class YearFontWeightDirective implements OnInit {

  @Input() year: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // this.el.nativeElement.style.fontWeight = this.year < 2000 ? 'lighter' : 'bolder';

    const {nativeElement} = this.el;
    this.renderer.setStyle(nativeElement, 'font-weight', this.year < 2000 ? 'lighter' : 'bolder');

    // this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.year * 2 + '');
  }

}
