// scripts/exportKnowledge.js
// Run with: node scripts/exportKnowledge.js

const fs = require("fs");
const path = require("path");

// Import your lesson data
// Adjust paths to match your actual file locations
// const { Beginner } = require("../../Client/src/Data/BeginnerKnowledge.js");
// const {
//   Intermediate,
// } = require("../../Client/src/Data/IntermediateKnowledge.js");
const { Advanced } = require("../../Client/src/Data/AdvancedKnowledge.js");

const OUTPUT_BASE = path.join(__dirname, "../../ai-backend/knowledge_base");

function cleanText(text) {
  // Remove HTML tags like <u>, <b>, etc.
  return text
    .replace(/<[^>]*>/g, "") // remove HTML tags
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n") // max 2 consecutive newlines
    .trim();
}

function exportLevelData(levelData, levelName) {
  const outputDir = path.join(OUTPUT_BASE, levelName.toLowerCase());

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let totalFiles = 0;

  Object.entries(levelData).forEach(([lessonTitle, pages]) => {
    // Create one text file per lesson
    const fileName =
      lessonTitle
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, "_")
        .toLowerCase() + ".txt";

    const filePath = path.join(outputDir, fileName);

    let content = "";
    content += `LEVEL: ${levelName}\n`;
    content += `LESSON: ${lessonTitle}\n`;
    content += `${"=".repeat(60)}\n\n`;

    pages.forEach((page, index) => {
      content += `PAGE ${index + 1}: ${page.title}\n`;
      content += `${"-".repeat(40)}\n`;
      content += cleanText(page.info);
      content += "\n\n";
    });

    fs.writeFileSync(filePath, content, "utf8");
    totalFiles++;
    console.log(`✅ Created: ${levelName}/${fileName}`);
  });

  return totalFiles;
}

// Export all three levels
console.log("\n🎸 Exporting Guitar Knowledge Base...\n");

// const b = exportLevelData(Beginner, "Beginner");
// const i = exportLevelData(Intermediate, "Intermediate");
const a = exportLevelData(Advanced, "Advanced");

console.log(`\n✅ Done!`);
// console.log(`   Beginner:     ${b} files`);
// console.log(`   Intermediate: ${i} files`);
// console.log(`   Advanced:     ${a} files`);
// console.log(`   Total:        ${b + i + a} files`);
console.log(`\n📁 Output: ai-backend/knowledge_base/`);
