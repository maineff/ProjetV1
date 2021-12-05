import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Film from "./pages/Film/Film";

const App= () =>{
  return(

    //on crée des routes pour accéder aux différentes pages
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/search" component={Admin} />
        <Route path="/film" component={Film} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;