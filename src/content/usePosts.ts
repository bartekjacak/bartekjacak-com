type Post = {
  url: string;
  name: string;
  date: string;
  displayDate: string;
};

export function usePosts(): Post[] {
  return [
    {
      url: "https://medium.com/swinginc/preloading-routes-of-react-applications-d267fb25d08f",
      name: "Preloading routes of React applications",
      date: new Date("2024-02-14").toISOString(),
      displayDate: "14th Feb 2024",
    },
    {
      url: "https://medium.com/@bartekjacak/how-not-to-do-any-long-term-challenge-d5f10304bedb",
      name: "How not to do any long-term challenge",
      date: new Date("2018-12-23").toISOString(),
      displayDate: "23rd Dec 2018",
    },
  ];
}
