export default function Objectives() {
  return (
    <div className="w-full max-w-5xl mb-24">
      <h2 className="text-3xl md:text-4xl font-orbitron font-black text-brand-dark mb-10 text-center uppercase tracking-normal">
        OBJETIVOS DE <span className="text-brand-green font-extrabold">AUDITORÍA</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-brand-green/10 shadow-sm hover:shadow-md transition-shadow">
          <span className="font-vt323 text-2xl text-brand-red block mb-2">
            01. COMBATE FRENÉTICO
          </span>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sobrevive a un combate Twin-Stick táctico e intenso en vista isométrica donde cada
            impacto consume bloques lógicos de memoria y cada error te cuesta vida real no
            regenerable.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-brand-green/10 shadow-sm hover:shadow-md transition-shadow">
          <span className="font-vt323 text-2xl text-brand-green block mb-2">
            02. APRENDE DE LA CORRUPCIÓN
          </span>
          <p className="text-gray-600 text-sm leading-relaxed">
            Domina el Sistema de Glitches. Asume fallos cromáticos y distorsiones visuales severas
            en tu pantalla a cambio de expandir exponencialmente tu arsenal táctico de fuego.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-brand-green/10 shadow-sm hover:shadow-md transition-shadow">
          <span className="font-vt323 text-2xl text-brand-green block mb-2">
            03. ESTÉTICA CRT TECH-HORROR
          </span>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sumérgete en una atmósfera oscura de hardware de servidores noventeros, monitores
            parpadeantes de fósforo verde y ruido blanco digital de Vanguard Mainframes.
          </p>
        </div>
      </div>
    </div>
  );
}
