import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  scrollProgress = 0;
  isMobile = false;
  menuOpen = false;

   activeRoute: string = '';

  constructor(private router: Router) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const maxScroll = 200;
    const currentScroll = window.scrollY;
    this.scrollProgress = Math.min(currentScroll / maxScroll, 1);
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.menuOpen = false;
    }
  }

  ngOnInit() {
    this.onResize();
    this.activeRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  setActive(route: string): void {
    this.activeRoute = route;
  }
}