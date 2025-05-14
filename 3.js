const elements = [
  { atomicNumber: 1, atomicSymbol: 'H', atomicName: 'Hydrogen', atomicWeight: 1.008 },
  { atomicNumber: 2, atomicSymbol: 'He', atomicName: 'Helium', atomicWeight: 4.00 },
  { atomicNumber: 3, atomicSymbol: 'Li', atomicName: 'Lithium', atomicWeight: 6.94 },
  { atomicNumber: 4, atomicSymbol: 'Be', atomicName: 'Beryllium', atomicWeight: 9.01 },
  { atomicNumber: 5, atomicSymbol: 'B', atomicName: 'Boron', atomicWeight: 10.81 },
  { atomicNumber: 6, atomicSymbol: 'C', atomicName: 'Carbon', atomicWeight: 12.01 },
  { atomicNumber: 7, atomicSymbol: 'N', atomicName: 'Nitrogen', atomicWeight: 14.00 },
  { atomicNumber: 8, atomicSymbol: 'O', atomicName: 'Oxygen', atomicWeight: 16.00 },
  { atomicNumber: 9, atomicSymbol: 'F', atomicName: 'Fluorine', atomicWeight: 20.00 },
  { atomicNumber: 10, atomicSymbol: 'Ne', atomicName: 'Neon', atomicWeight: 20.18 },
  { atomicNumber: 11, atomicSymbol: 'Na', atomicName: 'Sodium', atomicWeight: 23.00 },
  { atomicNumber: 12, atomicSymbol: 'Mg', atomicName: 'Magnesium', atomicWeight: 24.31 },
  { atomicNumber: 13, atomicSymbol: 'Al', atomicName: 'Aluminium', atomicWeight: 26.99 },
  { atomicNumber: 14, atomicSymbol: 'Si', atomicName: 'Silicon', atomicWeight: 28.08 },
  { atomicNumber: 15, atomicSymbol: 'P', atomicName: 'Phosphorus', atomicWeight: 30.97 },
  { atomicNumber: 16, atomicSymbol: 'S', atomicName: 'Sulphur', atomicWeight: 32.06 },
  { atomicNumber: 17, atomicSymbol: 'Cl', atomicName: 'Chlorine', atomicWeight: 35.45 },
  { atomicNumber: 18, atomicSymbol: 'Ar', atomicName: 'Argon', atomicWeight: 39.09 },
  { atomicNumber: 19, atomicSymbol: 'K', atomicName: 'Potassium', atomicWeight: 40.07 },
  { atomicNumber: 20, atomicSymbol: 'Ca', atomicName: 'Calcium', atomicWeight: 44.95 },
  { atomicNumber: 21, atomicSymbol: 'Sc', atomicName: 'Scandium', atomicWeight: 47.86 },
  { atomicNumber: 22, atomicSymbol: 'Ti', atomicName: 'Titanium', atomicWeight: 50.94 },
  { atomicNumber: 23, atomicSymbol: 'V', atomicName: 'Vanadium', atomicWeight: 51.99 },
  { atomicNumber: 24, atomicSymbol: 'Cr', atomicName: 'Chromium', atomicWeight: 54.93 },
  { atomicNumber: 25, atomicSymbol: 'Mn', atomicName: 'Manganese', atomicWeight: 55.84 },
  { atomicNumber: 26, atomicSymbol: 'Fe', atomicName: 'Iron', atomicWeight: 58.69 },
  { atomicNumber: 27, atomicSymbol: 'Co', atomicName: 'Cobalt', atomicWeight: 58.93 },
  { atomicNumber: 28, atomicSymbol: 'Ni', atomicName: 'Nickel', atomicWeight: 63.54 },
  { atomicNumber: 29, atomicSymbol: 'Cu', atomicName: 'Copper', atomicWeight: 65.39 },
  { atomicNumber: 30, atomicSymbol: 'Zn', atomicName: 'Zinc', atomicWeight: 69.7 },
  { atomicNumber: 31, atomicSymbol: 'Ga', atomicName: 'Gallium', atomicWeight: 72.64 },
  { atomicNumber: 32, atomicSymbol: 'Ge', atomicName: 'Germanium', atomicWeight: 74.92 },
  { atomicNumber: 33, atomicSymbol: 'As', atomicName: 'Arsenic', atomicWeight: 78.96 },
  { atomicNumber: 34, atomicSymbol: 'Se', atomicName: 'Selenium', atomicWeight: 78.96 },
  { atomicNumber: 35, atomicSymbol: 'Br', atomicName: 'Bromine', atomicWeight: 79.90 },
  { atomicNumber: 36, atomicSymbol: 'Kr', atomicName: 'Krypton', atomicWeight: 83.80 },
  { atomicNumber: 37, atomicSymbol: 'Rb', atomicName: 'Rubidium', atomicWeight: 85.46 },
  { atomicNumber: 38, atomicSymbol: 'Sr', atomicName: 'Strontium', atomicWeight: 87.62 },
  { atomicNumber: 39, atomicSymbol: 'Y', atomicName: 'Yttrium', atomicWeight: 88.90 },
  { atomicNumber: 40, atomicSymbol: 'Zr', atomicName: 'Zirconium', atomicWeight: 91.22 },
  { atomicNumber: 41, atomicSymbol: 'Nb', atomicName: 'Niobium', atomicWeight: 92.90 },
  { atomicNumber: 42, atomicSymbol: 'Mo', atomicName: 'Molybdenum', atomicWeight: 95.94 },
  { atomicNumber: 43, atomicSymbol: 'Tc', atomicName: 'Technetium', atomicWeight: 98.00 },
  { atomicNumber: 44, atomicSymbol: 'Ru', atomicName: 'Ruthenium', atomicWeight: 101.07 },
  { atomicNumber: 45, atomicSymbol: 'Rh', atomicName: 'Rhodium', atomicWeight: 102.90 },
  { atomicNumber: 46, atomicSymbol: 'Pd', atomicName: 'Palladium', atomicWeight: 106.42 },
  { atomicNumber: 47, atomicSymbol: 'Ag', atomicName: 'Silver', atomicWeight: 107.86 },
  { atomicNumber: 48, atomicSymbol: 'Cd', atomicName: 'Cadmium', atomicWeight: 112.41 },
  { atomicNumber: 49, atomicSymbol: 'In', atomicName: 'Indium', atomicWeight: 114.81 },
  { atomicNumber: 50, atomicSymbol: 'Sn', atomicName: 'Tin', atomicWeight: 118.71 },
  { atomicNumber: 51, atomicSymbol: 'Sb', atomicName: 'Antimony', atomicWeight: 121.76 },
  { atomicNumber: 52, atomicSymbol: 'Te', atomicName: 'Tellurium', atomicWeight: 127.6 },
  { atomicNumber: 53, atomicSymbol: 'I', atomicName: 'Iodine', atomicWeight: 126.90 },
  { atomicNumber: 54, atomicSymbol: 'Xe', atomicName: 'Xenon', atomicWeight: 131.29 },
  { atomicNumber: 55, atomicSymbol: 'Cs', atomicName: 'Cesium', atomicWeight: 132.90 },
  { atomicNumber: 56, atomicSymbol: 'Ba', atomicName: 'Barium', atomicWeight: 137.32 }
];

