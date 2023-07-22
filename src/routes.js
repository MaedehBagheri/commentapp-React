import FullComment from "./components/fullComment/fullComment";
import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewComment";
import NotFound from "./pages/Notfound";

const routes = [
  { path: "/new-comment", component: NewCommentPage },
  { path: "/full-comment/:id", component: FullComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;