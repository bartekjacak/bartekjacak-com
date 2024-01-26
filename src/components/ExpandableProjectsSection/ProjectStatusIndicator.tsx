import { ProjectStatus } from "~/content/useProjects";

const STATUS_TO_LABEL_STYLES_MAPPING: Record<string, string> = {
  [ProjectStatus.Active]: "text-[#00B50A]",
  [ProjectStatus.Maintenance]: "text-[#f5a623]",
  [ProjectStatus.Inactive]: "text-[#545454]",
  [ProjectStatus.Transferred]: "text-[#8508B1]",
};

const STATUS_TO_DOT_STYLES_MAPPING: Record<string, string> = {
  [ProjectStatus.Active]: "bg-[#00B50A]",
  [ProjectStatus.Maintenance]: "bg-[#f5a623]",
  [ProjectStatus.Inactive]: "bg-[#545454]",
  [ProjectStatus.Transferred]: "bg-[#8508B1]",
};

const STATUS_TO_BACKGROUND_STYLES_MAPPING: Record<string, string> = {
  [ProjectStatus.Active]: "bg-[#C7FDD9] border-[#93D7AA]",
  [ProjectStatus.Maintenance]: "bg-[#FFEFD9] border-[#FFC764]",
  [ProjectStatus.Inactive]: "bg-[#E5E5E5] border-[#C9C9C9]",
  [ProjectStatus.Transferred]: "bg-[#EFD9FF] border-[#D7A3FF]",
};

const STATUS_TO_LABEL_MAPPING: Record<string, string> = {
  [ProjectStatus.Active]: "Active",
  [ProjectStatus.Maintenance]: "Maintenance",
  [ProjectStatus.Inactive]: "Inactive",
  [ProjectStatus.Transferred]: "Transferred",
};

type Props = {
  status: ProjectStatus;
};

export default function ProjectStatusIndicator({ status }: Props) {
  return (
    <div
      className="
        group
        pointer-events-none
        absolute
        order-1
        mt-[-4px]
        flex
        translate-x-[calc(-100%+20px)]
        items-center
        gap-[2px]
        pl-[10px]
        pr-[6px]
        transition-all
        duration-500
        group-hover:pointer-events-auto
      "
      aria-hidden="true"
    >
      <span
        className={`
        ${STATUS_TO_LABEL_STYLES_MAPPING[status]}
          z-[2]
          select-none
          pb-[2px]
          pt-[4px]
          text-[13px]
          font-bold
          leading-[10px]
          tracking-wide
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        `}
      >
        {STATUS_TO_LABEL_MAPPING[status]}
      </span>

      <span className="pointer-events-auto z-[2] flex h-6 w-4 items-center justify-center md:pointer-events-none">
        <span
          className={`
            ${STATUS_TO_DOT_STYLES_MAPPING[status]}
            inline-block
            h-[8px]
            w-[8px]
            rounded-full
            opacity-30
            transition-all
            duration-500
            group-hover:opacity-100
          `}
        />
      </span>

      <span
        className={`
          ${STATUS_TO_BACKGROUND_STYLES_MAPPING[status]}
          margin-auto
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          top-0
          z-0
          h-full
          w-full
          rounded-full
          border
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        `}
      />
    </div>
  );
}
