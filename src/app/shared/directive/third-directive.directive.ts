import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appThirdDirective]'
})
export class ThirdDirectiveDirective implements OnInit{

  constructor(private eleref:ElementRef, private renderer:Renderer2) { }
   ngOnInit(): void {
     this.renderer.addClass(this.eleref.nativeElement,"bg-success");
     this.renderer.addClass(this.eleref.nativeElement,"p-4");
     this.renderer.addClass(this.eleref.nativeElement,"m-3");
     this.renderer.addClass(this.eleref.nativeElement,'text-white')
   }
}
