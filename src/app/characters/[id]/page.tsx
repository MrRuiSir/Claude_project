import { notFound } from "next/navigation";
import { characters } from "@/data/characters";
import CharacterDetail from "@/components/character/character-detail";

export function generateStaticParams() {
  return characters.map((character) => ({
    id: character.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const character = characters.find((c) => c.id === params.id);
  if (!character) return { title: "角色未找到" };
  return {
    title: `${character.name} - ${character.title} | 原神5星图鉴`,
    description: character.description,
  };
}

export default function CharacterPage({ params }: { params: { id: string } }) {
  const character = characters.find((c) => c.id === params.id);

  if (!character) {
    notFound();
  }

  return <CharacterDetail character={character} />;
}
