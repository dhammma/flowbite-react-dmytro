"use client";

import { useState } from "react";

type ColorShapesProps = {
  colors: {
    name: string;
    shapes: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
  }[];
};

const shadeValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export function ColorShapes({ colors }: ColorShapesProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = async (colorValue: string) => {
    try {
      await navigator.clipboard.writeText(colorValue);
      setCopiedColor(colorValue);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error("Failed to copy color to clipboard:", err);
    }
  };

  return (
    <div className="rounded-lg bg-gray-900 p-6">
      {/* Header row with shade values */}
      <div className="mb-4 grid grid-cols-12 gap-2">
        <div className="text-sm font-medium text-white"></div> {/* Empty cell for color name column */}
        {shadeValues.map((shade) => (
          <div key={shade} className="text-center text-sm font-medium text-white">
            {shade}
          </div>
        ))}
      </div>

      {/* Color rows */}
      {colors.map((color) => (
        <div key={color.name} className="mb-2 grid grid-cols-12 gap-2">
          {/* Color name label */}
          <div className="flex h-8 items-center justify-center text-sm font-medium text-white">{color.name}</div>

          {/* Color squares */}
          {shadeValues.map((shade) => {
            const colorValue = color.shapes[shade as keyof typeof color.shapes];
            const isCopied = copiedColor === colorValue;

            return (
              <div key={shade} className="flex flex-col items-center">
                <button
                  onClick={() => copyToClipboard(colorValue)}
                  className="h-8 w-8 rounded-md border border-gray-600 transition-colors duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  style={{ backgroundColor: colorValue }}
                  title={`Click to copy ${colorValue}`}
                >
                  {isCopied && (
                    <div className="flex h-full w-full items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
                <span className="mt-1 text-center text-xs text-gray-300">{colorValue}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
