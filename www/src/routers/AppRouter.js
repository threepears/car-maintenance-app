import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Auth from '../components/Auth';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/auth" component={Auth} />
        <Route component={NotFoundPage} />
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