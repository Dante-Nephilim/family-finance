import { IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Income } from './Income';
import { RequiredProperties } from '@/types/RequiredPropertiesTypes';

export class IncomeCategory {
 private _id: number;
 private _name: string;
 private _incomes: Array<Income>;

 constructor(data: RequiredProperties<Partial<IncomeCategory>, 'id' | 'name'>) {
   this._id = data.id;
   this._name = data.name;
   this._incomes = data.incomes || [];
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
 get incomes(): Array<Income> {
   return this._incomes;
 }

 set incomes(value: Array<Income>) {
   this._incomes = value;
 }

 addIncome(income: Income) {
     income.categoryId = this._id;
    this._incomes.push(income);
  }
}
