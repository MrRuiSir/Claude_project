"use client";

import { type Character } from "@/data/characters";
import CharacterCard from "./character-card";
import { motion } from "framer-motion";

interface CharacterGridProps {
  characters: Character[];
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
  if (characters.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <span className="mb-4 text-6xl opacity-30">🔍</span>
        <h3 className="text-lg font-medium text-gray-400">未找到匹配的角色</h3>
        <p className="mt-1 text-sm text-gray-500">请尝试调整筛选条件或搜索词</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {characters.map((character, index) => (
        <CharacterCard key={character.id} character={character} index={index} />
      ))}
    </div>
  );
}
