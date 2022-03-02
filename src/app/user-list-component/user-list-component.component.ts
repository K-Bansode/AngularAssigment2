import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {

  public name="Krushna Bansode";
  public gmail="krushnab@gmail.com";
  public status=true;

  status2(){
    if(this.status)
    {
      return "Active";
    }
    else{
      return "inactive";
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
