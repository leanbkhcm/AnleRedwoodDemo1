import React from "react"
import { MARGIN } from './Constants'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { ChartProps } from './ChartProps'

const NivoScatterChart = (props: ChartProps) => {
  const xLabel: string = props.axes && props.axes.x.label,
        yLabel: string = props.axes && props.axes.y.label
  return (
   
    
    
     <div style={{ height: "100%" }}>
    <div className="text-center text-gray-700 font-medium">{props.chartTitle}</div>
    <div style={{ height: responsiveHeight }}>
      
    </div>
  </div>
    
    
  )
}

export default NivoScatterChart
