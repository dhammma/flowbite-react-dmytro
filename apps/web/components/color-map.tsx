"use client";

import { Fragment, useState } from "react";
import { ColorSourceDropdown, type ColorSource } from "~/components/color-source-dropdown";
import { colorSources } from "./color-sources";

const SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const;

export const ColorMap = () => {
  const [selectedSource, setSelectedSource] = useState<ColorSource>("misolla1");

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span>Color source:</span>
        <ColorSourceDropdown selectedSource={selectedSource} onSourceChange={setSelectedSource} />
      </div>

      <div className="grid gap-2" style={{ gridTemplateColumns: "min-content 1fr" }}>
        {Object.entries(colorSources).map(([colorName, colorConfig]) => (
          <Fragment key={colorName}>
            <div className="flex hidden items-center text-sm font-medium text-gray-300 sm:flex">
              {colorConfig.ukTitle}
              <span className="font-normal text-gray-500">&nbsp;({colorName})</span>
            </div>
            <div className="flex items-center text-xs font-normal text-gray-200 sm:hidden">{colorName}</div>
            <div className="grid grid-cols-11 gap-1">
              {SHADES.map((shade) => {
                const hasColor = colorConfig?.[selectedSource]?.[shade];

                if (!hasColor) {
                  return (
                    <div key={shade} className="relative aspect-square rounded border border-gray-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-0.5 w-full origin-center rotate-45 transform bg-red-500"></div>
                        <div className="absolute h-0.5 w-full origin-center -rotate-45 transform bg-red-500"></div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={shade}
                    className="aspect-square rounded border border-gray-300"
                    style={{ backgroundColor: colorConfig?.[selectedSource]?.[shade] ?? "#000000" }}
                  />
                );
              })}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
