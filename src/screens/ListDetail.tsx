import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BackHeader from "../components/Header/BackHeader";
import { GeneralInformation, Identifiers } from "../sections";
import { getAllBookListDetailAsync } from "../services/book";
import colors from "../utils/colors";

type RootStackParamList = {
  ListDetail: { id: string };
};

const ListDetail = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<RootStackParamList, "ListDetail">>();
  const { id } = route.params;
  const dispatch = useDispatch<any>();
  const [selectedTab, setSelectedTab] = useState<string>("General Information");
  const scrollViewRef = useRef<ScrollView>(null);
  const [showName, setShowName] = useState<boolean>(false);
  const { isLoadingDetail, selectedBookDetail } = useSelector(
    (state: any) => state.books
  );

  const fetchBookDetails = async () => {
    try {
      await dispatch(getAllBookListDetailAsync({ id }));
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  if (isLoadingDetail) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  interface Tab {
    title: string;
  }

  const tabs: Tab[] = [
    { title: "General Information" },
    { title: "Identifiers" }
  ];

  const handleTabPress = (tabId: string): void => {
    scrollViewRef.current?.scrollTo({ y: 160, animated: true });
    setSelectedTab(tabId);
    setShowName(true);
  };

  const renderTab = ({ item }: { item: Tab }) => (
    <TouchableOpacity
      onPress={() => handleTabPress(item.title)}
      style={[
        styles.tab,
        selectedTab === item.title && styles.activeTab,
      ]}
    >
      <Text
        style={
          selectedTab === item.title ? styles.activeTabText : styles.tabText
        }
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    if(contentOffset.y > 140){
      setShowName(true);
    }else{
      setShowName(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader
        onPress={() => navigation.navigate("Home")}
        title={showName ? selectedBookDetail?.volumeInfo?.title || "Book Details" : ""}
      />
      <View style={styles.content}>
        <ScrollView
        onScroll={handleScroll} // Detect scroll events
        scrollEventThrottle={16} // Frequency of scroll events
          stickyHeaderIndices={[1]}
          style={styles.scrollView}
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={{
              uri: selectedBookDetail?.volumeInfo?.imageLinks?.thumbnail,
            }}
            style={styles.banner}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {selectedBookDetail?.volumeInfo?.title || "N/A"}
              </Text>
              {selectedBookDetail?.volumeInfo?.subtitle && (
                <Text
                  style={styles.subtitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {selectedBookDetail?.volumeInfo?.subtitle}
                </Text>
              )}
              <Text style={styles.printType}>
                Print Type: {selectedBookDetail?.volumeInfo?.printType || "N/A"}
              </Text>
              <Text style={styles.publisher}>
                Publisher: {selectedBookDetail?.volumeInfo?.publisher || "N/A"}
              </Text>
              <Text style={styles.publisher}>
                Published Date:{" "}
                {selectedBookDetail?.volumeInfo?.publishedDate || "N/A"}
              </Text>
            </View>
          </ImageBackground>
          <View style={styles.tabsContainer}>
            <FlatList
              data={tabs}
              horizontal
              keyExtractor={(item) => item.title}
              renderItem={renderTab}
              contentContainerStyle={styles.tabList}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {selectedTab == "General Information" && (
            <GeneralInformation selectedBookDetail={selectedBookDetail} />
          )}

          {selectedTab == "Identifiers" && (
            <Identifiers selectedBookDetail={selectedBookDetail} />
          )}

          {/* {selectedTab == "Availability" && (
            <Availability selectedBookDetail={selectedBookDetail} />
          )} */}
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ListDetail;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  content: {
    backgroundColor: colors.white,
    height: "100%",
  },
  banner: {
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#000",
    resizeMode: "cover",
    height: 160
  },
  titleContainer: {
    backgroundColor: colors.transparentWhite,
    padding: 10,
    borderRadius: 10,
  },
  tabsContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
  },
  printType: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "500",
  },
  publisher: {
    color: colors.white,
    fontSize: 12,
    fontStyle: "italic",
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottomText: {
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ctaButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ctaText: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },

  tabList: {
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 15,
    color: "#333",
  },
  activeTabText: {
    fontSize: 15,
    color: colors.primary,
  },
  contentText: {
    fontSize: 18,
    color: "#333",
  },
});
