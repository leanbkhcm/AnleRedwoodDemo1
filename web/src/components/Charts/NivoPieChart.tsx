import React from "react"
import { MARGIN } from './Constants'
import { ResponsivePie } from '@nivo/pie'
import { ChartProps } from './ChartProps'

const NivoPieChart = (props: ChartProps) => (
  <div style={{ height: "100%" }}>
    <div className="text-center text-gray-700 font-medium">{props.chartTitle}</div>
    <div style={{ height: responsiveHeight }}>
      
    </div>
  </div>
)

export default NivoPieChart
