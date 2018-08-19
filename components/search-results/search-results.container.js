import { connect } from 'react-redux';
import SearchResults from './search-results';

function mapStateToProps (state) {
    return {
        results: state.search.results,
    };
}

export default connect(mapStateToProps)(SearchResults);