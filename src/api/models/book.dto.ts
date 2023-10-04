export class BookDTO {
  constructor(
    private title: string, 
    private description: string, 
    private bar_code: string, 
    private created_at: Date, 
  ){}
}