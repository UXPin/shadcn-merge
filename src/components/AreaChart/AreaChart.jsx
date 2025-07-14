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
        {Object.keys(props.areas).map((key, idx) => {
          let fillColor = props.areas[key]?.fill;
          if (!fillColor) {
            if (idx === 0) fillColor = 'hsl(var(--primary))';
            else if (idx === 1) fillColor = 'hsl(var(--secondary))';
            else fillColor = `hsl(var(--chart-${((idx - 2) % 5) + 1}))`;
          }
          return (
            <Area
              key={key}
              type={props.areas[key].type || 'monotone'}
              dataKey={key}
              stroke={fillColor}
              fill={fillColor}
              fillOpacity={props.areas[key].fillOpacity || 0.2}
              strokeWidth={props.areas[key].strokeWidth || 2}
              dot={props.areas[key].dot || false}
              activeDot={props.areas[key].activeDot || { r: 4 }}
            />
          );
        })}
      </AreaChartM>
    </ChartContainer>
  );
}

AreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  areas: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string,
      type: PropTypes.string,
      fillOpacity: PropTypes.number,
      strokeWidth: PropTypes.number,
      dot: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
      activeDot: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    })
  ),
  chartConfig: PropTypes.object,
  dataKey: PropTypes.string,
  enableGrid: PropTypes.bool,
  enableLegend: PropTypes.bool,
  enableTooltip: PropTypes.bool,
  className: PropTypes.string,
  xTickFormatter: PropTypes.func,
  yTickFormatter: PropTypes.func,
}; 