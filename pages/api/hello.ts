// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { IncomingMessage, ServerResponse } from 'http';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
