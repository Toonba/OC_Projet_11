import React from 'react';
import CardLogement from '../../components/CardLogement';
import Banner from '../../components/Banner';
const Home = () => {
    // const { logementTitle } = useParams()
    return (React.createElement(React.Fragment, null,
        React.createElement(Banner, null),
        React.createElement(CardLogement, null)));
};
export default Home;
