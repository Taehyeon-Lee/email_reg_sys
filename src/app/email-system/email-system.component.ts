import {Component, OnInit} from '@angular/core';
import { Listing } from '../types';
import {fakeListings} from "../mock-data";

@Component({
  selector: 'app-email-system',
  templateUrl: './email-system.component.html',
  styleUrls: ['./email-system.component.css']
})
export class EmailSystemComponent implements OnInit {
  // listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.listings = fakeListings;
  }

}
