import {View} from "react-native";
import React from "react";
import {RNFlatList, BookCard, RNText} from "../../../components";
import {Scaling} from "../../../constants/dimensions";
import {StringValues} from "../../../constants";
import useBookList from "../hooks/useBookList";
import {BookType} from "../../../utils";
import {useSelector} from "react-redux";

export const NewBookView = () => {
  const {handleLoadMore, loading, hasMoreData, handlePressOnCard} = useBookList(
    {
      bookType: BookType.latest,
    },
  );
  const {newBookList, isLoading} = useSelector(state => state.newBook);

  return (
    <View>
      <RNText
        size={Scaling.fourteen}
        fontWeight={600}
        style={{margin: Scaling.ten}}>
        {StringValues.LatestBooks}
      </RNText>
      <RNFlatList
        keyExtractor={(item, index) => index.toString()}
        data={newBookList ?? []}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <BookCard
              imageUrl={item?.volumeInfo?.imageLinks?.thumbnail}
              title={item?.volumeInfo?.title}
              isNewArrival
              handlePressOnCard={() => handlePressOnCard(item)}
            />
          );
        }}
        onEndReached={handleLoadMore}
        isLoadingMore={loading || isLoading}
        hasMoreData={hasMoreData}
      />
    </View>
  );
};
