import React from 'react';
import Navbar from '../components/Navbar.jsx';

const Poster = () => {
  const [posterData, setPosterData] = React.useState([]);

  const fetchPosters = async () => {
    try {
      const response = await fetch('http://localhost:3000/posters/list_by_genre/drama?sort_key=random&sort_direction=desc&limit=2&attributes=id,name,description,image');
      const data = await response.json();

      // Take the first two posters after sorting
      const topTwoPosters = data.slice(0, 2);

      setPosterData(topTwoPosters);
    } catch (error) {
      console.error('Error fetching posters data:', error);
    }
  };

  React.useEffect(() => {
    fetchPosters();
  }, []);

  return (
    <div className='bg-primary'>
      <Navbar />
      <main>
        <section className="bg-white max-w-[1400px] m-auto py-6">
          <img className='max-w-[1200px] m-auto' src="src/assets/images/curtain.jpg" alt="HeroImage" />
        </section>
        <div className="max-w-[1400px] m-auto bg-white" id='wrapper'>
          <section className='max-w-[1000px] m-auto bg-white'>
            <h3 className='text-orange text-3xl font-bold font-titillium-web pb-2'>
              Sidste nyt...
            </h3>
            <div className='grid grid-cols-2 gap-4'>
              {posterData.map((poster) => (
                <div className='flex-auto w-full flex items-center' key={poster.id}>
                  <img className='h-72 object-cover' src={poster.image} alt={poster.name} />
                  <div className='ml-4'>
                    <p className='font-bold'>{poster.name}</p>
                    <p>Description: <span dangerouslySetInnerHTML={{ __html: poster.description || 'N/A' }} /></p>
                    <p>Genre: {poster.genres[0]?.title || 'N/A'}</p>                                       
                    <button>Læs mere</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Poster;
