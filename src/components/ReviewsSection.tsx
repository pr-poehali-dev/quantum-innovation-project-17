const reviews = [
  {
    name: 'Марина К.',
    text: 'Ходила к Софье с болями в пояснице — после 3 сеансов боль прошла. Руки золотые, чувствуется профессионализм!',
    service: 'Массаж спины',
  },
  {
    name: 'Алексей Д.',
    text: 'Делал общий массаж 90 минут. Ушёл как на крыльях — всё тело расслаблено, голова свежая. Рекомендую всем, кто работает за компьютером.',
    service: 'Общий массаж',
  },
  {
    name: 'Ольга С.',
    text: 'Записалась на экспресс-антистресс перед важной встречей. За 45 минут полностью перезагрузилась. Теперь хожу регулярно!',
    service: 'Экспресс-антистресс',
  },
  {
    name: 'Дмитрий В.',
    text: 'Приятная атмосфера, внимательный подход. Софья всегда уточняет, где болит и что беспокоит. Результат чувствуется с первого раза.',
    service: 'Массаж спины и ног',
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-neutral-950 py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Отзывы</p>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-16">Что говорят клиенты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {reviews.map((review, i) => (
            <div key={i} className="bg-neutral-950 p-8 flex flex-col gap-4">
              <p className="text-white/70 font-light leading-relaxed text-base">«{review.text}»</p>
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-white font-light">{review.name}</span>
                <span className="text-white/30 text-xs uppercase tracking-widest">{review.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
