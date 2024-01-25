import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export const GenreNav = () => {
    const [apiData, setApiData] = useState([])

    const getData = async () => {
        const url = 'http://localhost:3000/genre'
        const result = await axios.get(url)
        setApiData(result.data)
    }
    
    useEffect(()=>{
        getData()
    },[setApiData])

  return (
      <nav className="mb-6">
        <h3 className="text-orange py-6 text-2xl font-bold">Plakater</h3>
        <h4 className="text-darkGray pb-6 text-2xl font-bold">Filtre</h4>
        <ul>
        {apiData && apiData.map(item => {
            return (
                <li className=" pr-16 text-orange hover:text-primary transition duration-300 before:content-['&raquo;']" key={item.id}><NavLink to={item.slug}>{item.title}</NavLink></li>
            )
        })} 
        </ul>
      </nav>
  )
}