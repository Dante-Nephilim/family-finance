// models/Transaction.ts
import { IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { TransactionType } from './TransactionType';
import { Budget } from './Budget';
import { Income } from './Income';
import { Expense } from './Expense';
import { RequiredProperties } from '@/types/RequiredPropertiesTypes';

export class Transaction {
  private _id: number;
  private _amount: number;
  private _transactionDate: Date;
  private _typeId: number;
  private _transactionType?: TransactionType;
  private _budgetId: number;
  private _budget?: Budget;
  private _incomeId?: number;
  private _income?: Income;
  private _expenseId?: number;
  private _expense?: Expense;

  constructor(data: RequiredProperties<Partial<Transaction>, 'id' | 'amount' | 'transactionDate' | 'typeId' | 'budgetId'>) {
    this._id = data.id;
    this._amount = data.amount;
    this._transactionDate = data.transactionDate || new Date();
    this._typeId = data.typeId;
    this._transactionType = data.transactionType;
    this._budgetId = data.budgetId;
    this._budget = data.budget;
    this._incomeId = data.incomeId;
    this._income = data.income;
    this._expenseId = data.expenseId;
    this._expense = data.expense;
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
  get transactionDate(): Date {
    return this._transactionDate;
  }

  set transactionDate(value: Date) {
    this._transactionDate = value;
  }

  @IsNumber()
  get typeId(): number {
    return this._typeId;
  }

  set typeId(value: number) {
    this._typeId = value;
  }

  @Type(() => TransactionType)
  get transactionType(): TransactionType  | undefined{
    return this._transactionType;
  }

  set transactionType(value: TransactionType) {
    this.typeId = value.id;
    this._transactionType = value;
  }

  @IsNumber()
  get budgetId(): number {
    return this._budgetId;
  }

  set budgetId(value: number) {
    this._budgetId = value;
  }

  @Type(() => Budget)
  get budget(): Budget | undefined{
    return this._budget;
  }

  set budget(value: Budget) {
    this._budgetId = value.id;
    this._budget = value;
  }

  @IsNumber()
  get incomeId(): number | undefined {
    return this._incomeId;
  }

  set incomeId(value: number | undefined) {
    this._incomeId = value;
  }

  @Type(() => Income)
  get income(): Income | undefined {
    return this._income;
  }

  set income(value: Income | undefined) {
    this._incomeId = value?.id;
    this._income = value;
  }

  @IsNumber()
  get expenseId(): number | undefined {
    return this._expenseId;
  }

  set expenseId(value: number | undefined) {
    this._expenseId = value;
  }

  @Type(() => Expense)
  get expense(): Expense | undefined {
    return this._expense;
  }

  set expense(value: Expense | undefined) {
    this._expenseId = value?.id;
    this._expense = value;
  }
}
