import { Notification } from './notification';
import { Content } from './notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Solicitação de amizade'),
      category: 'friendship',
      recipientId: '123',
    });
    expect(notification).toBeTruthy();
  });
});
