import ImageCard from "./ImageCard";
import { Image, BarChart3, Circle, Shapes } from "lucide-react";
import { BASE_URL } from "../config";
export default function ImageViewer({ result }) {
  if (!result) return null;

  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

  {/* BIG MAIN RESULT */}
  <div className="md:col-span-2">
    <div className="bg-white rounded-xl shadow-md p-3">
      <ImageCard 
  title="Annotated Fibers" 
  src={result.fiber_image} 
  icon={<Image />} 
/>
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="flex flex-col gap-6">

    <div className="bg-white rounded-xl shadow-md p-3">
      <ImageCard 
  title="Particle Polygon" 
  src={result.polygon} 
  icon={<Shapes />} 
/>
    </div>

    <div className="bg-white rounded-xl shadow-md p-3">
     <ImageCard 
  title="Particle Circles" 
  src={result.circles} 
  icon={<Circle />} 
/>
    </div>

  </div>

  {/* FULL WIDTH HISTOGRAMS */}
<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

  <div className="bg-white rounded-xl shadow-md p-3">
    <ImageCard 
      title="Fiber Histogram" 
      src={result.fiber_hist} 
      icon={<BarChart3 />} 
    />
  </div>

  <div className="bg-white rounded-xl shadow-md p-3">
    <ImageCard 
      title="Inner Histogram" 
      src={result.inner_hist} 
      icon={<BarChart3 />} 
    />
  </div>

  <div className="bg-white rounded-xl shadow-md p-3">
    <ImageCard 
      title="Outer Histogram" 
      src={result.outer_hist} 
      icon={<BarChart3 />} 
    />
  </div>

  {/* 🔥 NEW */}
  <div className="bg-white rounded-xl shadow-md p-3">
    <ImageCard 
      title="Fiber Width Distribution" 
      src={result.fiber_width_dist} 
      icon={<BarChart3 />} 
    />
  </div>

  {/* 🔥 NEW */}
  <div className="bg-white rounded-xl shadow-md p-3">
    <ImageCard 
      title="Fiber Length Distribution" 
      src={result.fiber_length_dist} 
      icon={<BarChart3 />} 
    />
  </div>

</div>
</div>
  );
}