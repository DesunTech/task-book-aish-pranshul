import {StringValues} from "../constants";

export const BookType = {
  banner: "Banner",
  trending: "Trending",
  latest: "Latest",
  all: "All",
};

export const FilterOptions = [
  {
    categoryName: "Fiction",
    categoryValue: "fiction",
  },
  {
    categoryName: "History",
    categoryValue: "history",
  },
  {
    categoryName: "Comics",
    categoryValue: "comic",
  },
  {
    categoryName: "Computers",
    categoryValue: "computer",
  },
  {
    categoryName: "Architecture",
    categoryValue: "architecture",
  },
];
export const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return StringValues.GoodMorning;
  } else if (currentHour >= 12 && currentHour < 18) {
    return StringValues.GooAfternoon;
  } else {
    return StringValues.GoodEvening;
  }
};
export const formatDate = dateString => {
  const date = new Date(dateString);
  // eslint-disable-next-line no-undef
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formatter.format(date); // Output will be in DD-MMM-YYYY
};
