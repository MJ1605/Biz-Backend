import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/login.tsx"),
    route("create-account", "routes/create-account.tsx"),              
    route("dashboard", "routes/dashboard/dashboard.tsx", [
        index("routes/dashboard/main.tsx"),
        route("customers", "routes/dashboard/customers.tsx"),
        route("volume", "routes/dashboard/volume.tsx"),
        route("habits", "routes/dashboard/habits.tsx"),
        route("kpi", "routes/dashboard/kpi.tsx"),
        route("calendar", "routes/dashboard/calendar.tsx"),
        route("notes", "routes/dashboard/notes.tsx"),
        route("settings", "routes/dashboard/settings.tsx"),
    ]),
] satisfies RouteConfig;
