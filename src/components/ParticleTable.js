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
              <th className="px-6 py-3 font-medium">Length</th>
              <th className="px-6 py-3 font-medium">MinW</th>
              <th className="px-6 py-3 font-medium">MaxW</th>
              <th className="px-6 py-3 font-medium">AR Min</th>
              <th className="px-6 py-3 font-medium">AR Max</th>
              <th className="px-6 py-3 font-medium">Feret Max</th>
              <th className="px-6 py-3 font-medium">Feret Min</th>
              <th className="px-6 py-3 font-medium">Inner D</th>
              <th className="px-6 py-3 font-medium">Outer D</th>
              <th className="px-6 py-3 font-medium">Sphericity</th>
              <th className="px-6 py-3 font-medium">Sides</th>
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
                  {p.id}
                </td>

                <td className="px-6 py-3">{p.length?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.min_width?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.max_width?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.ar_min?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.ar_max?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.feret_max?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.feret_min?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.inner_d?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.outer_d?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.sphericity?.toFixed(2)}</td>
                <td className="px-6 py-3">{p.sides}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
