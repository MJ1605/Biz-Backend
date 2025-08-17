import type { Route } from "./+types/dashboard";
import { Outlet, useLoaderData } from "react-router";

//a tsx for all the more secure parts of the app

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biz Backend" },
    { name: "description", content: "dashboard" },
  ];
}

//check for user login
export async function loader ({request} : any)
{
  console.log("dashboard testing")
}


export default function DashboardLayout() {
  // const { user, notifications } = useLoaderData<typeof loader>();

  return (
    <div>
      <nav>Sidebar menu here</nav>

      {/* Child pages render here */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}