import * as React from 'react';
import LineChart from '../LineChart';

export default (
  <LineChart
    uxpId='line-chart-1'
    data={[
      { month: 'January', desktop: 120, mobile: 60 },
      { month: 'February', desktop: 200, mobile: 110 },
      { month: 'March', desktop: 170, mobile: 90 },
      { month: 'April', desktop: 90, mobile: 130 },
      { month: 'May', desktop: 150, mobile: 100 },
      { month: 'June', desktop: 180, mobile: 120 },
    ]}
    lines={{
      desktop: {
        label: 'Desktop',
        type: 'monotone',
      },
      mobile: {
        label: 'Mobile',
        type: 'monotone',
      },
    }}
    chartConfig={{
      desktop: { label: 'Desktop'  },
      mobile: { label: 'Mobile'  },
    }}
    enableGrid={true}
    enableLegend={true}
    enableTooltip={true}
    dataKey='month'
  />
); 