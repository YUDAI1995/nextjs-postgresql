import type { NextApiRequest, NextApiResponse } from "next";

export default function dataHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, title },
    method,
  } = req;

  console.log(method);

  switch (method) {
    case "GET":
      console.log(req.body.id);
      // Get data from your database
      res.status(200).json({ id, title });
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, title: title, content: "" });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  //res.status(200).json({ name: "John Doe" });
}
