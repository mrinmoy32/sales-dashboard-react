import React, { useState, useEffect, useRef } from "react";
import Papa, { ParseResult } from "papaparse";
import Chart from "chart.js/auto";


type Data = {
  name: string;
  family: string;
  email: string;
  date: string;
  job: string;
};

function DataLoader() {
 export const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    Papa.parse("/sales_data.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        setData(results.data);
      },
    });
  }, []);
  console.log(data);
 

  return (
    <div>
      <h1>CSV Data</h1>
      <table>
        <thead>
          {data.length > 0 && (
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default DataLoader;
