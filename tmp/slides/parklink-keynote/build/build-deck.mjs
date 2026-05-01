const fs = await import("node:fs/promises");
const path = await import("node:path");
const { Presentation, PresentationFile } = await import("@oai/artifact-tool");

const ROOT = path.resolve("C:/Users/matia/FundaWEB/ParkLink-Report");
const OUT_DIR = path.join(ROOT, "deliverables");
const SCRATCH_DIR = path.join(ROOT, "tmp", "slides", "parklink-keynote");
const PREVIEW_DIR = path.join(SCRATCH_DIR, "preview");
const INSPECT_PATH = path.join(SCRATCH_DIR, "inspect.ndjson");
const PPTX_PATH = path.join(OUT_DIR, "upc-pre-202610-1acc238-17949-parkteam-keynote-tb1.pptx");

const W = 1280;
const H = 720;
const COLORS = {
  bg: "#F7F9F7",
  ink: "#111827",
  muted: "#5E6B64",
  green: "#0F766E",
  green2: "#DDF4EA",
  mint: "#27C47D",
  blue: "#2563EB",
  blue2: "#DBEAFE",
  amber: "#D97706",
  amber2: "#FEF3C7",
  red: "#B91C1C",
  red2: "#FEE2E2",
  line: "#CBD5E1",
  white: "#FFFFFF",
};
const FONT = { title: "Poppins", body: "Lato", mono: "Aptos Mono" };

const inspect = [];

async function ensureDirs() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
}

