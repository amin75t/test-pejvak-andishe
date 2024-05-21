import { lazy } from "react";
const ArticlePage = lazy(() => import("./pages/article-page"));
const MainPage = lazy(() => import("./pages/main"));
export const routes = [
  { path: "", element: <MainPage /> },
  { path: "article/:id", element: <ArticlePage /> },
];
