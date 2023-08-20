import { ApolloError } from "apollo-server-core";
import {
  EmailService, SendEmailService
} from "../services";
const controller: string = "[_SendEmailController]";

export class _SendEmailController {

  async getAllEmail(parent: any, args: any, context: any) {
    const method = "[getAllEmail]";
    try {
      // Getting all emails sent
      const all: any = await SendEmailService.getAll();

      return all;
    } catch (err: any) {
      console.log(`Error: ${method} -  ${controller}--> `, err);
      throw new ApolloError(err);
    }
  }

  getSendEmailById = async (_: any, args: any, context: any) => {
    const method = "[getSendEmailById]";
    try {
      const { id } = args;
      // Getting single success email stored to db by id
      const single = await SendEmailService.get(id);

      return single;
    } catch (err: any) {
      console.log(`Error at method ${method} ${controller}-->`, err);
      throw new ApolloError(err);
    }
  };

  sendEmail = async (_: any, args: any, context: any) => {
    const method = "[sendEmail]";
    try {
      let {to, cc, bcc, subject, body, service_id} = args.input

      // Getting all email services by id else get all service ids and use first
      let email_service: any
      if(service_id) {
        email_service = await EmailService.get(service_id)
        if(!email_service.length){
          throw new ApolloError("Invalid service id!");
        }
        email_service = email_service[0]
      }
      else {
      email_service = await EmailService.getAll();
      email_service = email_service[0]
      }
      cc = cc ? cc.join(',') : cc
      bcc = bcc ? bcc.join(',') : bcc
      // we will use first email service
      
      //NOTE -------*********     Send email functionlaity will come here

      // After send success, we can store to db
      const create = await SendEmailService.create({to, cc, bcc, subject, body, service_id: email_service.id, from: email_service.email});

      return create;
    } catch (err: any) {
      console.log(`Error at method ${method} ${controller}-->`, err);
      throw new ApolloError(err);
    }
  };
}
