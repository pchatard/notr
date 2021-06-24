import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';
import { NotesComponent } from './components/pages/notes/notes.component';
import { NotePreviewComponent } from './components/pages/notes/note-preview/note-preview.component';
import { NoteBottomFormComponent } from './components/pages/notes/note-bottom-form/note-bottom-form.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidemenuComponent,
        HomeComponent,
        WishlistComponent,
        NotesComponent,
        NotePreviewComponent,
        NoteBottomFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatBottomSheetModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
