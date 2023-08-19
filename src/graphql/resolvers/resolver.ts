import {
  MailAccountController,
} from "../../controllers";
export const resolvers = {
  Query: {
        // Email system get apis
        getAllEmailSystem: MailAccountController.getAllEmailSystem,
        getEmailSystemById: MailAccountController.getEmailSystemById,
  },
  Mutation: {
    // Email system create, update and delete apis
    createEmailSystem: MailAccountController.createEmailSystem,
    updateEmailSystem: MailAccountController.updateEmailSystem,
    deleteEmailSystem: MailAccountController.deleteEmailSystem,
  },
};
