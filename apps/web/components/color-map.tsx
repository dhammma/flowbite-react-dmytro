"use client";

import { RangeSlider } from "flowbite-react";
import { Fragment, useState, type ChangeEvent } from "react";
import { ColorSourceDropdown, type ColorSource } from "~/components/color-source-dropdown";
import { colorSources } from "./color-sources";

const SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const;

export const ColorMap = () => {
  const [selectedSource, setSelectedSource] = useState<ColorSource>("misolla1");
  const [compareWith, setCompareWith] = useState<ColorSource>("tailwind4");
  const [offsetCompare, setOffsetCompare] = useState(0);

  const handleOffsetCompareChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOffsetCompare(Number(event.target.value));
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

                return (
                  <div key={shade} className="relative aspect-square max-h-8 rounded border border-gray-300">
                    {!color && <EmptyCell opacity={1 - offsetCompare} />}
                    {color && <FilledCell color={color} opacity={1 - offsetCompare} />}
                    {!compareWithColor && <EmptyCell opacity={offsetCompare} />}
                    {compareWithColor && <FilledCell color={compareWithColor} opacity={offsetCompare} />}
                  </div>
                );
              })}
            </div>
          </Fragment>
        ))}
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row">{configure}</div>
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
