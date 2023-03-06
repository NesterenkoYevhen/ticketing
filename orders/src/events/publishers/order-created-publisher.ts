import { Publisher, OrderCreatedEvent, Subjects } from "@ynticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
