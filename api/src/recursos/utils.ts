export function ufValida(uf: string): boolean {
  if (uf.length !== 2) return false;

  const validUFs = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];
  if (!validUFs.includes(uf)) {
    return false;
  }

  return true;
}

export function getDistance (toLat, toLong, fromLat, fromLong) {
  const earthRadius = 6371;
  const degreesToRadians = Math.PI / 180;
  const deltaLat = (toLat - fromLat) * degreesToRadians;
  const deltaLon = (toLong - fromLong) * degreesToRadians;
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(fromLat * degreesToRadians) *
    Math.cos(toLat * degreesToRadians) *
    Math.sin(deltaLon / 2) *
    Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;
  //return 5000;
  return Math.round(distance * 1000);
}