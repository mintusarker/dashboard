import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboardLayout/Dashboard";
import DashboardHome from "../dashboard/DashboardHome";

const router = createBrowserRouter([
{
    path:'/',
    element: <Dashboard></Dashboard>,
    children: [
        {
            path:'/',
            element: <DashboardHome></DashboardHome>
        }
    ]
}
])

export default router;