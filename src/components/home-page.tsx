"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  characters,
  ELEMENT_COLORS,
  ELEMENT_ICONS,
  WEAPON_ICONS,
} from "@/data/characters";
import type { Element, Weapon } from "@/data/characters";
import { getElementStats, getWeaponStats } from "@/lib/filter";

const ELEMENTS: Element[] = ["火", "水", "风", "雷", "草", "冰", "岩"];
const WEAPONS: Weapon[] = ["单手剑", "双手剑", "长柄武器", "法器", "弓"];

// Featured characters for the banner
const FEATURED = characters.filter((c) =>
  ["raiden", "nahida", "furina", "neuvillette", "mavuika"].includes(c.id)
);

export default function HomePage() {
  const elementStats = getElementStats(characters);
  const weaponStats = getWeaponStats(characters);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              原神
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                5星角色
              </span>
              图鉴
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              收录全部 {characters.length} 位五星角色立绘与资料，支持多维度筛选与搜索
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/characters"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                浏览全部角色
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Characters */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="mb-6 text-xl font-bold text-white">精选角色</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {FEATURED.map((character, i) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <Link href={`/characters/${character.id}`}>
                  <div
                    className="group relative overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${ELEMENT_COLORS[character.element]}30, ${ELEMENT_COLORS[character.element]}05)`,
                    }}
                  >
                    <div className="aspect-[3/4] flex items-center justify-center">
                      {character.hasLocalImage && character.image ? (
                        <img
                          src={character.image}
                          alt={character.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-4xl opacity-40">
                            {ELEMENT_ICONS[character.element]}
                          </span>
                          <span className="text-sm font-medium text-gray-400">
                            {character.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-sm font-semibold text-white">
                        {character.name}
                      </p>
                      <p className="text-xs text-gray-300">{character.title}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Entry - By Element */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="mb-6 text-xl font-bold text-white">按元素浏览</h2>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
            {ELEMENTS.map((element, i) => (
              <motion.div
                key={element}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * i + 0.5 }}
              >
                <Link href={`/characters?element=${element}`}>
                  <div
                    className="flex flex-col items-center gap-2 rounded-xl border border-white/10 p-4 transition-all hover:border-white/20 hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(135deg, ${ELEMENT_COLORS[element]}15, transparent)`,
                    }}
                  >
                    <span className="text-3xl">{ELEMENT_ICONS[element]}</span>
                    <span className="text-sm font-medium text-white">
                      {element}
                    </span>
                    <span className="text-xs text-gray-400">
                      {elementStats[element] || 0} 位角色
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Entry - By Weapon */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="mb-6 text-xl font-bold text-white">按武器浏览</h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {WEAPONS.map((weapon, i) => (
              <motion.div
                key={weapon}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * i + 0.6 }}
              >
                <Link href={`/characters?weapon=${weapon}`}>
                  <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-gray-800/30 p-4 transition-all hover:border-white/20 hover:-translate-y-1">
                    <span className="text-3xl">{WEAPON_ICONS[weapon]}</span>
                    <span className="text-sm font-medium text-white">
                      {weapon}
                    </span>
                    <span className="text-xs text-gray-400">
                      {weaponStats[weapon] || 0} 位角色
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Statistics Panel */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="mb-6 text-xl font-bold text-white">数据统计</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-gray-800/30 p-4 text-center">
              <p className="text-3xl font-bold text-amber-400">
                {characters.length}
              </p>
              <p className="mt-1 text-sm text-gray-400">5星角色总数</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gray-800/30 p-4 text-center">
              <p className="text-3xl font-bold text-blue-400">7</p>
              <p className="mt-1 text-sm text-gray-400">元素类型</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gray-800/30 p-4 text-center">
              <p className="text-3xl font-bold text-purple-400">7</p>
              <p className="mt-1 text-sm text-gray-400">所属地区</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gray-800/30 p-4 text-center">
              <p className="text-3xl font-bold text-green-400">5</p>
              <p className="mt-1 text-sm text-gray-400">武器类型</p>
            </div>
          </div>

          {/* Element distribution bar */}
          <div className="mt-6 rounded-xl border border-white/10 bg-gray-800/30 p-4">
            <h3 className="mb-3 text-sm font-semibold text-gray-300">
              元素分布
            </h3>
            <div className="flex h-4 overflow-hidden rounded-full">
              {ELEMENTS.map((element) => (
                <div
                  key={element}
                  className="transition-all"
                  style={{
                    width: `${((elementStats[element] || 0) / characters.length) * 100}%`,
                    backgroundColor: ELEMENT_COLORS[element],
                  }}
                  title={`${element}: ${elementStats[element] || 0} 位`}
                />
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              {ELEMENTS.map((element) => (
                <div key={element} className="flex items-center gap-1">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: ELEMENT_COLORS[element] }}
                  />
                  <span className="text-xs text-gray-400">
                    {element} {elementStats[element] || 0}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
