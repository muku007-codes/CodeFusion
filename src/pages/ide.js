
//components
import Homeide from './Homeide.jsx';
import DataProvider from '../context/DataProvider.jsx';

function Ide() {
  return (
    <DataProvider>    
      <Homeide/>
    </DataProvider>
  );
}

export default Ide;