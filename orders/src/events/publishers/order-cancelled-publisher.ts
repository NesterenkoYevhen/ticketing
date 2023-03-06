import { Publisher, OrderCancelledEvent, Subjects } from "@ynticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}