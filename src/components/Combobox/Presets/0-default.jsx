import * as React from 'react';
import Combobox from '../Combobox';

export default (
    <Combobox
      uxpId='combobox-1'
      options={[
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'pear', label: 'Pear' },
      ]}
      placeholder='Select a fruit...'
      searchPlaceholder='Type to search...'
      width={220}
    />
);