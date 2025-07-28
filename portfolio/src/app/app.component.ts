import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './Header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

