import {StyleSheet, View} from "react-native";
import {Header, RNFlatList} from "../../../components";
import {ColorValues, StringValues} from "../../../constants";
import {Scaling} from "../../../constants/dimensions";
import {BannerView, NewBookView, TrendingView} from "../components";
import useBookList from "../hooks/useBookList";
import {BookType} from "../../../utils";

export const BookList = () => {
  const {handlePullToRefresh, isRefreshing} = useBookList({
    bookType: BookType.all,
  });
  return (
    <View style={styles.container}>
      <Header title={`${StringValues.Hi}, Pranshul`} searchIcon filterIcon />
      <RNFlatList
        data={[{key: "BookList"}]}
        keyExtractor={item => item.key}
        onRefresh={handlePullToRefresh}
        isRefreshing={isRefreshing}
        contentContainerStyle={{paddingBottom: Scaling.six}}
        renderItem={() => (
          <>
            <BannerView />
            <TrendingView />
            <NewBookView />
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorValues.background.default,
    flex: 1,
  },
});
