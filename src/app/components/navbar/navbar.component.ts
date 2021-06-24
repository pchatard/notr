import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    @Input() title?: string;
    @Output() drawer = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    openDrawer(): void {
        this.drawer.emit('open');
    }

}
