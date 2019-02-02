import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Auth from '../components/Auth';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch> 
        <Route path="/" component={Dashboard} exact/>
        <Route path="/auth" component={Auth} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;


// class AppRouter extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Header />
//           <Switch>
//             <Route path="/" component={Dashboard} />

//           </Switch>
//         </div>
//       </BrowserRouter>      
//     )
//   }
// }

//export default AppRouter;