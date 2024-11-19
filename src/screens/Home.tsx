import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BottomSheet from "../components/BottomSheet";
import Header from "../components/Header";
import SBBottomSheet from "../components/SBBottomSheet";
import {
  getAllBookListAsync,
  getAllBookListBannerAsync,
} from "../services/book";
import colors from "../utils/colors";
import EmptyScreen from "../components/EmptyScreen";

const HomeScreen: FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const { isLoading } = useSelector((state: any) => state.books);

  const [searchTerm, setSearchTerm] = useState("");
  const [subject, setSubject] = useState<string | number>("");
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false); // Prevent overlapping API calls

  const options = [
    { categoryName: "Fiction" },
    { categoryName: "Nonfiction" },
    { categoryName: "Science" },
    { categoryName: "History" },
    { categoryName: "Technology" },
    { categoryName: "Self-Help" },
    { categoryName: "Biography" },
    { categoryName: "Travel" },
    { categoryName: "Fantasy" },
    { categoryName: "Health" },
    { categoryName: "Cooking" },
    { categoryName: "Art" },
    { categoryName: "Education" },
    { categoryName: "Psychology" },
    { categoryName: "Business" },
  ];

  const refRBSheet = useRef<any>(null);

  const getAllBookListBanner = useCallback(async () => {
    const payload = {
      searchTerm,
      subject,
      startIndex: 0,
      maxResults: 2,
    };
    try {
      await dispatch(getAllBookListBannerAsync(payload));
    } catch (error) {
      console.error("Failed to fetch banners:", error);
    }
  }, [dispatch, searchTerm, subject]);

  const getAllBookList = useCallback(
    async (currentPage: number) => {
      if (isFetching) return;
      setIsFetching(true);

      const skipData = (currentPage - 1) * 20;
      const payload = {
        searchTerm,
        subject,
        startIndex: skipData,
        maxResults: 20,
      };

      try {
        const response = await dispatch(getAllBookListAsync(payload));
        setSelectedBook((prevBooks) =>
          currentPage === 1
            ? response?.payload?.items || []
            : prevBooks.concat(response?.payload?.items || [])
        );
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setIsFetching(false);
      }
    },
    [dispatch, searchTerm, subject, isFetching]
  );

  useEffect(() => {
    getAllBookList(1);
  }, [subject]);

  useEffect(() => {
    getAllBookListBanner();
  }, []);

  const handleLoadMore = () => {
    if (!isEndReached && !isFetching) {
      const nextPage = page + 1;
      setPage(nextPage);
      getAllBookList(nextPage);
    }
  };

  const handleSearchDebounced = useCallback(
    _.debounce((value: string) => {
      setSearchTerm(value);
      setPage(1);
      getAllBookList(1);
    }, 300),
    []
  );

  const handleSearch = (value: string) => {
    handleSearchDebounced(value);
  };

  const onSelectSubject = (value: string | number) => {
    setSubject(value);
    setPage(1);
    setSelectedBook([]);
    refRBSheet.current?.close();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        onSearch={(value: string) => handleSearch(value)}
        openFilter={() => refRBSheet.current?.open()}
      />
      <View style={{ paddingBottom: 20, backgroundColor: "#fff" }}>
        <FlatList
          data={selectedBook}
          renderItem={({ item }) => {
            const title = item?.volumeInfo?.title || "Untitled";
            const thumbnail = item?.volumeInfo?.imageLinks?.thumbnail;
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ListDetail", { id: item?.id })
                }
                style={styles.cartContainer}
              >
                <Image
                  source={{ uri: thumbnail }}
                  style={styles.image}
                  resizeMode="stretch"
                />
                <Text
                  style={styles.title}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {title}
                </Text>
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          initialNumToRender={20}
          onEndReachedThreshold={0.4}
          keyExtractor={(item, i) => item?.id || `key-${i}`}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyScreen message={"No books found"} />}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {
                setPage(1);
                getAllBookList(1);
              }}
            />
          }
          onEndReached={handleLoadMore}
          ListFooterComponent={
            isFetching ? (
              <View style={{ marginVertical: 20 }}>
                <ActivityIndicator size="large" color={colors.primary} />
              </View>
            ) : null
          }
        />
      </View>

      <SBBottomSheet open={refRBSheet} title={"Select Subject"}>
        <BottomSheet
          options={options}
          selectedValue={subject}
          onValueChange={(value: string | number) => onSelectSubject(value)}
          layout="column"
        />
      </SBBottomSheet>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cartContainer: {
    width: "45%",
    margin: "2.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    color: "#333",
  },
});
