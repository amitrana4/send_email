'use strict';
import { dbConn } from '../configs/config'

export class _SendEmailService {
  async create(body: any) {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("INSERT INTO send_email_scema set ?", body, function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('send_email_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
  async get(id: number) {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("Select * from send_email_scema where id = ? ", id, function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('send_email_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
  getAll() {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("Select * from send_email_scema", function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('send_email_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
  async update(body: any, id: number) {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("UPDATE send_email_scema SET ? WHERE id = ?", [body, id], function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('send_email_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
  async delete(id: number) {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("DELETE FROM send_email_scema WHERE id = ?", [id], function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('send_email_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
}