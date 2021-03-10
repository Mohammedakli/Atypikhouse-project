import React from 'react';

const Results = ({ results, isSearching}) => {
    
    if (!isSearching) {
        return <p>Pas de resultats</p>;
    }
    return results.map(post => {
        return <p>Resltats trouvés</p>;
    });
};

export default {Results};