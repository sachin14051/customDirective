import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[example]'
})
export class CustomDirective implements OnInit{
 constructor(private e:ElementRef, private renderer: Renderer2){
    e.nativeElement.style.color="white";
    e.nativeElement.style.backgroundColor="purple";
    e.nativeElement.style.padding="20px";


 }
    ngOnInit() {
      this.renderer.addClass(this.e.nativeElement, 'bg-primary');
      this.renderer.setStyle(this.e.nativeElement,"font-size","20px")
  }
}