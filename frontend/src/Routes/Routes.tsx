import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            {
              path: "company/:ticker",
              element: <CompanyPage />,
            //   children: [
            //     { path: "company-profile", element: <CompanyProfile /> },
            //     { path: "income-statement", element: <IncomeStatement /> },
            //     { path: "balance-sheet", element: <BalanceSheet /> },
            //     { path: "cashflow-statement", element: <CashflowStatement /> },
            //     { path: "historical-dividend", element: <HistoricalDividend /> },
            //   ],
            }
        ]
    },
]);