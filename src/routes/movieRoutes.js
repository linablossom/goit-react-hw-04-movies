import Cast from "../components/Cast";
import Reviews from "../components/Reviews";

export const movieRoutes = [
  {
    name: "Cast",
    path: "/cast",
    exact: true,
    component: Cast,
  },
  {
    name: "Reviews",
    path: "/reviews",
    exact: true,
    component: Reviews,
  },
];
