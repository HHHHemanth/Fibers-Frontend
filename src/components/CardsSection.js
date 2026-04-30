"use client";

import {
  CardContainer,
  CardBody,
  CardItem,
} from "./3d-card";

const cards = [
  {
    title: "Convexity Analysis",
    desc: "Polygon-based contour approximation for convexity, solidity, and particle boundary characterization",
    img: "/particlesConvexity.png",
  },
  {
    title: "Fiber Path Reconstruction",
    desc: "Graph-based fiber tracing with interpolated centerline path and real-time length estimation",
    img: "/fiberPath.png",
  },
  {
    title: "Outer Diameter Estimation",
    desc: "Automated outer diameter extraction using contour fitting and particle morphology analysis.",
    img: "/particlesOuter.png",
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

            <CardItem translateZ="100" className="w-full mt-4 mb-10">
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