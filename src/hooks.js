import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

//-----------------------------------------
const useFlip = () => {
  const [state, setState] = useState(true);
  const toggle = () => {
    setState((isOn) => !isOn);
  };
  return [state, toggle];
};
//-----------------------------------------
const useAxios = (baseURL, formatData) => {
  const [objArray, setObjArray] = useState([]);
  async function addObj(urlTail = "") {
    const response = await axios.get(baseURL + urlTail);
    const newData = formatData(response);
    setObjArray((objs) => [...objs, { ...newData, id: uuid() }]);
  }
  const reset = () => {
    setObjArray([]);
  };
  return [objArray, addObj, reset];
};
//-----------------------------------------

//-----------------------------------------
// const useAxios = (baseURL) => {
//   const [objArray, setObjArray] = useState([]);
//   const addObj = async () => {
//     const response = await axios.get(baseURL);
//     setObjArray((objs) => [...objs, { ...response.data, id: uuid() }]);
//   };
//   return [objArray, addObj];
// };
//-----------------------------------------
export { useFlip, useAxios };
