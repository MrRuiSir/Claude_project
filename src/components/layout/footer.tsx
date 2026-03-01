import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-900/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-gradient-to-br from-amber-400 to-orange-500 text-xs font-bold text-white">
              原
            </div>
            <span className="text-sm font-medium text-gray-400">
              原神5星角色图鉴
            </span>
          </div>

          <nav className="flex gap-6">
            <Link
              href="/characters"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              角色列表
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              关于
            </Link>
          </nav>

          <p className="text-xs text-gray-500">
            本站仅供学习交流，角色版权归米哈游所有
          </p>
        </div>
      </div>
    </footer>
  );
}
