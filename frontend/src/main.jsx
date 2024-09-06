import {} from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import App from "./App.jsx";
import {
  Categories,
  Contact,
  Explore,
  Home,
  New,
  Favorite,
  SignIn,
} from "./pages";
// import { UserPageLayout } from "./layouts";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Navigate to="/home" />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="explore" element={<Explore />}></Route>
      <Route path="new" element={<New />}></Route>
      <Route path="favorite" element={<Favorite />}></Route>
      <Route path="categories" element={<Categories />}></Route>
      <Route path="sign-in" element={<SignIn />}></Route>
      <Route path="sign-out" element={<Navigate to="/home" />}></Route>
      {/* <Route path="user/" element={<UserPageLayout />}>
        <Route path="" element={<Navigate to="/user/profile" />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="settings" element={<Settings />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="content" element={<Content />}></Route>
      </Route> */}
      <Route path="*" element={<Navigate to="/home" />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
