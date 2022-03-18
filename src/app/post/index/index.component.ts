import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';
import { User } from '../User';
  
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   
  users: User[] = [];
  
  constructor(public postService: PostService, public http: HttpClient) { }
  
  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    let urlService: string = "https://localhost:44329/SchoolExample/GetUsers/";
    let body: any = null;

    this.http.post<any>(urlService, body)
      .subscribe(
        (response) => {

          // error generado por el servicio interno
          if (response && response.Status != undefined && response.Status !== 200) {
            let error = response.Response;
            alert("Error: "+error)
            return;
          }
          let result: User[] = response.Response;
          this.users = result;
        },
        (err) => {
          let error = "Ocurrió un error en el servicio";
          alert(error);
          return;
        },
        () => {
        });
  }
}