export class Book {
  constructor(
    private readonly title: string,
    private readonly description: string,
    private readonly bar_code: string,
    private readonly created_at: Date,
  ) {}

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.description;
  }

  public getBarCode() {
    return this.bar_code;
  }

  public getCreatedAt() {
    return this.created_at;
  }
}
