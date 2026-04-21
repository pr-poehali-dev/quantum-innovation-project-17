export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-8 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Мастер</p>
            <p className="text-white text-lg font-light">Софья</p>
            <p className="text-white/50 text-sm mt-1">Лечебный массаж</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Адрес</p>
            <p className="text-white font-light">г. Симферополь</p>
            <p className="text-white/70 font-light text-sm mt-1">ул. Карла Маркса, 110</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Запись</p>
            <a
              href="tel:+79250151591"
              className="text-white text-lg font-light hover:text-white/70 transition-colors"
            >
              +7 925 015-15-91
            </a>
            <p className="text-white/40 text-xs mt-2">Звонки и WhatsApp</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© 2025 Софья — лечебный массаж</p>
          <a
            href="tel:+79250151591"
            className="inline-flex items-center justify-center border border-white/20 px-8 py-3 text-xs tracking-widest text-white/60 uppercase transition-all hover:border-white hover:text-white"
          >
            Записаться
          </a>
        </div>
      </div>
    </footer>
  );
}
