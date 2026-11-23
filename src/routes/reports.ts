import { Router } from 'express';
import _ from 'lodash';

export const reportsRouter = Router();

// POST /reports/preview  { "template": "Hello <%= name %>", "name": "Alice" }
reportsRouter.post('/preview', (req, res) => {
  const render = _.template(req.body.template);
  res.type('text/plain').send(render({ name: req.body.name }));
});
