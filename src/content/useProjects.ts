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
      name: "GitPigeon — receive GitHub notifications to your Mac",
      status: ProjectStatus.Transferred,
    },
    {
      url: "/projects/1440",
      name: "1440 — see how much time is left in the day",
      status: ProjectStatus.Maintenance,
    },
    {
      name: "UpolujMaka — find your dream Mac computer",
      status: ProjectStatus.Inactive,
    },
  ];
}
