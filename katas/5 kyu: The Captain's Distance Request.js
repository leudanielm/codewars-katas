// https://www.codewars.com/kata/524ada2bdc2121b521000353

// complete the function to calculate the distance between two coordinates.
// Input: the two coordinates
// Output: return the distance in kilometers

const RADIUS = 6371;

function distance(coord1, coord2) {
  const [latOrigin, lngOrigin] = coord1.split(/\,\s/g).map(toDegrees);
  const [latDest, lngDest] = coord2.split(/\,\s/g).map(toDegrees);
  
  return haversine(
    latOrigin,
    lngOrigin,
    latDest,
    lngDest,
    RADIUS
  );
}

function haversine(latOrigin, lngOrigin, latDest, lngDest, radius) {
  const { asin, sin, sqrt, pow, cos, floor } = Math;
  const latDistance = toRadians(latDest - latOrigin);
  const lngDistance = toRadians(lngDest - lngOrigin);
  
  const dx = pow(sin(latDistance / 2), 2);
  const dy = pow(sin(lngDistance / 2), 2);
  const dz = cos(toRadians(latOrigin)) * cos(toRadians(latDest));
  
  return floor(radius * 2 * asin(sqrt(dx + dy * dz)) / 10) * 10;
}

function toDegrees(coordinates) {
  const coordsArray = coordinates
    .replace(/°|′|″/g, '')
    .trim().split(/\s/);
  const [hours, minutes, seconds, heading] = coordsArray;
  const sign = /W|S/.test(heading) ? -1 : 1;
  
  return (
    parseFloat(hours) + 
    parseFloat(minutes) / 60 + 
    parseFloat(seconds) / 3600
  ) * sign;
}

function toRadians(deg) {
  return deg / 180 * Math.PI;
}