function searchElement() {
  const searchType = document.getElementById('searchType').value;
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  let filteredElements;
  if (searchType === 'atomicNumber') {
    const selectedAtomicNumber = parseInt(searchInput, 10);
    filteredElements = elements.filter(element => element.atomicNumber === selectedAtomicNumber);
  } else {
    filteredElements = elements.filter(element => {
      const value = element[searchType].toString().toLowerCase();
      return value.includes(searchInput);
    });
  }
  updateResultTable(filteredElements);
}

function updateResultTable(filteredElements) {
  const resultTable = document.getElementById('resultTable');
  resultTable.innerHTML = '<tr><th>Atomic Number</th><th>Atomic Symbol</th><th>Atomic Name</th><th>Atomic Weight</th><th>Block</th><th>Metallic Property</th></tr>';
  filteredElements.forEach(element => {
    const block = determineBlock(element.atomicNumber);
    const property = determineProperty(element.atomicNumber);
    const row = `<tr>
      <td>${element.atomicNumber}</td>
      <td>${element.atomicSymbol}</td>
      <td>${element.atomicName}</td>
      <td>${element.atomicWeight.toFixed(2)}</td>
      <td>${block}</td>
      <td>${property}</td>
    </tr>`;
    resultTable.innerHTML += row;
  });
}

function determineBlock(atomicNumber) {
  if (atomicNumber >= 1 && atomicNumber <= 2) return 's';
  else if (atomicNumber >= 3 && atomicNumber <= 10) return 'p';
  else if (atomicNumber >= 11 && atomicNumber <= 18) return 's';
  else if (atomicNumber >= 19 && atomicNumber <= 36) return 'p';
  else if (atomicNumber >= 37 && atomicNumber <= 54) return 'd';
  else if (atomicNumber >= 55 && atomicNumber <= 86) return 'p';
  else if (atomicNumber >= 87 && atomicNumber <= 118) return 's';
  else return 'Unknown';
}

function determineProperty(atomicNumber) {
  if (
    atomicNumber <= 2 ||
    (atomicNumber >= 13 && atomicNumber <= 18) ||
    (atomicNumber >= 31 && atomicNumber <= 36) ||
    (atomicNumber >= 49 && atomicNumber <= 54) ||
    (atomicNumber >= 81 && atomicNumber <= 86)
  ) {
    return 'Non-Metal';
  } else if (
    (atomicNumber >= 5 && atomicNumber <= 12) ||
    (atomicNumber >= 23 && atomicNumber <= 30) ||
    (atomicNumber >= 41 && atomicNumber <= 48) ||
    (atomicNumber >= 73 && atomicNumber <= 80) ||
    (atomicNumber >= 105 && atomicNumber <= 112)
  ) {
    return 'Metalloid';
  } else {
    return 'Metal';
  }
}
