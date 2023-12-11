import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';

type Props = {
    portfolioValues: string[];
}

const ListPortfolio = ({portfolioValues}: Props) => {
  return (
    <>
    <h3>PortFolio</h3>
    <ul>
        {portfolioValues && portfolioValues.map((value)=>{
            return <CardPortfolio value={value}/>
        })}
    </ul>
    </>
  )
}

export default ListPortfolio