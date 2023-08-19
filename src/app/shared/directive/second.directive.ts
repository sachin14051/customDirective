import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:"[para]"
})
export class SecondDirective  implements OnInit{
       constructor(private s:ElementRef, private renderer:Renderer2){
              console.log(s);
              console.log(renderer);
              renderer.addClass(this.s.nativeElement,"bg-info");
              

       }
    ngOnInit(): void {
       this.renderer.setStyle(this.s.nativeElement,"padding","20px");
       this.renderer.addClass(this.s.nativeElement,"text-white");
       this.renderer.addClass(this.s.nativeElement,"text-uppercase")
    }
}