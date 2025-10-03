import { Component, ElementRef, HostListener, Renderer2, ViewChild, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sections: any[] = [];

  constructor(private renderer: Renderer2) {}

  @ViewChild('wellcomeText') wellcomeText!: ElementRef;

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY;
    this.sections.forEach((section: any) => {
      const sectionPosition = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Verificar se a seção está visível na tela
      if (scrollPosition + window.innerHeight > sectionPosition + sectionHeight / 4) {
        section.classList.add('fade-in-left');
      } else {
        // section.classList.remove('fade-in-left');
      }
    });
  }

  ngAfterViewInit() {
    // Inicializando as seções após o carregamento da página
    this.sections = Array.from(document.querySelectorAll('.fade-section'));
    setTimeout(() => {
       this.renderer.addClass(this.wellcomeText.nativeElement, 'fade-in-left');
      
    }, 800);
  }
  
}
