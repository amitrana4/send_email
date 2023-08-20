'use strict';
import { dbConn } from '../configs/config'

export class _EmailService {
  async create(body: any) {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("INSERT INTO email_service_scema set ?", body, function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('email_service_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
  async get(id: number) {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("Select * from email_service_scema where id = ? ", id, function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('email_service_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
  getAll() {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("Select * from email_service_scema", function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('email_service_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
  async update(body: any, id: number) {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("UPDATE email_service_scema SET ? WHERE id = ?", [body, id], function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('email_service_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
  async delete(id: number) {
    return new Promise(async (resolve, reject) => {
      await dbConn.query("DELETE FROM email_service_scema WHERE id = ?", [id], function (err, res) {
        if (err) {
          console.log("error: ", err);
          return resolve(err)
        }
        else {
          console.log('email_service_scema : ', res);
          return resolve(res)
        }
      })
    });
  }
}
