import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/login.tsx"),
    route("create-account", "routes/create-account.tsx"),              
    route("dashboard", "routes/dashboard/dashboard.tsx", [
        index("routes/dashboard/main.tsx"),
        route("settings", "routes/dashboard/settings.tsx"),
    ]),
] satisfies RouteConfig;
