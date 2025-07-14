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
        {Object.keys(props.radars).map((key, idx) => {
          let fillColor = props.radars[key]?.fill;
          if (!fillColor) {
            if (idx === 0) fillColor = 'hsl(var(--primary))';
            else if (idx === 1) fillColor = 'hsl(var(--secondary))';
            else fillColor = `hsl(var(--chart-${((idx - 2) % 5) + 1}))`;
          }
          return (
            <Radar
              key={key}
              name={props.radars[key].label}
              dataKey={key}
              stroke={fillColor}
              fill={fillColor}
              fillOpacity={props.radars[key].fillOpacity || 0.3}
              strokeWidth={props.radars[key].strokeWidth || 2}
            />
          );
        })}
      </RadarChartM>
    </ChartContainer>
  );
}

RadarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  radars: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      fillOpacity: PropTypes.number,
      strokeWidth: PropTypes.number,
    })
  ),
  chartConfig: PropTypes.object,
  dataKey: PropTypes.string,
  outerRadius: PropTypes.number,
  enableLegend: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  className: PropTypes.string,
}; 