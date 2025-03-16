# Aiden Smith's Portfolio Site

This is my portfolio site, living at https://asmith-99.github.io/.

## Starry Background

The background of this site consists of a `three.js` rendering of the 9000 brightest stars. The stars are rendered by projection onto the surface of a sphere, with the camera set at the center of this sphere- providing an easy way to present the stars in a familiar manner.

The dataset I used was HYG 2.0, obtained from [astronexus.com](https://www.astronexus.com/projects/hyg). I wrote a pre-processing script in [`/etc/generateStars.js`](/etc/generateStars.js) which injests the CSV file, obtains the needed fields, pre-processes them in various ways (e.g. roughly converting R-B color indices to RGB values, convering apparent magnitudes to sizes in pixels, converting astronomical coordinates to cartesian coordinates on a unit sphere), and then stores reduced-precision versions of the values into a JSON file that can be included in the website.

The actual rendering code I use is included at [`/src/StarsPage/stars.js`](/src/StarsPage/stars.js). A `THREE.Points` object is used to efficiently render the 9000 stars using the GPU. Due to the way that this works, custom shader was needed to pass other parameters about the stars (color, size) into the rendering pipeline.
