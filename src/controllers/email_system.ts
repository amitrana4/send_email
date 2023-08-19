import { ApolloError } from "apollo-server-core";
import {
  EmailService
} from "../services/email_service";
const controller: string = "[_MailAccountController]";

export class _MailAccountController {

  async getAllEmailSystem(parent: any, args: any, context: any) {
    const method = "[getAllEmailSystem]";
    try {
      // Getting all the email services
      const all: any = await EmailService.getAll();

      return all;
    } catch (err: any) {
      console.log(`Error: ${method} -  ${controller}--> `, err);
      throw new ApolloError(err);
    }
  }

  getEmailSystemById = async (_: any, args: any, context: any) => {
    const method = "[getEmailSystemById]";
    try {
      const { id } = args;
      // Getting single email services by id
      const single = await EmailService.get(id);

      return single;
    } catch (err: any) {
      console.log(`Error at method ${method} ${controller}-->`, err);
      throw new ApolloError(err);
    }
  };

  createEmailSystem = async (_: any, args: any, context: any) => {
    const method = "[createEmailSystem]";
    try {
      // Getting single email services by id
      const create = await EmailService.create(args.input);

      return create;
    } catch (err: any) {
      console.log(`Error at method ${method} ${controller}-->`, err);
      throw new ApolloError(err);
    }
  };

  updateEmailSystem = async (_: any, args: any, context: any) => {
    const method = "[updateEmailSystem]";
    try {
      const { id, input } = args;

      // First check if exist or not
      const single: any = await EmailService.get(id);
      if(!single){
        throw new ApolloError('Does not exist');
      }
      const result: any = await EmailService.update(input, id);

      return result;
    } catch (err: any) {
      console.log(`Error at method ${method} ${controller}-->`, err);
      throw new ApolloError(err);
    }
  };

  deleteEmailSystem = async (_: any, args: any, context: any) => {
    const method = "[deleteEmailSystem]";
    try {
      const { id } = args;
      const single: any = await EmailService.delete(id);

      return single;
    } catch (err: any) {
      console.log(`Error at method ${method} ${controller}-->`, err);
      throw new ApolloError(err);
    }
  };
}
