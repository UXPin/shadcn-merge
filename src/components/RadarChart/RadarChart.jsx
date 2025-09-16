'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart as RadarChartM, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Displays a customizable radar chart.
 */
export default function RadarChart(props) {
  return (
    <ChartContainer
      config={props.chartConfig}
      className={`min-h-[300px] w-full aspect-square ${props.className}`}
    >
      <RadarChartM data={props.data} outerRadius={props.outerRadius || 90}>
        <PolarGrid />
        <PolarAngleAxis dataKey={props.dataKey} />
        <PolarRadiusAxis />
        {props.enableTooltip && (
          <ChartTooltip content={<ChartTooltipContent />} />
        )}
        {props.enableLegend && <ChartLegend content={<ChartLegendContent />} />}
        {Object.keys(props.chartConfig).map((key, idx) => {
          let fillColor = props.chartConfig[key]?.fill;
          if (!fillColor) {
            if (idx === 0) fillColor = 'hsl(var(--primary))';
            else if (idx === 1) fillColor = 'hsl(var(--secondary))';
            else fillColor = `hsl(var(--chart-${((idx - 2) % 5) + 1}))`;
          }
          return (
            <Radar
              key={key}
              name={props.chartConfig[key].label}
              dataKey={key}
              stroke={fillColor}
              fill={fillColor}
              fillOpacity={props.chartConfig[key].fillOpacity || 0.3}
              strokeWidth={props.chartConfig[key].strokeWidth || 2}
            />
          );
        })}
      </RadarChartM>
    </ChartContainer>
  );
}

RadarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  chartConfig: PropTypes.object,
  dataKey: PropTypes.string,
  outerRadius: PropTypes.number,
  enableLegend: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};
