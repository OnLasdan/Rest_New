import express from 'express';
import cors from 'cors';
import randomRoutes from './random.js';
import downloaderRoutes from './downloader.js';
import aiRoutes from './ai.js';
import uploadRoutes from './upload.js';
import searchRoutes from './search.js';
import miscRoutes from './misc.js';

const apiR = express.Router();

// Updated file
apiR.use(cors());

// Buat defined routes
apiR.use('/random', randomRoutes);
apiR.use('/downloader', downloaderRoutes);
apiR.use('/ai', aiRoutes);
apiR.use('/upload', uploadRoutes);
apiR.use('/search', searchRoutes);
apiR.use('/misc', miscRoutes);

export default apiR;
