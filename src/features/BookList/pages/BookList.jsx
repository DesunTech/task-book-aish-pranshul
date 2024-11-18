import {StyleSheet, View} from "react-native";
import {Header, RadioButton, RNFlatList, RNText} from "../../../components";
import {ColorValues, StringValues} from "../../../constants";
import {Scaling} from "../../../constants/dimensions";
import {BannerView, NewBookView, TrendingView} from "../components";
import useBookList from "../hooks/useBookList";
import {BookType, FilterOptions, getGreeting} from "../../../utils";
import useBookFilter from "../hooks/useBookFilter";
import {RNModal} from "../../../components/Modal/RNModal";

export const BookList = () => {
  const {
    modalVisible,
    handleModalVisible,
    setModalVisible,
    handleFilterSelection,
    selectedFilter,
  } = useBookFilter();
  const {handlePullToRefresh, isRefreshing} = useBookList({
    bookType: BookType.all,
  });

  return (
    <View style={styles.container}>
      <Header
        title={`${StringValues.Hi}, ${getGreeting()}`}
        searchIcon
        filterIcon
        handleOnPressFilter={handleModalVisible}
      />
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
      <RNModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={StringValues.SelectOption}
        children={
          <View>
            <RadioButton
              options={FilterOptions}
              selectedValue={selectedFilter}
              onValueChange={handleFilterSelection}
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorValues.background.default,
  },
});
