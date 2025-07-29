const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'MetricWise API is running!', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`MetricWise server running on port ${PORT}`);
});
