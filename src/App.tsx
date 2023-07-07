import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AdminLayout from "./Layout/AdminLayout"
import Dashboard from "./Page/Dashboard"
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AdminLayout/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
    </Route>
  ))

const App = () => <RouterProvider router={router}/>

export default App;
