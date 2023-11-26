// models/BudgetCategory.ts
import { IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Budget } from './Budget';
import { RequiredProperties } from '@/types/RequiredPropertiesTypes';

export class BudgetCategory {
  private _id: number;
  private _name: string;
  private _budgets: Array<Budget>;

  constructor(data: RequiredProperties<Partial<BudgetCategory>, 'id' | 'name'>) {
    this._id = data.id;
    this._name = data.name;
    this._budgets = data.budgets || [];
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

  @ValidateNested({ each: true })
  @Type(() => Budget)
  get budgets(): Array<Budget> {
    return this._budgets;
  }

  set budgets(value: Array<Budget>) {
    this._budgets = value;
  }

  addBudget(budget: Budget) {
    budget.categoryId = this._id;
   this._budgets.push(budget);
 }
}
