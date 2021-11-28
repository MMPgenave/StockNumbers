import React, { useEffect } from "react";

import { useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const GrapData = async (url) => {
    const responese = await fetch(url);
    const data = await responese.json();
    console.log(data);
    setData(data);
  };

  React.useEffect(() => {
    GrapData(url);
  }, []);

  return data;
};
