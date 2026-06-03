import { useState } from "react";

const C = {
  navy: "#0d1f4e",
  blue: "#1a3a6b",
  accent: "#7ec8e3",
  gold: "#d4a017",
  green: "#0e6e55",
  bg: "#f4f2ed",
  white: "#ffffff",
  text: "#1a1a2e",
  muted: "#6b7280",
  border: "#e2ddd5",
};

function Stat({ value, label, sub, up, down, big }) {
  return (
    <div style={{
      background: C.white, borderRadius: "12px",
      border: `1px solid ${C.border}`, padding: big ? "20px 22px" : "16px 18px",
      display: "flex", flexDirection: "column", gap: "4px",
    }}>
      <p style={{ fontSize: big ? "32px" : "26px", fontWeight: "800", color: C.navy, margin: 0, lineHeight: 1 }}>{value}</p>
      <p style={{ fontSize: "12px", color: C.muted, margin: 0 }}>{label}</p>
      {(up || down) && (
        <p style={{ fontSize: "12px", color: up ? "#0e6e55" : "#c0392b", margin: 0, fontWeight: "600" }}>
          {up ? "▲" : "▼"} {up || down}
        </p>
      )}
      {sub && <p style={{ fontSize: "11px", color: C.muted, margin: 0, fontStyle: "italic" }}>{sub}</p>}
    </div>
  );
}

function PlatformHeader({ icon, name, color, bg }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "10px",
      padding: "14px 0 10px", borderBottom: `2px solid ${color}`, marginBottom: "16px",
    }}>
      <span style={{
        background: bg, color, width: "32px", height: "32px",
        borderRadius: "8px", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: "16px", fontWeight: "800",
        flexShrink: 0,
      }}>{icon}</span>
      <span style={{ fontWeight: "800", fontSize: "16px", color: C.navy, letterSpacing: "-0.3px" }}>{name}</span>
    </div>
  );
}

function BarRow({ label, pct, value, color }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
        <span style={{ fontSize: "13px", color: C.text }}>{label}</span>
        <span style={{ fontSize: "13px", fontWeight: "600", color: C.navy }}>{value || `${pct}%`}</span>
      </div>
      <div style={{ background: "#f0ece4", borderRadius: "4px", height: "6px" }}>
        <div style={{ width: `${pct}%`, background: color, height: "6px", borderRadius: "4px", transition: "width 0.8s ease" }} />
      </div>
    </div>
  );
}

function Tag({ children, color = C.navy, bg }) {
  return (
    <span style={{
      background: bg || `${color}18`, color, fontSize: "11px",
      fontWeight: "700", padding: "3px 10px", borderRadius: "20px",
      letterSpacing: "0.5px", textTransform: "uppercase",
    }}>{children}</span>
  );
}

function Insight({ icon, text, type = "positive" }) {
  const colors = {
    positive: { bg: "#e6f4f0", border: "#0e6e55", icon: "#0e6e55" },
    warning: { bg: "#fff8e6", border: "#d4a017", icon: "#d4a017" },
    info: { bg: "#e8eef8", border: "#1a3a6b", icon: "#1a3a6b" },
  };
  const col = colors[type];
  return (
    <div style={{
      background: col.bg, border: `1px solid ${col.border}40`,
      borderLeft: `3px solid ${col.border}`,
      borderRadius: "8px", padding: "10px 14px",
      display: "flex", gap: "10px", alignItems: "flex-start",
      marginBottom: "8px",
    }}>
      <span style={{ fontSize: "16px", flexShrink: 0, color: col.icon }}>{icon}</span>
      <p style={{ margin: 0, fontSize: "13px", color: C.text, lineHeight: 1.5 }}>{text}</p>
    </div>
  );
}

function DataBadge({ children }) {
  return (
    <span style={{
      background: "#e6f4f0", color: "#0e6e55", fontSize: "10px",
      fontWeight: "700", padding: "2px 7px", borderRadius: "10px",
      letterSpacing: "0.4px", marginLeft: "6px",
    }}>● DATO REAL</span>
  );
}

const sections = ["Resumen", "YouTube", "Spotify", "LinkedIn", "Instagram", "TikTok", "Audiencia", "Benchmark", "Contexto"];

