import "./style.css";

// Trains

const trains = [
  {
    driver: "John",
    carriages: [
      { color: "darkmagenta", id: 8 },
      { color: "blue", id: 9 },
      { color: "yellow", id: 10 },
    ],
  },
  {
    driver: "Jim",
    carriages: [
      { color: "darkmagenta", id: 11 },
      { color: "blue", id: 12 },
      { color: "yellow", id: 13 },
    ],
  },
  {
    driver: "Mike",
    carriages: [
      { color: "darkmagenta", id: 14 },
      { color: "blue", id: 15 },
      { color: "yellow", id: 16 },
    ],
  },
  {
    driver: "Tyson",
    carriages: [
      { color: "darkmagenta", id: 17 },
      { color: "blue", id: 18 },
      { color: "yellow", id: 19 },
    ],
  },
];

function findById(id: number) {
  for (const train of trains) {
    for (const carriage of train.carriages) {
      if (carriage.id === id) {
        return {
          driver: train.driver,
          id: carriage.id,
          color: carriage.color,
        };
      }
    }
  }
}

function findCarriageByColor(color: string) {
  for (const train of trains) {
    for (const carriage of train.carriages) {
      if (carriage.color === color) {
        return {
          driver: train.driver,
          id: carriage.id,
          color: carriage.color,
        };
      }
    }
  }
  return;
}

function findCarriageByColorOrId(search: any) {
  for (const train of trains) {
    for (const carriage of train.carriages) {
      if (carriage.color === search || carriage.id === search) {
        return {
          driver: train.driver,
          id: carriage.id,
          color: carriage.color,
        };
      }
    }
  }
  return;
}

console.log(findById(12));
