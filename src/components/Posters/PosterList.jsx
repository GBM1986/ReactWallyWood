import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const PosterList = () => {
    const [apiData, setApiData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const { genre } = useParams();

    const getData = async () => {
        const url = `http://localhost:3000/posters/list_by_genre/${genre}`;
        const result = await axios.get(url);
        setApiData(result.data);
    };

    useEffect(() => {
        getData();
    }, [genre]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const filteredData = apiData.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
        <div>
            <input
                className="py-2 px-2 border-2 border-orange rounded-[5px] text-darkGray"
                type="search"
                placeholder="Search posters..."
                onChange={handleChange}
                value={searchInput}
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-4 bg-white mt-20 border-l-2 border-lightbrown mb-4">
                {filteredData.map((item) => (
                    <div key={item.id} className="ml-8 py-2 flex flex-col items-center">
                        <NavLink to={item.slug}>
                            <img className="mb-4" src={item.image} alt="" />
                            <div className="flex flex-col items-center">
                                <span className="text-lg font-bold">{item.name}</span>
                                <span className="text-sm">Kr. {item.price},00</span>
                            </div>
                        </NavLink>
                        <button className="mt-2 px-4 py-2 bg-lightbrown rounded-[3px] border-2 border-darkGray">Læg i kurv</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
