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
        <div className='card'>
            <div className='details'>
            <h1>{searchResults.name}</h1>
            <h1>{searchResults.symbol}</h1>
            <h1>{searchResults.currency}</h1>
            <p className='info'>
                {searchResults.stockExchange}
            </p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate}  symbol={searchResults.symbol}/>
            </div>
        </div>
    )
}

export default Card
