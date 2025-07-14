import * as React from 'react';
import AreaChart from '../AreaChart';

export default (
  <AreaChart
    uxpId='area-chart-1'
    data={[
      { month: 'January', desktop: 120, mobile: 60 },
      { month: 'February', desktop: 200, mobile: 110 },
      { month: 'March', desktop: 170, mobile: 90 },
      { month: 'April', desktop: 90, mobile: 130 },
      { month: 'May', desktop: 150, mobile: 100 },
      { month: 'June', desktop: 180, mobile: 120 },
    ]}
    areas={{
      desktop: {
        label: 'Desktop',
        color: '#2563eb',
        type: 'monotone',
        fillOpacity: 0.25,
      },
      mobile: {
        label: 'Mobile',
        color: '#60a5fa',
        type: 'monotone',
        fillOpacity: 0.25,
      },
    }}
    chartConfig={{
      desktop: { label: 'Desktop', color: '#2563eb' },
      mobile: { label: 'Mobile', color: '#60a5fa' },
    }}
    enableGrid={true}
    enableLegend={true}
    enableTooltip={true}
    dataKey='month'
  />
); 