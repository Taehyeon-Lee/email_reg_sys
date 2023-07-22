import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-email-system',
  templateUrl: './email-system.component.html',
  styleUrls: ['./email-system.component.css']
})
export class EmailSystemComponent implements OnInit {
  userFirstName: string = '';
  userLastName: string = '';
  userEmail: string = '';
  confirmation: boolean = false;
  confirmationMsg: string = 'Please check your email for confirmation!';

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }

  submitForm():void{
    // Replace with proper backend API URL
    const apiUrl = 'http://localhost:3000/api/sendConfirmationEmail';
    const userData = {
      firstName: this.userFirstName,
      lastName: this.userLastName,
      email: this.userEmail
    };

    // Send POST request to backend API
    this.http.post(apiUrl, userData).subscribe(
        (res: any) => {
          console.log(res);
          this.confirmationMsg = res.message;
          this.confirmation = true;
        },
        (error: any) => {
          console.error('Something went wrong!:', error);
        }
      );

  }

}
