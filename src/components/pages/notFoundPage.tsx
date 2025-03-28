import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Typography } from "../core/typography";
import { Link } from "react-router";
import { AppRoute } from "../../routes";

export const NotFoundPage = () => <div className="flex flex-col items-center justify-center h-[50vh]">
    <ExclamationTriangleIcon />
    <Typography variant="h3">The page you requested was not found</Typography>;
    <Link to={AppRoute.Cats} className="underline">Go back to Home</Link>;
</div>
