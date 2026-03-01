export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white">关于本站</h1>

      <div className="mt-8 space-y-6 text-gray-300">
        <section className="rounded-xl border border-white/10 bg-gray-800/30 p-6">
          <h2 className="mb-3 text-lg font-semibold text-white">项目介绍</h2>
          <p className="leading-relaxed">
            「原神5星角色图鉴」是一个非官方的角色展示网站，旨在为原神玩家提供便捷的五星角色立绘浏览与资料查询平台。
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-gray-800/30 p-6">
          <h2 className="mb-3 text-lg font-semibold text-white">功能特色</h2>
          <ul className="list-inside list-disc space-y-2 text-sm">
            <li>收录全部五星角色数据</li>
            <li>支持按元素属性、武器类型、所属地区筛选</li>
            <li>实时搜索支持角色名、拼音、别名</li>
            <li>响应式设计，适配多种设备</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-gray-800/30 p-6">
          <h2 className="mb-3 text-lg font-semibold text-white">技术栈</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 14",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Zustand",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-gray-700/50 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-gray-800/30 p-6">
          <h2 className="mb-3 text-lg font-semibold text-white">版权声明</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            本站所展示的角色立绘、角色信息等素材版权归米哈游(miHoYo/HoYoverse)所有。本站仅用于学习交流目的，不作任何商业用途。
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-gray-800/30 p-6">
          <h2 className="mb-3 text-lg font-semibold text-white">数据来源</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            角色数据与图片素材来源于原神官方渠道及社区资源，如有侵权请联系删除。
          </p>
        </section>
      </div>
    </div>
  );
}
