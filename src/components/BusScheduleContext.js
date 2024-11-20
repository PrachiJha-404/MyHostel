import React, { createContext, useState, useContext } from 'react';

const BusScheduleContext = createContext();

export function BusScheduleProvider({ children }) {
  const [busRoutes, setBusRoutes] = useState([
    { id: 1, drop: "7:30", pickup: "1:20" },
    { id: 2, drop: "7:45", pickup: "2:30" },
    { id: 3, drop: "8:15", pickup: "3:30" },
    { id: 4, drop: "", pickup: "4:20" },
    { id: 5, drop: "", pickup: "5:20" },
    { id: 6, drop: "", pickup: "6:15" },
  ]);

  const updateBusRoute = (id, newDrop, newPickup) => {
    setBusRoutes(prevRoutes =>
      prevRoutes.map(bus =>
        bus.id === id ? { ...bus, drop: newDrop, pickup: newPickup } : bus
      )
    );
  };

  return (
    <BusScheduleContext.Provider value={{ busRoutes, updateBusRoute }}>
      {children}
    </BusScheduleContext.Provider>
  );
}

export function useBusSchedule() {
  const context = useContext(BusScheduleContext);
  if (!context) {
    throw new Error('useBusSchedule must be used within a BusScheduleProvider');
  }
  return context;
}