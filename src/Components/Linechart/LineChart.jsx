import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);
  useEffect(() => {
    let copyData = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        copyData.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(copyData);
    }else{
      <h1>Error</h1>
    }
  }, [historicalData]);

  return <Chart chartType="LineChart" data={data} height="100%" legendToggle />;
};

export default LineChart;
