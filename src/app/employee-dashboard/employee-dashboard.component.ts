import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'
import { employeeModel } from './employee-dash borad.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  formValue !: FormGroup;
  employeeModelObj : employeeModel=new employeeModel()
  api: any;
  employeeData: any;
  

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      Fristname :[''],
      LastName :[''],
      Email :[''],
      Phone :[''],
      Role :[''],
      Status :[''],
      Password :[''],
      ConformPassword :[''],



    })

   }

   postEmployeeDetails(){

     this.employeeModelObj.fristName=this.formValue.value.Fristname;
     this.employeeModelObj.LastName=this.formValue.value.LastName;
     this.employeeModelObj.Email=this.formValue.value.Email;
     this.employeeModelObj.Phone=this.formValue.value.Phone;
     this.employeeModelObj.Role=this.formValue.value.Role;
     this.employeeModelObj.Status=this.formValue.value.Status;
     this.employeeModelObj.Password=this.formValue.value.Password;
     this.employeeModelObj.ConformPassword=this.formValue.value.conformPassword;

     this.api.postEmployee(this.employeeModelObj)
     
       .subscribe((res: any): void => {
           console.log(res);
           alert("Employee added Sucessfully")
           let ref=document.getElementById('save')
           ref?.click();
           this.formValue.reset();


         },
       
         (err: any): void=>{

           alert("Something went rong");
         })
       }
      getAllEmployee(){

        this.api.getEmployee()
        .subscribe((res:any)=>{
          
          this.employeeData =res;

        })
      }
   }


