// data borrowed from http://www.isthe.com/chongo/tech/astro/HR-temp-mass-table-byhrclass.html
const starColorData = [
  {
    colorIndex: -0.35,
    r: 144,
    g: 166,
    b: 255,
  },
  {
    colorIndex: -0.3,
    r: 162,
    g: 183,
    b: 255,
  },
  {
    colorIndex: -0.25,
    r: 177,
    g: 196,
    b: 255,
  },
  {
    colorIndex: -0.2,
    r: 191,
    g: 207,
    b: 255,
  },
  {
    colorIndex: 0,
    r: 192,
    g: 208,
    b: 255,
  },
  {
    colorIndex: 0.3,
    r: 203,
    g: 217,
    b: 255,
  },
  {
    colorIndex: 0.5,
    r: 255,
    g: 243,
    b: 250,
  },
  {
    colorIndex: 0.94,
    r: 255,
    g: 231,
    b: 203,
  },
  {
    colorIndex: 1.19,
    r: 255,
    g: 220,
    b: 167,
  },
  {
    colorIndex: 1.88,
    r: 255,
    g: 178,
    b: 78,
  },
  {
    colorIndex: 2.0,
    r: 255,
    g: 171,
    b: 52,
  },
  {
    colorIndex: 2.4,
    r: 255,
    g: 157,
    b: 0,
  },
];
const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (min, value, max) => Math.min(max, Math.max(min, value));
function starRgbLerp(below, above, colorIndex) {
  const fraction =
    (colorIndex - below.colorIndex) / (above.colorIndex - below.colorIndex);
  return {
    r: lerp(below.r, above.r, fraction),
    g: lerp(below.g, above.g, fraction),
    b: lerp(below.b, above.b, fraction),
  };
}
function rgbToHex(rgbObj) {
  return (
    "#" +
    Math.round(clamp(0, rgbObj.r, 255)).toString(16) +
    Math.round(clamp(0, rgbObj.g, 255)).toString(16) +
    Math.round(clamp(0, rgbObj.b, 255)).toString(16)
  );
}
export function findHexColor(colorIndex) {
  for (let i = 0; i < starColorData.length - 1; i++) {
    let below = starColorData[i];
    let above = starColorData[i + 1];
    if (colorIndex >= below.colorIndex && colorIndex < above.colorIndex) {
      const lerpedRgb = starRgbLerp(below, above, colorIndex);
      return rgbToHex(lerpedRgb);
    }
  }
}
