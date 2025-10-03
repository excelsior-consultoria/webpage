import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'excelsior-app';

  sections: any[] = [];

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
  }
}
