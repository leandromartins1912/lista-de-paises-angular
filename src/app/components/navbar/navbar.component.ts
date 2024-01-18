import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(@Inject(ThemeService) private themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleTheme() {
    this.themeService.toggleMode();
  }
}