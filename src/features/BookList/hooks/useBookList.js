import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getBookAsync,
  getNewBookAsync,
  getTrendingBookAsync,
} from "../../../redux/async";
import {BookType} from "../../../utils";
import {
  clearSubjectFilter,
  setBookDetailsData,
  setSubjectFilterOption,
} from "../../../redux/slice";
import {useNavigation} from "@react-navigation/native";

const useBookList = ({bookType = ""}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {subjectFilter, bookDataList} = useSelector(state => state.book);
  const {trendingBookList} = useSelector(state => state.trendingBook);
  const {newBookList} = useSelector(state => state.newBook);

  const {isLoading} = useSelector(state => state.newBook);
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [maxResults, setMaxResults] = useState(30);
  const [hasMoreData, setHasMoreData] = useState(true);
  const currentYear = new Date().getUTCFullYear().toString();

  const fetchBooksByType = payload => {
    switch (bookType) {
      case BookType.banner:
        dispatch(getBookAsync(payload));
        break;
      case BookType.trending:
        dispatch(getTrendingBookAsync(payload));
        break;
      case BookType.latest:
        dispatch(getNewBookAsync(payload));
        break;
      case BookType.all:
        dispatch(getNewBookAsync(payload));
        dispatch(getTrendingBookAsync(payload));
        dispatch(getBookAsync(payload));
        break;
      default:
        console.error("Invalid book type");
    }
  };

  const handleLoadMore = async () => {
    if (loading || isLoading) return;
    setLoading(true);

    const newStartIndex = startIndex + 1;

    const params = {
      subject: subjectFilter,
      startIndex: newStartIndex,
      maxResults: maxResults,
      q: bookType === BookType.latest ? currentYear : null,
    };

    try {
      await fetchBooksByType(params);
      setStartIndex(newStartIndex);
      setLoading(false);
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
      maxResults: maxResults,
      q: null,
    };

    fetchBooksByType(params);
    setStartIndex(0);
    setIsRefreshing(false);
    setSubjectFilterOption("");
  };

  const handlePressOnCard = item => {
    dispatch(setBookDetailsData(item));
    navigation.navigate("BookDetails");
  };

  useEffect(() => {
    // Calls apis only if no data present in any of the list
    if (
      !trendingBookList.length > 0 &&
      !newBookList.length > 0 &&
      !bookDataList.length > 0
    ) {
      const params = {
        subject: "",
        startIndex: 0,
        maxResults: maxResults,
        q: bookType === BookType.latest ? currentYear : null,
      };
      fetchBooksByType(params);
    }
  }, [dispatch, bookType]);

  useEffect(() => {
    const params = {
      subject: subjectFilter,
      startIndex: startIndex,
      maxResults: maxResults,
      q: null,
    };
    if (subjectFilter !== null) {
      fetchBooksByType(params);
    }
  }, [subjectFilter]);

  useEffect(() => {
    return () => {
      dispatch(clearSubjectFilter());
    };
  }, []);

  return {
    loading,
    isRefreshing,
    handlePullToRefresh,
    handleLoadMore,
    hasMoreData,
    handlePressOnCard,
  };
};

export default useBookList;
