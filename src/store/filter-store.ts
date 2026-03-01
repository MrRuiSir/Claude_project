import { create } from "zustand";
import type { Element, Weapon, Region, Character } from "@/data/characters";

interface FilterState {
  searchQuery: string;
  selectedElements: Element[];
  selectedWeapons: Weapon[];
  selectedRegions: Region[];
  sortBy: "default" | "name" | "element" | "version" | "region";
  setSearchQuery: (query: string) => void;
  toggleElement: (element: Element) => void;
  toggleWeapon: (weapon: Weapon) => void;
  toggleRegion: (region: Region) => void;
  setSortBy: (sort: FilterState["sortBy"]) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  searchQuery: "",
  selectedElements: [],
  selectedWeapons: [],
  selectedRegions: [],
  sortBy: "default",
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleElement: (element) =>
    set((state) => ({
      selectedElements: state.selectedElements.includes(element)
        ? state.selectedElements.filter((e) => e !== element)
        : [...state.selectedElements, element],
    })),
  toggleWeapon: (weapon) =>
    set((state) => ({
      selectedWeapons: state.selectedWeapons.includes(weapon)
        ? state.selectedWeapons.filter((w) => w !== weapon)
        : [...state.selectedWeapons, weapon],
    })),
  toggleRegion: (region) =>
    set((state) => ({
      selectedRegions: state.selectedRegions.includes(region)
        ? state.selectedRegions.filter((r) => r !== region)
        : [...state.selectedRegions, region],
    })),
  setSortBy: (sortBy) => set({ sortBy }),
  clearFilters: () =>
    set({
      searchQuery: "",
      selectedElements: [],
      selectedWeapons: [],
      selectedRegions: [],
      sortBy: "default",
    }),
}));
