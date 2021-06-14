import React from "react"
import { MARGIN } from './Constants'
//import { ResponsiveBar } from '@nivo/bar'
import { BarCharProps } from './ChartProps'
import DisplayFormatter from './DisplayFormatter';

const NivoBarChart = (props: BarCharProps) => {
  const responsiveHeight = props.chartTitle ? "calc(100% - 20px)" : "100%"
  return (<div style={{ height: "100%" }}>
    <div className="text-center text-gray-700 font-medium">{props.chartTitle}</div>
    <div style={{ height: responsiveHeight }}>
      
    </div>
  </div>)
}

export default NivoBarChart
