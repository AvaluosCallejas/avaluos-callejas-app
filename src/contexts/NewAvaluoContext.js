import React, { useState, useContext } from 'react';

/* context variables */
const NewAvaluoContext = React.createContext();

/* hook useAuth will allow know when a user is active */
const useNewAvaluo = () => useContext(NewAvaluoContext);

/* Auth Provider */
const NewAvaluoProvider = (({ children }) => {
   /* states */
   const [newAvaluo, setNewAvaluo] = useState({
      pages: '3',
      avaluoType: 'PARTICULAR',
      applicant: '',
      costumer: '',
      plate: '',
      frontalSticker: 'NO TIENE',
      rearSticker: 'NO TIENE',
      thirdSticker: 'NO TIENE',
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      color: '',
      carType: '',
      origin: '',
      from: 'AGENCIA',
      odometer: '',
      fuel: 'GASOLINA',
      cylinders: 0,
      cylindersProm: '',
      transmission: 'AUTOMÁTICO',
      traction: '4X2',
      runningIn: '',
      capacity: '',
      targetOutDated: "",
      targetAs: '',
      engineTarget: '',
      chasisTarget: '',
      vinTarget: '',
      engineCar: '',
      chasisCar: '',
      vinCar: '',
      numbersReason: '',
      extras: '',
      expenses: [],
      totalExpenses: 0,
      power: 'BUENA',
      smoke: 'NORMAL',
      combustion: 'NORMAL',
      temperature: 'NORMAL',
      engineRunning: 'NORMAL',
      engineBlowing: 'NO TIENE',
      checkEnginePilot: 'BUENO',
      absPilot: 'BUENO',
      airbagPilot: 'BUENO',
      tpmsPilot: 'BUENO',
      oilPilot: 'BUENO',
      batteryPilot: 'BUENO',
      frontTires: '',
      rearTires: '',
      replacementTire: '',
      tireCarrier: '',
      tools: 'TIENE MICA Y LLAVE',
      board: '',
      chasisCondition: 'HASTA DONDE SE PUDO OBSERVAR NO PRESENTA GOLPES NI ABOLLADURAS',
      batteryTest: 'BATERÍA BUENA - ESTADO AL 100% / NIVEL DE CARGA AL 100% (SE ADJUNTA COMPROBANTE)',
      acCondition: 'AL MOMENTO DE INSPECCION FUNCIONA Y ACTIVA - LECTURA DE MEDIDOR: 0 °C',
      vacuumGauge: 'PRUEBA CON VACUÓMETRO NO REPORTA FUGAS DE VACÍO A LA FECHA, LECTURA FUE DE: ',
      cylindersCondition: {
         cylinder1: '',
         cylinder2: '',
         cylinder3: '',
         cylinder4: '',
         cylinder5: '',
         cylinder6: '',
         cylinder7: '',
         cylinder8: ''
      },
      cylindersReason: '',
      images: [],
      comments: '',
      state: 'PENDIENTE'
   });

   const resetContext = () => setNewAvaluo({
      pages: '3',
      avaluoType: 'PARTICULAR',
      applicant: '',
      costumer: '',
      plate: '',
      frontalSticker: 'NO TIENE',
      rearSticker: 'NO TIENE',
      thirdSticker: 'NO TIENE',
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      color: '',
      carType: '',
      origin: '',
      from: 'AGENCIA',
      odometer: '',
      fuel: 'GASOLINA',
      cylinders: 0,
      cylindersProm: '',
      transmission: 'AUTOMÁTICO',
      traction: '4X2',
      runningIn: '',
      capacity: '',
      targetOutDated: "",
      targetAs: '',
      engineTarget: '',
      chasisTarget: '',
      vinTarget: '',
      engineCar: '',
      chasisCar: '',
      vinCar: '',
      numbersReason: '',
      extras: '',
      expenses: [],
      totalExpenses: 0,
      power: 'BUENA',
      smoke: 'NORMAL',
      combustion: 'NORMAL',
      temperature: 'NORMAL',
      engineRunning: 'NORMAL',
      engineBlowing: 'NO TIENE',
      checkEnginePilot: 'BUENO',
      absPilot: 'BUENO',
      airbagPilot: 'BUENO',
      tpmsPilot: 'BUENO',
      oilPilot: 'BUENO',
      batteryPilot: 'BUENO',
      frontTires: '',
      rearTires: '',
      replacementTire: '',
      tireCarrier: '',
      tools: 'TIENE MICA Y LLAVE',
      board: '',
      chasisCondition: 'HASTA DONDE SE PUDO OBSERVAR NO PRESENTA GOLPES NI ABOLLADURAS',
      batteryTest: 'BATERÍA BUENA - ESTADO AL 100% / NIVEL DE CARGA AL 100% (SE ADJUNTA COMPROBANTE)',
      acCondition: 'AL MOMENTO DE INSPECCION FUNCIONA Y ACTIVA - LECTURA DE MEDIDOR: 0 °C',
      vacuumGauge: 'PRUEBA CON VACUÓMETRO NO REPORTA FUGAS DE VACÍO A LA FECHA, LECTURA FUE DE: ',
      cylindersCondition: {
         cylinder1: '',
         cylinder2: '',
         cylinder3: '',
         cylinder4: '',
         cylinder5: '',
         cylinder6: '',
         cylinder7: '',
         cylinder8: ''
      },
      cylindersReason: '',
      images: [],
      comments: '',
      state: 'PENDIENTE'
   });

   return (
      <NewAvaluoContext.Provider
         value={{
            newAvaluo: newAvaluo,
            setNewAvaluo: setNewAvaluo,
            resetContext: resetContext,
         }}>
         { children }
      </NewAvaluoContext.Provider>
   );
});

export { NewAvaluoContext, useNewAvaluo, NewAvaluoProvider };