import { _EmailService } from "./email_service";
import { _SendEmailService } from "./send_email_service";
const EmailService = new _EmailService();
const SendEmailService = new _SendEmailService();

export {
  EmailService,
  SendEmailService
};
