import { Content } from './notification-content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Solicitação de amizade');
    expect(content.value).toBeTruthy();
  });

  it('shouldn\'t be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('asd')).toThrow();
  });

  it('shouldn\'t be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
