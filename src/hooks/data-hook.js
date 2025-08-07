import React, {useState, useEffect} from "react";
import Papa from "papaparse";

export const useData = () => { 
    const [data, setData] = useState([]);

    useEffect(() => {
      Papa.parse("/sales_data.csv", {
        header: true,
        download: true,
        skipEmptyLines: true,
        delimiter: ",",
        complete: (results) => {
          setData(results.data);
        },
      });
    }, []);

    return data;
}


