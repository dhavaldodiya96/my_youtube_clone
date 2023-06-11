 
import "./App.css"
import Headar from "./components/Headar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";


const router = createBrowserRouter([
  {
     path : "/",
     element : <Body />,
     children:[
       {
        path : "/",
        element : <MainContainer/>,
       },
       {
        path : "Watch",
        element : <WatchPage />
       }
     ]
  },

])

function App() {
  return (
    <>
    <Provider store={store}>
      <Headar />
      <RouterProvider router={router} />
    </Provider>
    </>
  );
}

export default App;

 