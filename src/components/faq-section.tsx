import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит поставка автомобиля из Китая?",
      answer:
        "Стоимость зависит от марки и модели автомобиля. В среднем экономия по сравнению с покупкой у российского дилера составляет от 500 000 до 1 500 000 рублей. Напишите нам — рассчитаем точную стоимость под ваш запрос бесплатно.",
    },
    {
      question: "Сколько времени занимает доставка?",
      answer:
        "В среднем от 30 до 60 дней с момента оплаты до получения автомобиля в вашем городе. Сроки зависят от загруженности таможни и маршрута. Мы держим вас в курсе на каждом этапе.",
    },
    {
      question: "Какие документы я получу?",
      answer:
        "Полный пакет: ПТС, СБКТС (одобрение типа транспортного средства), таможенная декларация. Авто ставится на учёт в ГИБДД и полностью готово к эксплуатации на территории России.",
    },
    {
      question: "Это легально?",
      answer:
        "Да, абсолютно легально. Все автомобили проходят официальное таможенное оформление, сертификацию СБКТС и регистрацию в ГИБДД. Вы получаете юридически чистый автомобиль с полным пакетом документов.",
    },
    {
      question: "Можно ли заказать конкретную модель и комплектацию?",
      answer:
        "Да, мы работаем под заказ. Вы указываете модель, цвет, комплектацию и бюджет — мы находим нужный вариант. Также помогаем с выбором, если вы ещё не определились.",
    },
    {
      question: "Что если с машиной что-то случится при доставке?",
      answer:
        "Все автомобили застрахованы на время транспортировки. В случае любых повреждений при доставке — полностью компенсируем ущерб или заменяем автомобиль.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на самые популярные вопросы о поставке автомобилей из Китая.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
