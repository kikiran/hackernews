import React from 'react';
import Story from './story';
import useDataFetcher from './dataFetcher';


const Stories = (type) => {
    const { isLoading, stories } = useDataFetcher(type ? type : 'top');

    return ( 
       <div>
           {
           stories ?    
                  stories.map(
          ({ data: story }) => story && <Story key={story.id} story={story} />
        ): null
    }
       </div>
     );
}
 
export default Stories;