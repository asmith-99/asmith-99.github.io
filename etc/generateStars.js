import * as fs from "fs";

import { findStarColor } from "./findStarColor.js";
import { parse } from "csv-parse";

const parser = parse({ delimiter: "," });
const fileStream = fs.createReadStream("./dataset.csv");
const writeStream = fs.createWriteStream("./output.json");

let columnNames;

const starPositions = [];
const starColors = [];
const starSizes = [];
fileStream.pipe(parser);

parser.on("readable", () => {
  let starEntry;
  while ((starEntry = parser.read()) !== null) {
    if (!columnNames) {
      columnNames = starEntry;
    } else {
      processStar(starEntry);
    }
  }
});

parser.on("end", () => {
  writeStream.write(
    JSON.stringify({
      starPositions,
      starColors,
      starSizes,
    })
  );
});

function getStarValues(starEntry) {
  let star = {};
  for (let i = 0; i < columnNames.length; i++) {
    star[columnNames[i]] = starEntry[i];
  }
  return star;
}

function processStar(starEntry) {
  const { RA, Dec, ColorIndex, Mag } = getStarValues(starEntry);
  starPositions.push(
    ...sphericalToCartesian(...astronomicalToSpherical(RA, Dec))
  );
  starColors.push(...findStarColor(ColorIndex));
  starSizes.push(calculateScaledStarSize(Mag));
}

// takes astronomical coordinates and returns spherical coordinates
// returns [r, theta, phi] or [radius, inclination, azimuth]
// in the usual physics convention, assuming a unit sphere.
// e.g. azimuth is angle from the z-axis (north pole, 'up'),
// and inclination is angle from the x axis
function astronomicalToSpherical(ra, dec) {
  return [
    1,
    Math.PI / 2 - (dec * Math.PI) / 180,
    (((ra * 360) / 24) * Math.PI) / 180,
  ];
}

// converts from [r, theta, phi] to [x, y, z]
function sphericalToCartesian(r, theta, phi) {
  return [
    r * Math.sin(theta) * Math.cos(phi),
    r * Math.sin(theta) * Math.sin(phi),
    r * Math.cos(theta),
  ];
}

// This is a vague attempt at converting an apparent magnitude to a
// 'apparent size'. On a computer screen, a shape with twice the area
// produces twice as much light, so this function attempts to map apparent magnitude
// to luminosity, and then takes the square root of that to get a radius.
// "Math.pow(2.512, -starEntry.am)" should be *roughly* proportional to luminosity.
// Maybe. Don't take my word for it.
const SCALING_CONST = 10;
function calculateScaledStarSize(apparentMagnitude) {
  return SCALING_CONST * Math.sqrt(Math.pow(2.512, -apparentMagnitude));
}
