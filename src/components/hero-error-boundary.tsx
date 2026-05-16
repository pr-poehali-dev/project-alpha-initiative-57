import { Component, ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class HeroErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
          <div className="relative z-10 text-center px-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase font-orbitron mb-4">
              Авто из <span className="text-red-500">Китая</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold mt-4 max-w-2xl mx-auto">
              Поставка автомобилей под ключ. Выгодно. Надёжно. Быстро.
            </p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default HeroErrorBoundary
