"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ELEMENT_COLORS, type Character } from "@/data/characters";

interface CharacterCardProps {
  character: Character;
  index: number;
}

export default function CharacterCard({ character, index }: CharacterCardProps) {
  const elementColor = ELEMENT_COLORS[character.element];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <Link href={`/characters/${character.id}`}>
        <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-gray-800/50 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1">
          {/* Image area */}
          <div
            className="relative aspect-[3/4] overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${elementColor}20, ${elementColor}05)`,
            }}
          >
            {character.hasLocalImage && character.image ? (
              <img
                src={character.image}
                alt={character.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <span className="text-5xl opacity-30">
                  {character.element === "火" && "🔥"}
                  {character.element === "水" && "💧"}
                  {character.element === "风" && "🌬️"}
                  {character.element === "雷" && "⚡"}
                  {character.element === "草" && "🌿"}
                  {character.element === "冰" && "❄️"}
                  {character.element === "岩" && "🪨"}
                </span>
                <span className="text-sm text-gray-500">{character.name}</span>
              </div>
            )}

            {/* Element badge */}
            <div
              className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs font-medium text-white"
              style={{ backgroundColor: elementColor }}
            >
              {character.element}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-xs text-gray-300">{character.title}</p>
              <p className="text-xs text-gray-400">
                {character.weapon} · {character.region} · v{character.version}
              </p>
            </div>
          </div>

          {/* Info area */}
          <div className="p-3">
            <h3 className="text-sm font-semibold text-white">
              {character.name}
            </h3>
            <p className="mt-0.5 text-xs text-gray-400">
              {character.title}
            </p>
          </div>

          {/* Bottom accent */}
          <div
            className="h-0.5 w-full"
            style={{ backgroundColor: elementColor }}
          />
        </div>
      </Link>
    </motion.div>
  );
}
