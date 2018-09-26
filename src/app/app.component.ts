import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpenseRecord, ExpenseTripRecord } from './data/ExpenseTravelRecord';
import { TemplateService } from './services/template.service';
import { HttpUtilService } from './services/http-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thad-itrellis-frontend-trip-calculator';
  templates;
  form: FormGroup;
  formGroup;

  personWhoReceivesOwe;
  peopleWhoOwes = [];

  constructor(private fb: FormBuilder, 
    private templateUtil:TemplateService,
    private http: HttpUtilService) {

    this.setBaseForm();
  }

  addExpense(){
    // Get a new base EXPENSE template which will generate a new key for it as well
    let newExpenseBase = this.templateUtil.getNewExpenseTemplate(this.templates.length);
    // Push it on the set of templates which are UI representation of the expense builder
    this.templates.push(newExpenseBase);
    // Add the associated form control
    this.form.addControl(newExpenseBase.key, new FormControl(newExpenseBase.value));
  }

  addNewPerson(){
    // If the form is invalid, do not add a new person
    if(!this.form.valid) return;

    // Get all the form control names
    let keys = Object.keys(this.form.controls);

    // Remove the full name field. More consisten approach than [0]
    let fullNameObj = keys.splice(keys.indexOf('name_0'), 1);

    // Parse out all the values for each expense box
    const expenses = keys.map(key => parseFloat(this.form.get(key).value));

    // Save that person instance
    ExpenseTripRecord.expenseTripRecord.push(new ExpenseRecord(this.form.get(fullNameObj).value, expenses));

    // Clear the form
    this.setBaseForm();
  }

  setBaseForm() {
    // setup the form
    this.formGroup = {};

    // Gets the base template which consists of a full name field and one expense fillout
    this.templates = this.templateUtil.getBaseTemplate();

    this.templates.forEach(val=>{
      // Create form controls
      this.formGroup[val.key] = new FormControl(val.value, (val['required'])? Validators.required : null);
    });

    // Add form controls to the form
    this.form = new FormGroup(this.formGroup);
  }

  isDisabled(){
    return !this.form.controls['name_0'].valid && ExpenseTripRecord.expenseTripRecord.length === 0;
  }

  onSubmit(){
    // If the full name is filled out, grab all of its fields. Convenience for the user
    if(this.form.controls['name_0'].valid){
      this.addNewPerson();
    }

    // call API
    this.http.generateowes(ExpenseTripRecord)
      .subscribe(data=>{
        
        // split results into the people who owe and the person receiving the money
        data['expenseTripRecord']
          .forEach((val, idx)=>{
            if(!val.hasOwnProperty('owes')){
              // Here .splice modifies its own array, but it returns a new array
              // so just take the first index since there will only ever be one person 
              // who is receiving the money
              this.personWhoReceivesOwe = data['expenseTripRecord'].splice(idx, 1)[0];
            }
          });
        
        this.peopleWhoOwes = data['expenseTripRecord'];
      })
  }
}