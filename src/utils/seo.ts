export const PAGE_TITLE_BASE = "Bartek Jacak — Software Engineer from Warsaw";
export const PAGE_DESCRIPTION =
  "Hey, I'm Bartek. I work as a software engineer at an American InsurTech company.";

export const getSubpageTitle = (subtitle: string, base?: string): string => {
  return `${base || PAGE_TITLE_BASE} | ${subtitle}`;
};
