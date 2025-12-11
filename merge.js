const PDFMerger = require('pdf-merger-js');
const path = require('path');
const fs = require('fs');
const merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
  // ensure public folder exists
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

  await merger.add(p1);
  await merger.add(p2);
  const outName = `${Date.now()}.pdf`;
  await merger.save(path.join(publicDir, outName));
  return outName;
};

module.exports = { mergePdfs };
