// models/Budget.ts
import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { BudgetCategory } from './BudgetCategory';
import { RequiredProperties } from '@/types/RequiredPropertiesTypes';
import { Transaction } from './Transaction';

export class Budget {
  private _id: number;
  private _totalAmount: number;
  private _allocatedAmount: number;
  private _remainingAmount: number;
  private _categoryId: number;
  private _budgetCategory?: BudgetCategory;
  private _transactions? : Array<Transaction>

  constructor(data: RequiredProperties<Partial<Budget>, 'id' | 'totalAmount' | 'allocatedAmount' | 'categoryId'>) {
    this._id = data.id;
    this._totalAmount = data.totalAmount;
    this._allocatedAmount = data.allocatedAmount;
    this._remainingAmount = data.remainingAmount || 0;
    this._categoryId = data.categoryId;
    this._budgetCategory = data.budgetCategory;
    this._transactions = data.transactions;
  }

  @IsNumber()
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  @IsNumber()
  get totalAmount(): number {
    return this._totalAmount;
  }

  set totalAmount(value: number) {
    this._totalAmount = value;
  }

  @IsNumber()
  get allocatedAmount(): number {
    return this._allocatedAmount;
  }

  set allocatedAmount(value: number) {
    this._allocatedAmount = value;
  }

  @IsNumber()
  get remainingAmount(): number {
    return this._remainingAmount;
  }

  set remainingAmount(value: number) {
    this._remainingAmount = value;
  }

  @IsNumber()
  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }

  @Type(() => BudgetCategory)
  get budgetCategory(): BudgetCategory | undefined {
    return this._budgetCategory;
  }

  set budgetCategory(value: BudgetCategory) {
    this._budgetCategory = value;
    this._categoryId = value.id;
  }

  @Type(() => Array<Transaction>)
  get transactions(): Array<Transaction> | undefined {
    return this._transactions;
  }

  set transactions(value: Array<Transaction>) {
    this._transactions = value;
  }

}