async function readImageBlob(filePath) {
  const bytes = await fs.readFile(filePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function record(kind, slide, role, text, bbox) {
  inspect.push({ kind, slide, role, text: text || "", textChars: text ? String(text).length : 0, bbox });
}

function shape(slide, geometry, x, y, w, h, fill = COLORS.white, line = COLORS.line, lineWidth = 1) {
  return slide.shapes.add({
    geometry,
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { style: "solid", fill: line, width: lineWidth },
  });
}

function text(slide, slideNo, value, x, y, w, h, opts = {}) {
  const s = shape(slide, "rect", x, y, w, h, opts.fill || "#00000000", opts.line || "#00000000", opts.lineWidth || 0);
  s.text = value;
  s.text.fontSize = opts.size || 22;
  s.text.typeface = opts.face || FONT.body;
  s.text.color = opts.color || COLORS.ink;
  s.text.bold = Boolean(opts.bold);
  s.text.alignment = opts.align || "left";
  s.text.verticalAlignment = opts.valign || "top";
  s.text.insets = opts.insets || { left: 0, right: 0, top: 0, bottom: 0 };
  if (opts.autoFit) s.text.autoFit = opts.autoFit;
  record("textbox", slideNo, opts.role || "text", value, [x, y, w, h]);
  return s;
}

function header(slide, slideNo, title) {
  text(slide, slideNo, "PARKTEAM / PARKLINK", 52, 28, 360, 24, {
    size: 12, face: FONT.mono, color: COLORS.green, bold: true, role: "header",
  });
  text(slide, slideNo, `${String(slideNo).padStart(2, "0")} / 11`, 1120, 28, 110, 24, {
    size: 12, face: FONT.mono, color: COLORS.green, bold: true, align: "right", role: "slide number",
  });
  shape(slide, "rect", 52, 62, 1176, 2, COLORS.green, COLORS.green, 0);
  if (title) text(slide, slideNo, title, 52, 86, 860, 62, { size: 34, face: FONT.title, bold: true, role: "title" });
}

function card(slide, slideNo, x, y, w, h, title, body, opts = {}) {
  const fill = opts.fill || COLORS.white;
  const accent = opts.accent || COLORS.green;
  shape(slide, "roundRect", x, y, w, h, fill, opts.line || COLORS.line, 1.2);
  shape(slide, "rect", x, y, 7, h, accent, accent, 0);
  const compact = h < 120;
  text(slide, slideNo, title, x + 20, y + (compact ? 14 : 18), w - 40, compact ? 24 : 28, {
    size: opts.titleSize || 16, color: accent, bold: true, face: FONT.mono, role: "card title",
  });
  text(slide, slideNo, body, x + 20, y + (compact ? 42 : 58), w - 40, h - (compact ? 52 : 72), {
    size: opts.bodySize || (compact ? 15 : 17), color: COLORS.ink, role: "card body", autoFit: "shrinkText",
  });
}

async function image(slide, file, x, y, w, h, fit = "cover", alt = "") {
  const img = slide.images.add({ blob: await readImageBlob(path.join(ROOT, file)), fit, alt });
  img.position = { left: x, top: y, width: w, height: h };
  return img;
}

function footer(slide, slideNo, note = "Fundamentos de Arquitectura de Software - TB1 - Abril 2026") {
  text(slide, slideNo, note, 52, 674, 900, 22, { size: 10, color: slideNo === 1 ? "#D6F7EC" : COLORS.muted, role: "footer" });
}

function addNotes(slide, notes) {
  slide.speakerNotes.setText(notes || "");
}

function slideBg(slide) {
  slide.background.fill = COLORS.bg;
}

async function slide1(p) {
  const slideNo = 1;
  const slide = p.slides.add();
  slideBg(slide);
  shape(slide, "rect", 0, 0, W, 720, "#E8F7EF", "#00000000", 0);
  shape(slide, "rect", 0, 0, 420, 720, COLORS.green, COLORS.green, 0);
  text(slide, slideNo, "UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS", 56, 52, 410, 38, {
    size: 15, color: COLORS.white, bold: true, face: FONT.mono, role: "university",
  });
  text(slide, slideNo, "ParkLink", 56, 164, 460, 92, {
    size: 58, color: COLORS.white, bold: true, face: FONT.title, role: "deck title",
  });
  text(slide, slideNo, "Gestión y reserva de estacionamientos", 60, 266, 360, 70, {
    size: 24, color: "#DFF7EE", role: "subtitle",
  });
  text(slide, slideNo, "ParkTeam\n1ACC0238 - NRC 17949\nAbril 2026", 60, 498, 330, 105, {
    size: 22, color: COLORS.white, role: "course data",
  });
  card(slide, slideNo, 520, 150, 300, 170, "Objetivo", "Presentar la corrección del reporte, el alcance de ParkLink y las decisiones de arquitectura que sostienen el producto.", { fill: COLORS.white });
  card(slide, slideNo, 852, 150, 300, 170, "Enfoque", "Marketplace móvil que conecta conductores con empresarios/propietarios de espacios disponibles.", { fill: COLORS.white, accent: COLORS.blue });
  card(slide, slideNo, 520, 360, 300, 170, "Diferenciador", "Reserva anticipada, pago digital, comparación de tarifas y recomendación por precio total.", { fill: COLORS.white, accent: COLORS.amber });
  card(slide, slideNo, 852, 360, 300, 170, "Arquitectura", "DDD, RESTful Web Services, cache de disponibilidad, almacenamiento S3 compatible y servicios externos.", { fill: COLORS.white, accent: COLORS.green });
  footer(slide, slideNo);
  addNotes(slide, "Apertura de la presentación del proyecto ParkLink.");
}

async function slide2(p) {
  const slideNo = 2;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Equipo de trabajo");
  const members = [
    ["Fabian Alejandro\nOliva Lopez", "U202312013", "assets/fabian.jpg"],
    ["Javier Masaru\nNikaido Vargas", "U20221G099", "assets/javier.jpg"],
    ["Pietro\nOsores Marchese", "U202310971", "assets/pietro.jpg"],
    ["Matias Rodolfo\nSalcedo Champi", "U202319698", "assets/matias-profile.jpg"],
    ["Percy Alonso\nMuñiz Huayanca", "U202319563", "assets/percy.jpg"],
  ];
  const startX = 58;
  const gap = 18;
  const w = 218;
  for (let i = 0; i < members.length; i += 1) {
    const x = startX + i * (w + gap);
    shape(slide, "roundRect", x, 170, w, 390, COLORS.white, COLORS.line, 1.2);
    await image(slide, members[i][2], x + 26, 198, 166, 166, "cover", members[i][0]);
    shape(slide, "rect", x + 26, 376, 166, 4, [COLORS.green, COLORS.blue, COLORS.amber, COLORS.mint, COLORS.green][i], "#00000000", 0);
    text(slide, slideNo, members[i][0], x + 22, 402, w - 44, 72, {
      size: 19, face: FONT.title, bold: true, align: "center", role: "member name", autoFit: "shrinkText",
    });
    text(slide, slideNo, members[i][1], x + 22, 486, w - 44, 26, {
      size: 14, face: FONT.mono, color: COLORS.muted, align: "center", role: "member code",
    });
  }
  text(slide, slideNo, "Todos los integrantes participan en la elaboración del reporte, investigación, especificación de requisitos y análisis de arquitectura.", 96, 606, 1088, 46, {
    size: 20, color: COLORS.ink, align: "center", role: "team participation",
  });
  footer(slide, slideNo);
  addNotes(slide, "Presentar a los cinco integrantes y su participación en el proyecto.");
}

async function slide3(p) {
  const slideNo = 3;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Problema y segmentos");
  card(slide, slideNo, 72, 176, 345, 176, "Problema", "Los conductores pierden tiempo buscando estacionamiento sin información confiable de disponibilidad, precio ni distancia.", { accent: COLORS.red, fill: COLORS.red2 });
  card(slide, slideNo, 468, 176, 345, 176, "Conductor", "Necesita encontrar, comparar, reservar y pagar espacios disponibles antes de llegar al destino.", { accent: COLORS.green, fill: COLORS.green2 });
  card(slide, slideNo, 864, 176, 345, 176, "Empresario", "Necesita publicar espacios, controlar horarios, definir tarifas y recibir ingresos con trazabilidad.", { accent: COLORS.blue, fill: COLORS.blue2 });
  const metrics = [
    ["100%", "pierde 15 a 20 minutos buscando estacionamiento"],
    ["100%", "quiere disponibilidad visible en tiempo real"],
    ["2 + 2", "entrevistas por segmento"],
  ];
  for (let i = 0; i < metrics.length; i += 1) {
    const x = 110 + i * 360;
    shape(slide, "roundRect", x, 438, 300, 118, COLORS.white, COLORS.line, 1.2);
    text(slide, slideNo, metrics[i][0], x + 20, 458, 100, 50, { size: 34, face: FONT.title, bold: true, color: [COLORS.green, COLORS.blue, COLORS.amber][i], role: "metric" });
    text(slide, slideNo, metrics[i][1], x + 126, 456, 150, 70, { size: 17, role: "metric label", autoFit: "shrinkText" });
  }
  footer(slide, slideNo);
  addNotes(slide, "Explicar la necesidad del marketplace y aclarar que se entrevistaron ambos segmentos.");
}

async function slide4(p) {
  const slideNo = 4;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Lean UX y entrevistas");
  await image(slide, "assets/lean-ux-canvas.png", 70, 170, 450, 320, "contain", "Lean UX Canvas");
  card(slide, slideNo, 570, 172, 270, 130, "Lean UX", "Comprender, esbozar, probar y medir con hipótesis centradas en búsqueda, reserva y monetización.", { fill: COLORS.white });
  card(slide, slideNo, 870, 172, 270, 130, "Conductores", "Validan tiempo perdido, estrés, necesidad de reserva, precio y distancia visible.", { fill: COLORS.green2 });
  card(slide, slideNo, 570, 340, 270, 130, "Empresarios", "Validan publicación de cocheras, control de horarios, tarifas y cobros.", { fill: COLORS.blue2, accent: COLORS.blue });
  card(slide, slideNo, 870, 340, 270, 130, "Aprendizaje", "El producto debe resolver valor operativo y no quedarse solo en funcionalidades visibles.", { fill: COLORS.amber2, accent: COLORS.amber });
  text(slide, slideNo, "La muestra se separa en dos segmentos del marketplace para evitar interpretar las entrevistas como si fueran solo a conductores.", 574, 520, 568, 56, {
    size: 19, color: COLORS.ink, role: "segment clarification",
  });
  footer(slide, slideNo);
  addNotes(slide, "Mostrar el canvas y el criterio de segmentación de entrevistas.");
}

async function slide5(p) {
  const slideNo = 5;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Competidores y diferenciación");
  const cols = ["ParkLink", "Apparka", "Park", "Quadra"];
  const rows = [
    ["Reserva anticipada", "Sí", "No", "Limitada", "Parcial"],
    ["Pago digital", "Sí", "Sí", "No central", "Parcial"],
    ["Gestión para empresarios", "Sí", "No", "No", "Sí"],
    ["Recomendación por precio", "Sí", "No", "No", "No"],
  ];
  const x0 = 86;
  const y0 = 174;
  const cw = 270;
  const rh = 64;
  shape(slide, "roundRect", x0, y0, 1080, 340, COLORS.white, COLORS.line, 1.2);
  text(slide, slideNo, "Criterio", x0 + 18, y0 + 20, 190, 26, { size: 15, face: FONT.mono, bold: true, color: COLORS.green, role: "table header" });
  for (let c = 0; c < cols.length; c += 1) {
    text(slide, slideNo, cols[c], x0 + 230 + c * 200, y0 + 20, 180, 26, { size: 15, face: FONT.mono, bold: true, color: c === 0 ? COLORS.green : COLORS.muted, align: "center", role: "competitor header" });
  }
  for (let r = 0; r < rows.length; r += 1) {
    const y = y0 + 74 + r * rh;
    shape(slide, "rect", x0 + 18, y - 10, 1044, 1, COLORS.line, COLORS.line, 0);
    text(slide, slideNo, rows[r][0], x0 + 18, y, 200, 34, { size: 16, role: "criterion" });
    for (let c = 1; c < rows[r].length; c += 1) {
      const positive = rows[r][c] === "Sí";
      const fill = positive ? COLORS.green2 : rows[r][c] === "No" || rows[r][c] === "No central" ? COLORS.red2 : COLORS.amber2;
      const color = positive ? COLORS.green : rows[r][c] === "No" || rows[r][c] === "No central" ? COLORS.red : COLORS.amber;
      shape(slide, "roundRect", x0 + 245 + (c - 1) * 200, y - 4, 130, 34, fill, "#00000000", 0);
      text(slide, slideNo, rows[r][c], x0 + 245 + (c - 1) * 200, y + 2, 130, 22, { size: 14, bold: true, color, align: "center", role: "comparison value" });
    }
  }
  card(slide, slideNo, 190, 548, 900, 74, "Diferenciación", "ParkLink no solo lista estacionamientos: combina reserva, pago, gestión del empresario y recomendación de tarifa conveniente.", { bodySize: 19, accent: COLORS.green });
  footer(slide, slideNo);
  addNotes(slide, "Comparar contra Apparka, Park y Quadra como observó el docente.");
}

async function slide6(p) {
  const slideNo = 6;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Tarifas y recomendación por precio");
  const options = [
    ["A", "S/ 6.00/h", "250 m", "S/ 12.00", "Recomendado"],
    ["B", "S/ 5.00/h", "900 m", "S/ 10.00", "Lejano"],
    ["C", "S/ 8.00/h", "150 m", "S/ 16.00", "Costoso"],
  ];
  text(slide, slideNo, "Costo total = tarifa por hora x duración + comisión + penalización por distancia + ajuste por valoración", 84, 166, 1040, 34, {
    size: 21, color: COLORS.ink, bold: true, role: "formula",
  });
  for (let i = 0; i < options.length; i += 1) {
    const y = 242 + i * 116;
    const accent = i === 0 ? COLORS.green : i === 1 ? COLORS.amber : COLORS.red;
    shape(slide, "roundRect", 92, y, 1040, 84, COLORS.white, COLORS.line, 1.2);
    shape(slide, "ellipse", 116, y + 19, 46, 46, accent, "#00000000", 0);
    text(slide, slideNo, options[i][0], 116, y + 27, 46, 24, { size: 19, color: COLORS.white, bold: true, align: "center", role: "option" });
    text(slide, slideNo, options[i][1], 206, y + 22, 160, 30, { size: 20, bold: true, role: "price" });
    text(slide, slideNo, options[i][2], 412, y + 22, 150, 30, { size: 20, color: COLORS.muted, role: "distance" });
    text(slide, slideNo, options[i][3], 612, y + 22, 180, 30, { size: 22, bold: true, color: accent, role: "total cost" });
    text(slide, slideNo, options[i][4], 842, y + 22, 180, 30, { size: 18, bold: true, color: accent, align: "center", role: "recommendation" });
  }
  card(slide, slideNo, 154, 592, 910, 68, "Decisión de producto", "La recomendación explica por qué una opción es conveniente. No siempre el precio más bajo es la mejor elección si la distancia o confiabilidad penalizan la experiencia.", { bodySize: 18, accent: COLORS.blue });
  footer(slide, slideNo);
  addNotes(slide, "Responder a la observación sobre analizar tarifas y sugerir la opción más adecuada por precio.");
}

async function slide7(p) {
  const slideNo = 7;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "User Task Matrix y escenarios");
  const tasks = [
    ["Conductor", "Encontrar espacio", "US01, US02"],
    ["Conductor", "Comparar tarifa", "US03, TS02"],
    ["Conductor", "Reservar y pagar", "US05, US14"],
    ["Empresario", "Publicar espacio", "US09, TS05"],
    ["Empresario", "Gestionar acceso", "US11, US12"],
    ["Empresario", "Revisar ingresos", "US13, US16"],
  ];
  for (let i = 0; i < tasks.length; i += 1) {
    const x = 84 + (i % 3) * 370;
    const y = 178 + Math.floor(i / 3) * 150;
    card(slide, slideNo, x, y, 330, 112, tasks[i][0], `${tasks[i][1]}\n${tasks[i][2]}`, {
      fill: tasks[i][0] === "Conductor" ? COLORS.green2 : COLORS.blue2,
      accent: tasks[i][0] === "Conductor" ? COLORS.green : COLORS.blue,
      bodySize: 20,
    });
  }
  shape(slide, "roundRect", 142, 520, 440, 74, COLORS.red2, COLORS.red, 1.2);
  text(slide, slideNo, "As-Is", 168, 540, 96, 28, { size: 22, bold: true, color: COLORS.red, role: "as is label" });
  text(slide, slideNo, "Búsqueda manual, coordinación informal, baja trazabilidad.", 278, 540, 270, 34, { size: 17, role: "as is text" });
  shape(slide, "roundRect", 696, 520, 440, 74, COLORS.green2, COLORS.green, 1.2);
  text(slide, slideNo, "To-Be", 722, 540, 96, 28, { size: 22, bold: true, color: COLORS.green, role: "to be label" });
  text(slide, slideNo, "Reserva confirmada, pago digital, gestión y recomendación.", 832, 540, 270, 34, { size: 17, role: "to be text" });
  footer(slide, slideNo);
  addNotes(slide, "Mostrar que la matriz de tareas ya existe y se conecta a historias y TS.");
}

async function slide8(p) {
  const slideNo = 8;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Historias de usuario");
  const epics = [
    ["EP01", "Búsqueda y descubrimiento"],
    ["EP02", "Reserva y gestión"],
    ["EP03", "Publicación de espacios"],
    ["EP04", "Pagos y facturación"],
    ["EP05", "Cuenta y autenticación"],
    ["EP06", "Notificaciones"],
  ];
  for (let i = 0; i < epics.length; i += 1) {
    const x = 82 + (i % 3) * 374;
    const y = 178 + Math.floor(i / 3) * 132;
    card(slide, slideNo, x, y, 330, 100, epics[i][0], epics[i][1], { bodySize: 20, fill: COLORS.white, accent: [COLORS.green, COLORS.blue, COLORS.amber][i % 3] });
  }
  const metrics = [
    ["6", "épicas"],
    ["20", "historias funcionales"],
    ["10", "TS/RNF agregados"],
  ];
  for (let i = 0; i < metrics.length; i += 1) {
    const x = 182 + i * 315;
    shape(slide, "roundRect", x, 502, 260, 106, [COLORS.green2, COLORS.blue2, COLORS.amber2][i], "#00000000", 0);
    text(slide, slideNo, metrics[i][0], x + 26, 524, 72, 44, { size: 38, bold: true, face: FONT.title, color: [COLORS.green, COLORS.blue, COLORS.amber][i], role: "count" });
    text(slide, slideNo, metrics[i][1], x + 110, 530, 126, 34, { size: 19, role: "count label" });
  }
  footer(slide, slideNo);
  addNotes(slide, "Explicar que se mantuvieron 6 épicas y 20 HU, y se agregaron TS/RNF para arquitectura.");
}

async function slide9(p) {
  const slideNo = 9;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Impact mapping y riesgos");
  const risks = [
    ["Disponibilidad", "Doble reserva", "TS01"],
    ["Pagos", "Cobros duplicados", "TS06"],
    ["Oferta", "Pocos espacios activos", "US09"],
    ["Privacidad", "Fotos expuestas", "TS05"],
    ["Externos", "Fallas de APIs", "RNF04"],
    ["Precio", "Recomendación opaca", "TS02"],
  ];
  for (let i = 0; i < risks.length; i += 1) {
    const x = 78 + (i % 3) * 374;
    const y = 174 + Math.floor(i / 3) * 150;
    card(slide, slideNo, x, y, 330, 112, risks[i][0], `${risks[i][1]}\nMitigación: ${risks[i][2]}`, {
      fill: i % 2 === 0 ? COLORS.red2 : COLORS.amber2,
      accent: i % 2 === 0 ? COLORS.red : COLORS.amber,
      bodySize: 18,
    });
  }
  card(slide, slideNo, 182, 510, 860, 92, "Impacto corregido", "El mapa de impacto ahora incluye metas SMART, actores, entregables y riesgos principales vinculados a historias, TS y RNF.", { bodySize: 20, accent: COLORS.green });
  footer(slide, slideNo);
  addNotes(slide, "Responder a la observación sobre rehacer el mapa de impacto e identificar riesgos.");
}

async function slide10(p) {
  const slideNo = 10;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Arquitectura de software");
  shape(slide, "roundRect", 74, 178, 210, 98, COLORS.blue2, COLORS.blue, 1.4);
  text(slide, slideNo, "Mobile App\nFlutter/KMM", 94, 206, 170, 42, { size: 19, bold: true, align: "center", role: "mobile container" });
  shape(slide, "roundRect", 370, 178, 210, 98, COLORS.green2, COLORS.green, 1.4);
  text(slide, slideNo, "API Gateway\nHTTPS + JWT", 390, 206, 170, 42, { size: 19, bold: true, align: "center", role: "gateway" });
  shape(slide, "roundRect", 666, 148, 260, 158, COLORS.amber2, COLORS.amber, 1.4);
  text(slide, slideNo, "RESTful Web Services\nDDD bounded contexts", 690, 184, 212, 54, { size: 19, bold: true, align: "center", role: "backend" });
  text(slide, slideNo, "Parking, Reservation, Payment, IAM, Pricing, Media", 694, 250, 204, 34, { size: 13, align: "center", color: COLORS.muted, role: "bounded contexts" });
  shape(slide, "roundRect", 1016, 148, 174, 72, COLORS.white, COLORS.line, 1.2);
  text(slide, slideNo, "PostgreSQL", 1036, 172, 134, 24, { size: 17, bold: true, align: "center", role: "database" });
  shape(slide, "roundRect", 1016, 250, 174, 72, COLORS.white, COLORS.line, 1.2);
  text(slide, slideNo, "Redis", 1036, 274, 134, 24, { size: 17, bold: true, align: "center", role: "cache" });
  shape(slide, "roundRect", 1016, 352, 174, 72, COLORS.white, COLORS.line, 1.2);
  text(slide, slideNo, "S3 compatible", 1036, 376, 134, 24, { size: 17, bold: true, align: "center", role: "storage" });
  shape(slide, "rect", 286, 226, 82, 3, COLORS.ink, COLORS.ink, 0);
  shape(slide, "rect", 582, 226, 82, 3, COLORS.ink, COLORS.ink, 0);
  shape(slide, "rect", 926, 189, 88, 3, COLORS.ink, COLORS.ink, 0);
  shape(slide, "rect", 926, 285, 88, 3, COLORS.ink, COLORS.ink, 0);
  shape(slide, "rect", 926, 387, 88, 3, COLORS.ink, COLORS.ink, 0);
  card(slide, slideNo, 120, 504, 300, 104, "Rendimiento", "Cache de disponibilidad y respuesta p95 menor o igual a 2 segundos.", { fill: COLORS.white, accent: COLORS.green, bodySize: 17 });
  card(slide, slideNo, 490, 504, 300, 104, "Seguridad", "JWT, roles, HTTPS, auditoría de pagos y reservas.", { fill: COLORS.white, accent: COLORS.blue, bodySize: 17 });
  card(slide, slideNo, 860, 504, 300, 104, "Media", "Fotos y evidencias fuera de la base de datos, en bucket privado.", { fill: COLORS.white, accent: COLORS.amber, bodySize: 17 });
  footer(slide, slideNo);
  addNotes(slide, "Conectar requisitos técnicos con decisiones de arquitectura.");
}

async function slide11(p) {
  const slideNo = 11;
  const slide = p.slides.add();
  slideBg(slide);
  header(slide, slideNo, "Backlog y cierre de correcciones");
  const done = [
    ["PPT", "Presentación creada con formato de entrega."],
    ["User task", "Matriz agregada y conectada con HU/TS."],
    ["Impacto", "Mapa rehecho con riesgos principales."],
    ["TS/RNF", "Requisitos técnicos incorporados."],
    ["Tarifas", "Comparación y recomendación por precio."],
    ["S3", "Uso explicado en TS05 y arquitectura."],
  ];
  for (let i = 0; i < done.length; i += 1) {
    const x = 90 + (i % 2) * 540;
    const y = 172 + Math.floor(i / 2) * 126;
    card(slide, slideNo, x, y, 486, 88, done[i][0], done[i][1], {
      fill: i % 2 === 0 ? COLORS.green2 : COLORS.blue2,
      accent: i % 2 === 0 ? COLORS.green : COLORS.blue,
      bodySize: 18,
    });
  }
  text(slide, slideNo, "Siguiente paso: exportar el informe corregido a PDF y subir junto con esta presentación al aula virtual.", 136, 584, 1010, 42, {
    size: 24, face: FONT.title, bold: true, align: "center", role: "next step",
  });
  footer(slide, slideNo);
  addNotes(slide, "Cierre de la presentación y resumen de correcciones realizadas.");
}

async function build() {
  await ensureDirs();
  const p = Presentation.create({ slideSize: { width: W, height: H } });
  await slide1(p);
  await slide2(p);
  await slide3(p);
  await slide4(p);
  await slide5(p);
  await slide6(p);
  await slide7(p);
  await slide8(p);
  await slide9(p);
  await slide10(p);
  await slide11(p);
  return p;
}

async function savePreviews(p) {
  const previewPaths = [];
  for (let i = 0; i < p.slides.items.length; i += 1) {
    const blob = await p.export({ slide: p.slides.items[i], format: "png", scale: 1 });
    const bytes = new Uint8Array(await blob.arrayBuffer());
    const previewPath = path.join(PREVIEW_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`);
    await fs.writeFile(previewPath, bytes);
    previewPaths.push(previewPath);
  }
  return previewPaths;
}

const presentation = await build();
await savePreviews(presentation);
await fs.writeFile(INSPECT_PATH, inspect.map((item) => JSON.stringify(item)).join("\n") + "\n", "utf8");
const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(PPTX_PATH);
console.log(PPTX_PATH);
