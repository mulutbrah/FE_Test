// src/components/Login.tsx

import MyTable from '../components/MyTable';
import MyBarChart from '../components/barchart';
import MyPieChart from '../components/piechart';

const DashboardPage: React.FC = () => {
  const data = [
    { name: 'Category 1', value: 100 },
    { name: 'Category 2', value: 200 },
    { name: 'Category 3', value: 150 },
    { name: 'Category 4', value: 300 },
  ];

  const dataTable = [
    { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
    { id: 3, name: 'Mike Johnson', age: 28, email: 'mike.johnson@example.com' },
    { id: 4, name: 'Emily Brown', age: 22, email: 'emily.brown@example.com' },
  ];

  return (
    <div className="container m-auto">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-3 gap-4">
        <MyBarChart data={data} />

        <MyPieChart data={data} />
      </div>      

      <div>
        <MyTable data={dataTable} />
      </div>
    </div>
  );
};

export default DashboardPage;