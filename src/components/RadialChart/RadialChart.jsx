'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { RadialBar, RadialBarChart as RadialBarChartM, PolarAngleAxis, Legend } from 'recharts';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Displays a customizable radial bar chart.
 */
export default function RadialChart(props) {
  return (
    <ChartContainer
      config={props.chartConfig}
      className={`min-h-[300px] w-full aspect-square ${props.className}`}
    >
      <RadialBarChartM
        cx='50%'
        cy='50%'
        innerRadius={props.innerRadius || '60%'}
        outerRadius={props.outerRadius || '90%'}
        barSize={props.barSize || 16}
        data={props.data}
      >
        <PolarAngleAxis type='number' domain={[0, props.maxValue || 150]} angleAxisId={0} />
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
            <RadialBar
              key={key}
              dataKey={key}
              fill={fillColor}
              background={props.chartConfig[key].background || false}
              cornerRadius={props.chartConfig[key].cornerRadius || 8}
              minAngle={props.chartConfig[key].minAngle || 15}
              label={props.chartConfig[key].label || false}
            />
          );
        })}
      </RadialBarChartM>
    </ChartContainer>
  );
}

RadialChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  chartConfig: PropTypes.object,
  innerRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  outerRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  barSize: PropTypes.number,
  maxValue: PropTypes.number,
  enableLegend: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  className: PropTypes.string,
};
