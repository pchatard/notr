import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
    title: string = 'Wishlist';

    constructor() { }

    ngOnInit(): void {
    }

}
