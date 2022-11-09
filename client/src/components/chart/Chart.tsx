import React from "react";
import { PolarArea } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

interface DoughnutProps {
  options: ChartOptions<"polarArea">;
  data: ChartData<"polarArea">;
}

const Chart: React.FC = () => {
  return (
    <>
      <PolarArea
        data={{
          labels: [],
          datasets: [
            {
              label: "My First Dataset",
              data: [],
              backgroundColor: [
                "rgba(255,73,217,0.46)",
                "rgba(75,250,192,0.5)",
              ],
              hoverOffset: [2],
            },
          ],
        }}
        options={{
          color: "white",
          maintainAspectRatio: false,
        }}
      />
    </>
  );
};

export default Chart;
