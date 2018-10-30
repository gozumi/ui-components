import { ISearchListProps } from '../components/search-list'

/**
 * Defines a react component that renders a search box with related search results.
 * @param props The properties passed into the component
 */
export const SearchList: (props: ISearchListProps) => JSX.Element

/**
 * Takes an array of strings and returns a single string which is the result of
 * concatentating these strings together. If any of the strings are undefined or
 * null it will not be concatenated into the final result string.
 * @param sArray The array of strings passed into the function
 */
export const concatClassNames: (sArray: string[]) => string
