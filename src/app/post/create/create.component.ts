import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Rol } from '../Rol';
import { HttpClient } from '@angular/common/http';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  
  public nameU = new FormControl('', [Validators.required]);
  public lastName = new FormControl('', Validators.required);

  public selectedRol = new FormControl('', Validators.required);

  public selectedRoles : string[] = [];

  public listRol: Rol[] = [];

  public form = new FormGroup({
    nameU: this.nameU,
    lastName: this.lastName
  });
  
  constructor(
    public postService: PostService,
    private router: Router, public http: HttpClient
  ) { }
  
  ngOnInit(): void {
    this.getRols();

  }

  private getRols() {
    let urlService: string = "https://localhost:44329/SchoolExample/GetRols/";
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
          let result: Rol[] = response.Response;
          this.listRol = result;
        },
        (err) => {
          let error = "Ocurrió un error en el servicio";
          alert(error);
          return;
        },
        () => {
        });
  }

  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res => {
         console.log('User created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
  
}