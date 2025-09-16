'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { Area, AreaChart as AreaChartM, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/chart
 * @uxpindescription Displays a customizable area chart.
 */
export default function AreaChart(props) {
  return (
    <ChartContainer
      config={props.chartConfig}
      className={`min-h-[200px] w-full ${props.className}`}
    >
      <AreaChartM data={props.data}>
        {props.enableGrid && <CartesianGrid vertical={false} />}
        <XAxis
          dataKey={props.dataKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={props.xTickFormatter}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={props.yTickFormatter}
        />
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
            <Area
              key={key}
              type={props.chartConfig[key].type || 'monotone'}
              dataKey={key}
              stroke={fillColor}
              fill={fillColor}
              fillOpacity={props.chartConfig[key].fillOpacity || 0.2}
              strokeWidth={props.chartConfig[key].strokeWidth || 2}
              dot={props.chartConfig[key].dot || false}
              activeDot={props.chartConfig[key].activeDot || { r: 4 }}
            />
          );
        })}
      </AreaChartM>
    </ChartContainer>
  );
}

AreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  chartConfig: PropTypes.object,
  dataKey: PropTypes.string,
  enableGrid: PropTypes.bool,
  enableLegend: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  xTickFormatter: PropTypes.func,
  yTickFormatter: PropTypes.func,
};
