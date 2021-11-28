import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./component/Home/Home";
import Admin from "./component/Admin/Admin";

const App= () =>{
  return(

    //on crée des routes pour accéder aux différentes pages
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/search" component={Admin} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;