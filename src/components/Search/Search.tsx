import {StyledSearch} from "./Search.styles";

type TypeSearch = {
    searchInput: string
    searchItems: any
}

export const Search = ({searchItems, searchInput}: TypeSearch) => (
    <StyledSearch>
        <input placeholder='Find the blog' type="text" name={'search'} value={searchInput}
               onChange={event => searchItems(event.target.value)}/>
        <button type={'button'} name={'search'}>Go!</button>
    </StyledSearch>
);
