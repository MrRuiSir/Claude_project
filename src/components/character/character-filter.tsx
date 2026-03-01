"use client";

import { ELEMENT_COLORS, ELEMENT_ICONS, WEAPON_ICONS } from "@/data/characters";
import type { Element, Weapon, Region } from "@/data/characters";
import { useFilterStore } from "@/store/filter-store";
import { motion } from "framer-motion";

const ELEMENTS: Element[] = ["火", "水", "风", "雷", "草", "冰", "岩"];
const WEAPONS: Weapon[] = ["单手剑", "双手剑", "长柄武器", "法器", "弓"];
const REGIONS: Region[] = ["蒙德", "璃月", "稻妻", "须弥", "枫丹", "纳塔", "至冬"];

export default function CharacterFilter() {
  const {
    selectedElements,
    selectedWeapons,
    selectedRegions,
    sortBy,
    toggleElement,
    toggleWeapon,
    toggleRegion,
    setSortBy,
    clearFilters,
  } = useFilterStore();

  const hasFilters =
    selectedElements.length > 0 ||
    selectedWeapons.length > 0 ||
    selectedRegions.length > 0 ||
    sortBy !== "default";

  return (
    <div className="space-y-4 rounded-xl border border-white/10 bg-gray-800/30 p-4">
      {/* Element filter */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          元素属性
        </h3>
        <div className="flex flex-wrap gap-2">
          {ELEMENTS.map((element) => {
            const isActive = selectedElements.includes(element);
            return (
              <motion.button
                key={element}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleElement(element)}
                className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "text-white shadow-lg"
                    : "bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                }`}
                style={
                  isActive
                    ? { backgroundColor: ELEMENT_COLORS[element] }
                    : undefined
                }
              >
                <span>{ELEMENT_ICONS[element]}</span>
                {element}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Weapon filter */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          武器类型
        </h3>
        <div className="flex flex-wrap gap-2">
          {WEAPONS.map((weapon) => {
            const isActive = selectedWeapons.includes(weapon);
            return (
              <motion.button
                key={weapon}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleWeapon(weapon)}
                className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-amber-500 text-white"
                    : "bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                }`}
              >
                <span>{WEAPON_ICONS[weapon]}</span>
                {weapon}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Region filter */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          所属地区
        </h3>
        <div className="flex flex-wrap gap-2">
          {REGIONS.map((region) => {
            const isActive = selectedRegions.includes(region);
            return (
              <motion.button
                key={region}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleRegion(region)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
                }`}
              >
                {region}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          排序方式
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            { value: "default" as const, label: "默认" },
            { value: "name" as const, label: "名称" },
            { value: "element" as const, label: "元素" },
            { value: "version" as const, label: "版本" },
            { value: "region" as const, label: "地区" },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setSortBy(option.value)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                sortBy === option.value
                  ? "bg-purple-500 text-white"
                  : "bg-gray-700/50 text-gray-400 hover:bg-gray-700 hover:text-gray-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasFilters && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={clearFilters}
          className="w-full rounded-lg border border-white/10 py-2 text-xs font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          清除所有筛选
        </motion.button>
      )}
    </div>
  );
}
