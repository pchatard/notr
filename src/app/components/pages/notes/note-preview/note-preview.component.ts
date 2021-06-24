import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-note-preview',
    templateUrl: './note-preview.component.html',
    styleUrls: ['./note-preview.component.css']
})
export class NotePreviewComponent implements OnInit {

    @Input() note: any;

    constructor() { }

    ngOnInit(): void {
    }

}
