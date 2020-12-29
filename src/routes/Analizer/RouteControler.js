/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import DashBoard from "./DeshBoard";
import RawFileUploadContainer from "./RawFileUploadContainer";

export const DataContext = createContext(null);

const RouteControler = () => {
  const [data, setData] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    if (data && !isUploaded) {
      console.log(isUploaded);
      setIsUploaded(true);
    }
  }, [data]);
  return (
    <DataContext.Provider value={{ data, setData, setIsUploaded }}>
      {isUploaded ? <DashBoard /> : <RawFileUploadContainer />}
    </DataContext.Provider>
  );
};

export default RouteControler;
