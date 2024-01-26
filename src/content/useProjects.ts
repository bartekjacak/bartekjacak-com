export enum ProjectStatus {
  Active = "Active",
  Maintenance = "Maintenance",
  Inactive = "Inactive",
  Transferred = "Transferred",
}

type Project = {
  url?: string;
  name: string;
  status: ProjectStatus;
};

export function useProjects(): Project[] {
  return [
    {
      url: "https://github.com/bartekjacak/bartekjacak-com",
      name: "bartekjacak.com — this very website",
      status: ProjectStatus.Active,
    },
    {
      url: "https://monofocus.app/",
      name: "MonoFocus — focus on one thing at a time",
      status: ProjectStatus.Maintenance,
    },
    {
      url: "https://gitpigeon.com/",
      name: "GitPigeon — receive GitHub notifications on your Mac",
      status: ProjectStatus.Transferred,
    },
    {
      url: "https://1440app.com/",
      name: "1440 — make every minute count",
      status: ProjectStatus.Maintenance,
    },
    {
      name: "UpolujMaka — find your dream MacBook",
      status: ProjectStatus.Inactive,
    },
  ];
}
