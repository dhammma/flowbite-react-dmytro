import { colorSourceFigma3 } from "~/components/color-source-figma3";
import { colorSourceFlowbiteReact127 } from "~/components/color-source-flowbiteReact127";
import { colorSourceMisolla1 } from "~/components/color-source-misolla1";
import { colorSourceTailwind4 } from "~/components/color-source-tailwind4";

type ColorSource =
  // how color is defined in tailwind4
  | "tailwind4"
  // how color is defined in flowbite figma
  | "flowbiteFigma3"
  // how color is defined in flowbite react
  | "flowbiteReact127"
  // how color was defined in misolla before v2
  | "misolla1";

type ColorShadesTailwind4 = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950";
type ColorShadesFlowbiteReact127 = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

type ColorMapItem = {
  ukTitle: string;
  introducedBy: ColorSource;
  flowbiteFigma3: Record<ColorShadesTailwind4, string> | null;
  flowbiteReact127: (Record<ColorShadesFlowbiteReact127, string> & { "950"?: string }) | null;
  tailwind4: Record<ColorShadesTailwind4, string> | null;
  misolla1: Record<ColorShadesTailwind4, string> | null;
};

export const colorSources: Record<string, ColorMapItem> = {
  // is special: it's exposed only by flowbite figma
  brand: {
    ukTitle: "Бренд",
    introducedBy: "flowbiteFigma3",
    flowbiteFigma3: colorSourceFigma3.brand,
    flowbiteReact127: null,
    tailwind4: null,
    misolla1: null,
  },
  // is special: it's exposed only by flowbite react
  primary: {
    ukTitle: "Основний",
    introducedBy: "flowbiteReact127",
    flowbiteFigma3: null,
    flowbiteReact127: colorSourceFlowbiteReact127.primary,
    tailwind4: null,
    misolla1: colorSourceMisolla1.primary,
  },
  slate: {
    ukTitle: "Грифель",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.slate,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.slate,
    misolla1: null,
  },
  gray: {
    ukTitle: "Сірий",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.gray,
    flowbiteReact127: colorSourceFlowbiteReact127.gray,
    tailwind4: colorSourceTailwind4.gray,
    misolla1: colorSourceMisolla1.gray,
  },
  zinc: {
    ukTitle: "Цинк",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.zinc,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.zinc,
    misolla1: null,
  },
  neutral: {
    ukTitle: "Нейтральний",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.neutral,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.neutral,
    misolla1: null,
  },
  stone: {
    ukTitle: "Камінь",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.stone,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.stone,
    misolla1: null,
  },
  red: {
    ukTitle: "Червоний",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.red,
    flowbiteReact127: colorSourceFlowbiteReact127.red,
    tailwind4: colorSourceTailwind4.red,
    misolla1: colorSourceMisolla1.red,
  },
  orange: {
    ukTitle: "Помаранчевий",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.orange,
    flowbiteReact127: colorSourceFlowbiteReact127.orange,
    tailwind4: colorSourceTailwind4.orange,
    misolla1: colorSourceMisolla1.orange,
  },
  amber: {
    ukTitle: "Бурштин",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.amber,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.amber,
    misolla1: null,
  },
  yellow: {
    ukTitle: "Жовтий",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.yellow,
    flowbiteReact127: colorSourceFlowbiteReact127.yellow,
    tailwind4: colorSourceTailwind4.yellow,
    misolla1: colorSourceMisolla1.yellow,
  },
  lime: {
    ukTitle: "Лайм",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.lime,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.lime,
    misolla1: null,
  },
  green: {
    ukTitle: "Зелений",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.green,
    flowbiteReact127: colorSourceFlowbiteReact127.green,
    tailwind4: colorSourceTailwind4.green,
    misolla1: colorSourceMisolla1.green,
  },
  emerald: {
    ukTitle: "Смарагд",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.emerald,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.emerald,
    misolla1: null,
  },
  lagoona: {
    ukTitle: "Лагуна",
    introducedBy: "misolla1",
    flowbiteFigma3: null,
    flowbiteReact127: null,
    tailwind4: null,
    misolla1: colorSourceMisolla1.lagoona,
  },
  teal: {
    ukTitle: "Бірюзовий",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.teal,
    flowbiteReact127: colorSourceFlowbiteReact127.teal,
    tailwind4: colorSourceTailwind4.teal,
    misolla1: colorSourceMisolla1.teal,
  },
  cyan: {
    ukTitle: "Блакитний",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.cyan,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.cyan,
    misolla1: colorSourceMisolla1.cyan,
  },
  sky: {
    ukTitle: "Небо",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.sky,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.sky,
    misolla1: null,
  },
  // is special: it's missed in the flowbite figma
  blue: {
    ukTitle: "Синій",
    introducedBy: "tailwind4",
    flowbiteFigma3: null,
    flowbiteReact127: colorSourceFlowbiteReact127.blue,
    tailwind4: colorSourceTailwind4.blue,
    misolla1: colorSourceMisolla1.blue,
  },
  indigo: {
    ukTitle: "Індиго",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.indigo,
    flowbiteReact127: colorSourceFlowbiteReact127.indigo,
    tailwind4: colorSourceTailwind4.indigo,
    misolla1: colorSourceMisolla1.indigo,
  },
  // is spectial: it's missed in the flowbite figma variables,
  // but presented on the palette
  violet: {
    ukTitle: "Фіолетовий",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.violet,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.violet,
    misolla1: null,
  },
  purple: {
    ukTitle: "Пурпурний",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.purple,
    flowbiteReact127: colorSourceFlowbiteReact127.purple,
    tailwind4: colorSourceTailwind4.purple,
    misolla1: colorSourceMisolla1.purple,
  },
  fuchsia: {
    ukTitle: "Фуксія",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.fuchsia,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.fuchsia,
    misolla1: null,
  },
  pink: {
    ukTitle: "Рожевий",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.pink,
    flowbiteReact127: colorSourceFlowbiteReact127.pink,
    tailwind4: colorSourceTailwind4.pink,
    misolla1: colorSourceMisolla1.pink,
  },
  rose: {
    ukTitle: "Троянда",
    introducedBy: "tailwind4",
    flowbiteFigma3: colorSourceFigma3.rose,
    flowbiteReact127: null,
    tailwind4: colorSourceTailwind4.rose,
    misolla1: null,
  },
} as const;
