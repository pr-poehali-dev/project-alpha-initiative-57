import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Купил BYD Han, Москва",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Брал BYD Han EV. Всё оформили за меня — таможня, ПТС, постановка на учёт. Приехал просто забрать машину. Сэкономил около 800 тысяч по сравнению с дилером!",
  },
  {
    name: "Марина Соколова",
    role: "Купила Chery Tiggo 8 Pro, Екатеринбург",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Сначала боялась покупать авто из Китая. Но менеджер всё объяснил, присылал фото на каждом этапе. Машина пришла в идеальном состоянии, всё как договаривались.",
  },
  {
    name: "Дмитрий Захаров",
    role: "Купил Li Auto L9, Краснодар",
    avatar: "/professional-woman-scientist.png",
    content:
      "Уже третий раз заказываю здесь. Цены реально ниже рынка, никаких сюрпризов по итогу. Всегда на связи — это очень важно когда ждёшь машину.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют клиенты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Сотни довольных владельцев китайских автомобилей по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
