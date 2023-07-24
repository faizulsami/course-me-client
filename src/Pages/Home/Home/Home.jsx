import React from 'react';
import Search from '../Search/Search';

import Gallery from '../Gallery/Gallery';
import ShowReview from '../../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Search></Search>
            <Gallery></Gallery>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;