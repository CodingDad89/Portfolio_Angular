import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './Header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArrowComponent } from './arrow/arrow.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutMeComponent, ArrowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

