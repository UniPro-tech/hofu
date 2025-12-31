import Image from "next/image";

/** ロゴ（白 / 黒 自動切替） */
function Logo() {
  return (
    <div className="relative w-24 h-8">
      {/* Light mode */}
      <Image
        src="/uniproject_black.png"
        alt="Uniproject"
        fill
        className="object-contain block dark:hidden"
        priority
      />

      {/* Dark mode */}
      <Image
        src="/Uniproject_white.png"
        alt="Uniproject"
        fill
        className="object-contain hidden dark:block"
        priority
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow">
        <div className="text-2xl font-mono">
          抱負サイト
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Powered by</span>
          <Logo />
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow px-6 py-10">
        {/* Hero */}
        <section className="text-center space-y-4 mb-10">
          <h1 className="text-2xl font-bold">
            新年あけましておめでとうございます！！
          </h1>
          <p>
            今年の抱負をみんなで共有しましょう！
          </p>
          <button
            type="button"
            className="px-6 py-2 rounded bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
          >
            投稿する
          </button>
        </section>

        {/* List : 横3・縦無限 */}
        <section
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
        >
          <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800">
            <div className="mb-2">
              <div className="font-bold">今年の抱負は、</div>
              <div className="text-2xl font-bold">毎日コードを書く！</div>
            </div>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>👤 Takoyaki</span>
              <time>2026年1月1日</time>
            </div>
          </article>

          <article className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800">
            <div className="mb-2">
              <div className=" font-bold">今年の抱負は、</div>
              <div className="text-2xl font-bold">新しい技術に挑戦する</div>  
            </div>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>👤 Uniproject</span>
              <time>2026年1月2日</time>
            </div>
          </article>

          {/* ここから先、article を増やすだけで自動で縦に増える */}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-400">
        Copyright 2026 Uniproject
      </footer>
    </div>
  );
}
