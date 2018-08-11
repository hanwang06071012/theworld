import React, {
  Component
} from 'react';

import Header from "./static_header_foot_file/header"
import Foot from "./static_header_foot_file/foot"

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
            <Header />
            <Foot />
        </div>
      </div>
    );
  }
}

export default App;