import Link from "next/link";
import { ReactNode } from "react";
import ChevronDownIcon from "~/icons/ChevronDownIcon";

const MAX_VISIBLE_ITEMS = 6;
const ITEM_INDEX_TO_OPACITY_MAPPING: Record<number, string> = {
  0: "1",
  1: "1",
  2: "1",
  3: "0.6",
  4: "0.3",
  5: "0.1",
};

export type BaseItemType = {
  opacity: string;
};

type Props<T> = {
  title: string;
  items: T[];
  itemRenderer: (item: T & BaseItemType, index: number) => ReactNode;
};

export default function SectionWithExpandableList<T>({
  title,
  items,
  itemRenderer,
}: Props<T>) {
  return (
    <section>
      <h2>{title}</h2>
      <ul className="mt-4 flex flex-col gap-4">
        {items
          .slice(0, MAX_VISIBLE_ITEMS)
          .map((item, index) =>
            itemRenderer(
              { ...item, opacity: ITEM_INDEX_TO_OPACITY_MAPPING[index] },
              index,
            ),
          )}
        {items.length > MAX_VISIBLE_ITEMS && (
          <li>
            <Link href="/" className="flex items-center gap-1">
              See all {items.length} {title.toLowerCase()}{" "}
              <span className="mt-[-2px]" aria-hidden="true">
                <ChevronDownIcon />
              </span>
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
