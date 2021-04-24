import { useLocation } from 'react-router';

const useQueryString = () => new URLSearchParams(useLocation().search);

export default useQueryString;
