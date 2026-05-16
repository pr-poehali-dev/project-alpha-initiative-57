import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Подбор автомобиля",
    description: "Поможем выбрать идеальный автомобиль из Китая под ваш бюджет и задачи: от бюджетных до премиум-класса.",
    icon: "car",
    badge: "Подбор",
  },
  {
    title: "Честная цена",
    description: "Работаем напрямую с поставщиками — без лишних посредников. Вы получаете максимально выгодную цену.",
    icon: "money",
    badge: "Выгода",
  },
  {
    title: "Доставка под ключ",
    description: "Берём на себя всё: логистику, таможню, сертификацию и доставку прямо до вашего города.",
    icon: "globe",
    badge: "Под ключ",
  },
  {
    title: "Быстрая доставка",
    description: "Оптимальные маршруты и проверенная логистика — ваш автомобиль прибудет в срок без задержек.",
    icon: "zap",
    badge: "Быстро",
  },
  {
    title: "Таможня и документы",
    description: "Полностью берём на себя оформление таможенной декларации, СБКТС, ПТС и постановку на учёт.",
    icon: "doc",
    badge: "Документы",
  },
  {
    title: "Всегда на связи",
    description: "Персональный менеджер отвечает на ваши вопросы 24/7 и держит в курсе каждого этапа сделки.",
    icon: "phone",
    badge: "Поддержка",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Полный цикл от выбора до получения ключей — без хлопот и переплат
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "car" && "🚗"}
                    {feature.icon === "money" && "💰"}
                    {feature.icon === "globe" && "🌏"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "doc" && "📋"}
                    {feature.icon === "phone" && "📞"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