export default function InformeMetricas() {
  const [active, setActive] = useState("Resumen");

  const renderSection = () => {
    switch (active) {

      case "Resumen": return (
        <div>
          {/* Hero KPIs */}
          <div style={{
            background: `linear-gradient(135deg, ${C.navy}, ${C.blue})`,
            borderRadius: "16px", padding: "28px 24px", marginBottom: "24px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
              <div>
                <p style={{ color: C.accent, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 4px" }}>
                  +QuePíldoras · Temporada 2
                </p>
                <h2 style={{ color: "white", margin: 0, fontSize: "22px", fontWeight: "800" }}>
                  Informe de métricas actualizado
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", margin: "4px 0 0" }}>
                  Datos reales · Junio 2026 · 3 episodios publicados
                </p>
              </div>
              <Tag color={C.accent} bg="rgba(126,200,227,0.2)">100% orgánico · 0€ inversión</Tag>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
              {[
                { v: "9.665", l: "Views YouTube", s: "28 días · dato real", real: true },
                { v: "233", l: "Escuchas Spotify", s: "30 días · dato real", real: true },
                { v: "309", l: "Seguidores LinkedIn", s: "+135 nuevos en 30 días · dato real", real: true },
                { v: "6.6K", l: "Views TikTok", s: "+111% · 28 días · dato real", real: true },
                { v: "81", l: "Seguidores Instagram", s: "@masquepildoraspodcast · dato real", real: true },
                { v: "6", l: "Seguidores TikTok", s: "@masquepildoraspodcast · dato real", real: true },
              ].map(k => (
                <div key={k.l} style={{
                  background: k.real ? "rgba(126,200,227,0.15)" : "rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  border: k.real ? "1px solid rgba(126,200,227,0.4)" : "1px solid rgba(255,255,255,0.1)",
                }}>
                  <p style={{ fontSize: "24px", fontWeight: "800", color: "white", margin: 0, lineHeight: 1 }}>{k.v}</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", margin: "4px 0 2px" }}>{k.l}</p>
                  <p style={{ fontSize: "11px", color: k.real ? C.accent : "rgba(255,255,255,0.4)", margin: 0 }}>{k.s}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Episodios publicados */}
          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "20px", marginBottom: "20px" }}>
            <p style={{ fontSize: "13px", fontWeight: "700", color: C.navy, margin: "0 0 14px", letterSpacing: "0.3px" }}>
              EPISODIOS PUBLICADOS
            </p>
            {[
              {
                num: "EP00", title: "¿Qué hay detrás de la industria farmacéutica?",
                date: "5 may 2026", dur: "7:26",
                yt: "227 views · 30,8% ret.", sp: "104 escuchas", li: "2.775 imp. · 9,5% eng.",
              },
              {
                num: "EP01", title: "¿Quieres ser MSL? Estas son las habilidades que necesitas",
                date: "20 may 2026", dur: "25:36",
                yt: "249 views · 17,5% ret.", sp: "64 escuchas", li: "441 imp. · 10,2% eng.",
              },
              {
                num: "EP02", title: "De salvar vidas en minutos a Medical Affairs (Fernando Zaragozá)",
                date: "3 jun 2026", dur: "30:07",
                yt: "1.1K views en 9h (teaser Short)", sp: "—", li: "—",
                isNew: true,
              },
            ].map(ep => (
              <div key={ep.num} style={{
                borderRadius: "10px", padding: "14px 16px", marginBottom: "8px",
                background: ep.isNew ? "#e6f4f0" : C.white,
                border: `1px solid ${ep.isNew ? "#0e6e55" : C.accent}40`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                      <Tag color={ep.isNew ? "#0e6e55" : C.navy}>{ep.num}</Tag>
                      {ep.isNew && <Tag color="#0e6e55">🆕 PUBLICADO HOY</Tag>}
                      <span style={{ fontSize: "12px", color: C.muted }}>{ep.date} · {ep.dur}</span>
                    </div>
                    <p style={{ margin: 0, fontWeight: "600", fontSize: "14px", color: C.text }}>{ep.title}</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", marginTop: "10px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "12px", color: "#FF0000", fontWeight: "600" }}>▶ {ep.yt}</span>
                  <span style={{ fontSize: "12px", color: "#1DB954", fontWeight: "600" }}>🎵 {ep.sp}</span>
                  <span style={{ fontSize: "12px", color: "#0a66c2", fontWeight: "600" }}>in {ep.li}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Insights clave */}
          <div>
            <p style={{ fontSize: "13px", fontWeight: "700", color: C.navy, margin: "0 0 12px" }}>INSIGHTS CLAVE</p>
            <Insight icon="🚀" text="EP02 publicado hoy — el teaser Short ya lleva 1.100 vistas en las primeras 9,5 horas. En Spotify ya suma 30 escuchas en pocas horas de lanzamiento." />
            <Insight icon="📊" text="9.665 visualizaciones en YouTube · 233 escuchas en Spotify · 6.6K vistas en TikTok. Presencia real y creciente en todas las plataformas." />
            <Insight icon="🔵" text="LinkedIn: 309 seguidores (+135 en 30 días) y 2.998 impresiones en los últimos 7 días. La comunidad profesional está creciendo rápido." type="info" />
            <Insight icon="⚫" text="TikTok: 6.6K visualizaciones (+111%) con solo 6 seguidores. Ratio views/seguidores extraordinario — el algoritmo está distribuyendo el contenido ampliamente." type="info" />
            <Insight icon="⚠️" text="Instagram Insights detallado no disponible esta semana (acceso solo desde app móvil). Seguidores confirmados: 81." type="warning" />
          </div>
        </div>
      );

      case "YouTube": return (
        <div>
          <PlatformHeader icon="▶" name="YouTube" color="#FF0000" bg="#fff0f0" />
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <DataBadge>DATOS REALES — 6 may al 2 jun 2026</DataBadge>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            <Stat value="9.665" label="Visualizaciones (28 días)" up="+615% vs periodo anterior" big />
            <Stat value="40,8h" label="Tiempo de visualización (28 días)" up="+972% vs periodo anterior" />
            <Stat value="+35" label="Nuevos suscriptores (28 días)" up=">999% de crecimiento" />
            <Stat value="1.100+" label="Vistas EP02 teaser (primeras 9,5h)" sub="Publicado hoy 3 jun 2026" />
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Top Shorts (28 días)</p>
            <div style={{ background: "#fff0f0", borderRadius: "10px", padding: "14px" }}>
              <BarRow label="Del laboratorio a ensayos clínicos" pct={100} value="1.546 vistas · 79,8%" color="#FF0000" />
              <BarRow label="Si quieres entrar en farma..." pct={93} value="1.433 · 33,6%" color="#FF0000" />
              <BarRow label="Los visitadores médicos quitan tiempo..." pct={85} value="1.319 · 54,7%" color="#FF0000" />
              <BarRow label="De soñar con curar el cáncer..." pct={81} value="1.259 · 69,1%" color="#FF0000" />
              <BarRow label="La realidad detrás de Medical Affairs 🫣" pct={73} value="1.135 · 35,0%" color="#FF0000" />
              <BarRow label="3 habilidades: EC a Medical Affairs" pct={57} value="888 · 48,3%" color="#FF0000" />
              <BarRow label="¿Por qué es tan importante el paciente?" pct={53} value="819 · 36,5%" color="#FF0000" />
              <BarRow label="¿Cómo se vive el momento antes de grabar?" pct={23} value="352 · 50,1%" color="#FF0000" />
              <p style={{ fontSize: "11px", color: C.muted, margin: "10px 0 0", fontStyle: "italic" }}>Formato: vistas · % retención media</p>
            </div>
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Vídeos largos (28 días)</p>
            <div style={{ background: "#f0f4ff", borderRadius: "10px", padding: "14px" }}>
              <BarRow label="EP01 · ¿Quieres ser MSL? (25:36)" pct={100} value="249 vistas · 17,5% ret." color={C.blue} />
              <BarRow label="EP00 · ¿Qué hay detrás? (7:26)" pct={91} value="227 vistas · 30,8% ret." color={C.blue} />
              <BarRow label="EP02 · De salvar vidas... (30:07)" pct={5} value="Publicado hoy — en curso" color="#0e6e55" />
            </div>
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>EP02 en tiempo real (primeras horas)</p>
            <div style={{ background: "#e6f4f0", borderRadius: "10px", padding: "14px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  { v: "1.100+", l: "Vistas teaser Short" },
                  { v: "37,5%", l: "Retención media" },
                  { v: "9,5h", l: "Desde publicación" },
                  { v: "🟢", l: "Tendencia positiva (YT Studio)" },
                ].map(s => (
                  <div key={s.l} style={{ background: C.white, borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                    <p style={{ fontSize: "20px", fontWeight: "800", color: "#0e6e55", margin: 0 }}>{s.v}</p>
                    <p style={{ fontSize: "11px", color: C.muted, margin: "2px 0 0" }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Insight icon="🏆" text="'Del laboratorio a ensayos clínicos' tiene 79,8% de retención en Short — es el mejor del canal y casi el doble del benchmark (38-50%). Este formato y tema hay que replicarlo." />
          <Insight icon="🎬" text="8 Shorts activos con datos reales. Los mejores temáticos (laboratorio, curar el cáncer) superan claramente a los de branding del podcast." type="info" />
          <Insight icon="⚡" text="EP02 lanzado hoy: 1.1K vistas en 9,5h es un ritmo excelente. Si mantiene esta velocidad, superará a EP00 y EP01 en la primera semana." />
          <Insight icon="⚠️" text="EP01 tiene solo 17,5% de retención en vídeo largo. El hook de los primeros 30 segundos necesita más fuerza para retener." type="warning" />
        </div>
      );

      case "Spotify": return (
        <div>
          <PlatformHeader icon="🎵" name="Spotify for Creators" color="#1DB954" bg="#f0fdf4" />
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <DataBadge>DATOS REALES — últimos 30 días · 3 jun 2026</DataBadge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            <Stat value="233" label="Escuchas en Spotify (30 días)" up="+65 vs periodo anterior" big />
            <Stat value="20h" label="Horas de reproducción (30 días)" sub="Crecimiento constante" />
            <Stat value="+38" label="Nuevos seguidores (30 días)" sub="Crecimiento orgánico" />
            <Stat value="196" label="Total reproducciones acumuladas" sub="EP00 + EP01 + EP02" />
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Clasificación de episodios · Reproducciones y descargas</p>
            {[
              { ep: "EP00", title: "¿Qué hay detrás de la industria farmacéutica?", date: "5 may", dur: "7:26", esc: 99 },
              { ep: "EP01", title: "¿Quieres ser MSL? Estas son las habilidades", date: "20 may", dur: "25:36", esc: 67 },
              { ep: "EP02", title: "De salvar vidas en minutos a Medical Affairs", date: "3 jun", dur: "30:07", esc: 30, nuevo: true },
            ].map(e => (
              <div key={e.ep} style={{
                background: e.nuevo ? "#e6f4f0" : "#f0fdf4", borderRadius: "8px", padding: "12px 14px",
                marginBottom: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px",
              }}>
                <div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "3px" }}>
                    <Tag color={e.nuevo ? "#0e6e55" : "#1DB954"}>{e.ep}</Tag>
                    {e.nuevo && <Tag color="#0e6e55">Nuevo</Tag>}
                    <span style={{ fontSize: "11px", color: C.muted }}>{e.date} · {e.dur}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: C.text }}>{e.title}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  {e.esc !== null ? (
                    <>
                      <p style={{ fontSize: "22px", fontWeight: "800", color: "#1DB954", margin: 0 }}>{e.esc}</p>
                      <p style={{ fontSize: "11px", color: C.muted, margin: 0 }}>escuchas</p>
                    </>
                  ) : (
                    <p style={{ fontSize: "13px", color: "#0e6e55", fontWeight: "600", margin: 0 }}>Datos pendientes</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Discovery · Cómo encuentran el podcast (dato mayo)</p>
            <BarRow label="Spotify Search" pct={100} value="676 imp." color="#1DB954" />
            <BarRow label="Spotify Home" pct={48} value="322 imp." color="#1DB954" />
            <BarRow label="Spotify Library" pct={7} value="47 imp." color="#1DB954" />
            <p style={{ fontSize: "12px", color: C.muted, fontStyle: "italic", margin: "8px 0 0" }}>64,7% del discovery viene de búsqueda activa — el SEO del podcast está funcionando</p>
          </div>

          <Insight icon="📈" text="233 escuchas en Spotify en 30 días (+38% vs periodo anterior con 168). EP02 publicado hoy ya suma 30 escuchas en sus primeras horas — arranque muy sólido." />
          <Insight icon="🏆" text="EP00 (99) lidera sobre EP01 (67) a pesar de ser más corto. El formato de introducción/trailer conecta bien con audiencia nueva." type="info" />
          <Insight icon="🌍" text="Discovery data de mayo: 14 países de audiencia, España 73,6%. El SEO del podcast está funcionando con 676 impresiones vía Spotify Search." type="info" />
        </div>
      );

      case "LinkedIn": return (
        <div>
          <PlatformHeader icon="in" name="LinkedIn" color="#0a66c2" bg="#e7f0fb" />
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <DataBadge>DATOS REALES — 3 jun 2026</DataBadge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            <Stat value="309" label="Seguidores totales" up="+135 nuevos en 30 días" big />
            <Stat value="16" label="Nuevos seguidores (7 días)" sub="Últimos 7 días" />
            <Stat value="2.998" label="Impresiones publicación (7 días)" down="-30,4%" />
            <Stat value="75" label="Apariciones en búsquedas (7 días)" up="+19%" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
            <Stat value="208" label="Visualizaciones página (30 días)" down="-46,4%" />
            <Stat value="128" label="Visitantes únicos (30 días)" down="-36,3%" />
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 4px" }}>Top post: Medical Affairs</p>
            <p style={{ fontSize: "12px", color: C.muted, margin: "0 0 14px" }}>«No te vas a creer la realidad detrás de Medical Affairs 🤫»</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
              {[
                { v: "2.775", l: "Impresiones" },
                { v: "2.007", l: "Miembros alcanzados" },
                { v: "265", l: "Interacciones totales" },
                { v: "9,5%", l: "Tasa interacción" },
                { v: "234", l: "Clics" },
                { v: "8,4%", l: "CTR clics" },
              ].map(s => (
                <div key={s.l} style={{ background: "#e7f0fb", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                  <p style={{ fontSize: "20px", fontWeight: "800", color: "#0a66c2", margin: 0 }}>{s.v}</p>
                  <p style={{ fontSize: "11px", color: C.muted, margin: "2px 0 0" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <Insight icon="🏆" text="309 seguidores totales con +135 nuevos en 30 días — crecimiento de +77% respecto al periodo anterior. LinkedIn es la plataforma con más crecimiento de seguidores." />
          <Insight icon="📉" text="Las impresiones de los últimos 7 días bajan (-30,4%) respecto a la semana anterior. Normal en semana sin publicaciones — el lanzamiento de EP02 hoy debería revertirlo." type="warning" />
          <Insight icon="🔍" text="75 apariciones en búsquedas esta semana (+19%). El perfil del podcast está ganando relevancia en búsquedas de profesionales de farma." type="info" />
        </div>
      );

      case "Instagram": return (
        <div>
          <PlatformHeader icon="📷" name="Instagram" color="#E1306C" bg="#fdf0f5" />
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <DataBadge>DATOS REALES — últimos 30 días · 3 jun 2026</DataBadge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            <Stat value="81" label="Seguidores @masquepildoraspodcast" up="Dato real · 3 jun 2026" big />
            <Stat value="1.770" label="Cuentas alcanzadas (30 días)" up="63,1% no seguidores" />
            <Stat value="9.393" label="Visualizaciones (30 días)" sub="Reels + Historias + Publicaciones" />
            <Stat value="438" label="Interacciones (30 días)" sub="72 cuentas con interacción" />
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Visualizaciones por formato</p>
            <BarRow label="Reels" pct={100} value="47,2%" color="#E1306C" />
            <BarRow label="Historias" pct={74} value="34,7%" color="#E1306C" />
            <BarRow label="Publicaciones" pct={38} value="18,1%" color="#E1306C" />
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Interacciones por formato</p>
            <BarRow label="Reels" pct={100} value="38,1%" color="#E1306C" />
            <BarRow label="Historias" pct={93} value="35,6%" color="#E1306C" />
            <BarRow label="Publicaciones" pct={69} value="26,3%" color="#E1306C" />
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Actividad de perfil (30 días)</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
              {[
                { v: "202", l: "Actividad total" },
                { v: "183", l: "Visitas al perfil" },
                { v: "19", l: "Toques enlace externo" },
              ].map(s => (
                <div key={s.l} style={{ background: "#fdf0f5", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                  <p style={{ fontSize: "20px", fontWeight: "800", color: "#E1306C", margin: 0 }}>{s.v}</p>
                  <p style={{ fontSize: "11px", color: C.muted, margin: "2px 0 0" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <Insight icon="🔥" text="63,1% de las cuentas alcanzadas son NO seguidores. Con solo 81 seguidores, el contenido llega a 1.770 cuentas únicas — alcance orgánico excepcional para una cuenta en fase inicial." />
          <Insight icon="🎬" text="Los Reels lideran con el 47,2% de visualizaciones — el formato video corto está funcionando. Las Historias (34,7%) también tienen fuerte tracción." type="info" />
          <Insight icon="🔗" text="19 toques en el enlace externo del perfil en 30 días. Con 183 visitas al perfil, el CTR del enlace es del 10,4% — muy por encima de la media." type="info" />
        </div>
      );

      case "TikTok": return (
        <div>
          <PlatformHeader icon="⚫" name="TikTok" color="#010101" bg="#f5f5f5" />
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <DataBadge>DATOS REALES — últimos 28 días · 3 jun 2026</DataBadge>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            <Stat value="6.6K" label="Visualizaciones de videos (28 días)" up="+111% · +3.5K" big />
            <Stat value="72" label="Me gusta (28 días)" up="+453,8% · +59" />
            <Stat value="36" label="Visualizaciones de perfil (28 días)" up="+227,3% · +25" />
            <Stat value="6" label="Seguidores totales" sub="@masquepildoraspodcast" />
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Publicación más reciente</p>
            <div style={{ background: "#f5f5f5", borderRadius: "10px", padding: "14px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px" }}>
                <Tag color="#010101">3 jun 2026</Tag>
                <Tag color="#0e6e55">Nuevo episodio</Tag>
              </div>
              <p style={{ margin: "0 0 10px", fontWeight: "600", fontSize: "14px", color: C.text }}>
                ¿Dejarías salvar vidas por trabajar en pharma? Hoy estrenamos nuevo episodio en...
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: "700", color: C.navy }}>▶ 766 views</span>
                <span style={{ fontSize: "13px", fontWeight: "700", color: "#E1306C" }}>♥ 5 likes</span>
                <span style={{ fontSize: "13px", color: C.muted }}>0:37</span>
              </div>
            </div>
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Pico de la semana (22 may)</p>
            <div style={{ background: "#f5f5f5", borderRadius: "10px", padding: "12px 14px" }}>
              <p style={{ margin: 0, fontSize: "13px", color: C.text }}>El gráfico muestra un pico de ~2K visualizaciones en un solo día el 22 de mayo — coincide con el contenido de Medical Affairs. La semana de EP02 (3 jun) ya muestra otro pico creciente.</p>
            </div>
          </div>

          <Insight icon="🤯" text="6.600 vistas con solo 6 seguidores. El ratio views/follower es de 1.100x — el algoritmo de TikTok está distribuyendo el contenido masivamente sin necesidad de base de seguidores." />
          <Insight icon="📈" text="+453,8% de me gusta en 28 días — el engagement está creciendo mucho más rápido que las vistas. La audiencia que ve el contenido está respondiendo positivamente." type="info" />
          <Insight icon="⚡" text="TikTok es la plataforma con mayor potencial de crecimiento viral. Con la misma estrategia de Shorts de YouTube adaptada a TikTok, el crecimiento podría ser exponencial." type="info" />
        </div>
      );

      case "Benchmark": return (
        <div>
          <div style={{
            background: `linear-gradient(135deg, ${C.navy}, #2d1b6b)`,
            borderRadius: "14px", padding: "20px 22px", marginBottom: "20px",
          }}>
            <p style={{ color: "#c4b5fd", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px" }}>Comparativa de mercado</p>
            <h3 style={{ color: "white", margin: 0, fontSize: "18px", fontWeight: "700" }}>Benchmarking · Fase de lanzamiento</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", margin: "4px 0 0" }}>Vs. media industria · podcasts farma nicho · Tengo un Plan · jun 2026</p>
          </div>

          {/* Bloque 1: Percentil en el sector */}
          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 4px" }}>¿Dónde estáis vs. la media de podcasts nuevos?</p>
            <p style={{ fontSize: "12px", color: C.muted, margin: "0 0 16px", fontStyle: "italic" }}>Fuente: Loupod / Podtrac industry benchmarks 2025 · primeros 30 días por episodio</p>
            {[
              { label: "Mediana global (50%)", v: "100–300", unit: "escuchas/ep", pct: 20, color: "#d1d5db", highlight: false },
              { label: "Top 25% podcasts", v: "300–1.000", unit: "escuchas/ep", pct: 40, color: "#93c5fd", highlight: false },
              { label: "+Que Píldoras · EP01", v: "99 Spotify + 9.6K YT", unit: "≈ top 20–25%", pct: 60, color: "#0d1f4e", highlight: true },
              { label: "Top 10% podcasts", v: ">3.000", unit: "escuchas/ep", pct: 85, color: "#6366f1", highlight: false },
            ].map(r => (
              <div key={r.label} style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "13px", fontWeight: r.highlight ? "700" : "500", color: r.highlight ? C.navy : C.text }}>{r.label}</span>
                  <span style={{ fontSize: "12px", color: r.highlight ? C.green : C.muted, fontWeight: r.highlight ? "700" : "400" }}>{r.v} <span style={{ opacity: 0.7 }}>{r.unit}</span></span>
                </div>
                <div style={{ background: "#f3f4f6", borderRadius: "6px", height: "8px", overflow: "hidden" }}>
                  <div style={{ width: `${r.pct}%`, background: r.color, height: "100%", borderRadius: "6px", transition: "width 0.4s" }} />
                </div>
              </div>
            ))}
            <div style={{ background: "#e6f4f0", borderRadius: "8px", padding: "10px 14px", marginTop: "8px" }}>
              <p style={{ fontSize: "12px", color: C.green, fontWeight: "700", margin: 0 }}>✅ Con 9.665 vistas en YouTube + 99 en Spotify, el EP01 ya supera la mediana global de podcasts en lanzamiento — en un nicho B2B muy específico.</p>
            </div>
          </div>

          {/* Bloque 2: Comparativa podcasts farma/salud en España */}
          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 4px" }}>Vs. podcasts de nicho farma/salud en España</p>
            <p style={{ fontSize: "12px", color: C.muted, margin: "0 0 16px", fontStyle: "italic" }}>Estimaciones basadas en datos públicos de plataformas · podcasts comparables en fase inicial</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ background: "#f8f7f4" }}>
                    {["Podcast", "Seguidores Spotify", "YouTube", "LinkedIn", "Fase"].map(h => (
                      <th key={h} style={{ padding: "8px 10px", textAlign: "left", fontWeight: "700", color: C.navy, fontSize: "11px", borderBottom: `2px solid ${C.border}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Pharma New Talent", sp: "~200–400", yt: "Sin canal activo", li: "~500–1.000", fase: "Madurez (2+ años)", highlight: false },
                    { name: "Pharma Talento y Más+", sp: "~100–200", yt: "Sin canal activo", li: "~300–600", fase: "Lanzamiento", highlight: false },
                    { name: "Farmacéuticos Digitales", sp: "~300–500", yt: "Sin canal activo", li: "~400–800", fase: "Madurez (1+ año)", highlight: false },
                    { name: "+Que Píldoras ⭐", sp: "233 escuchas/mes", yt: "9.665 vistas/28d", li: "309 seguidores", fase: "Lanzamiento (mes 2)", highlight: true },
                  ].map(r => (
                    <tr key={r.name} style={{ background: r.highlight ? "#e6f4f0" : "transparent", borderBottom: `1px solid ${C.border}` }}>
                      <td style={{ padding: "10px", fontWeight: r.highlight ? "700" : "500", color: r.highlight ? C.green : C.text }}>{r.name}</td>
                      <td style={{ padding: "10px", color: r.highlight ? C.green : C.muted, fontWeight: r.highlight ? "600" : "400" }}>{r.sp}</td>
                      <td style={{ padding: "10px", color: r.highlight ? C.green : C.muted, fontWeight: r.highlight ? "600" : "400" }}>{r.yt}</td>
                      <td style={{ padding: "10px", color: r.highlight ? C.green : C.muted, fontWeight: r.highlight ? "600" : "400" }}>{r.li}</td>
                      <td style={{ padding: "10px" }}><span style={{ background: r.highlight ? "#0e6e55" : "#e5e7eb", color: r.highlight ? "white" : C.muted, fontSize: "11px", padding: "2px 8px", borderRadius: "10px", fontWeight: "600" }}>{r.fase}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "11px", color: C.muted, margin: "10px 0 0", fontStyle: "italic" }}>⚠️ Los datos de competidores son estimaciones basadas en perfiles públicos de plataformas. Los podcasts de nicho farma rara vez tienen canal de YouTube activo — vosotros sí.</p>
          </div>

          {/* Bloque 3: Aspiracional - Tengo un Plan */}
          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 4px" }}>Referencia aspiracional: Tengo un Plan</p>
            <p style={{ fontSize: "12px", color: C.muted, margin: "0 0 16px", fontStyle: "italic" }}>#1 podcast de crecimiento personal en España · Juan Domínguez y Sergio Beguería · 548 episodios</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
              {[
                { metric: "Suscriptores/seguidores", tengo: "2.000.000+", mqp: "81–309", x: "~8.000x" },
                { metric: "Episodios publicados", tengo: "548", mqp: "3", x: "Mes 2 vs. 6+ años" },
                { metric: "Eventos presenciales", tengo: "Sold out 2025", mqp: "—", x: "Objetivo futuro" },
                { metric: "Frecuencia", tengo: "2x semana", mqp: "~1 cada 2 sem.", x: "Gap de cadencia" },
              ].map(r => (
                <div key={r.metric} style={{ background: "#f8f7f4", borderRadius: "10px", padding: "12px" }}>
                  <p style={{ fontSize: "11px", color: C.muted, margin: "0 0 6px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.3px" }}>{r.metric}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <p style={{ fontSize: "11px", color: C.muted, margin: "0 0 2px" }}>Tengo un Plan</p>
                      <p style={{ fontSize: "15px", fontWeight: "800", color: "#6366f1", margin: 0 }}>{r.tengo}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: "11px", color: C.muted, margin: "0 0 2px" }}>+Que Píldoras</p>
                      <p style={{ fontSize: "15px", fontWeight: "800", color: C.navy, margin: 0 }}>{r.mqp}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "8px" }}>
                    <span style={{ background: "#ede9fe", color: "#6366f1", fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "10px" }}>{r.x}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "#f5f3ff", borderRadius: "8px", padding: "12px 14px" }}>
              <p style={{ fontSize: "13px", color: "#4c1d95", fontWeight: "600", margin: "0 0 4px" }}>🎯 El camino: Tengo un Plan tardó ~3 años en alcanzar el top 10 de España</p>
              <p style={{ fontSize: "12px", color: "#6d28d9", margin: 0 }}>Con una estrategia multi-plataforma (YouTube + TikTok + LinkedIn) y un nicho sin competidor dominante, +QP tiene una ventana de oportunidad que Tengo un Plan no tuvo: el canal de farma/salud en español está virgen.</p>
            </div>
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 14px" }}>Ventajas competitivas de +Que Píldoras vs. nicho farma</p>
            {[
              { icon: "📺", title: "Único con YouTube activo", desc: "9.665 vistas/mes — los competidores de nicho farma no tienen presencia en vídeo" },
              { icon: "⚡", title: "TikTok con ratio viral", desc: "6.600 vistas con 6 seguidores (1.100x) — ningún podcast farma en España tiene esto" },
              { icon: "🎙️", title: "Acceso a fuentes únicas", desc: "Invitados como Fernando Zaragozá (CSIC) dan credibilidad científica imposible de replicar fácilmente" },
              { icon: "🌍", title: "Audiencia internacional", desc: "14 países desde el mes 1 — el mercado hispanohablante (500M+ personas) es el objetivo real" },
            ].map(v => (
              <div key={v.icon} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: "700", color: C.navy, margin: "0 0 2px" }}>{v.title}</p>
                  <p style={{ fontSize: "12px", color: C.muted, margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

      case "Audiencia": return (
        <div>
          <div style={{
            background: `linear-gradient(135deg, ${C.navy}, ${C.blue})`,
            borderRadius: "14px", padding: "20px 22px", marginBottom: "20px",
          }}>
            <p style={{ color: C.accent, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px" }}>Quién nos escucha</p>
            <h3 style={{ color: "white", margin: 0, fontSize: "18px", fontWeight: "700" }}>Perfil de la audiencia</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", margin: "4px 0 0" }}>Datos de mayo 2026 — Spotify, YouTube y LinkedIn</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
              <p style={{ fontWeight: "700", fontSize: "13px", color: C.navy, margin: "0 0 12px" }}>EDAD — Spotify</p>
              <BarRow label="35–44 años (dominante)" pct={100} value="40,0%" color="#1DB954" />
              <BarRow label="28–34 años" pct={71} value="28,6%" color="#1DB954" />
              <BarRow label="45–59 años" pct={33} value="13,3%" color="#1DB954" />
              <BarRow label="23–27 años" pct={33} value="13,3%" color="#1DB954" />
              <BarRow label="18–22 años" pct={7} value="2,9%" color="#1DB954" />
            </div>
            <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
              <p style={{ fontWeight: "700", fontSize: "13px", color: C.navy, margin: "0 0 12px" }}>EDAD — TikTok/IG</p>
              <BarRow label="25–34 años (dominante)" pct={100} value="44,6%" color="#010101" />
              <BarRow label="18–24 años" pct={85} value="37,7%" color="#010101" />
              <BarRow label="35–44 años" pct={18} value="8,0%" color="#010101" />
              <BarRow label="45–54 años" pct={14} value="6,4%" color="#010101" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
              <p style={{ fontWeight: "700", fontSize: "13px", color: C.navy, margin: "0 0 12px" }}>GÉNERO — Spotify</p>
              <BarRow label="Mujeres" pct={100} value="62,9%" color="#BC3CB4" />
              <BarRow label="Hombres" pct={52} value="32,4%" color="#4A90D9" />
            </div>
            <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
              <p style={{ fontWeight: "700", fontSize: "13px", color: C.navy, margin: "0 0 12px" }}>GÉNERO — YouTube</p>
              <BarRow label="Hombres" pct={100} value="81,4%" color="#4A90D9" />
              <BarRow label="Mujeres" pct={23} value="18,6%" color="#BC3CB4" />
            </div>
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "13px", color: C.navy, margin: "0 0 12px" }}>GEOGRAFÍA — Combinada</p>
            <BarRow label="España (dominante)" pct={100} value="73,6% Spotify · 63,3% YT" color={C.navy} />
            <BarRow label="Latinoamérica" pct={15} value="~9% LinkedIn + Spotify" color={C.navy} />
            <BarRow label="Rumanía" pct={17} value="12,2% TikTok · 2,9% Spotify" color={C.navy} />
            <BarRow label="EEUU" pct={5} value="3,6% Spotify · 1,4% TikTok" color={C.navy} />
            <BarRow label="UK" pct={4} value="2,9% Spotify" color={C.navy} />
            <BarRow label="Israel" pct={5} value="3,6% Spotify" color={C.navy} />
          </div>

          <div style={{ background: C.white, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "16px" }}>
            <p style={{ fontWeight: "700", fontSize: "13px", color: C.navy, margin: "0 0 12px" }}>CARGOS — Audiencia LinkedIn (post Medical Affairs)</p>
            <BarRow label="Experto en investigación clínica" pct={100} value="15,7%" color="#0a66c2" />
            <BarRow label="Comercial" pct={25} value="4,0%" color="#0a66c2" />
            <BarRow label="Gestor de proyectos" pct={18} value="2,8%" color="#0a66c2" />
            <BarRow label="Asesor médico" pct={17} value="2,7%" color="#0a66c2" />
            <BarRow label="Médico" pct={15} value="2,4%" color="#0a66c2" />
          </div>

          <Insight icon="🎯" text="Audiencia dual: Spotify/LinkedIn atrae perfil 35-44 con experiencia (potencial mentoring senior), TikTok/IG atrae 18-34 buscando entrar al sector (potencial mentoring junior)." />
          <Insight icon="👩‍🔬" text="62,9% de oyentes en Spotify son mujeres — dato muy relevante para el programa de mentoría y propuesta de valor hacia empresas con iniciativas de diversidad en farma." type="info" />
          <Insight icon="🌍" text="Presencia en 14 países con especial fuerza en LATAM. Oportunidad para episodios con invitados internacionales." type="info" />
        </div>
      );

      case "Contexto": return (
        <div>
          <div style={{
            background: `linear-gradient(135deg, #3d0070, #5c1f8e)`,
            borderRadius: "14px", padding: "20px 22px", marginBottom: "20px",
          }}>
            <p style={{ color: "#d4a0ff", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 6px" }}>Benchmarks del sector</p>
            <h3 style={{ color: "white", margin: 0, fontSize: "18px", fontWeight: "700" }}>+QuePíldoras vs. Industria</h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", margin: "4px 0 0" }}>Semana 1–4 · 3 episodios · datos reales YouTube</p>
          </div>

          {[
            {
              metrica: "Retención Short top (Del lab. a ensayos)",
              valor: "79,8%",
              benchmark: "38–50% (shorts de nicho)",
              tendenciaun: "~45-55%",
              resultado: "Top 5% mundial en retención Shorts",
              color: "#0e6e55",
              positivo: true,
            },
            {
              metrica: "Watch time YouTube (28 días)",
              valor: "40,8h",
              benchmark: "<10h (canal nuevo sem 1-4)",
              tendenciaun: "~20-40h (marca preexistente)",
              resultado: "+972% vs periodo anterior",
              color: "#0e6e55",
              positivo: true,
            },
            {
              metrica: "Tasa interacción LinkedIn",
              valor: "14,8%",
              benchmark: "1–3% (B2B)",
              tendenciaun: "~5-10%",
              resultado: "+5x sobre benchmark B2B",
              color: "#0e6e55",
              positivo: true,
            },
            {
              metrica: "Audiencia nueva Instagram",
              valor: "63,9%",
              benchmark: "~30-40% (cuentas B2B nuevas)",
              tendenciaun: "~50-60% (marca preexistente)",
              resultado: "Alcance viral orgánico",
              color: "#0e6e55",
              positivo: true,
            },
            {
              metrica: "Escuchas Spotify (EP00+EP01)",
              valor: "168 totales",
              benchmark: "50-200 (podcast nuevo sem 1-4)",
              tendenciaun: "500-1.000+ (marca preexistente)",
              resultado: "Dentro del benchmark para canal nuevo",
              color: "#d4a017",
              positivo: null,
            },
            {
              metrica: "Retención EP01 vídeo largo",
              valor: "17,5%",
              benchmark: "~25-40% (podcast nicho, vídeo largo)",
              tendenciaun: "~30-45%",
              resultado: "Área de mejora — hook inicial",
              color: "#c0392b",
              positivo: false,
            },
          ].map(row => (
            <div key={row.metrica} style={{
              background: C.white, borderRadius: "10px", border: `1px solid ${C.border}`,
              padding: "14px 16px", marginBottom: "10px",
              borderLeft: `4px solid ${row.color}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: "700", fontSize: "14px", color: C.navy, margin: "0 0 6px" }}>{row.metrica}</p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "12px", color: C.muted }}>Benchmark: <strong>{row.benchmark}</strong></span>
                    <span style={{ fontSize: "12px", color: C.muted }}>Ref: <strong>{row.tendenciaun}</strong></span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "22px", fontWeight: "800", color: row.color, margin: 0 }}>{row.valor}</p>
                  <p style={{ fontSize: "11px", color: row.color, margin: "2px 0 0", fontWeight: "600" }}>{row.resultado}</p>
                </div>
              </div>
            </div>
          ))}

          <div style={{
            background: "#fffbea", border: "1px solid #f6d860",
            borderRadius: "12px", padding: "16px 20px", marginTop: "8px",
          }}>
            <p style={{ fontWeight: "700", color: "#92600a", margin: "0 0 8px", fontSize: "14px" }}>
              📌 Nota metodológica
            </p>
            <p style={{ color: "#7a5010", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
              Datos obtenidos directamente de las plataformas el 3 de junio de 2026: YouTube Studio (6 may–2 jun), Spotify for Creators (30 días), LinkedIn Admin Analytics (3 may–1 jun), TikTok Studio (28 días). Instagram: dato de seguidores confirmado; Insights detallado accesible solo desde app móvil.
              Los benchmarks B2B son datos verificados de Share Your Genius B2B Podcast Benchmarks 2024 y YouTube Studio Industry Averages 2024.
            </p>
          </div>
        </div>
      );

      default: return null;
    }
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: C.bg, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${C.navy}, ${C.blue})`,
        padding: "24px 24px 0", position: "sticky", top: 0, zIndex: 10,
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div>
              <p style={{ color: C.accent, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 2px" }}>
                +QuePíldoras · Temporada 2
              </p>
              <p style={{ color: "white", fontWeight: "800", fontSize: "15px", margin: 0 }}>
                Informe de Métricas · Junio 2026
              </p>
            </div>
            <span style={{
              background: "rgba(255,255,255,0.12)", color: "white",
              fontSize: "11px", padding: "4px 12px", borderRadius: "20px",
            }}>3 episodios · todos los datos reales</span>
          </div>
          {/* Nav */}
          <div style={{ display: "flex", gap: "2px", overflowX: "auto" }}>
            {sections.map(s => (
              <button key={s} onClick={() => setActive(s)} style={{
                padding: "10px 14px", background: "none", border: "none",
                color: active === s ? "white" : "rgba(255,255,255,0.5)",
                fontSize: "13px", fontFamily: "inherit", cursor: "pointer",
                borderBottom: `2px solid ${active === s ? C.accent : "transparent"}`,
                whiteSpace: "nowrap", fontWeight: active === s ? "700" : "400",
                transition: "all 0.15s",
              }}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "24px 16px 60px" }}>
        {renderSection()}
      </div>
    </div>
  );
}
