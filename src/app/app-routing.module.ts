import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotesComponent } from './components/pages/notes/notes.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
