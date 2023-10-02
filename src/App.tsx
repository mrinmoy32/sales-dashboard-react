import React, { useState, useEffect } from 'react';
import Papa, {ParseResult} from 'papaparse';
 

type Data = {
  name: string
  family: string
  email: string
  date: string
  job: string
}

function App() {
  const [data, setData] = useState<Data[]>([]); // Use a generic type for the data state

  useEffect(() => {
    // Replace 'sales-data.csv' with the correct path to your CSV file
    Papa.parse("/sales_data.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        setData(results.data)
      },
    })
    
  }, []);

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

export default App;
