import React, {useState} from "react"
import {v4 as uuid} from "uuid"

export default function NewPlanetForm({setPlanets}) {

    const [formData, setFormData] = useState({
        name: "",
        climate: "",
        terrain: "",
        population: ""
    })

    function handleChange(event){

        const {name, value} = event.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(event){

        event.preventDefault()

        const newPlanet={
            id: uuid(),
            name: formData.name,
            climate: formData.climate,
            terrain: formData.terrain,
            population: formData.population
        }

        setPlanets(prevPlanets => ([
                ...prevPlanets,
                newPlanet
            ])
        )

        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlanet)}
        )

        for (const input in formData){
            setFormData(prevData => ({
                    ...prevData,
                    [input]: ""
                })
            )
        }
    }   

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="climate"
                placeholder="Climate"
                value={formData.climate}
                onChange={handleChange}
            />
            <input
                type="text"
                name="terrain"
                placeholder="Terrain"
                value={formData.terrain}
                onChange={handleChange}
            />
            <input
                type="text"
                name="population"
                placeholder="Population"
                value={formData.population}
                onChange={handleChange}
            />
            <input
                type="submit"
                value="Add"
            />
        </form>
    )
}