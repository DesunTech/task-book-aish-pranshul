import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {searchBookAsync} from "../../../redux/async";
import Toast from "react-native-toast-message";
import {StringValues} from "../../../constants";
import {useNavigation} from "@react-navigation/native";
import {setBookDetailsData} from "../../../redux/slice";

const useBookSearch = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [query, setQuery] = useState("");
  const [bookSuggestions, setBookSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [maxResults, setMaxResults] = useState(10);
  const [hasMoreData, setHasMoreData] = useState(true);

  // Function to fetch books based on search query
  const fetchBooks = async () => {
    if (query.trim() === "") {
      setBookSuggestions([]);
      return;
    }
    // Skip if query is empty
    setLoading(true);

    try {
      const result = await dispatch(searchBookAsync({payload: query}));
      setBookSuggestions(result?.payload?.data?.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      Toast.show({text1: StringValues.SomethingWentWrong, type: "error"});
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = text => {
    setQuery(text);
  };
  const handleClearSearch = () => {
    setQuery("");
    setBookSuggestions([]);
    setHasMoreData(true);
    setStartIndex(0);
    setMaxResults(10);
  };
  const handleSearchItemSelect = item => {
    dispatch(setBookDetailsData(item));
    navigation.navigate("BookDetails");
  };

  const handleLoadMore = async () => {
    if (isMoreLoading || loading) return;
    setIsMoreLoading(true);

    const newStartIndex = startIndex + 1;

    const params = {
      subject: "",
      startIndex: newStartIndex,
      maxResults: maxResults,
    };

    try {
      const result = await dispatch(
        searchBookAsync({payload: query, params: params}),
      );
      setBookSuggestions(prev => [
        ...prev,
        ...(result?.payload?.data?.items || []),
      ]);
      setStartIndex(newStartIndex);
      setIsMoreLoading(false);
    } catch (err) {
      setIsMoreLoading(false);
    } finally {
      setIsMoreLoading(false);
    }
  };

  // Debounced search (to avoid calling API on every keystroke)
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const delayDebounceFn = setTimeout(() => {
      fetchBooks();
    }, 500); // Wait for 500ms after typing before calling the API

    // eslint-disable-next-line no-undef
    return () => clearTimeout(delayDebounceFn); // Cleanup on component unmount or before the next request
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    loading,
    query,
    bookSuggestions,
    handleOnChange,
    handleClearSearch,
    handleSearchItemSelect,
    handleLoadMore,
    hasMoreData,
    isMoreLoading,
  };
};

export default useBookSearch;
