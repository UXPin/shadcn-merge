import * as React from 'react';
import BarChart from '../BarChart';

export default (
  <BarChart
    uxpId='bar-chart-1'
    data={[
      { month: 'January', desktop: 186, mobile: 80 },
      { month: 'February', desktop: 305, mobile: 200 },
      { month: 'March', desktop: 237, mobile: 120 },
      { month: 'April', desktop: 73, mobile: 190 },
      { month: 'May', desktop: 209, mobile: 130 },
      { month: 'June', desktop: 214, mobile: 140 },
    ]}
    columns={{
      desktop: {
        label: 'Desktop',
      },
      mobile: {
        label: 'Mobile',
      },
    }}
    chartConfig={{
      desktop: { label: 'Desktop',  },
      mobile: { label: 'Mobile', },
    }}
    enableGrid={true}
    enableLegend={true}
    enableTooltip={true}
    dataKey='month'
  />
);
