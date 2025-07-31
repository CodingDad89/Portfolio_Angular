import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './Header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArrowComponent } from './arrow/arrow.component';
import { SkillsComponent } from './skills/skills.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ReferenzComponent } from './referenz/referenz.component';
import { ArrowBottomComponent } from './arrow-bottom/arrow-bottom.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutMeComponent, ArrowComponent, SkillsComponent, ArrowLeftComponent, ContactComponent, PortfolioSectionComponent, ReferenzComponent, ArrowBottomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

