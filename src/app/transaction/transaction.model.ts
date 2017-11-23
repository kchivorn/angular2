export class Transaction {
  public id:string
  public value:number
  public description:string
  public date:Date
  public tags:Array<string>
  public accountId:number

  public constructor(id:string, value:number, description:string, date:Date, tags:Array<string>, accountId:number){
    this.id = id
    this.value = value
    this.description = description
    this.date = date
    this.tags = tags
    this.accountId = accountId
  }
}
