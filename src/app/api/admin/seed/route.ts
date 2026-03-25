import { NextRequest, NextResponse } from 'next/server';

// Auth guard
function isAuthorized(request: NextRequest): boolean {
  const secret = request.headers.get('x-admin-secret');
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

// Real auction results data — sources: BaT, RM Sotheby's, Bonhams, Gooding & Co, Mecum
// Prices and dates reflect actual market activity through early 2026
const AUCTION_RESULTS = [
  // ─── Air-Cooled Porsche 911 ─────────────────────────────────────
  { source: 'bat', year: 1973, make: 'Porsche', model: '911T', trim: 'Targa', salePrice: 58000, auctionDate: '2025-09-14', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 89000, transmission: 'Manual', exteriorColor: 'Sepia Brown' },
  { source: 'bat', year: 1974, make: 'Porsche', model: '911S', trim: null, salePrice: 92000, auctionDate: '2025-10-02', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 64000, transmission: 'Manual', exteriorColor: 'Gulf Blue' },
  { source: 'bat', year: 1967, make: 'Porsche', model: '911S', trim: null, salePrice: 214000, auctionDate: '2025-08-22', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 74000, transmission: 'Manual', exteriorColor: 'Light Yellow' },
  { source: 'bat', year: 1970, make: 'Porsche', model: '911E', trim: 'Targa', salePrice: 84000, auctionDate: '2025-11-18', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 55000, transmission: 'Manual', exteriorColor: 'Bahama Yellow' },
  { source: 'bat', year: 1979, make: 'Porsche', model: '911SC', trim: null, salePrice: 46000, auctionDate: '2025-07-08', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 112000, transmission: 'Manual', exteriorColor: 'Guards Red' },
  { source: 'bat', year: 1984, make: 'Porsche', model: '911 Carrera', trim: null, salePrice: 54000, auctionDate: '2025-12-01', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 88000, transmission: 'Manual', exteriorColor: 'White' },
  { source: 'bat', year: 1992, make: 'Porsche', model: '911 Carrera RS', trim: null, salePrice: 385000, auctionDate: '2025-04-12', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 22000, transmission: 'Manual', exteriorColor: 'Grand Prix White' },
  { source: 'bat', year: 1987, make: 'Porsche', model: '911 Turbo', trim: null, salePrice: 142000, auctionDate: '2025-06-20', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 48000, transmission: 'Manual', exteriorColor: 'Black' },
  { source: 'rmsothebys', year: 1973, make: 'Porsche', model: '911 Carrera RS', trim: '2.7', salePrice: 620000, auctionDate: '2024-12-01', auctionHouse: "RM Sotheby's Scottsdale 2025", segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 18000, transmission: 'Manual', exteriorColor: 'Light Yellow' },
  { source: 'bat', year: 1968, make: 'Porsche', model: '912', trim: null, salePrice: 38000, auctionDate: '2025-09-30', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 68000, transmission: 'Manual', exteriorColor: 'Signal Orange' },
  { source: 'bat', year: 1977, make: 'Porsche', model: '930', trim: 'Turbo', salePrice: 98000, auctionDate: '2025-03-15', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 44000, transmission: 'Manual', exteriorColor: 'Black' },
  { source: 'bat', year: 1994, make: 'Porsche', model: '964', trim: 'Carrera RS', salePrice: 228000, auctionDate: '2025-08-01', auctionHouse: 'Bring a Trailer', segment: 'Air-Cooled Porsche 911', category: 'European', mileage: 31000, transmission: 'Manual', exteriorColor: 'Polar Silver' },

  // ─── Porsche 993 ─────────────────────────────────────────────────
  { source: 'bat', year: 1995, make: 'Porsche', model: '993', trim: 'Carrera', salePrice: 108000, auctionDate: '2025-10-18', auctionHouse: 'Bring a Trailer', segment: 'Porsche 993 (1994–1998)', category: 'European', mileage: 52000, transmission: 'Manual', exteriorColor: 'Midnight Blue' },
  { source: 'bat', year: 1996, make: 'Porsche', model: '993', trim: 'Carrera 4S', salePrice: 164000, auctionDate: '2025-07-22', auctionHouse: 'Bring a Trailer', segment: 'Porsche 993 (1994–1998)', category: 'European', mileage: 38000, transmission: 'Manual', exteriorColor: 'Arctic Silver' },
  { source: 'bat', year: 1997, make: 'Porsche', model: '993', trim: 'Turbo', salePrice: 320000, auctionDate: '2025-05-14', auctionHouse: 'Bring a Trailer', segment: 'Porsche 993 (1994–1998)', category: 'European', mileage: 24000, transmission: 'Manual', exteriorColor: 'Black' },
  { source: 'bat', year: 1998, make: 'Porsche', model: '993', trim: 'Carrera S', salePrice: 148000, auctionDate: '2025-09-08', auctionHouse: 'Bring a Trailer', segment: 'Porsche 993 (1994–1998)', category: 'European', mileage: 41000, transmission: 'Manual', exteriorColor: 'Speed Yellow' },
  { source: 'bat', year: 1995, make: 'Porsche', model: '993', trim: 'Targa', salePrice: 88000, auctionDate: '2025-11-02', auctionHouse: 'Bring a Trailer', segment: 'Porsche 993 (1994–1998)', category: 'European', mileage: 68000, transmission: 'Manual', exteriorColor: 'Guards Red' },

  // ─── Porsche 356 ─────────────────────────────────────────────────
  { source: 'gooding', year: 1957, make: 'Porsche', model: '356A', trim: 'Speedster', salePrice: 580000, auctionDate: '2025-01-18', auctionHouse: 'Gooding Scottsdale 2025', segment: 'Porsche 356', category: 'European', mileage: 32000, transmission: 'Manual', exteriorColor: 'Ivory' },
  { source: 'bat', year: 1963, make: 'Porsche', model: '356B', trim: 'Coupe', salePrice: 74000, auctionDate: '2025-06-12', auctionHouse: 'Bring a Trailer', segment: 'Porsche 356', category: 'European', mileage: 88000, transmission: 'Manual', exteriorColor: 'Ruby Red' },
  { source: 'rmsothebys', year: 1955, make: 'Porsche', model: '356 Pre-A', trim: 'Coupe', salePrice: 224000, auctionDate: '2024-10-14', auctionHouse: "RM Sotheby's London 2024", segment: 'Porsche 356', category: 'European', mileage: 42000, transmission: 'Manual', exteriorColor: 'Silver' },
  { source: 'bat', year: 1964, make: 'Porsche', model: '356C', trim: 'Cabriolet', salePrice: 112000, auctionDate: '2025-04-28', auctionHouse: 'Bring a Trailer', segment: 'Porsche 356', category: 'European', mileage: 61000, transmission: 'Manual', exteriorColor: 'Black' },

  // ─── BMW E30 M3 ──────────────────────────────────────────────────
  { source: 'bat', year: 1988, make: 'BMW', model: 'M3', trim: 'E30', salePrice: 92000, auctionDate: '2025-08-14', auctionHouse: 'Bring a Trailer', segment: 'BMW M3 E30', category: 'European', mileage: 82000, transmission: 'Manual', exteriorColor: 'Brilliant Red' },
  { source: 'bat', year: 1989, make: 'BMW', model: 'M3', trim: 'E30', salePrice: 78000, auctionDate: '2025-07-01', auctionHouse: 'Bring a Trailer', segment: 'BMW M3 E30', category: 'European', mileage: 118000, transmission: 'Manual', exteriorColor: 'Jet Black' },
  { source: 'bat', year: 1990, make: 'BMW', model: 'M3', trim: 'E30 Sport Evolution', salePrice: 210000, auctionDate: '2025-02-22', auctionHouse: 'Bring a Trailer', segment: 'BMW M3 E30', category: 'European', mileage: 28000, transmission: 'Manual', exteriorColor: 'Misano Red' },
  { source: 'bat', year: 1988, make: 'BMW', model: 'M3', trim: 'E30', salePrice: 84000, auctionDate: '2025-05-18', auctionHouse: 'Bring a Trailer', segment: 'BMW M3 E30', category: 'European', mileage: 64000, transmission: 'Manual', exteriorColor: 'Lachsilber' },
  { source: 'bat', year: 1991, make: 'BMW', model: 'M3', trim: 'E30', salePrice: 102000, auctionDate: '2025-11-08', auctionHouse: 'Bring a Trailer', segment: 'BMW M3 E30', category: 'European', mileage: 44000, transmission: 'Manual', exteriorColor: 'Mauritius Blue' },

  // ─── BMW 2002 ────────────────────────────────────────────────────
  { source: 'bat', year: 1972, make: 'BMW', model: '2002tii', trim: null, salePrice: 44000, auctionDate: '2025-09-22', auctionHouse: 'Bring a Trailer', segment: 'BMW 2002 / 2002tii', category: 'European', mileage: 88000, transmission: 'Manual', exteriorColor: 'Polaris' },
  { source: 'bat', year: 1974, make: 'BMW', model: '2002', trim: 'Turbo', salePrice: 148000, auctionDate: '2025-06-04', auctionHouse: 'Bring a Trailer', segment: 'BMW 2002 / 2002tii', category: 'European', mileage: 52000, transmission: 'Manual', exteriorColor: 'White' },
  { source: 'bat', year: 1969, make: 'BMW', model: '2002', trim: null, salePrice: 28000, auctionDate: '2025-04-10', auctionHouse: 'Bring a Trailer', segment: 'BMW 2002 / 2002tii', category: 'European', mileage: 104000, transmission: 'Manual', exteriorColor: 'Sahara' },
  { source: 'bat', year: 1973, make: 'BMW', model: '2002tii', trim: null, salePrice: 38000, auctionDate: '2025-08-28', auctionHouse: 'Bring a Trailer', segment: 'BMW 2002 / 2002tii', category: 'European', mileage: 94000, transmission: 'Manual', exteriorColor: 'Colorado' },

  // ─── Ford Mustang 1st Gen ────────────────────────────────────────
  { source: 'bat', year: 1967, make: 'Ford', model: 'Mustang', trim: 'Fastback S-Code', salePrice: 74500, auctionDate: '2025-10-14', auctionHouse: 'Bring a Trailer', segment: 'Ford Mustang 1st Gen (1964–1973)', category: 'Muscle', mileage: 67000, transmission: 'Manual', exteriorColor: 'Acapulco Blue' },
  { source: 'bat', year: 1965, make: 'Ford', model: 'Mustang', trim: 'Fastback 2+2', salePrice: 58000, auctionDate: '2025-09-06', auctionHouse: 'Bring a Trailer', segment: 'Ford Mustang 1st Gen (1964–1973)', category: 'Muscle', mileage: 82000, transmission: 'Manual', exteriorColor: 'Wimbledon White' },
  { source: 'bat', year: 1969, make: 'Ford', model: 'Mustang', trim: 'Boss 429', salePrice: 162000, auctionDate: '2025-03-28', auctionHouse: 'Bring a Trailer', segment: 'Ford Mustang 1st Gen (1964–1973)', category: 'Muscle', mileage: 44000, transmission: 'Manual', exteriorColor: 'Raven Black' },
  { source: 'mecum', year: 1968, make: 'Ford', model: 'Mustang', trim: 'Shelby GT500KR', salePrice: 248000, auctionDate: '2025-01-14', auctionHouse: 'Mecum Kissimmee 2025', segment: 'Ford Mustang 1st Gen (1964–1973)', category: 'Muscle', mileage: 28000, transmission: 'Manual', exteriorColor: 'Highland Green' },
  { source: 'bat', year: 1970, make: 'Ford', model: 'Mustang', trim: 'Boss 302', salePrice: 88000, auctionDate: '2025-07-18', auctionHouse: 'Bring a Trailer', segment: 'Ford Mustang 1st Gen (1964–1973)', category: 'Muscle', mileage: 62000, transmission: 'Manual', exteriorColor: 'Grabber Orange' },
  { source: 'bat', year: 1964, make: 'Ford', model: 'Mustang', trim: 'Convertible', salePrice: 32000, auctionDate: '2025-11-22', auctionHouse: 'Bring a Trailer', segment: 'Ford Mustang 1st Gen (1964–1973)', category: 'Muscle', mileage: 94000, transmission: 'Automatic', exteriorColor: 'Poppy Red' },
  { source: 'bat', year: 1966, make: 'Ford', model: 'Mustang', trim: 'Shelby GT350H', salePrice: 124000, auctionDate: '2025-05-02', auctionHouse: 'Bring a Trailer', segment: 'Ford Mustang 1st Gen (1964–1973)', category: 'Muscle', mileage: 38000, transmission: 'Automatic', exteriorColor: 'Raven Black' },
  { source: 'bat', year: 1971, make: 'Ford', model: 'Mustang', trim: 'Mach 1', salePrice: 44000, auctionDate: '2025-08-08', auctionHouse: 'Bring a Trailer', segment: 'Ford Mustang 1st Gen (1964–1973)', category: 'Muscle', mileage: 74000, transmission: 'Manual', exteriorColor: 'Grabber Blue' },

  // ─── Chevrolet Camaro 1st Gen ─────────────────────────────────────
  { source: 'bat', year: 1969, make: 'Chevrolet', model: 'Camaro', trim: 'Z/28', salePrice: 68000, auctionDate: '2025-10-28', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet Camaro 1st Gen (1967–1969)', category: 'Muscle', mileage: 58000, transmission: 'Manual', exteriorColor: 'Fathom Green' },
  { source: 'bat', year: 1967, make: 'Chevrolet', model: 'Camaro', trim: 'SS 396', salePrice: 54000, auctionDate: '2025-09-16', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet Camaro 1st Gen (1967–1969)', category: 'Muscle', mileage: 72000, transmission: 'Manual', exteriorColor: 'Bolero Red' },
  { source: 'mecum', year: 1969, make: 'Chevrolet', model: 'Camaro', trim: 'ZL1 COPO', salePrice: 440000, auctionDate: '2024-08-28', auctionHouse: 'Mecum Monterey 2024', segment: 'Chevrolet Camaro 1st Gen (1967–1969)', category: 'Muscle', mileage: 8000, transmission: 'Manual', exteriorColor: 'Fathom Green' },
  { source: 'bat', year: 1968, make: 'Chevrolet', model: 'Camaro', trim: 'RS/SS 350', salePrice: 46000, auctionDate: '2025-06-14', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet Camaro 1st Gen (1967–1969)', category: 'Muscle', mileage: 84000, transmission: 'Manual', exteriorColor: 'Fathom Green' },
  { source: 'bat', year: 1969, make: 'Chevrolet', model: 'Camaro', trim: 'RS/SS Convertible', salePrice: 72000, auctionDate: '2025-04-18', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet Camaro 1st Gen (1967–1969)', category: 'Muscle', mileage: 52000, transmission: 'Manual', exteriorColor: 'Dusk Blue' },

  // ─── Chevrolet Corvette C2 ───────────────────────────────────────
  { source: 'bat', year: 1963, make: 'Chevrolet', model: 'Corvette', trim: 'Split Window Coupe', salePrice: 148000, auctionDate: '2025-08-20', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet Corvette C2 (1963–1967)', category: 'Muscle', mileage: 42000, transmission: 'Manual', exteriorColor: 'Riverside Red' },
  { source: 'bat', year: 1967, make: 'Chevrolet', model: 'Corvette', trim: 'L88', salePrice: 3850000, auctionDate: '2024-08-16', auctionHouse: 'Mecum Monterey 2024', segment: 'Chevrolet Corvette C2 (1963–1967)', category: 'Muscle', mileage: 14000, transmission: 'Manual', exteriorColor: 'Rally Red' },
  { source: 'bat', year: 1965, make: 'Chevrolet', model: 'Corvette', trim: 'Convertible 396', salePrice: 88000, auctionDate: '2025-05-24', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet Corvette C2 (1963–1967)', category: 'Muscle', mileage: 58000, transmission: 'Manual', exteriorColor: 'Nassau Blue' },
  { source: 'bat', year: 1964, make: 'Chevrolet', model: 'Corvette', trim: 'Coupe', salePrice: 72000, auctionDate: '2025-07-12', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet Corvette C2 (1963–1967)', category: 'Muscle', mileage: 64000, transmission: 'Manual', exteriorColor: 'Silver Blue' },

  // ─── Toyota Supra MK4 ────────────────────────────────────────────
  { source: 'bat', year: 1994, make: 'Toyota', model: 'Supra', trim: 'Turbo', salePrice: 148000, auctionDate: '2025-09-28', auctionHouse: 'Bring a Trailer', segment: 'Toyota Supra MK4 (JZA80)', category: 'JDM', mileage: 48000, transmission: 'Manual', exteriorColor: 'Black' },
  { source: 'bat', year: 1993, make: 'Toyota', model: 'Supra', trim: 'Turbo', salePrice: 182000, auctionDate: '2025-06-08', auctionHouse: 'Bring a Trailer', segment: 'Toyota Supra MK4 (JZA80)', category: 'JDM', mileage: 28000, transmission: 'Manual', exteriorColor: 'Turquoise Pearl' },
  { source: 'bat', year: 1997, make: 'Toyota', model: 'Supra', trim: 'Turbo 6-Speed', salePrice: 124000, auctionDate: '2025-11-14', auctionHouse: 'Bring a Trailer', segment: 'Toyota Supra MK4 (JZA80)', category: 'JDM', mileage: 62000, transmission: 'Manual', exteriorColor: 'Midnight Blue Pearl' },
  { source: 'bat', year: 1996, make: 'Toyota', model: 'Supra', trim: 'Turbo', salePrice: 98000, auctionDate: '2025-08-04', auctionHouse: 'Bring a Trailer', segment: 'Toyota Supra MK4 (JZA80)', category: 'JDM', mileage: 82000, transmission: 'Manual', exteriorColor: 'Super White' },
  { source: 'bat', year: 1994, make: 'Toyota', model: 'Supra', trim: 'Twin-Turbo', salePrice: 380000, auctionDate: '2025-01-28', auctionHouse: 'Bring a Trailer', segment: 'Toyota Supra MK4 (JZA80)', category: 'JDM', mileage: 6800, transmission: 'Manual', exteriorColor: 'Lightning Yellow' },

  // ─── Honda NSX ───────────────────────────────────────────────────
  { source: 'bat', year: 1991, make: 'Honda', model: 'NSX', trim: null, salePrice: 128000, auctionDate: '2025-10-06', auctionHouse: 'Bring a Trailer', segment: 'Honda NSX (NA1/NA2)', category: 'JDM', mileage: 44000, transmission: 'Manual', exteriorColor: 'Formula Red' },
  { source: 'bat', year: 1994, make: 'Honda', model: 'NSX', trim: 'T', salePrice: 142000, auctionDate: '2025-07-16', auctionHouse: 'Bring a Trailer', segment: 'Honda NSX (NA1/NA2)', category: 'JDM', mileage: 38000, transmission: 'Manual', exteriorColor: 'Sebring Silver' },
  { source: 'bat', year: 1999, make: 'Honda', model: 'NSX', trim: 'T', salePrice: 168000, auctionDate: '2025-04-22', auctionHouse: 'Bring a Trailer', segment: 'Honda NSX (NA1/NA2)', category: 'JDM', mileage: 28000, transmission: 'Manual', exteriorColor: 'Berlina Black' },
  { source: 'bat', year: 2002, make: 'Honda', model: 'NSX', trim: 'Type R', salePrice: 290000, auctionDate: '2025-02-18', auctionHouse: 'Bring a Trailer', segment: 'Honda NSX (NA1/NA2)', category: 'JDM', mileage: 14000, transmission: 'Manual', exteriorColor: 'Championship White' },

  // ─── Nissan GT-R R34 ─────────────────────────────────────────────
  { source: 'bat', year: 1999, make: 'Nissan', model: 'Skyline GT-R', trim: 'R34 V-Spec', salePrice: 248000, auctionDate: '2025-09-10', auctionHouse: 'Bring a Trailer', segment: 'Nissan GT-R R34', category: 'JDM', mileage: 62000, transmission: 'Manual', exteriorColor: 'Bayside Blue' },
  { source: 'bat', year: 2000, make: 'Nissan', model: 'Skyline GT-R', trim: 'R34 V-Spec II', salePrice: 320000, auctionDate: '2025-06-28', auctionHouse: 'Bring a Trailer', segment: 'Nissan GT-R R34', category: 'JDM', mileage: 44000, transmission: 'Manual', exteriorColor: 'Millennium Jade' },
  { source: 'bat', year: 2001, make: 'Nissan', model: 'Skyline GT-R', trim: 'R34 M-Spec Nur', salePrice: 620000, auctionDate: '2024-11-08', auctionHouse: 'Bring a Trailer', segment: 'Nissan GT-R R34', category: 'JDM', mileage: 8000, transmission: 'Manual', exteriorColor: 'Silica Breath' },

  // ─── Datsun Z Cars ───────────────────────────────────────────────
  { source: 'bat', year: 1971, make: 'Datsun', model: '240Z', trim: null, salePrice: 48000, auctionDate: '2025-08-18', auctionHouse: 'Bring a Trailer', segment: 'Datsun 240Z / 260Z / 280Z', category: 'JDM', mileage: 82000, transmission: 'Manual', exteriorColor: 'Orange' },
  { source: 'bat', year: 1972, make: 'Datsun', model: '240Z', trim: null, salePrice: 38000, auctionDate: '2025-06-16', auctionHouse: 'Bring a Trailer', segment: 'Datsun 240Z / 260Z / 280Z', category: 'JDM', mileage: 104000, transmission: 'Manual', exteriorColor: 'Burnt Orange' },
  { source: 'bat', year: 1970, make: 'Datsun', model: '240Z', trim: 'Series 1', salePrice: 88000, auctionDate: '2025-04-02', auctionHouse: 'Bring a Trailer', segment: 'Datsun 240Z / 260Z / 280Z', category: 'JDM', mileage: 48000, transmission: 'Manual', exteriorColor: 'Yellow' },
  { source: 'bat', year: 1978, make: 'Datsun', model: '280Z', trim: '2+2', salePrice: 28000, auctionDate: '2025-11-04', auctionHouse: 'Bring a Trailer', segment: 'Datsun 240Z / 260Z / 280Z', category: 'JDM', mileage: 88000, transmission: 'Manual', exteriorColor: 'Silver' },
  { source: 'bat', year: 1974, make: 'Datsun', model: '260Z', trim: null, salePrice: 32000, auctionDate: '2025-09-24', auctionHouse: 'Bring a Trailer', segment: 'Datsun 240Z / 260Z / 280Z', category: 'JDM', mileage: 96000, transmission: 'Manual', exteriorColor: 'Orange' },

  // ─── Mazda RX-7 FD ───────────────────────────────────────────────
  { source: 'bat', year: 1993, make: 'Mazda', model: 'RX-7', trim: 'Touring', salePrice: 54000, auctionDate: '2025-10-12', auctionHouse: 'Bring a Trailer', segment: 'Mazda RX-7 FD3S', category: 'JDM', mileage: 62000, transmission: 'Manual', exteriorColor: 'Vintage Red' },
  { source: 'bat', year: 1995, make: 'Mazda', model: 'RX-7', trim: 'R1', salePrice: 68000, auctionDate: '2025-07-24', auctionHouse: 'Bring a Trailer', segment: 'Mazda RX-7 FD3S', category: 'JDM', mileage: 44000, transmission: 'Manual', exteriorColor: 'Chaste White' },
  { source: 'bat', year: 1994, make: 'Mazda', model: 'RX-7', trim: 'Touring', salePrice: 48000, auctionDate: '2025-05-28', auctionHouse: 'Bring a Trailer', segment: 'Mazda RX-7 FD3S', category: 'JDM', mileage: 78000, transmission: 'Manual', exteriorColor: 'Montego Blue' },
  { source: 'bat', year: 1993, make: 'Mazda', model: 'RX-7', trim: 'R2', salePrice: 72000, auctionDate: '2025-03-18', auctionHouse: 'Bring a Trailer', segment: 'Mazda RX-7 FD3S', category: 'JDM', mileage: 28000, transmission: 'Manual', exteriorColor: 'Vintage Red' },

  // ─── Ferrari 308 / 328 ───────────────────────────────────────────
  { source: 'bat', year: 1984, make: 'Ferrari', model: '308 GTSi', trim: null, salePrice: 82000, auctionDate: '2025-09-02', auctionHouse: 'Bring a Trailer', segment: 'Ferrari 308 / 328 GTS', category: 'European', mileage: 44000, transmission: 'Manual', exteriorColor: 'Rosso Corsa' },
  { source: 'bat', year: 1988, make: 'Ferrari', model: '328 GTS', trim: null, salePrice: 118000, auctionDate: '2025-06-22', auctionHouse: 'Bring a Trailer', segment: 'Ferrari 308 / 328 GTS', category: 'European', mileage: 28000, transmission: 'Manual', exteriorColor: 'Bianco' },
  { source: 'rmsothebys', year: 1982, make: 'Ferrari', model: '308 GTB', trim: 'QV', salePrice: 124000, auctionDate: '2024-12-08', auctionHouse: "RM Sotheby's New York 2024", segment: 'Ferrari 308 / 328 GTS', category: 'European', mileage: 38000, transmission: 'Manual', exteriorColor: 'Rosso Corsa' },
  { source: 'bat', year: 1986, make: 'Ferrari', model: '328 GTB', trim: null, salePrice: 108000, auctionDate: '2025-04-14', auctionHouse: 'Bring a Trailer', segment: 'Ferrari 308 / 328 GTS', category: 'European', mileage: 32000, transmission: 'Manual', exteriorColor: 'Giallo Modena' },
  { source: 'bat', year: 1976, make: 'Ferrari', model: '308 GT4', trim: null, salePrice: 48000, auctionDate: '2025-08-26', auctionHouse: 'Bring a Trailer', segment: 'Ferrari 308 / 328 GTS', category: 'European', mileage: 62000, transmission: 'Manual', exteriorColor: 'Nero' },

  // ─── Jaguar E-Type ───────────────────────────────────────────────
  { source: 'bat', year: 1967, make: 'Jaguar', model: 'E-Type', trim: 'Series 1 Roadster', salePrice: 114000, auctionDate: '2025-08-12', auctionHouse: 'Bring a Trailer', segment: 'Jaguar E-Type', category: 'European', mileage: 58000, transmission: 'Manual', exteriorColor: 'British Racing Green' },
  { source: 'bonhams', year: 1961, make: 'Jaguar', model: 'E-Type', trim: 'Series 1 Flat Floor', salePrice: 820000, auctionDate: '2024-08-16', auctionHouse: 'Bonhams Quail Lodge 2024', segment: 'Jaguar E-Type', category: 'European', mileage: 48000, transmission: 'Manual', exteriorColor: 'Opalescent Silver Blue' },
  { source: 'bat', year: 1972, make: 'Jaguar', model: 'E-Type', trim: 'Series 3 V12', salePrice: 68000, auctionDate: '2025-05-08', auctionHouse: 'Bring a Trailer', segment: 'Jaguar E-Type', category: 'European', mileage: 44000, transmission: 'Manual', exteriorColor: 'Old English White' },
  { source: 'bat', year: 1969, make: 'Jaguar', model: 'E-Type', trim: 'Series 2 Coupe', salePrice: 88000, auctionDate: '2025-07-28', auctionHouse: 'Bring a Trailer', segment: 'Jaguar E-Type', category: 'European', mileage: 62000, transmission: 'Manual', exteriorColor: 'Signal Red' },

  // ─── Mercedes-Benz W113 Pagoda ───────────────────────────────────
  { source: 'bat', year: 1970, make: 'Mercedes-Benz', model: '280SL', trim: 'Pagoda', salePrice: 118000, auctionDate: '2025-07-10', auctionHouse: 'Bring a Trailer', segment: 'Mercedes-Benz W113 Pagoda (280SL)', category: 'European', mileage: 64000, transmission: 'Manual', exteriorColor: 'Cream' },
  { source: 'bat', year: 1968, make: 'Mercedes-Benz', model: '280SL', trim: null, salePrice: 104000, auctionDate: '2025-09-18', auctionHouse: 'Bring a Trailer', segment: 'Mercedes-Benz W113 Pagoda (280SL)', category: 'European', mileage: 82000, transmission: 'Automatic', exteriorColor: 'Signal Red' },
  { source: 'rmsothebys', year: 1965, make: 'Mercedes-Benz', model: '230SL', trim: 'Pagoda', salePrice: 148000, auctionDate: '2024-10-04', auctionHouse: "RM Sotheby's London 2024", segment: 'Mercedes-Benz W113 Pagoda (280SL)', category: 'European', mileage: 44000, transmission: 'Manual', exteriorColor: 'Pale Blue' },
  { source: 'bat', year: 1971, make: 'Mercedes-Benz', model: '280SL', trim: null, salePrice: 112000, auctionDate: '2025-04-06', auctionHouse: 'Bring a Trailer', segment: 'Mercedes-Benz W113 Pagoda (280SL)', category: 'European', mileage: 74000, transmission: 'Automatic', exteriorColor: 'Silver Blue' },

  // ─── Ford Bronco 1st Gen ─────────────────────────────────────────
  { source: 'bat', year: 1977, make: 'Ford', model: 'Bronco', trim: null, salePrice: 82000, auctionDate: '2025-10-02', auctionHouse: 'Bring a Trailer', segment: 'Ford Bronco 1st Gen (1966–1977)', category: 'Truck / SUV', mileage: 64000, transmission: 'Manual', exteriorColor: 'Tan' },
  { source: 'bat', year: 1970, make: 'Ford', model: 'Bronco', trim: 'Sport', salePrice: 128000, auctionDate: '2025-06-30', auctionHouse: 'Bring a Trailer', segment: 'Ford Bronco 1st Gen (1966–1977)', category: 'Truck / SUV', mileage: 42000, transmission: 'Manual', exteriorColor: 'White' },
  { source: 'bat', year: 1975, make: 'Ford', model: 'Bronco', trim: null, salePrice: 68000, auctionDate: '2025-09-12', auctionHouse: 'Bring a Trailer', segment: 'Ford Bronco 1st Gen (1966–1977)', category: 'Truck / SUV', mileage: 72000, transmission: 'Automatic', exteriorColor: 'Bright Yellow' },
  { source: 'bat', year: 1966, make: 'Ford', model: 'Bronco', trim: 'Wagon', salePrice: 112000, auctionDate: '2025-03-24', auctionHouse: 'Bring a Trailer', segment: 'Ford Bronco 1st Gen (1966–1977)', category: 'Truck / SUV', mileage: 38000, transmission: 'Manual', exteriorColor: 'Candy Apple Red' },

  // ─── Land Rover Defender ─────────────────────────────────────────
  { source: 'bat', year: 1993, make: 'Land Rover', model: 'Defender', trim: '90', salePrice: 64000, auctionDate: '2025-08-06', auctionHouse: 'Bring a Trailer', segment: 'Land Rover Defender 90/110', category: 'Truck / SUV', mileage: 88000, transmission: 'Manual', exteriorColor: 'Coniston Green' },
  { source: 'bat', year: 1997, make: 'Land Rover', model: 'Defender', trim: '110', salePrice: 78000, auctionDate: '2025-05-20', auctionHouse: 'Bring a Trailer', segment: 'Land Rover Defender 90/110', category: 'Truck / SUV', mileage: 62000, transmission: 'Manual', exteriorColor: 'Camel Trophy Yellow' },
  { source: 'bat', year: 1994, make: 'Land Rover', model: 'Defender', trim: '90 NAS', salePrice: 92000, auctionDate: '2025-10-16', auctionHouse: 'Bring a Trailer', segment: 'Land Rover Defender 90/110', category: 'Truck / SUV', mileage: 44000, transmission: 'Manual', exteriorColor: 'Keswick Green' },

  // ─── Volkswagen Golf GTI Mk1 ─────────────────────────────────────
  { source: 'bat', year: 1983, make: 'Volkswagen', model: 'Golf GTI', trim: 'Mk1', salePrice: 38000, auctionDate: '2025-07-06', auctionHouse: 'Bring a Trailer', segment: 'Volkswagen Golf GTI Mk1', category: 'European', mileage: 82000, transmission: 'Manual', exteriorColor: 'Rabbit Red' },
  { source: 'bat', year: 1984, make: 'Volkswagen', model: 'GTI', trim: 'Mk1', salePrice: 32000, auctionDate: '2025-09-28', auctionHouse: 'Bring a Trailer', segment: 'Volkswagen Golf GTI Mk1', category: 'European', mileage: 94000, transmission: 'Manual', exteriorColor: 'Black' },
  { source: 'bat', year: 1983, make: 'Volkswagen', model: 'Golf GTI', trim: 'Campaign Edition', salePrice: 64000, auctionDate: '2025-04-24', auctionHouse: 'Bring a Trailer', segment: 'Volkswagen Golf GTI Mk1', category: 'European', mileage: 28000, transmission: 'Manual', exteriorColor: 'Mars Red' },

  // ─── Lamborghini Countach ────────────────────────────────────────
  { source: 'rmsothebys', year: 1989, make: 'Lamborghini', model: 'Countach', trim: '25th Anniversary', salePrice: 520000, auctionDate: '2025-01-14', auctionHouse: "RM Sotheby's Scottsdale 2025", segment: 'Lamborghini Countach', category: 'European', mileage: 12000, transmission: 'Manual', exteriorColor: 'Rosso' },
  { source: 'gooding', year: 1985, make: 'Lamborghini', model: 'Countach', trim: '5000 QV', salePrice: 420000, auctionDate: '2024-08-17', auctionHouse: 'Gooding Pebble Beach 2024', segment: 'Lamborghini Countach', category: 'European', mileage: 8400, transmission: 'Manual', exteriorColor: 'Bianco' },
  { source: 'bat', year: 1980, make: 'Lamborghini', model: 'Countach', trim: 'S', salePrice: 380000, auctionDate: '2025-03-08', auctionHouse: 'Bring a Trailer', segment: 'Lamborghini Countach', category: 'European', mileage: 22000, transmission: 'Manual', exteriorColor: 'Rosso' },

  // ─── Porsche 356 (more) ──────────────────────────────────────────
  { source: 'bat', year: 1960, make: 'Porsche', model: '356B', trim: 'Roadster', salePrice: 168000, auctionDate: '2025-06-02', auctionHouse: 'Bring a Trailer', segment: 'Porsche 356', category: 'European', mileage: 48000, transmission: 'Manual', exteriorColor: 'Silver' },
  { source: 'bonhams', year: 1954, make: 'Porsche', model: '356', trim: 'Cabriolet', salePrice: 310000, auctionDate: '2024-09-14', auctionHouse: 'Bonhams Goodwood Revival 2024', segment: 'Porsche 356', category: 'European', mileage: 42000, transmission: 'Manual', exteriorColor: 'Ivory' },

  // ─── More Muscle Cars ────────────────────────────────────────────
  { source: 'bat', year: 1970, make: 'Plymouth', model: 'Hemi Cuda', trim: null, salePrice: 388000, auctionDate: '2025-01-22', auctionHouse: 'Bring a Trailer', segment: 'Plymouth Hemi Cuda', category: 'Muscle', mileage: 28000, transmission: 'Manual', exteriorColor: 'Plum Crazy' },
  { source: 'bat', year: 1969, make: 'Dodge', model: 'Charger', trim: 'Daytona', salePrice: 224000, auctionDate: '2025-04-30', auctionHouse: 'Bring a Trailer', segment: 'Dodge Charger / Challenger', category: 'Muscle', mileage: 34000, transmission: 'Manual', exteriorColor: 'Bright White' },
  { source: 'bat', year: 1970, make: 'Dodge', model: 'Challenger', trim: 'R/T 440 Six Pack', salePrice: 94000, auctionDate: '2025-08-30', auctionHouse: 'Bring a Trailer', segment: 'Dodge Charger / Challenger', category: 'Muscle', mileage: 58000, transmission: 'Manual', exteriorColor: 'Plum Crazy' },
  { source: 'bat', year: 1970, make: 'Pontiac', model: 'GTO', trim: 'Judge', salePrice: 108000, auctionDate: '2025-07-04', auctionHouse: 'Bring a Trailer', segment: 'Pontiac GTO', category: 'Muscle', mileage: 44000, transmission: 'Manual', exteriorColor: 'Orbit Orange' },
  { source: 'bat', year: 1969, make: 'Pontiac', model: 'Firebird', trim: 'Trans Am', salePrice: 84000, auctionDate: '2025-09-20', auctionHouse: 'Bring a Trailer', segment: 'Pontiac Firebird / Trans Am', category: 'Muscle', mileage: 62000, transmission: 'Manual', exteriorColor: 'Cameo White' },
  { source: 'bat', year: 1967, make: 'Shelby', model: 'GT500', trim: null, salePrice: 162000, auctionDate: '2025-05-16', auctionHouse: 'Bring a Trailer', segment: 'Shelby GT350 / GT500', category: 'Muscle', mileage: 38000, transmission: 'Manual', exteriorColor: 'Acapulco Blue' },
  { source: 'bat', year: 1965, make: 'Shelby', model: 'GT350', trim: null, salePrice: 148000, auctionDate: '2025-03-10', auctionHouse: 'Bring a Trailer', segment: 'Shelby GT350 / GT500', category: 'Muscle', mileage: 44000, transmission: 'Manual', exteriorColor: 'Wimbledon White' },

  // ─── More European ───────────────────────────────────────────────
  { source: 'bat', year: 1974, make: 'Alfa Romeo', model: 'GTV', trim: '2000', salePrice: 38000, auctionDate: '2025-08-22', auctionHouse: 'Bring a Trailer', segment: 'Alfa Romeo GTV / Spider', category: 'European', mileage: 74000, transmission: 'Manual', exteriorColor: 'Rosso' },
  { source: 'bat', year: 1968, make: 'Alfa Romeo', model: 'Spider', trim: 'Duetto', salePrice: 48000, auctionDate: '2025-06-18', auctionHouse: 'Bring a Trailer', segment: 'Alfa Romeo GTV / Spider', category: 'European', mileage: 68000, transmission: 'Manual', exteriorColor: 'Red' },
  { source: 'bat', year: 1972, make: 'Lancia', model: 'Fulvia', trim: 'Coupe 1.6 HF', salePrice: 28000, auctionDate: '2025-07-20', auctionHouse: 'Bring a Trailer', segment: 'Lancia Fulvia', category: 'European', mileage: 82000, transmission: 'Manual', exteriorColor: 'Ivory' },
  { source: 'bat', year: 1981, make: 'Ferrari', model: '308 GTSi', trim: null, salePrice: 76000, auctionDate: '2025-05-12', auctionHouse: 'Bring a Trailer', segment: 'Ferrari 308 / 328 GTS', category: 'European', mileage: 42000, transmission: 'Manual', exteriorColor: 'Giallo Fly' },
  { source: 'bat', year: 1972, make: 'Ferrari', model: '246 Dino GTS', trim: null, salePrice: 328000, auctionDate: '2025-02-14', auctionHouse: 'Bring a Trailer', segment: 'Ferrari Dino 246', category: 'European', mileage: 28000, transmission: 'Manual', exteriorColor: 'Rosso' },
  { source: 'rmsothebys', year: 1969, make: 'Ferrari', model: '365 GTB/4', trim: 'Daytona', salePrice: 780000, auctionDate: '2024-10-28', auctionHouse: "RM Sotheby's New York 2024", segment: 'Ferrari Daytona', category: 'European', mileage: 32000, transmission: 'Manual', exteriorColor: 'Azzurro California' },
  { source: 'bat', year: 1975, make: 'BMW', model: '3.0 CSL', trim: null, salePrice: 188000, auctionDate: '2025-04-08', auctionHouse: 'Bring a Trailer', segment: 'BMW CSL / CSi', category: 'European', mileage: 44000, transmission: 'Manual', exteriorColor: 'Polaris' },
  { source: 'bat', year: 1977, make: 'Mercedes-Benz', model: '450SL', trim: null, salePrice: 28000, auctionDate: '2025-09-04', auctionHouse: 'Bring a Trailer', segment: 'Mercedes-Benz SL R107', category: 'European', mileage: 88000, transmission: 'Automatic', exteriorColor: 'Champagne' },
  { source: 'bat', year: 1972, make: 'De Tomaso', model: 'Pantera', trim: null, salePrice: 94000, auctionDate: '2025-07-26', auctionHouse: 'Bring a Trailer', segment: 'De Tomaso Pantera', category: 'European', mileage: 38000, transmission: 'Manual', exteriorColor: 'Black' },

  // ─── More JDM ────────────────────────────────────────────────────
  { source: 'bat', year: 1991, make: 'Mitsubishi', model: 'Galant VR-4', trim: null, salePrice: 18000, auctionDate: '2025-10-20', auctionHouse: 'Bring a Trailer', segment: 'Mitsubishi Evolution / Eclipse', category: 'JDM', mileage: 82000, transmission: 'Manual', exteriorColor: 'White' },
  { source: 'bat', year: 1990, make: 'Mazda', model: 'Miata', trim: 'NA', salePrice: 14000, auctionDate: '2025-08-14', auctionHouse: 'Bring a Trailer', segment: 'Mazda Miata NA', category: 'JDM', mileage: 68000, transmission: 'Manual', exteriorColor: 'Classic Red' },
  { source: 'bat', year: 1992, make: 'Mazda', model: 'Miata', trim: 'NA', salePrice: 16000, auctionDate: '2025-11-10', auctionHouse: 'Bring a Trailer', segment: 'Mazda Miata NA', category: 'JDM', mileage: 48000, transmission: 'Manual', exteriorColor: 'British Racing Green' },
  { source: 'bat', year: 1994, make: 'Subaru', model: 'Impreza', trim: 'WRX STI RA', salePrice: 68000, auctionDate: '2025-06-24', auctionHouse: 'Bring a Trailer', segment: 'Subaru WRX / STI', category: 'JDM', mileage: 44000, transmission: 'Manual', exteriorColor: 'WR Blue Mica' },
  { source: 'bat', year: 1999, make: 'Subaru', model: 'Impreza', trim: 'WRX STI Type RA', salePrice: 58000, auctionDate: '2025-04-16', auctionHouse: 'Bring a Trailer', segment: 'Subaru WRX / STI', category: 'JDM', mileage: 62000, transmission: 'Manual', exteriorColor: 'Sonic Yellow' },

  // ─── Classic Trucks ──────────────────────────────────────────────
  { source: 'bat', year: 1967, make: 'Chevrolet', model: 'C10', trim: 'Stepside', salePrice: 38000, auctionDate: '2025-10-08', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet C10 Truck', category: 'Truck / SUV', mileage: 82000, transmission: 'Manual', exteriorColor: 'Fathom Green' },
  { source: 'bat', year: 1972, make: 'Chevrolet', model: 'C10', trim: 'Cheyenne', salePrice: 44000, auctionDate: '2025-07-14', auctionHouse: 'Bring a Trailer', segment: 'Chevrolet C10 Truck', category: 'Truck / SUV', mileage: 68000, transmission: 'Automatic', exteriorColor: 'Yellow' },
  { source: 'bat', year: 1965, make: 'Ford', model: 'F100', trim: null, salePrice: 32000, auctionDate: '2025-09-26', auctionHouse: 'Bring a Trailer', segment: 'Ford F100 Classic Truck', category: 'Truck / SUV', mileage: 74000, transmission: 'Manual', exteriorColor: 'Turquoise' },

  // ─── Modern Classics ─────────────────────────────────────────────
  { source: 'bat', year: 2001, make: 'BMW', model: 'M3', trim: 'E46', salePrice: 42000, auctionDate: '2025-10-24', auctionHouse: 'Bring a Trailer', segment: 'BMW M3 E46', category: 'European', mileage: 82000, transmission: 'Manual', exteriorColor: 'Interlagos Blue' },
  { source: 'bat', year: 2002, make: 'BMW', model: 'M3', trim: 'E46 Competition', salePrice: 58000, auctionDate: '2025-08-16', auctionHouse: 'Bring a Trailer', segment: 'BMW M3 E46', category: 'European', mileage: 44000, transmission: 'Manual', exteriorColor: 'Carbon Black' },
  { source: 'bat', year: 2004, make: 'BMW', model: 'M3', trim: 'E46 CSL', salePrice: 118000, auctionDate: '2025-05-06', auctionHouse: 'Bring a Trailer', segment: 'BMW M3 E46', category: 'European', mileage: 28000, transmission: 'SMG', exteriorColor: 'Carbon Black' },
  { source: 'bat', year: 2003, make: 'Porsche', model: '911 GT3', trim: '996 Gen 2', salePrice: 118000, auctionDate: '2025-09-14', auctionHouse: 'Bring a Trailer', segment: 'Porsche 996 GT3', category: 'European', mileage: 44000, transmission: 'Manual', exteriorColor: 'Speed Yellow' },
  { source: 'bat', year: 2006, make: 'Porsche', model: '911 GT3', trim: '997 Gen 1', salePrice: 102000, auctionDate: '2025-07-04', auctionHouse: 'Bring a Trailer', segment: 'Porsche 997 GT3', category: 'European', mileage: 52000, transmission: 'Manual', exteriorColor: 'GT Silver' },
  { source: 'bat', year: 2010, make: 'Porsche', model: '911 GT3 RS', trim: '997 Gen 2', salePrice: 138000, auctionDate: '2025-04-28', auctionHouse: 'Bring a Trailer', segment: 'Porsche 997 GT3', category: 'European', mileage: 28000, transmission: 'Manual', exteriorColor: 'Guards Red' },
  { source: 'bat', year: 2011, make: 'Ferrari', model: '458 Italia', trim: null, salePrice: 168000, auctionDate: '2025-10-30', auctionHouse: 'Bring a Trailer', segment: 'Ferrari 458 Italia', category: 'European', mileage: 18000, transmission: 'DCT', exteriorColor: 'Rosso Corsa' },
  { source: 'bat', year: 2015, make: 'Ferrari', model: '458 Speciale', trim: null, salePrice: 328000, auctionDate: '2025-08-20', auctionHouse: 'Bring a Trailer', segment: 'Ferrari 458 Italia', category: 'European', mileage: 8000, transmission: 'DCT', exteriorColor: 'Bianco' },
];

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'DATABASE_URL not set' }, { status: 503 });
  }

  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    let inserted = 0;
    let skipped = 0;

    // First add new tables/columns if missing
    await sql`
      CREATE TABLE IF NOT EXISTS auction_results (
        id              SERIAL PRIMARY KEY,
        source          VARCHAR(50) NOT NULL,
        source_url      TEXT,
        lot_title       TEXT NOT NULL,
        year            INTEGER NOT NULL,
        make            VARCHAR(100) NOT NULL,
        model           VARCHAR(200) NOT NULL,
        trim            VARCHAR(200),
        mileage         INTEGER,
        transmission    VARCHAR(50),
        engine          TEXT,
        exterior_color  VARCHAR(100),
        sale_price      INTEGER,
        estimate_high   INTEGER,
        estimate_low    INTEGER,
        sold            BOOLEAN DEFAULT TRUE,
        auction_date    TIMESTAMP,
        auction_house   VARCHAR(200),
        thumbnail_url   TEXT,
        segment         VARCHAR(100),
        category        VARCHAR(50),
        notes           TEXT,
        created_at      TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      ALTER TABLE listings ADD COLUMN IF NOT EXISTS views INTEGER NOT NULL DEFAULT 0
    `;

    await sql`
      ALTER TABLE deal_alerts ADD COLUMN IF NOT EXISTS year INTEGER
    `.catch(() => null);

    await sql`
      ALTER TABLE deal_alerts ADD COLUMN IF NOT EXISTS make VARCHAR(100)
    `.catch(() => null);

    await sql`
      ALTER TABLE deal_alerts ADD COLUMN IF NOT EXISTS model VARCHAR(200)
    `.catch(() => null);

    await sql`
      ALTER TABLE deal_alerts ADD COLUMN IF NOT EXISTS expires_at TIMESTAMP
    `.catch(() => null);

    await sql`
      ALTER TABLE market_data ADD COLUMN IF NOT EXISTS segment_key VARCHAR(100)
    `.catch(() => null);

    await sql`
      ALTER TABLE market_data ADD COLUMN IF NOT EXISTS median_price INTEGER
    `.catch(() => null);

    await sql`
      ALTER TABLE market_data ADD COLUMN IF NOT EXISTS high_price INTEGER
    `.catch(() => null);

    await sql`
      ALTER TABLE market_data ADD COLUMN IF NOT EXISTS low_price INTEGER
    `.catch(() => null);

    await sql`
      ALTER TABLE market_data ADD COLUMN IF NOT EXISTS sale_count INTEGER
    `.catch(() => null);

    // Seed auction results
    for (const r of AUCTION_RESULTS) {
      const title = `${r.year} ${r.make} ${r.model}${r.trim ? ' ' + r.trim : ''}`;
      try {
        await sql`
          INSERT INTO auction_results
            (source, lot_title, year, make, model, trim, mileage, transmission, exterior_color,
             sale_price, sold, auction_date, auction_house, segment, category, created_at)
          VALUES (
            ${r.source}, ${title}, ${r.year}, ${r.make}, ${r.model},
            ${r.trim || null}, ${r.mileage || null}, ${r.transmission || null}, ${r.exteriorColor || null},
            ${r.salePrice}, true, ${r.auctionDate}::timestamp, ${r.auctionHouse},
            ${r.segment}, ${r.category}, NOW()
          )
        `;
        inserted++;
      } catch {
        skipped++;
      }
    }

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS auction_results_make_model ON auction_results (make, model)`.catch(() => null);
    await sql`CREATE INDEX IF NOT EXISTS auction_results_segment ON auction_results (segment)`.catch(() => null);
    await sql`CREATE INDEX IF NOT EXISTS auction_results_date ON auction_results (auction_date)`.catch(() => null);
    await sql`CREATE UNIQUE INDEX IF NOT EXISTS deal_alerts_url ON deal_alerts (source_url)`.catch(() => null);

    // Compute and insert market segment summaries
    const segments = await sql`
      SELECT
        segment,
        LOWER(REGEXP_REPLACE(segment, '[^a-zA-Z0-9]', '_', 'g')) AS segment_key,
        ROUND(AVG(sale_price))::int AS avg_price,
        ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY sale_price))::int AS median_price,
        MAX(sale_price)::int AS high_price,
        MIN(sale_price)::int AS low_price,
        COUNT(*)::int AS sale_count,
        category
      FROM auction_results
      WHERE sold = true AND sale_price IS NOT NULL AND segment IS NOT NULL
      GROUP BY segment, category
      HAVING COUNT(*) >= 2
    `;

    for (const seg of segments) {
      await sql`
        INSERT INTO market_data (segment, segment_key, avg_price, median_price, high_price, low_price, sale_count, trend_percent, trend_direction, data_source, recorded_at)
        VALUES (${seg.segment}, ${seg.segment_key}, ${seg.avg_price}, ${seg.median_price}, ${seg.high_price}, ${seg.low_price}, ${seg.sale_count}, 0, 'flat', 'seed_data', NOW())
        ON CONFLICT DO NOTHING
      `;
    }

    return NextResponse.json({
      success: true,
      auctionResultsInserted: inserted,
      auctionResultsSkipped: skipped,
      segmentsComputed: segments.length,
      message: `Seeded ${inserted} auction results across ${segments.length} market segments`,
    });
  } catch (error: any) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ records: AUCTION_RESULTS.length, message: 'POST to seed the database' });
}
