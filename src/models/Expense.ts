import { IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ExpenseCategory } from './ExpenseCategory';
import { RequiredProperties } from '@/types/RequiredPropertiesTypes';
import { Transaction } from './Transaction';


export class Expense {
  private _id: number;
  private _amount: number;
  private _date: Date;
  private _categoryId: number;
  private _expenseCategory?: ExpenseCategory;
  private _transactions? : Array<Transaction>

  

  constructor(data: RequiredProperties<Partial<Expense>,'id' | 'amount' | 'categoryId'>) {
    this._id = data.id;
    this._amount = data.amount;
    this._date = data.date || new Date();
    this._categoryId = data.categoryId;
    this._expenseCategory = data.expenseCategory;
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
  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  @IsDate()
  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  @IsNumber()
  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }

  @Type(() => ExpenseCategory)
  get expenseCategory(): ExpenseCategory | undefined{
    return this._expenseCategory;
  }

  set expenseCategory(value: ExpenseCategory) {
    this._expenseCategory = value;
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
