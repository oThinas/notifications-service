export class Content {
  private readonly content: string;

  constructor(content: string) {
    if (!this.validateContentLenght(content)) throw new Error('Content length is invalid.');
    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  private validateContentLenght(content: string): boolean {
    return 5 <= content.length && content.length <= 240;
  }
}
