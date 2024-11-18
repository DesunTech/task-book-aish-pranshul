import {View} from "react-native";
import React from "react";
import {BannerCard, RNFlatList} from "../../../components";
import {useSelector} from "react-redux";
import useBookList from "../hooks/useBookList";
import {BookType} from "../../../utils";

export const BannerView = () => {
  const {bookDataList, isLoading} = useSelector(state => state.book);
  const {handleLoadMore, loading} = useBookList({
    bookType: BookType.banner,
  });

  return (
    <View>
      <RNFlatList
        keyExtractor={(item, index) => index.toString()}
        data={bookDataList ?? []}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <BannerCard
              imageUrl={item?.volumeInfo?.imageLinks?.thumbnail}
              price={item?.saleInfo?.listPrice?.amount}
            />
          );
        }}
        onEndReached={handleLoadMore}
        isLoadingMore={loading || isLoading}
      />
    </View>
  );
};
