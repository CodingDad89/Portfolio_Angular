import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, NavbarComponent, HeroComponent],
    template: `
    <section>
        <app-navbar></app-navbar>
        <app-hero></app-hero>

    </section>`,

                
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent{}