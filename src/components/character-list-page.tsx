"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { characters } from "@/data/characters";
import { useFilterStore } from "@/store/filter-store";
import { filterCharacters } from "@/lib/filter";
import CharacterGrid from "@/components/character/character-grid";
import CharacterFilter from "@/components/character/character-filter";
import SearchBox from "@/components/search/search-box";
import { motion } from "framer-motion";
import type { Element, Weapon } from "@/data/characters";

export default function CharacterListPage() {
  const searchParams = useSearchParams();
  const {
    searchQuery,
    selectedElements,
    selectedWeapons,
    selectedRegions,
    sortBy,
    toggleElement,
    toggleWeapon,
  } = useFilterStore();

  // Apply URL params on mount
  useEffect(() => {
    const element = searchParams.get("element") as Element | null;
    const weapon = searchParams.get("weapon") as Weapon | null;
    if (element && !selectedElements.includes(element)) {
      toggleElement(element);
    }
    if (weapon && !selectedWeapons.includes(weapon)) {
      toggleWeapon(weapon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredCharacters = useMemo(
    () =>
      filterCharacters(
        characters,
        searchQuery,
        selectedElements,
        selectedWeapons,
        selectedRegions,
        sortBy
      ),
    [searchQuery, selectedElements, selectedWeapons, selectedRegions, sortBy]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          全部5星角色
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          共 {characters.length} 位角色，当前显示 {filteredCharacters.length} 位
        </p>
      </motion.div>

      {/* Search */}
      <div className="mb-6">
        <SearchBox />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Filters sidebar */}
        <div className="w-full shrink-0 lg:w-64">
          <CharacterFilter />
        </div>

        {/* Grid */}
        <div className="flex-1">
          <CharacterGrid characters={filteredCharacters} />
        </div>
      </div>
    </div>
  );
}
