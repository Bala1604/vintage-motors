import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import carsData from "../Data/cars";

const CarContext = createContext();

function CarProvider({ children }) {
  const [cars, setCars] = useState(() => {
    const savedCars = localStorage.getItem("vintage-cars");

    if (savedCars) {
      const savedInventory = JSON.parse(savedCars);
      const vintage1965Cars = savedInventory.filter(
        (car) => Number(car.year) === 1965
      );

      if (vintage1965Cars.length > 0) {
        return vintage1965Cars;
      }
    }

    return carsData;
  });

  useEffect(() => {
    localStorage.setItem(
      "vintage-cars",
      JSON.stringify(cars)
    );
  }, [cars]);

  const addCar = (car) => {
    setCars((currentCars) => [
      ...currentCars,
      {
        ...car,
        id: Date.now(),
      },
    ]);
  };

  const updateCar = (updatedCar) => {
    setCars((currentCars) =>
      currentCars.map((car) =>
        car.id === updatedCar.id
          ? updatedCar
          : car
      )
    );
  };

  const deleteCar = (id) => {
    setCars((currentCars) =>
      currentCars.filter((car) => car.id !== id)
    );
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        addCar,
        updateCar,
        deleteCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  return useContext(CarContext);
}

export default CarProvider;