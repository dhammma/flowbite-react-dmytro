"use client";

import { DocSearch } from "@docsearch/react";

import "@docsearch/css";
import "~/styles/docsearch.css";

export function DocSearchInput() {
  return (
    <DocSearch
      appId="CB7DMRNAYI"
      indexName="Customized Flowbite React Documentation (applied Misolla theme)"
      apiKey="a3d7f97d0e73919a949232d26bd914eb"
    />
  );
}
