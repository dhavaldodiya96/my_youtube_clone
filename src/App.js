 
import "./App.css"
import Headar from "./components/Headar";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
     path : "/",
     element : <Body />,
     errorElement : <Error />,
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
  },{
    path : "/my_youtube_clone/",
    element : <Body />,
    errorElement : <Error />,
    children:[
      {
       path : "/my_youtube_clone/",
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

 