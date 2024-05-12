import { createBrowserRouter } from "react-router-dom";
// import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddProperty from "../Pages/AddProperty/AddProperty";
import AllOwners from "../Pages/AllOwners/AllOwners";
// import AllOwners from "../Pages/AllOwners/AllOwners";
import AllProperty from "../Pages/AllProperty/AllProperty";
import AllRenters from "../Pages/AllRenters/AllRenters";
// import AllRenters from "../Pages/AllRenters/AllRenters";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import HomeSortProperty from "../Pages/HomeSortProperty/HomeSortProperty";
import Login from "../Pages/Login/Login";
import MyProperty from "../Pages/MyProperty/MyProperty";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import AdminRoute from "./AdminRoute/AdminRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/allProperty",
				element: <AllProperty />,
			},
			{
				path: "/addProperty",
				element: (
					<PrivateRoute>
						<AddProperty />
					</PrivateRoute>
				),
			},
			{
				path: "/aboutUs",
				element: <AboutUs />,
			},
			{
				path: "/logIn",
				element: <Login />,
			},
			{
				path: "/signUp",
				element: <Signup />,
			},
			{
				path: "/homeSortProperty",
				element: <HomeSortProperty />,
			},
			{
				path: "/details/:id",
				element: (
					<PrivateRoute>
						<PropertyDetails />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/api/v1/products/details/${params.id}`),
			},
		],
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "/dashboard/allRenters",
				element: <AllRenters />,
			},
			{
				path: "/dashboard/allOwners",
				element: <AllOwners />,
			},
			{
				path: "/dashboard/myProperty",
				element: <MyProperty />,
			},
		],
	},
]);

export default router;
