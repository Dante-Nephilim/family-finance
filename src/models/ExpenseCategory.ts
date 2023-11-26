import { IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Expense } from './Expense';
import { RequiredProperties } from '@/types/RequiredPropertiesTypes';

export class ExpenseCategory {
 private _id: number;
 private _name: string;
 private _expenses: Array<Expense>;

 constructor(data: RequiredProperties<Partial<ExpenseCategory>, 'id' | 'name'>) {
   this._id = data.id;
   this._name = data.name;
   this._expenses = data.expenses || [];
 } 

 @IsNumber()
 get id(): number {
   return this._id;
 }

 set id(value: number) {
   this._id = value;
 }

 @IsString()
 get name(): string {
   return this._name;
 }

 set name(value: string) {
   this._name = value;
 }

 @Type(() => Array)
 @ValidateNested({ each: true })
 get expenses(): Array<Expense> {
   return this._expenses;
 }

 set expenses(value: Array<Expense>) {
   this._expenses = value;
 }
 addExpense(expense: Expense) {
     expense.categoryId = this._id;
    this._expenses.push(expense);
  }
}
