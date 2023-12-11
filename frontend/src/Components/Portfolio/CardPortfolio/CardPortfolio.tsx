import React from 'react'

type Props = {
    value: string;
}

const CardPortfolio = ({value}: Props) => {
  return (
    <>
    <h4>{value}</h4>
    </>
  )
}

export default CardPortfolio