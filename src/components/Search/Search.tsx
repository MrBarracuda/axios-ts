import {StyledSearch} from "./Search.styles";

export const Search = ({searchItems, searchInput}:any) => (
    <StyledSearch>
        <input placeholder='Find the blog' type="text" name={'search'} value={searchInput}
               onChange={event => searchItems(event.target.value)}/>
        <button type={'button'} name={'search'}>Go!</button>
    </StyledSearch>
);
