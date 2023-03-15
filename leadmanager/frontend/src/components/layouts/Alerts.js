import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";

const Alerts = () => {
  const alert = useAlert();
  const alertData = useSelector((state) => state.errors.errors);
  useEffect(() => {
    for (let key in alertData) {
      alert.error(`${key} : ${alertData[key]}`);
    }
  }, [alertData]);
  return <></>;
};

export default Alerts;
