import React from "react";
import { useData } from "../hooks/data-hook";
import Tile from "./Tile";
import "./PartA.css";
import SalesVsInvestmentTrend from "./SalesVsInvestmentTrend";

function PartA() {
  const salesData = useData();
  const totalSales = salesData.reduce((result, item) => {
    return result + parseFloat(item.Total_Sales) / 1000000;
  }, 0);
  const totalSpend = salesData.reduce((result, item) => {
    return result + parseFloat(item.Total_Investment) / 1000000;
  }, 0);
  const totalImpact = salesData.reduce((result, item) => {
    return result + parseFloat(item.Impact) / 1000000;
  }, 0);

  const totalROI = ((totalSales - totalSpend) / totalSpend) * 100;

  return (
    <>
    <div className="tiles-container">
      <Tile
        icon="https://img.icons8.com/ios-filled/50/bullish.png" // Replace with actual icons or image components
        color="blue" // Use CSS classes for colors
        title="Total Sales"
        value={"$" + totalSales.toFixed(2) + " M"}
      />
      <Tile
        icon="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/external-spend-personal-finance-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
        color="red"
        title="Total Spend"
        value={"$" + totalSpend.toFixed(2) + " M"}
      />
      <Tile
        icon="https://img.icons8.com/ios/50/sales-performance.png"
        color="green"
        title="Total Impact"
        value={"$" + totalImpact.toFixed(2) + " M"}
      />
      <Tile
        icon="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-roi-digital-marketing-outline-solidglyph-m-oki-orlando.png"
        color="purple"
        title="ROI"
        value={totalROI.toFixed(2) + "%"}
      />
    </div>
    <SalesVsInvestmentTrend data={salesData} />
    </>
  );
}

export default PartA;
