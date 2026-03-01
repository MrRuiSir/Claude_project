import type { Character, Element } from "@/data/characters";

export function filterCharacters(
  characters: Character[],
  query: string,
  elements: Element[],
  weapons: string[],
  regions: string[],
  sortBy: string
): Character[] {
  let filtered = [...characters];

  // Search filter
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.pinyin.toLowerCase().includes(q) ||
        c.pinyinAbbr.toLowerCase().includes(q) ||
        c.aliases.some((a) => a.toLowerCase().includes(q)) ||
        c.title.toLowerCase().includes(q)
    );
  }

  // Element filter
  if (elements.length > 0) {
    filtered = filtered.filter((c) => elements.includes(c.element));
  }

  // Weapon filter
  if (weapons.length > 0) {
    filtered = filtered.filter((c) => weapons.includes(c.weapon));
  }

  // Region filter
  if (regions.length > 0) {
    filtered = filtered.filter((c) => regions.includes(c.region));
  }

  // Sorting
  switch (sortBy) {
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
      break;
    case "element":
      filtered.sort((a, b) => a.element.localeCompare(b.element, "zh-CN"));
      break;
    case "version":
      filtered.sort((a, b) => parseFloat(a.version) - parseFloat(b.version));
      break;
    case "region":
      filtered.sort((a, b) => a.region.localeCompare(b.region, "zh-CN"));
      break;
    default:
      break;
  }

  return filtered;
}

export function getElementStats(characters: Character[]) {
  const stats: Record<string, number> = {};
  characters.forEach((c) => {
    stats[c.element] = (stats[c.element] || 0) + 1;
  });
  return stats;
}

export function getWeaponStats(characters: Character[]) {
  const stats: Record<string, number> = {};
  characters.forEach((c) => {
    stats[c.weapon] = (stats[c.weapon] || 0) + 1;
  });
  return stats;
}

export function getRegionStats(characters: Character[]) {
  const stats: Record<string, number> = {};
  characters.forEach((c) => {
    stats[c.region] = (stats[c.region] || 0) + 1;
  });
  return stats;
}
