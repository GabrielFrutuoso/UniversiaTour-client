type tripTip = {
    title: string
    text: string
}

export const TripTipCard = ({ tripTip }: { tripTip: tripTip }) => {
  return (
    <div className="p-5">
      <h5 className="text-xl font-bold mb-2">{tripTip.title}</h5>
      <p className="text-neutral-600">
        {tripTip.text}
      </p>
    </div>
  )
}
