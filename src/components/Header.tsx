import { Link } from 'react-router-dom';

const MyHeader: React.FC = () => {
    return (
      <header className="bg-blue-500 text-white p-4">
        <div className="container flex flex-row items-center">
            <h1 className="text-2xl font-semibold">FE Test</h1>

            <p className='m-0 mx-4'><Link to="/dashboard">Dashboard</Link></p>
            <p className='m-0'><Link to="/master-data">Master Data</Link></p>
        </div>
      </header>
    );
  };
  
  export default MyHeader;