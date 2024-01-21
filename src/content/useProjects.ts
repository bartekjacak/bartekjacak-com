type Project = {
  url: string;
  name: string;
};

export function useProjects(): Project[] {
  return [
    {
      url: "https://github.com/bartekjacak/bartekjacak-com",
      name: "bartekjacak.com — this very website",
    },
    {
      url: "https://monofocus.app/",
      name: "MonoFocus — focus on one thing at a time",
    },
    {
      url: "https://gitpigeon.com/",
      name: "GitPigeon — receive GitHub notifications on your Mac",
    },
    {
      url: "https://1440app.com/",
      name: "1440 — make every minute count",
    },
  ];
}
