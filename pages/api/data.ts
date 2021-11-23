import { sqlExecuter } from "../../database/index";
import type { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "../../model/todo.model";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sql =
    "CREATE TABLE IF NOT EXISTS todo (id BIGINT PRIMARY KEY UNIQUE NOT NULL, title TEXT NOT NULL, content TEXT NOT NULL)";
  sqlExecuter
    .any(sql)
    .then((data) => {
      //console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  const { method } = req;
  switch (method) {
    case "GET":
      const data = await sqlExecuter.any(`select * from todo`);
      res.status(200).json({
        data,
      });
      break;
    case "POST":
      // POST NEW TODO
      sqlExecuter
        .one(
          `INSERT INTO todo (id, title, content) values ($1, $2, $3) RETURNING id`,
          [req.body.id, req.body.title, req.body.content]
        )
        .then((data) => {
          res.status(201).json({ message: `Added todo`, addedID: data.id });
        })
        .catch((err) => {
          res.status(405).end();
        });
      res.status(201).json({ message: `Added todo`, addedID: req.body.id });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
