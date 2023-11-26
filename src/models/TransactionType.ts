// models/TransactionType.ts
import { IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Transaction } from './Transaction';
import { RequiredProperties } from '@/types/RequiredPropertiesTypes';

export class TransactionType {
  private _id: number;
  private _type: string;
  private _transactions: Array<Transaction>;

  constructor(data: RequiredProperties<Partial<TransactionType>, 'id' | 'type'>) {
    this._id = data.id;
    this._type = data.type;
    this._transactions = data.transactions || [];
  }

  @IsNumber()
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  @IsString()
  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  @Type(() => Transaction)
  @ValidateNested({ each: true })
  get transactions(): Array<Transaction> {
    return this._transactions;
  }

  set transactions(value: Array<Transaction>) {
    this._transactions = value;
  }
  addTransaction(transaction: Transaction) {
    transaction.typeId = this._id;
   this._transactions.push(transaction);
 }
}
