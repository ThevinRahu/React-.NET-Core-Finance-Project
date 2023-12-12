import React, { SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void
    handleChange: (e: any) => void
    search: string|undefined
}

const Search : React.FC<Props> = ({onClick,handleChange,search}: Props) : JSX.Element => {
   
    return (
        <section className="relative bg-gray-100">
             <div className="max-w-4xl mx-auto p-6 space-y-6">
            <input className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none" value={search} onChange={(e)=>{handleChange(e)}}></input>
            <button className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline" onClick={(e)=>onClick(e)}>Submit</button>
            </div>
        </section>
    )
}

export default Search
