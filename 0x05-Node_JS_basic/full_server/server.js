import express from 'express';
import mapRoutes from './routes';

const app = express();
const Port = 1245;

mapRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on Port ${Port}`);
});

export default app;
module.exports = app;