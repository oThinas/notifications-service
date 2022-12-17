import { NotificationsRepository } from '../../src/app/repositories/notifications-repository';
import { Notification } from '../../src/app/entities/notification';

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public inMemoryNotifications: Notification[] = [];

  async create(notification: Notification) {
    this.inMemoryNotifications.push(notification);
  }
}
