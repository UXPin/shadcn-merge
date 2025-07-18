import * as React from 'react';
import RadialChart from '../RadialChart';

export default (
  <RadialChart
    className="bg-background text-foreground"
    uxpId='radial-chart-1'
    data={[
      { name: 'Desktop', desktop: 120,  },
      { name: 'Mobile', mobile: 98,},
    ]}
    chartConfig={{
      desktop: { label: 'Desktop',  cornerRadius: 8,  },
      mobile: { label: 'Mobile',  cornerRadius: 8,  },
    }}
    innerRadius='60%'
    outerRadius='90%'
    barSize={16}
    maxValue={150}
    enableLegend={true}
    enableTooltip={true}
  />
);
