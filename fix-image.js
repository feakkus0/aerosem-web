const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app'),
];

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getFiles(fullPath, files);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

const allFiles = [];
for (const d of dirs) {
  getFiles(d, allFiles);
}

for (const f of allFiles) {
  let content = fs.readFileSync(f, 'utf8');
  let originalContent = content;
  
  // Replace <Image and </Image>
  if (content.includes('<Image') || content.includes('</Image>')) {
    content = content.replace(/<Image/g, '<NextImage');
    content = content.replace(/<\/Image>/g, '</NextImage>');
    
    // Replace import
    if (content.match(/import\s+Image\s+from\s+['"]next\/image['"]/)) {
      content = content.replace(/import\s+Image\s+from\s+['"]next\/image['"]/, 'import NextImage from "next/image"');
    } else if (!content.includes('import NextImage from "next/image"') && !content.includes("import NextImage from 'next/image'")) {
       // Need to add import at the top
       if (content.startsWith('"use client";') || content.startsWith("'use client';")) {
          // split by first newline that isn't empty
          content = content.replace(/^(["']use client["'];?)\s*/, "$1\nimport NextImage from \"next/image\";\n");
       } else {
          content = 'import NextImage from "next/image";\n' + content;
       }
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Fixed:', f);
  }
}
console.log('Done');
