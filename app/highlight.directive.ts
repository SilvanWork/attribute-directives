/**
 * Created by hkh5f on 23.12.2016.
 */
import { Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[myHighlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('myHighlight') highlightcolor: string;

  @Input() defaultColor: string;


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightcolor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
