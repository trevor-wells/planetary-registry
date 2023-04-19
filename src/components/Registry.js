import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

export default function Registry() {

    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:8085/planets")
        .then(response => response.json())
        .then(data => setPlanets(data))
        }, []
    )

    const planetsToDisplay = planets.filter(planet =>
        planet.name.toLowerCase().includes(search.toLowerCase()) ||
        planet.climate.toLowerCase().includes(search.toLowerCase()) ||
        planet.terrain.toLowerCase().includes(search.toLowerCase()) ||
        planet.population.includes(search) 
    )
    
    return(
        <div className="registry">
            <Search
                search={search}
                setSearch={setSearch}
            />
            <div className="content">
                <PlanetList
                    planets={planetsToDisplay}
                />
                <NewPlanetForm
                    setPlanets={setPlanets}
                />
            </div>
        </div>
    )
}