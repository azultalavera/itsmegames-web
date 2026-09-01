export default function Synergies() {
  return (
    <div className="w-full max-w-4xl mb-20 p-8 rounded-2xl bg-slate-50 border border-brand-green/10">
      <h2 className="text-2xl md:text-3xl font-orbitron font-black text-brand-dark mb-8 text-center uppercase tracking-normal">
        SINERGIAS DE <span className="text-brand-green">CÓDIGO (BUILDS)</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <div className="p-4 bg-white rounded-lg border border-brand-green/10">
          <strong className="text-brand-green font-orbitron block mb-2">VAMPIRO ÍGNEO</strong>
          <p className="text-xs text-gray-500 leading-relaxed">
            Combina el <em>Protocolo Vampiro</em> con el rastro de fuego del Dash. Al quemar y herir
            a tus enemigos con fuego cian, robas vida de manera pasiva mientras sigues corriendo.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg border border-brand-green/10">
          <strong className="text-brand-green font-orbitron block mb-2">ESCOPETA FRACTAL</strong>
          <p className="text-xs text-gray-500 leading-relaxed">
            Combina la <em>Escopeta Rompe-MAC</em> con el glitch de <em>Fragmentación de Disco</em>.
            Aumenta drásticamente la dispersión de perdigones cubriendo toda la pantalla isométrica
            de proyectiles.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg border border-brand-green/10">
          <strong className="text-brand-green font-orbitron block mb-2">
            FRANCOTIRADOR FANTASMA
          </strong>
          <p className="text-xs text-gray-500 leading-relaxed">
            Combina el <em>Rifle Traceroute</em> de largo alcance con el señuelo holográfico del
            Dash. Deja un clon señuelo atrayendo disparos mientras cargas tu disparo perfecto a
            distancia.
          </p>
        </div>
      </div>
    </div>
  );
}
