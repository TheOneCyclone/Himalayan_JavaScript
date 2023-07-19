import './App.scss';
import  {Home} from "./pages/home";
import { Route, Routes } from "react-router";
import {Nav} from "./components/common/nav";
import Layout from './pages/layout';

const App = () => {
  const routes = [
    { path: "", element: <Home /> },
    { path: "home", element: <Home/> },
    // { path: "forums", element: <ForumLayout /> },
    // { path: "announcements", element: <AnnouncementLayout /> },
  ];
  return (
    <>
    <Layout>
      <Routes>
          {routes.map((v, key) => (
          <Route path={v.path} element={v.element} key={key}></Route>
        ))}      
      </Routes>
    </Layout>
    </>
  );
};

export default App;
