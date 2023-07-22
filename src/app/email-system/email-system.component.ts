import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import { Listing } from '../types';
// import {fakeListings} from "../mock-data";

@Component({
  selector: 'app-email-system',
  templateUrl: './email-system.component.html',
  styleUrls: ['./email-system.component.css']
})
export class EmailSystemComponent implements OnInit {
  // listings: Listing[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.listings = fakeListings;
    // const id = this.route.snapshot.paramMap.get('id');
  }

  registerEmail(): void {
    alert('Your email has ben registered! Please check your email for confirmation!');
    // navigate to email-system page
    // this.router.navigateByUrl('/email-system').then
  }

}
