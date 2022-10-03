import {StyledSearch} from "./Search.styles";

type TypeSearch = {
    searchInputValue: string
    setSearchItems: any
}

export const Search = ({setSearchItems, searchInputValue}: TypeSearch) => {

    const onChange = (event: { target: { value: string; }; }) => setSearchItems(event.target.value)

    return (
        <StyledSearch>
            <input placeholder='Find the blog' type="text" name={'search'} value={searchInputValue}
                   onChange={onChange}/>
            <button type={'button'} name={'search'}>Go!</button>
        </StyledSearch>
    )
}


