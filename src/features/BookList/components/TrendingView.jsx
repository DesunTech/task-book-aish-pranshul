import {View} from "react-native";
import React from "react";
import {RNFlatList, RNText, TrendingCard} from "../../../components";
import useBookList from "../hooks/useBookList";
import {BookType} from "../../../utils";
import {Scaling} from "../../../constants/dimensions";
import {StringValues} from "../../../constants";
import {useSelector} from "react-redux";

export const TrendingView = () => {
  const {handleLoadMore, loading} = useBookList({
    bookType: BookType.trending,
  });
  const {trendingBookList, isLoading} = useSelector(
    state => state.trendingBook,
  );

  return (
    <View>
      <RNText
        style={{margin: Scaling.ten}}
        size={Scaling.fourteen}
        fontWeight={600}>
        {StringValues.TrendingBooks}
      </RNText>
      <RNFlatList
        keyExtractor={(item, index) => index.toString()}
        data={trendingBookList ?? []}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <View>
              <TrendingCard
                imageUrl={item?.volumeInfo?.imageLinks?.thumbnail}
                category={item?.volumeInfo?.categories ?? "N/A"}
                title={item?.volumeInfo?.title ?? "N/A"}
              />
            </View>
          );
        }}
        onEndReached={handleLoadMore}
        isLoadingMore={loading || isLoading}
      />
    </View>
  );
};
