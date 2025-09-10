export interface DocsSidebarSection {
  title: string;
  items: DocsSidebarItem[];
}

export interface DocsSidebarItem {
  title: string;
  href: string;
  tag?: "new" | "updated";
}

export const DOCS_SIDEBAR: DocsSidebarSection[] = [
  {
    title: "customize",
    items: [
      { title: "Colors", href: "/docs/customize/colors" },
      { title: "Config", href: "/docs/customize/config" },
      { title: "Custom Components", href: "/docs/customize/custom-components" },
      { title: "Dark Mode", href: "/docs/customize/dark-mode" },
      { title: "Prefix", href: "/docs/customize/prefix" },
      { title: "Theme", href: "/docs/customize/theme", tag: "updated" },
    ],
  },
  {
    title: "components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Banner", href: "/docs/components/banner" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Button group", href: "/docs/components/button-group" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Carousel", href: "/docs/components/carousel" },
      { title: "Clipboard", href: "/docs/components/clipboard" },
      { title: "Datepicker", href: "/docs/components/datepicker" },
      { title: "Drawer", href: "/docs/components/drawer" },
      { title: "Dropdown", href: "/docs/components/dropdown" },
      { title: "Footer", href: "/docs/components/footer" },
      { title: "Forms", href: "/docs/components/forms" },
      { title: "KBD", href: "/docs/components/kbd" },
      { title: "List group", href: "/docs/components/list-group" },
      { title: "Mega menu", href: "/docs/components/mega-menu" },
      { title: "Modal", href: "/docs/components/modal" },
      { title: "Navbar", href: "/docs/components/navbar" },
      { title: "Pagination", href: "/docs/components/pagination" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Progress bar", href: "/docs/components/progress" },
      { title: "Rating", href: "/docs/components/rating" },
      { title: "Sidebar", href: "/docs/components/sidebar" },
      { title: "Spinner", href: "/docs/components/spinner" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Timeline", href: "/docs/components/timeline" },
      { title: "Toast", href: "/docs/components/toast" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
  {
    title: "forms",
    items: [
      { title: "File Input", href: "/docs/forms/file-input" },
      { title: "Floating Label", href: "/docs/forms/floating-label" },
    ],
  },
  {
    title: "typography",
    items: [
      { title: "Blockquote", href: "/docs/typography/blockquote" },
      { title: "HR", href: "/docs/typography/hr" },
      { title: "List", href: "/docs/typography/list" },
    ],
  },
];
