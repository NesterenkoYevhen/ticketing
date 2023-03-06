import { Publisher, Subjects, PaymentCreatedEvent } from "@ynticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}