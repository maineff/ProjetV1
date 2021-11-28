import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./component/Home/Home";
import Search1 from "./component/Search/Search1";

const App= () =>{
  return(

    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/search" component={Search1} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;