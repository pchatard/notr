import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-note-bottom-form',
    templateUrl: './note-bottom-form.component.html',
    styleUrls: ['./note-bottom-form.component.css']
})
export class NoteBottomFormComponent implements OnInit {

    openDialog: boolean;

    constructor() {
        this.openDialog = false;
    }

    ngOnInit(): void {
    }

    openFull() {
        this.openDialog = true;
    }

}
