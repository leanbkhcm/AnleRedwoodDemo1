import React from "react"
import { MARGIN } from './Constants'
//import { ResponsiveLine } from '@nivo/line'
import { LineChartProps } from './ChartProps'
import DisplayFormatter from './DisplayFormatter'
//import { timeFormat } from 'd3-time-format'
//import { BasicTooltip } from '@nivo/tooltip'

interface TooltipPointData {
  xFormatted: string
  yFormatted: string
}

interface TooltipPoint {
  id: string
  value: string
  color: string
  serieId: string
  serieColor: string
  data: TooltipPointData
}

interface TooltipPointArg {
  point: TooltipPoint
}

const CustomLinePointTooltip = (pointArg: TooltipPointArg) => {
  console.log(pointArg)
  const point: TooltipPoint = pointArg.point
  return (
    <div style={{ height: "100%" }}>
      <div className="text-center text-gray-700 font-medium">{props.chartTitle}</div>
      <div style={{ height: responsiveHeight }}>
        
      </div>
    </div>
  )
}

const NivoLineChart = (props: LineChartProps) => {
  const xScaleOpts = {
    type: props.axes && props.axes.x.dataType ? props.axes.x.dataType : "point",
    format: props.axes && props.axes.x.dataFormat,
    precision: props.axes && props.axes.x.timePrecision
  }
  const axisBottomOpts = {
    format: props.axes && props.axes.x.displayFormat,
    legend: props.axes && props.axes.x.label,
    legendOffset: 36,
    legendPosition: 'middle'
  }
  const responsiveHeight = props.chartTitle ? "calc(100% - 20px)" : "100%"
  const xLabel = props.axes && props.axes.x.label
  const yLabel = props.axes && props.axes.y.label
  return (
    <div style={{ height: "100%" }}>
      <div className="text-center text-gray-700 font-medium">{props.chartTitle}</div>
      <div style={{ height: responsiveHeight }}>
        
      </div>
    </div>
  )
}

export default NivoLineChart
