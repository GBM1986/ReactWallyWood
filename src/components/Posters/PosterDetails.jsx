import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const PosterDetails = () => {
  const [apiData, setApiData] = useState([]);
  const { poster } = useParams();

  const getData = async () => {
    const url = `http://localhost:3000/posters/${poster}`;
    const result = await axios.get(url);
    setApiData([result.data]);
  };

  useEffect(() => {
    getData();
  }, [poster]);

  return (
    <div className="flex bg-white justify-center items-center h border-l-2  border-lightbrown mb-12">   
      {apiData.map((item) => (        
        <div key={item.id} className="flex flex-col items-center p-2"> 
          <img src={item.image} alt="" className="w-60 h-96 object-cover" />
          <span className="text-lg font-bold">{item.name}</span>
          <span className="text-lg font-bold">{item.price}DKK</span>
          <div className="flex flex-col items-center"> {/* Center description */}
            <p className="text-center w" dangerouslySetInnerHTML={{ __html: item.description}}></p>
            <p className="font-bold">Stock: {item.stock}</p>
            <p>Height: {item.height}</p>
            <p>Width: {item.width}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
