import React from "react"
import Planet from "./Planet"

export default function PlanetList({planets}) {

    const myPlanetList = planets.map(planet =>
        <Planet
            key={planet.id}
            name={planet.name}
            climate={planet.climate}
            terrain={planet.terrain}
            population={planet.population}
        />
    )

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {myPlanetList}
            </tbody>
        </table>
    )
}