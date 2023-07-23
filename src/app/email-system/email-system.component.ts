import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

/**
* This file is the component for the email system. It is body content of the webpage Email registration
 * section. Email registration page takes user's first name, last name and email address and sends
 * a confirmation email to the user's email address.
 * It handles POST request to the backend API and displays the confirmation message to the user.
* */

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
  confirmationMsg: string = '';

  /**
   * Constructor for the email system component
   * @param http
   */
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }

  /**
   * This function is called when the user clicks on the submit button.
   * It takes the user's first name, last name and email address and sends a confirmation email to
   * the user's email address by sending a POST request to the backend API.
   * Then displays the confirmation message to the user.
   */
  submitForm():void{
    const apiUrl = 'http://localhost:3000/emails';
    const userData = {
      first_name: this.userFirstName,
      last_name: this.userLastName,
      email_address: this.userEmail
    };

    // Send POST request to backend API
    this.http.post(apiUrl, userData).subscribe({
      next: (res:any) => {
        // generate message based on response from backend
        this.confirmationMsg = 'Thank you ' + res.first_name + ' email has been sent to '
                              + res.email_address;
        this.confirmation = true;
      },
      error: (error:any)=>{
        console.error('Something went wrong!:', error.stack);
        this.confirmationMsg = `Could not send the confirmation email!
                                Please verify your email and try again.`;
        alert(this.confirmationMsg);
      },
      complete: ()=>{
        alert(this.confirmationMsg);
        location.reload();
      }
    });

  }

}
