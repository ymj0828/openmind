import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { MainPage } from "./page-layout/MainPage/MainPage";
import { TestPage } from "./page-layout/TestPage/TestPage";
import { PostPage } from "./page-layout/PostPage/PostPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainPage />} />
          <Route path="post">
            <Route index element={<PostPage />} />
          </Route>
          <Route path="test">
            <Route index element={<TestPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
