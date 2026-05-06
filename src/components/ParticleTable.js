export default function ParticleTable({ particles }) {
  if (!particles || particles.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl mb-3 font-semibold text-[#5e8a86]">
        Particle Measurements
      </h2>

      <div className="relative overflow-x-auto bg-gray-50 shadow-sm rounded-xl border border-gray-200">
        <table className="w-full text-sm text-left text-gray-700">

          {/* HEADER */}
          <thead className="text-sm bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 font-medium">ID</th>
              <th className="px-6 py-3 font-medium">Perimeter</th>
              <th className="px-6 py-3 font-medium">Area</th>
              <th className="px-6 py-3 font-medium">Convex Area</th>
              <th className="px-6 py-3 font-medium">Coverage</th>
              <th className="px-6 py-3 font-medium">Feret Max</th>
              <th className="px-6 py-3 font-medium">Feret Min</th>
              <th className="px-6 py-3 font-medium">Feret AR</th>
              <th className="px-6 py-3 font-medium">Outer D</th>
              <th className="px-6 py-3 font-medium">Circularity</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {particles.map((p) => (
              <tr
                key={p.id}
                className="bg-white border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-3 font-medium text-gray-900">
                  {p.id === "TOTAL" ? "Total Coverage" : p.id}
                </td>
                <td className="px-6 py-3">
                  {p.id === "TOTAL" ? "-" : p.perimeter?.toFixed(2)}
                </td>
                <td className="px-6 py-3">
                  {p.id === "TOTAL" ? "-" : p.area?.toFixed(2)}
                </td>
                <td className="px-6 py-3">
                  {p.id === "TOTAL" ? "-" : p.convex_area?.toFixed(2)}
                </td>
                <td className="px-6 py-3">{p.coverage !== undefined ? p.coverage.toFixed(4) : "-"}</td>
                <td className="px-6 py-3">
                  {p.id === "TOTAL" ? "-" : p.feret_max?.toFixed(2)}
                </td>
                <td className="px-6 py-3">
                  {p.id === "TOTAL" ? "-" : p.feret_min?.toFixed(2)}
                </td>
                <td className="px-6 py-3">
                  {p.id === "TOTAL" ? "-" : p.feret_ar?.toFixed(2)}
                </td>
                <td className="px-6 py-3">
                  {p.id === "TOTAL" ? "-" : p.outer_d?.toFixed(2)}
                </td>
                <td className="px-6 py-3">
                  {p.id === "TOTAL" ? "-" : p.circularity?.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
