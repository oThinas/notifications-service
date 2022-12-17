import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: '123',
      content: 'Hello world',
      category: 'welcome',
    });

    expect(notificationsRepository.inMemoryNotifications).toHaveLength(1);
    expect(notificationsRepository.inMemoryNotifications[0]).toEqual(notification);
  });
});
