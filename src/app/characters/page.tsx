import { Suspense } from "react";
import CharacterListPage from "@/components/character-list-page";

export default function CharactersPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
        </div>
      }
    >
      <CharacterListPage />
    </Suspense>
  );
}
