import React from "react"

export default function Search({search, setSearch}) {

    function handleChange(event){
        setSearch(event.target.value)
    }
    
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleChange}
                value={search}
            />
        </div>
    )
}