const services = [
  { name: 'Массаж спины', duration: '45 мин', price: '1 300 ₽' },
  { name: 'Массаж спины', duration: '60 мин', price: '1 500 ₽' },
  { name: 'Массаж спины и ног', duration: '60 мин', price: '1 800 ₽' },
  { name: 'Общий массаж', duration: '60 мин', price: '2 300 ₽' },
  { name: 'Общий массаж', duration: '90 мин', price: '3 000 ₽' },
  { name: 'Экспресс-антистресс', duration: '45 мин', price: '1 500 ₽' },
];

export default function ServicesSection() {
  return (
    <section className="bg-black py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Услуги</p>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-16">Прайс-лист</h2>
        <div className="divide-y divide-white/10">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-6 group"
            >
              <div className="flex items-center gap-6">
                <span className="text-white/20 text-sm w-6">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="text-white text-lg font-light">{service.name}</p>
                  <p className="text-white/40 text-sm mt-1">{service.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-white text-xl font-light">{service.price}</span>
                <a
                  href="tel:+79250151591"
                  className="hidden sm:inline-flex items-center justify-center border border-white/20 px-6 py-2 text-xs tracking-widest text-white/60 uppercase transition-all hover:border-white hover:text-white"
                >
                  Записаться
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="tel:+79250151591"
            className="inline-flex items-center justify-center border border-white px-12 py-4 text-sm tracking-widest text-white uppercase transition-all hover:bg-white hover:text-black"
          >
            Позвонить и записаться
          </a>
        </div>
      </div>
    </section>
  );
}
