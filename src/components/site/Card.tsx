import Link from "next/link";
import { Check } from "lucide-react";

type Card = {
  title: string;
  description: string;
  price: string;
  duration: string;
  highlight: string;
  features: string[];
  priceId: string;
};

type Props = {
  card: Card;
  index: number;
};

function Card({ card, index }: Props) {
  return (
    <div
      className={`w-[300px] flex flex-col justify-between p-3 px-6 rounded-md ${
        index === 1 ? "border border-primary" : "text-muted-foreground"
      }`}
    >
      <h2 className="text-xl font-semibold">{card.title}</h2>
      <p className="text-xs text-muted-foreground">{card.description}</p>

      <p className="my-4 text-3xl font-semibold">
        {card.price}
        <span className="text-sm text-muted-foreground">/m</span>
      </p>

      {card.features.map((feature) => (
        <div key={feature} className="flex items-center gap-2">
          <Check />
          <span className="text-sm">{feature}</span>
        </div>
      ))}

      <Link
        href={`/agency?plan=${card.priceId}`}
        className={`my-2 w-full text-center py-2 rounded-md hover:opacity-80 transition ${
          index === 1 ? "bg-primary" : "bg-muted-foreground text-white"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

export default Card;
