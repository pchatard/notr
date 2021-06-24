import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    showDrawer: boolean;
    currentTitle?: string = '';

    constructor() {
        this.showDrawer = false;
    }

    toggleDrawer(opening = true): void {
        if (!opening) {
            this.showDrawer = false;
        } else {
            this.showDrawer = !this.showDrawer;
        }
    }

    onActivate(event: any) {
        this.currentTitle = event.title;
    }
}
