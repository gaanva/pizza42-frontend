import { Component, OnInit } from '@angular/core';
import { UsersRegistered } from './users-registered';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-list-report',
  templateUrl: './user-list-report.component.html',
  styleUrls: ['./user-list-report.component.css']
})
export class UserListReportComponent implements OnInit {
  API_URL: string = "http://18.218.126.230:3001/";
  userList: UsersRegistered[] = [];

  constructor(public auth:AuthService, private http: HttpClient) {
    
  }

  ngOnInit() {
    this.getAllUsersList();
  }

  getAllUsersList(){
    this.http.get<UsersRegistered[]>(`${this.API_URL}usersListInformation`, {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${this.auth.accessToken}`)
      })
      .subscribe(
        users => {
          this.userList = users;
          console.log(users);
        },
        error => {
          alert('Error retrieving users list. Please chec the console error.');  
          console.log(error);
            
        }
      );
  }

}
