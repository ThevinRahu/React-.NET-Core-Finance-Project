import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props {
    
}

const DesignPage = (props: Props) => {
    return (
       <>
       <h1>Design Page</h1>

       <Table/>
       <RatioList/>
       </>
    )
}

export default DesignPage
