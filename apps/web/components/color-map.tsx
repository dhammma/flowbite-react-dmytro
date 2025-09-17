"use client";

import { Button, Popover, RangeSlider, Toast, ToastToggle } from "flowbite-react";
import { Fragment, useState, type ChangeEvent } from "react";
import { HiClipboard, HiPencil } from "react-icons/hi";
import { ColorSourceDropdown, type ColorSource } from "~/components/color-source-dropdown";
import { colorSources } from "./color-sources";

const SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const;

// Helper function to compare colors
const colorsAreDifferent = (color1: string | undefined, color2: string | undefined): boolean => {
  if (typeof color1 !== typeof color2) return true;
  if (!color1 || !color2) return false;
  return color1.toLowerCase() !== color2.toLowerCase();
};

// Helper function to convert hex to RGB
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Helper function to generate Tailwind 4 config from selected source colors
const generateTailwind4Config = (selectedSource: ColorSource): string => {
  const cssVariables: string[] = [];

  Object.entries(colorSources).forEach(([colorName, colorConfig]) => {
    const sourceColors = colorConfig[selectedSource];
    if (sourceColors) {
      Object.entries(sourceColors).forEach(([shade, color]) => {
        cssVariables.push(`  --color-${colorName}-${shade}: ${color};`);
      });
    }
  });

  return `@theme {\n${cssVariables.join("\n")}\n}`;
};

// Color information component for popover
type ColorInfoProps = {
  color: string | undefined;
  colorName: string;
  shade: string;
  source: ColorSource;
  isCompare?: boolean;
};

const ColorInfo = ({ color, colorName, shade, source, isCompare = false }: ColorInfoProps) => {
  if (!color) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-16 rounded border-2 border-dashed border-gray-400 bg-gray-100"></div>
        <div className="text-center">
          <div className="text-sm font-medium text-gray-600">No color</div>
          <div className="text-xs text-gray-500">{source}</div>
        </div>
      </div>
    );
  }

  const rgb = hexToRgb(color);
  const rgbString = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : color;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-16 w-16 rounded border border-gray-300 shadow-sm" style={{ backgroundColor: color }}></div>
      <div className="text-center">
        <div className="text-sm font-medium text-gray-900">
          {colorName} {shade}
        </div>
        <div className="text-xs text-gray-600">{color}</div>
        <div className="text-xs text-gray-500">{rgbString}</div>
        <div className="text-xs text-gray-400">{source}</div>
      </div>
    </div>
  );
};

export const ColorMap = () => {
  const [selectedSource, setSelectedSource] = useState<ColorSource>("misolla2");
  const [compareWith, setCompareWith] = useState<ColorSource>("flowbiteFigma3");
  const [offsetCompare, setOffsetCompare] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const handleOffsetCompareChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOffsetCompare(Number(event.target.value));
  };

  const handleCopyToClipboard = async () => {
    try {
      const config = generateTailwind4Config(selectedSource);
      await navigator.clipboard.writeText(config);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  const configure = (
    <>
      <div className="flex items-center gap-2">
        <span>Color source:</span>
        <ColorSourceDropdown selectedSource={selectedSource} onSourceChange={setSelectedSource} />
      </div>
      <div className="flex w-full flex-1 items-center gap-2">
        <RangeSlider
          className="w-full"
          value={offsetCompare}
          onChange={handleOffsetCompareChange}
          min={0}
          max={1}
          step={1}
        />
      </div>
      <div className="flex items-center gap-2">
        <span>Compare with:</span>
        <ColorSourceDropdown selectedSource={compareWith} onSourceChange={setCompareWith} />
      </div>
    </>
  );

  return (
    <div>
      <div className="mb-4 flex flex-col items-center gap-2 sm:flex-row">{configure}</div>
      <div className="mb-4 flex justify-start">
        <Button onClick={handleCopyToClipboard} color="light">
          <HiClipboard className="h-4 w-4" />
          Copy as Tailwind 4 CSS Variables
        </Button>
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {Object.entries(colorSources).map(([colorName, colorConfig]) => (
          <Fragment key={colorName}>
            <div>
              <div className="hidden items-center text-sm font-medium text-gray-300 sm:flex">
                {colorConfig.ukTitle}
                <span className="font-normal text-gray-500">&nbsp;({colorName})</span>
              </div>
              <div className="flex items-center text-xs font-normal text-gray-200 sm:hidden">{colorName}</div>
            </div>
            <div className="grid grid-cols-11 gap-1">
              {SHADES.map((shade) => {
                const color = colorConfig?.[selectedSource]?.[shade];
                const compareWithColor = colorConfig?.[compareWith]?.[shade];
                const hasDifference = colorsAreDifferent(color, compareWithColor);

                const popoverContent = (
                  <div className="w-80 p-4">
                    <div className="mb-3 text-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {colorConfig.ukTitle} ({colorName})
                      </h3>
                      <p className="text-sm text-gray-600">Shade: {shade}</p>
                    </div>
                    <div className="flex justify-center gap-6">
                      <ColorInfo color={color} colorName={colorName} shade={shade} source={selectedSource} />
                      <ColorInfo
                        color={compareWithColor}
                        colorName={colorName}
                        shade={shade}
                        source={compareWith}
                        isCompare={true}
                      />
                    </div>
                    <div className="mt-3 text-center">
                      {hasDifference ? (
                        <div className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                          <HiPencil className="h-3 w-3" />
                          Colors differ
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">
                          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Colors match
                        </div>
                      )}
                    </div>
                  </div>
                );

                return (
                  <Popover key={shade} content={popoverContent} trigger="click">
                    <div className="relative aspect-square max-h-8 cursor-pointer rounded border border-gray-300 transition-colors hover:border-gray-400">
                      {!color && <EmptyCell opacity={1 - offsetCompare} />}
                      {color && <FilledCell color={color} opacity={1 - offsetCompare} />}
                      {!compareWithColor && <EmptyCell opacity={offsetCompare} />}
                      {compareWithColor && <FilledCell color={compareWithColor} opacity={offsetCompare} />}
                      {hasDifference && (
                        <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-sm">
                          <HiPencil className="h-2.5 w-2.5" />
                        </div>
                      )}
                    </div>
                  </Popover>
                );
              })}
            </div>
          </Fragment>
        ))}
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row">{configure}</div>

      {/* Toast notification */}
      {showToast && (
        <Toast className="fixed bottom-4 right-4 z-50">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3 text-sm font-normal">Tailwind 4 CSS variables copied to clipboard!</div>
          <ToastToggle onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
    </div>
  );
};

type CellProps = {
  opacity: number;
};

const EmptyCell = ({ opacity }: CellProps) => {
  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center" style={{ opacity }}>
      <div className="h-0.5 w-full origin-center rotate-45 transform bg-red-500"></div>
      <div className="absolute h-0.5 w-full origin-center -rotate-45 transform bg-red-500"></div>
    </div>
  );
};

type FilledCellProps = CellProps & {
  color: string;
};

const FilledCell = ({ color, opacity }: FilledCellProps) => {
  return (
    <div
      className="absolute inset-0 flex h-full w-full items-center justify-center"
      style={{ opacity, backgroundColor: color }}
    ></div>
  );
};
