import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getBookAsync,
  getNewBookAsync,
  getTrendingBookAsync,
} from "../../../redux/async";
import {BookType} from "../../../utils";

const useBookList = ({bookType = ""}) => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.newBook);
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [maxResults, setMaxResults] = useState(10);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchBooksByType = params => {
    let q = "";
    if (bookType === BookType.latest) {
      q = new Date().getUTCFullYear().toString();
    }
    switch (bookType) {
      case BookType.banner:
        dispatch(getBookAsync({q: q, params}));
        break;
      case BookType.trending:
        dispatch(getTrendingBookAsync({q: q, params}));
        break;
      case BookType.latest:
        dispatch(getNewBookAsync({q: q, params}));
        break;
      case BookType.all:
        dispatch(getNewBookAsync({q: q, params}));
        dispatch(getTrendingBookAsync({q: q, params}));
        dispatch(getBookAsync({q: q, params}));
        break;
      default:
        console.error("Invalid book type");
    }
  };

  const handleLoadMore = async () => {
    if (loading || isLoading) return;
    setLoading(true);

    const newStartIndex = startIndex + maxResults;
    const newMaxResults = maxResults + 10;

    const params = {
      subject: "",
      startIndex: 0,
      maxResults: newMaxResults,
    };

    try {
      if (newMaxResults <= 30) {
        await fetchBooksByType(params);

        setStartIndex(newStartIndex);
        setMaxResults(newMaxResults);
        setLoading(false);
      } else {
        setHasMoreData(false);
      }
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handlePullToRefresh = () => {
    setIsRefreshing(true);
    setHasMoreData(true);
    const params = {
      subject: "",
      startIndex: 0,
      maxResults: 10,
    };

    fetchBooksByType(params);

    setStartIndex(0);
    setMaxResults(10);
    setIsRefreshing(false);
  };

  useEffect(() => {
    const params = {
      subject: "",
      startIndex: 0,
      maxResults: 10,
    };
    fetchBooksByType(params);
  }, [dispatch, bookType]);

  return {
    loading,
    isRefreshing,
    handlePullToRefresh,
    handleLoadMore,
    hasMoreData,
  };
};

export default useBookList;
