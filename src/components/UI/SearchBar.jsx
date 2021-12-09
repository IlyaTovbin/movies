const SearchBar = props => {
    return(
        <form className="form-inline d-flex mb-3 justify-content-end">
            <input onChange={props.searchHandler} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
    )
}

export default SearchBar;