const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const { mergePdfs } = require('./merge');

const app = express();
const upload = multer({ dest: 'uploads/' });

// serve merged files
app.use('/static', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3002;

// debug: confirm index exists in container
console.log('INDEX PATH:', path.join(__dirname, 'templates', 'index.html'), 'exists=', fs.existsSync(path.join(__dirname, 'templates', 'index.html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.post('/merge', upload.array('pdfs', 12), async (req, res) => {
  try {
    console.log('FILES:', req.files);
    const output = await mergePdfs(
      path.join(__dirname, req.files[0].path),
      path.join(__dirname, req.files[1].path)
    );
    console.log('Output file:', output);
    return res.redirect(`/static/${output}`);            // ← use backticks or plain string with variable interpolation
  } catch (err) {
    console.error('POST /merge error:', err);
    return res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
