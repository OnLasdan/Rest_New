import express from 'express';
import multer from 'multer';
import path from 'path';
import {sendFile} from '../../scrape/upload.js';
import User from '../../models/user.js';

const apiR = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

apiR.post('/cdn', upload.single('file'), async (req, res) => {
   try {
      const { apiKey } = req.body;

      const user = await User.findOne({ apiKey });

      if (!user) {
         return res.status(401).json({ error: 'Invalid API key.' });
      }
      if (user.limit <= 0) {
         return res.status(403).json({ error: 'Limit exceeded.' });
      }

      if (!req.file) {
         return res.status(400).json({ error: 'No file uploaded.' });
      }

      const fileBuffer = req.file.buffer;
      const ext = path.extname(req.file.originalname);

      const result = await sendFile(fileBuffer, ext);

      user.limit -= 1;

      await user.save();

      res.json({
         status: 'Success',
         code: 200,
         author: 'xyla',
         data: result,
      });
   } catch (error) {
      console.error("Error processing file upload:", error);

      res.status(500).json({
         error: 'Internal Server Error',
         message: 'An error occurred while processing the file upload.',
      });
   }
});

export default apiR;
