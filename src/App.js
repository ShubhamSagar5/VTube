import { Provider } from "react-redux";
import "./App.css";
import store from "./Utilis/store/store";
import Main from "./components/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Feed from "./components/Feed";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails";




const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children :[
      {
        path:'/',
        element:<Feed/>
      },
       {
    path:'/searchResults/:searchQuery',
    element:<SearchResults/>
  },
  {
    path:'/video/:id',
    element:<VideoDetails/>
  }
    ]
  },
 
])


function App() {

  return (
    <Provider store={store}>
      <div className="App">
      <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
