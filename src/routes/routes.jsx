import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// import ProtectedRoute from "./protectedRoute";
// import PrivateRoute from "./privateRoute";
// import ProtectedCheckoutRoute from "./protectedCheckoutRoute";
const PrivateRoute = lazy(() => import("./privateRoute"));
const ProtectedRoute = lazy(() => import("./protectedRoute"));
const ProtectedCheckoutRoute = lazy(() => import("./protectedCheckoutRoute"));

// import App from "../App";
const App = lazy(() => import("../App"));
const Booking = lazy(() => import("../pages/booking"));
const Products = lazy(() => import("../pages/products"));
const Detail = lazy(() => import("../pages/detail"));
const Home = lazy(() => import("../pages/home"));
const Error = lazy(() => import("../pages/Error"));
const Cart = lazy(() => import("../pages/cart"));
const Category = lazy(() => import("../pages/Category"));
const Checkout = lazy(() => import("../pages/checkout"));
const Checkout2 = lazy(() => import("../pages/checkout/checkout2"));
const Checkout3 = lazy(() => import("../pages/checkout/checkout3"));
const Checkout4 = lazy(() => import("../pages/checkout/checkout4"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/signup"));
const Profile = lazy(() => import("../pages/profile"));
const Order = lazy(() => import("../pages/order"));
const OrderInfo = lazy(() => import("../pages/order/Info"));
const BookedHistory = lazy(() => import("../pages/booked-history"));
const ForgetPassword = lazy(() => import("../pages/forget-password"));
const ResetPassword = lazy(() => import("../pages/reset-password"));
const BookingSuccess = lazy(() => import("../pages/booking-success"));
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact"));
const Combo = lazy(() => import("../pages/combo"));
const News = lazy(() => import("../pages/news"));

const routes = createBrowserRouter([
  {
    path: "/",
    exact: true,
    children: [
      {
        path: "",
        exact: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <App />,
          </Suspense>
        ),
        children: [
          {
            path: "",
            exact: true,
            element: <Home />,
          },
          {
            path: "booking",
            exact: true,
            element: <Booking />,
          },
          {
            path: "products",
            exact: true,
            element: <Products />,
          },
          {
            path: "products/:id",
            exact: true,
            element: <Detail />,
          },
          {
            path: "category",
            exact: true,
            element: <Category />,
          },
          {
            path: "category/:id",
            exact: true,
            element: <Category />,
          },
          {
            path: "cart",
            exact: true,
            element: <Cart />,
          },
          {
            path: "checkout",
            exact: true,
            element: (
              <ProtectedCheckoutRoute>
                <Checkout />
              </ProtectedCheckoutRoute>
            ),
          },
          {
            path: "checkout2",
            exact: true,
            element: (
              <PrivateRoute>
                <Checkout2 />
              </PrivateRoute>
            ),
          },
          {
            path: "checkout3",
            exact: true,
            element: (
              <PrivateRoute>
                <Checkout3 />
              </PrivateRoute>
            ),
          },
          {
            path: "order-success",
            exact: true,
            element: (
              <PrivateRoute>
                <Checkout4 />
              </PrivateRoute>
            ),
          },
          {
            path: "register",
            exact: true,
            element: (
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            ),
          },
          {
            path: "login",
            exact: true,
            element: (
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            ),
          },
          {
            path: "forget-password",
            exact: true,
            element: (
              <ProtectedRoute>
                <ForgetPassword />
              </ProtectedRoute>
            ),
          },
          {
            path: "reset-password",
            exact: true,
            element: (
              <ProtectedRoute>
                <ResetPassword />
              </ProtectedRoute>
            ),
          },
          {
            path: "profile",
            exact: true,
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: "order",
            exact: true,
            element: (
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            ),
          },
          {
            path: "order/:id",
            exact: true,
            element: (
              <PrivateRoute>
                <OrderInfo />
              </PrivateRoute>
            ),
          },
          {
            path: "booked-history",
            exact: true,
            element: (
              <PrivateRoute>
                <BookedHistory />
              </PrivateRoute>
            ),
          },
          {
            path: "booking-success/:id",
            exact: true,
            element: <BookingSuccess />,
          },
          {
            path: "news",
            exact: true,
            element: <News />,
          },
          {
            path: "about",
            exact: true,
            element: <About />,
          },
          {
            path: "contact",
            exact: true,
            element: <Contact />,
          },
          {
            path: "combo",
            exact: true,
            element: <Combo />,
          },
        ],
      },
    ],
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <Error />
      </Suspense>
    ),
  },
]);

export default routes;
