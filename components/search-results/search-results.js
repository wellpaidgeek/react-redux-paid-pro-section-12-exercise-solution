import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';

export default function SearchResults ({ results }) {
    return (
        <div>
        { results.map((result) => <SearchResult result={result} />) }
        </div>
    );
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(CustomTypes.SearchResult),
};