import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../dashboardLayout/Dashboard";

const router = createBrowserRouter([
{
    path:'/',
    element: <Dashboard></Dashboard>
}
])

export default router;