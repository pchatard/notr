import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

    @Output() closeDrawer = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    closeMenu() {
        this.closeDrawer.emit('close');
    }
}
