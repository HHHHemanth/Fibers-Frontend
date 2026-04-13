"use client";

import {
  CardContainer,
  CardBody,
  CardItem,
} from "./3d-card";

const cards = [
  {
    title: "Polygon Particle Detection",
    desc: "Shape-based particle detection using polygon contour approximation",
    img: "/particlesPolygon.png",
  },
  {
    title: "Fiber Path Mapping",
    desc: "Traced fiber paths with precise length measurement overlay",
    img: "/fiberPath.png",
  },
  {
    title: "Circular Particle Analysis",
    desc: "AInner and outer diameter estimation using circular fitting",
    img: "/particlesCircles.png",
  },
];

export default function CardsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-2 lg:gap-8 max-w-6xl mx-auto">
      
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var ">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-black/10 border border-black/10 w-90 h-96 rounded-xl p-6">
            
<CardItem
  translateZ="50"
  className="text-xl font-bold text-black text-center w-full"
>
  {card.title}
</CardItem>

<CardItem
  as="p"
  translateZ="60"
  className="text-neutral-600 text-sm mt-2 text-center w-full"
>
  {card.desc}
</CardItem>

            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={card.img}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

          </CardBody>
        </CardContainer>
      ))}

    </div>
  );
}