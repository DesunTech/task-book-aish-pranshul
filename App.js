import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BookList from "./testui";

const data = [
  {
    kind: "books#volume",
    id: "TA9QDwAAQBAJ",
    etag: "CtMFp0Dqmwg",
    selfLink: "https://www.googleapis.com/books/v1/volumes/TA9QDwAAQBAJ",
    volumeInfo: {
      title: "Rails, Angular, Postgres, and Bootstrap",
      subtitle: "Powerful, Effective, Efficient, Full-Stack Web Development",
      authors: ["David B. Copeland"],
      publisher: "Pragmatic Bookshelf",
      publishedDate: "2017-06-22",
      description:
        "Achieve awesome user experiences and performance with simple, maintainable code! Embrace the full stack of web development, from styling with Bootstrap, building an interactive user interface with Angular 4, to storing data quickly and reliably in PostgreSQL. With this fully revised new edition, take a holistic view of full-stack development to create usable, high-performing applications with Rails 5.1. Rails is a great tool for building web applications, but it's not the best at everything. Embrace the features built into your database. Learn how to use front-end frameworks. Seize the power of the application stack through Angular 4, Bootstrap, and PostgreSQL. When used together, these powerful and easy-to-use tools will open you to a new world of possibilities. This second edition is updated to cover Angular - a completely reworked front-end framework - and dives into new Postgres 9.6 features such as UPSERT. Also new is Webpack coverage, to develop the front-end code for your Rails application. Create a usable and attractive login form using Bootstrap's styles, while ensuring the database table backing it is secure using Postgres' check constraints. See how creating an advanced Postgres index for a case-insensitive search speeds up your back end - enabling you to create a dynamic user experience using Angular 4. Create reusable components that bring Bootstrap and Angular together and effectively use materialized views for caching within Postgres. Get your front end working with Webpack, use Postgres' features from migrations, and write unit tests for all of it. All of this within Rails 5.1. You'll gain the confidence to work at every level of the application stack, bringing the right solution to every problem. What You Need: This book covers Postgres 9.5, Rails 5, and Ruby 2.3. You should have some experience with basic Rails concepts and a cursory understanding of JavaScript, CSS, and SQL, but by no means need to be an expert. You'll learn how to install Postgres on your computer or use a free version of it in the cloud.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781680504446",
        },
        {
          type: "ISBN_10",
          identifier: "1680504444",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 440,
      printType: "BOOK",
      categories: ["Computers"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.3.5.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=TA9QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=TA9QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.co.in/books?id=TA9QDwAAQBAJ&pg=PT78&dq=%7BSEARCH_TERM%7D&hl=&cd=1&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=TA9QDwAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=TA9QDwAAQBAJ",
    },
    saleInfo: {
      country: "IN",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 2513.4,
        currencyCode: "INR",
      },
      retailPrice: {
        amount: 2513.4,
        currencyCode: "INR",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=TA9QDwAAQBAJ&rdid=book-TA9QDwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 2513400000,
            currencyCode: "INR",
          },
          retailPrice: {
            amountInMicros: 2513400000,
            currencyCode: "INR",
          },
        },
      ],
    },
    accessInfo: {
      country: "IN",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
      },
      pdf: {
        isAvailable: true,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=TA9QDwAAQBAJ&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "... ( <b>search_term</b> ) @order = &quot; last_name asc &quot; end def starts_with ( <b>search_term</b> ) end <b>search_term</b> + &quot; % &quot; def case_insensitive_search ( field_name ) end &quot; lower ( # { field_name } ) like : # { field_name } &quot; Next , we&#39;ll implement&nbsp;...",
    },
  },
];
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BookList books={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
