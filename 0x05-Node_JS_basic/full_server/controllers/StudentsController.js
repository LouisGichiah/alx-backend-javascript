import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(req.databaseFile);
      // Process the data and send the response
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const data = await readDatabase(req.databaseFile);
      // Process the data and send the response
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
