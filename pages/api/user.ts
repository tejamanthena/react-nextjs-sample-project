import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import data from "./data.json";

/**
 * Requests mapped to /api/* will be treated as API endpoints
 * @see https://nextjs.org/docs/api-routes/introduction
 */
const user: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const userData = data;

  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).end();
  }
}

export default user;