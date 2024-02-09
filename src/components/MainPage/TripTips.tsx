import { TripTipsText } from "../../utils/TripTipsObj"
import { TripTipCard } from "./TripTipCard"

export const TripTips = () => {
  return (
    <section className="bg-neutral-100 p-4">
      <h2 className="text-3xl font-bold text-center">Dicas de Viagem</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4">
        {TripTipsText.map((tripTip) => (
          <TripTipCard tripTip={tripTip} />
        ))}
      </div>
    </section>
    
  )
}
