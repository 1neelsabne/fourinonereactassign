
//Importing Parent Component i.e. List 
import List from './components/List';

import ApplicationForm from './components/ApplicationForm';
import Product from './components/Product';

import './App.css';

//Function to Render React App

function App() {
  return (

    // 

    <div className="App">
      <div className="bg-warning">
        <div className="container">

          {/* First Assignment of Props */}

          <div>
            <br />
            <h2>Assignment No. 1</h2>
            <hr />
            <List />
          </div>

          {/* Second Assignment of From Validation  */}

          <div>
            <br />
            <h2>Assignment No. 2</h2>
            <hr />
            <ApplicationForm />
          </div>

          {/* Third Assignment of Product Cart */}

          <div>
            <br />
            <h2>Assignment No. 3</h2>
            <hr />
            <Product />
          </div>

          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
