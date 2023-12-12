import React, { SyntheticEvent } from 'react'
import './Card.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
    id: string;
    searchResults: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id,searchResults, onPortfolioCreate}: Props) : JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
        key={id}
        id={id}>
            {/* <div className='details'> */}
            <h2 className="font-bold text-center text-veryDarkViolet md:text-left">{searchResults.name} -- </h2>
            <h2 className="font-bold text-center text-veryDarkViolet md:text-left">{searchResults.symbol} -- </h2>
            <h2 className="font-bold text-center text-veryDarkViolet md:text-left">{searchResults.currency} -- </h2>
            <p className="text-veryDarkBlue">
                {searchResults.stockExchange} --
            </p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate}  symbol={searchResults.symbol}/>
            {/* </div> */}
        </div>
    )
}

export default Card
