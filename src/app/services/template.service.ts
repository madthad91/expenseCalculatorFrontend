import { Injectable } from '@angular/core';

// Function TemplateService - 
// This class just helps add resetting the form
// and also to add rows to the form
@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  // Gets a basetemplate with full name and his/her expenses
  getBaseTemplate(){
    return [{
      key: "name_0",
      label: "Full Name",
      value: "",
      type: "text",
      required: true
    },
    {
      key: "expenses_1",
      label: "Expenses",
      value: 0,
      type: "number"
    }] as ITemplateStruct[];
  
  }

  // Gets a new expense template or a new row for the form
  getNewExpenseTemplate(length){
    return {
      key: `expenses_${length}`,
      label: "Expenses",
      value: 0,
      type: "number"
    } as ITemplateStruct
  }
}

interface ITemplateStruct {
  key: string,
  label: string,
  value: any,
  type: string,
  required?: boolean
}
