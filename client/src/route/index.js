import Ability from "../pages/A/A";
import Auth from "../pages/Auth/Auth";
import Inspiration from "../pages/I/I";
import Main from "../pages/Main/Main";
import Pain from "../pages/P/P";
import Tools from "../pages/T/T";
import { ABILITY_ROUTE, INSPIRATION_ROUTE, MAIN_ROUTE, PAIN_ROUTE, SIGHIN_ROUTE, SIGHUP_ROUTE, TOOLS_ROUTE } from "../utils/consts";

export const publicRouter = [
  { path: MAIN_ROUTE, component: Main, exact: true },
  { path: SIGHIN_ROUTE, component: Auth, exact: true },
  { path: SIGHUP_ROUTE, component: Auth, exact: true },
];

export const authRouter = [
    { path: MAIN_ROUTE, component: Main, exact: true },
    { path: PAIN_ROUTE, component: Pain, exact: true },
    { path: INSPIRATION_ROUTE, component: Inspiration, exact: true },
    { path: `${TOOLS_ROUTE}/:id`, component: Tools, exact: true },
    { path: ABILITY_ROUTE, component: Ability, exact: true },
]