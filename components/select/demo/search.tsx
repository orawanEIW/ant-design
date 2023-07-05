import { Select } from 'antd';
import React from 'react';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const App: React.FC = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: '7 สีช่วยชาวบ้าน',
        label: '7 สีช่วยชาวบ้าน',
      },
      {
        value: 'ข่าวภาคค่ำ',
        label: 'ข่าวภาคค่ำ',
      },
      {
        value: 'เส้นทางบันเทิง',
        label: 'เส้นทางบันเทิง',
      },
    ]}
  />
);

export default App;
