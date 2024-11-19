import {View} from "react-native";
import React from "react";
import {EmptyComponent, RNTab} from "../../../components";
import {Tabs} from "react-native-collapsible-tab-view";
import {BookHeader, BookOverViewTab} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {BookSearchCard} from "../../BookList/components/BookSearchCard";
import {Scaling} from "../../../constants/dimensions";
import {useNavigation} from "@react-navigation/native";
import {setBookDetailsData} from "../../../redux/slice";
import useBookDetails from "../hooks/useBookDetails";

export const BookDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {handleTabPress} = useBookDetails();
  const {bookDetails} = useSelector(state => state.book);
  const {trendingBookList} = useSelector(state => state.trendingBook);
  const {newBookList} = useSelector(state => state.newBook);
  const handleBookPress = item => {
    dispatch(setBookDetailsData(item));
    navigation.push("BookDetails");
  };
  return (
    <View style={{flex: 1}}>
      <RNTab
        currentTab={index => handleTabPress(index)}
        tabHeader={
          <BookHeader
            title={bookDetails?.volumeInfo?.title}
            subtitle={bookDetails?.volumeInfo?.subtitle}
            authors={bookDetails?.volumeInfo?.authors}
            publishedDate={bookDetails?.volumeInfo?.publishedDate}
            publisher={bookDetails?.volumeInfo?.publisher}
          />
        }>
        <Tabs.ScrollView>
          <BookOverViewTab
            bookId={bookDetails?.id}
            language={bookDetails?.volumeInfo?.language}
            numberOfPages={bookDetails?.volumeInfo?.pageCount}
            categories={bookDetails?.volumeInfo?.categories}
            price={bookDetails?.saleInfo?.listPrice?.amount}
            description={bookDetails?.volumeInfo?.description}
          />
        </Tabs.ScrollView>
        <Tabs.FlatList
          data={trendingBookList}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            const {title, authors, imageLinks} = item.volumeInfo;
            return (
              <View style={{margin: Scaling.ten}}>
                <BookSearchCard
                  title={title}
                  authors={authors}
                  imageLinks={imageLinks}
                  onPress={() => {
                    handleBookPress(item);
                  }}
                />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
        <Tabs.FlatList
          data={newBookList}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            const {title, authors, imageLinks} = item.volumeInfo;
            return (
              <View style={{margin: Scaling.ten}}>
                <BookSearchCard
                  title={title}
                  authors={authors}
                  imageLinks={imageLinks}
                  onPress={() => {
                    handleBookPress(item);
                  }}
                />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyComponent />}
        />
        <Tabs.FlatList
          data={[]}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            const {title, authors, imageLinks} = item.volumeInfo;
            return (
              <View style={{margin: Scaling.ten}}>
                <BookSearchCard
                  title={title}
                  authors={authors}
                  imageLinks={imageLinks}
                  onPress={() => {
                    handleBookPress(item);
                  }}
                />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyComponent />}
        />
        <Tabs.FlatList
          data={[]}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            const {title, authors, imageLinks} = item.volumeInfo;
            return (
              <View style={{margin: Scaling.ten}}>
                <BookSearchCard
                  title={title}
                  authors={authors}
                  imageLinks={imageLinks}
                  onPress={() => {
                    handleBookPress(item);
                  }}
                />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyComponent />}
        />
      </RNTab>
    </View>
  );
};
