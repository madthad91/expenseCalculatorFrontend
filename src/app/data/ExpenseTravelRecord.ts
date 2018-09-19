
// Just a variable to keep track of the full expense record
// State managers would be much more ideal given more time
export const ExpenseTripRecord: IExpenseTripRecord = {
  expenseTripRecord: []
}

// Interface for top level of contract
export interface IExpenseTripRecord{
  expenseTripRecord: IExpenseRecord[]
}

// Interface for one level deep. Support for full name and his/her expenses
export interface IExpenseRecord{
  fullName: string;
  expenses: number[];

}

// Instances of this will represent the post request payload being built
export class ExpenseRecord implements IExpenseRecord{
  fullName: string;
  expenses: number[];

  constructor(fullName:string, expenses:number[] = []){
    this.fullName = fullName;
    this.expenses = expenses;
  }
}