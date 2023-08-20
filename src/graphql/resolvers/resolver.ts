import {
  MailAccountController,
  SendEmailController,
} from "../../controllers";
export const resolvers = {
  Query: {
        // Email system get apis
        getAllEmailSystem: MailAccountController.getAllEmailSystem,
        getEmailSystemById: MailAccountController.getEmailSystemById,

        // Email system get apis
        getAllEmail: SendEmailController.getAllEmail,
        getSendEmailById: SendEmailController.getSendEmailById,
  },
  Mutation: {
    // Email system create, update and delete apis
    createEmailSystem: MailAccountController.createEmailSystem,
    updateEmailSystem: MailAccountController.updateEmailSystem,
    deleteEmailSystem: MailAccountController.deleteEmailSystem,


    // Send email
    sendEmail: SendEmailController.sendEmail,
  },
};
