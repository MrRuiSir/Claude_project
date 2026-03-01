"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ELEMENT_COLORS, ELEMENT_ICONS, WEAPON_ICONS } from "@/data/characters";
import type { Character } from "@/data/characters";

interface CharacterDetailProps {
  character: Character;
}

export default function CharacterDetail({ character }: CharacterDetailProps) {
  const elementColor = ELEMENT_COLORS[character.element];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <ol className="flex items-center gap-2 text-gray-400">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              首页
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/characters" className="hover:text-white transition-colors">
              角色列表
            </Link>
          </li>
          <li>/</li>
          <li className="text-white">{character.name}</li>
        </ol>
      </nav>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div
            className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
            style={{
              background: `linear-gradient(135deg, ${elementColor}30, ${elementColor}05, transparent)`,
            }}
          >
            {character.hasLocalImage && character.image ? (
              <img
                src={character.image}
                alt={character.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                <span className="text-8xl opacity-20">
                  {ELEMENT_ICONS[character.element]}
                </span>
                <p className="text-lg text-gray-500">暂无立绘</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-1/2"
        >
          {/* Name and title */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {character.name}
              </h1>
              <span
                className="rounded-full px-3 py-1 text-sm font-medium text-white"
                style={{ backgroundColor: elementColor }}
              >
                {ELEMENT_ICONS[character.element]} {character.element}
              </span>
            </div>
            <p className="mt-2 text-lg text-gray-400">{character.title}</p>
          </div>

          {/* Description */}
          <div className="mb-8 rounded-xl border border-white/10 bg-gray-800/30 p-4">
            <p className="leading-relaxed text-gray-300">
              {character.description}
            </p>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-gray-800/30 p-4">
              <p className="text-xs text-gray-500">元素属性</p>
              <p className="mt-1 flex items-center gap-2 font-medium text-white">
                <span>{ELEMENT_ICONS[character.element]}</span>
                {character.element}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gray-800/30 p-4">
              <p className="text-xs text-gray-500">武器类型</p>
              <p className="mt-1 flex items-center gap-2 font-medium text-white">
                <span>{WEAPON_ICONS[character.weapon]}</span>
                {character.weapon}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gray-800/30 p-4">
              <p className="text-xs text-gray-500">所属地区</p>
              <p className="mt-1 font-medium text-white">{character.region}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gray-800/30 p-4">
              <p className="text-xs text-gray-500">上线版本</p>
              <p className="mt-1 font-medium text-white">
                v{character.version}
              </p>
            </div>
          </div>

          {/* Aliases */}
          {character.aliases.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-xs text-gray-500">别名/昵称</p>
              <div className="flex flex-wrap gap-2">
                {character.aliases.map((alias) => (
                  <span
                    key={alias}
                    className="rounded-lg bg-gray-700/50 px-3 py-1 text-sm text-gray-300"
                  >
                    {alias}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back button */}
          <div className="mt-8">
            <Link
              href="/characters"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-white/20 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回角色列表
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
