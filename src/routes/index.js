import { lazy } from "react";
import { HOME_ROUTE, SPEAKING_ROUTE, WRITING_ROUTE, SPEAKING_TEST_ROUTE, WRITING_TEST_ROUTE, AUTH_ROUTE } from "@utils/consts";

const SignPage = lazy(() =>
  import("../pages/SignPage/SignPage").then((module) => module)
);

const HomePage = lazy(() =>
  import("../pages/HomePage/HomePage").then((module) => module)
);

const SpeakingPage = lazy(() =>
  import("../pages/SpeakingPage/SpeakingPage").then((module) => module)
);

const WritingPage = lazy(() =>
  import("../pages/WritingPage/WritingPage").then((module) => module)
);

const WritingTestPage = lazy(() =>
  import("../pages/WritingTestPage/WritingTestPage").then((module) => module)
);

const SpeakingTestPage = lazy(() =>
  import("../pages/SpeakingTestPage/SpeakingTestPage").then((module) => module)
);

export const privateRoutes = [

  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: SPEAKING_ROUTE,
    Component: SpeakingPage,
  },
  {
    path: WRITING_ROUTE,
    Component: WritingPage,
  },
  {
    path: SPEAKING_TEST_ROUTE,
    Component: SpeakingTestPage,
  },
  {
    path: WRITING_TEST_ROUTE,
    Component: WritingTestPage,
  },
];

export const openRoutes = [
  {
    path: AUTH_ROUTE,
    Component: SignPage,
  },
]
