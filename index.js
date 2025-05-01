import { useState } from 'react';

export default function Home() {
  const [checklist, setChecklist] = useState(Array(10).fill(0));
  const [notas, setNotas] = useState("");
  const perguntas = [
    "Dormi ao menos 7h na última noite?",
    "Estou a menos de 5 dias da menstruação?",
    "Tive 1h ou mais de lazer leve hoje?",
    "Tive impulsos (comprar, planejar, postar muito)?",
    "Tive dificuldade em manter foco?",
    "Estou falando mais rápido ou com agitação mental?",
    "Me senti irritada, eufórica ou muito sensível?",
    "Comi 3 refeições reais hoje?",
    "Estou revisitando conversas ou me explicando demais?",
    "Tive tempo em silêncio ou sozinha hoje?"
  ];
  const atualizarResposta = (index, valor) => {
    const novo = [...checklist];
    novo[index] = parseInt(valor);
    setChecklist(novo);
  };
  const total = checklist.reduce((a,b) => a+b, 0);
  const zona = total <= 7 ? "Verde" : total <= 13 ? "Amarela" : "Vermelha";

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Check-in Diário</h1>
      {perguntas.map((p, i) => (
        <div key={i}>
          <p>{p}</p>
          {[0,1,2].map(v => (
            <button key={v} onClick={() => atualizarResposta(i,v)} style={{ margin: 4 }}>
              {v}
            </button>
          ))}
        </div>
      ))}
      <p>Total: {total} – Zona {zona}</p>
      <textarea placeholder="Notas do dia..." rows={4} cols={40} value={notas} onChange={(e) => setNotas(e.target.value)} />
    </div>
  );
}
