import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  value: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
};

const CardPortfolio = ({ value, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link to={`/company/${value}`} className="pt-6 text-xl font-bold">
        {value}
      </Link>
      <DeletePortfolio onPortfolioDelete={onPortfolioDelete} value={value} />
    </div>
  );
};

export default CardPortfolio;
