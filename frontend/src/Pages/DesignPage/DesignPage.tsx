import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../company';
import { testIncomeStatementData } from '../../Components/Table/TestData';

interface Props {
    
}
const tableConfig = [
    {
      label: "Market Cap",
      render: (company: any) => company.marketCapTTM,
      subTitle: "Total value of all a company's shares of stock",
    },
];

const DesignPage = (props: Props) => {
    return (
       <>
       <h1>Design Page</h1>

       <Table/>
       <RatioList data={testIncomeStatementData} config={tableConfig}/>
       </>
    )
}

export default DesignPage
