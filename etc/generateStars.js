import * as fs from "fs";

import { findHexColor } from "./findHexColor";
import { parse } from "csv-parse";

const parser = parse({ delimiter: "," });
const fileStream = fs.createReadStream("./dataset.csv");
const writeStream = fs.createWriteStream("./output.json");

//const starEntries = [];
let columnNames;

writeStream.write('{ "stars":[\n');

fileStream.pipe(parser);

parser.on("readable", () => {
  let starEntry;
  while ((starEntry = parser.read()) !== null) {
    if (!columnNames) {
      columnNames = starEntry;
    } else {
      writeStream.write(processStar(starEntry) + ",\n");
    }
  }
});

parser.on("end", () => {
  console.log("done!");
  writeStream.write("\n]\n}");
});

function getStarValues(starEntry) {
  let star = {};
  for (let i = 0; i < columnNames.length; i++) {
    star[columnNames[i]] = starEntry[i];
  }
  return star;
}

function processStar(starEntry) {
  const { RA, Dec, ColorIndex, Mag, ProperName } = getStarValues(starEntry);
  const rightAscensionDegrees = (RA * 360) / 24;
  const hexColor = findHexColor(ColorIndex);
  return JSON.stringify({
    ra: rightAscensionDegrees,
    dec: Dec,
    c: hexColor,
    am: Mag,
    name: ProperName,
  });
}
