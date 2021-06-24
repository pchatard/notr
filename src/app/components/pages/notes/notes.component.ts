import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NoteBottomFormComponent } from './note-bottom-form/note-bottom-form.component';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    title: string = 'Notes';
    notes: any;

    constructor(private bottomSheet: MatBottomSheet) {
    }

    ngOnInit(): void {
        this.notes = [{ title: "Note 1", content: "Hey, I'm the first note" }, { title: "Note 2", content: "Hey, I'm the second note" }, { title: "Note 2", content: "Hey, I'm the second note" }, { title: "Note 2", content: "Hey, I'm the second note" }, { title: "Note 2", content: "Hey, I'm the second note" }, { title: "Note 2", content: "Hey, I'm the second note" }];
    }

    openNoteForm(): void {
        this.bottomSheet.open(NoteBottomFormComponent);
    }

}
