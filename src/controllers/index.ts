import { _MailAccountController } from "./email_system";
import { _SendEmailController } from "./send_email";

let MailAccountController = new _MailAccountController();
let SendEmailController = new _SendEmailController();

export {
  MailAccountController,
  SendEmailController
};
