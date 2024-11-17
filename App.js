import {StatusBar} from "expo-status-bar";
import {Dimensions, FlatList, StyleSheet, Text, View} from "react-native";
import {Header, RNTab, RNText} from "./src/components";
import {ColorValues, StringValues} from "./src/constants";
import * as SplashScreen from "expo-splash-screen";
import useInitializeApp from "./src/hooks/useInitializeApp";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "expo-image";
import {Scaling} from "./src/constants/dimensions";
import {RFValue} from "./src/utils";
import {CardBanner} from "./src/components/Card/BannerCard";
import {BookCard} from "./src/components/Card/BookCard";
import {TrendingCard} from "./src/components/Card/TrendingCard";

SplashScreen.preventAutoHideAsync();

const booksData = [
  {
    id: "TA9QDwAAQBAJ",
    title: "Rails, Angular, Postgres, and Bootstrap",
    price: "2513.4",
    image:
      "http://books.google.com/books/content?id=TA9QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    id: "jurnEAAAQBAJ",
    title: "Python Programming for Linguistics and Digital Humanities",
    price: "Not for Sale",
    image:
      "http://books.google.com/books/content?id=jurnEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
];
const bookData = [
  {
    kind: "books#volume",
    id: "TA9QDwAAQBAJ",
    etag: "Y61cRrW4Dos",
    selfLink: "https://www.googleapis.com/books/v1/volumes/TA9QDwAAQBAJ",
    volumeInfo: {
      title: "Rails, Angular, Postgres, and Bootstrap",
      subtitle: "Powerful, Effective, Efficient, Full-Stack Web Development",
      authors: ["David B. Copeland"],
      publisher: "Pragmatic Bookshelf",
      publishedDate: "2017-06-22",
      description:
        "Achieve awesome user experiences and performance with simple, maintainable code! Embrace the full stack of web development, from styling with Bootstrap, building an interactive user interface with Angular 4, to storing data quickly and reliably in PostgreSQL...",
      imageLinks: {
        thumbnail:
          "http://books.google.com/books/content?id=TA9QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
    },
    saleInfo: {
      listPrice: {
        amount: 2513.4,
        currencyCode: "INR",
      },
    },
    infoLink: "https://play.google.com/store/books/details?id=TA9QDwAAQBAJ",
  },
];
const renderItem = ({item}) => (
  <CardBanner imageUrl={item.image} price={item.price} />
);
const renderItemBooks = ({item}) => (
  <BookCard uri={item.image} title={item.title} category={item.category} />
);
const {width} = Dimensions.get("window");
// Data for the books
const data = [
  {
    id: "1",
    uri: "http://books.google.com/books/content?id=m_F6cg6dkYQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    category: "Category 1",
  },
  {
    id: "2",
    uri: "http://books.google.com/books/content?id=ID2rDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    category: "Category 2",
  },
  {
    id: "3",
    uri: "http://books.google.com/books/content?id=ID3rDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    category: "Category 3",
  },
];
const DummyData = [
  {
    uri: "https://example.com/image1.jpg",
    category: "Fiction",
    title: "The Great Adventure",
    author: "John Doe",
  },
  {
    uri: "https://example.com/image2.jpg",
    category: "Non-Fiction",
    title: "Understanding the Universe",
    author: "Jane Smith",
  },
  {
    uri: "https://example.com/image3.jpg",
    category: "Science Fiction",
    title: "Galactic Voyage",
    author: "Will Johnson",
  },
  {
    uri: "https://example.com/image4.jpg",
    category: "Biography",
    title: "The Life of Albert Einstein",
    author: "Isaac Newton",
  },
];
export default function App() {
  useInitializeApp();

  return (
    <SafeAreaView style={styles.container}>
      {/* <BookList books={data} /> */}

      <StatusBar style="dark" />

      <Header title={"Hi Pranshul"} searchIcon filterIcon />
      {/* <FlatList
        data={[{key: "key"}]}
        keyExtractor={item => item.key}
        renderItem={item => {
          return (
            <>
              <FlatList
                data={booksData}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
              <RNText
                fontWeight={700}
                size={Scaling.fourteen}
                style={{margin: Scaling.ten}}>
                {StringValues.TrendingBooks}
              </RNText>
              <FlatList
                horizontal
                data={data}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <TrendingCard uri={item.uri} category={item.category} />
                )}
              />
              <RNText
                fontWeight={600}
                size={Scaling.fourteen}
                style={{margin: Scaling.ten}}>
                This Week
              </RNText>
              <FlatList
                data={booksData}
                renderItem={renderItemBooks}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </>
          );
        }}
      /> */}
      <RNTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorValues.background.default,
  },
});
