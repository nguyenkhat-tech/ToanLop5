// data/shapes.js - Thư viện đầy đủ các hình học lớp 5
const Shapes = {
  // 1. Hình vuông
  square: (side, label = "", unit = "cm") => `
    <svg width="${side+20}" height="${side+20}" viewBox="0 0 ${side+20} ${side+20}" style="display:block;margin:0 auto">
      <rect x="10" y="10" width="${side}" height="${side}" fill="none" stroke="#7C3AED" stroke-width="2"/>
      ${label ? `<text x="${side/2+10}" y="8" text-anchor="middle" font-size="10" fill="#333">${label}${unit}</text>` : ''}
    </svg>
  `,

  // 2. Hình chữ nhật
  rectangle: (width, height, labelW = "", labelH = "", unit = "cm") => `
    <svg width="${width+30}" height="${height+30}" viewBox="0 0 ${width+30} ${height+30}" style="display:block;margin:0 auto">
      <rect x="10" y="10" width="${width}" height="${height}" fill="none" stroke="#7C3AED" stroke-width="2"/>
      ${labelW ? `<text x="${width/2+10}" y="8" text-anchor="middle" font-size="10" fill="#333">${labelW}${unit}</text>` : ''}
      ${labelH ? `<text x="${width+15}" y="${height/2+10}" text-anchor="middle" font-size="10" fill="#333">${labelH}${unit}</text>` : ''}
    </svg>
  `,

  // 3. Hình tam giác (tùy chọn hiển thị các cạnh và chiều cao)
  triangle: (base, leftSide, rightSide, height, 
             labelBase = "", labelLeft = "", labelRight = "", labelHeight = "", unit = "cm") => {
    const x1 = 20, y1 = 50;
    const x2 = 20 + base, y2 = 50;
    const x3 = 20 + base/2, y3 = 50 - height;
    let svg = `<svg width="${base+40}" height="${Math.max(height, 50)+20}" viewBox="0 0 ${base+40} ${Math.max(height, 50)+20}" style="display:block;margin:0 auto">
      <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="none" stroke="#7C3AED" stroke-width="2"/>`;
    if (labelBase) svg += `<text x="${x1+base/2}" y="${y1+15}" text-anchor="middle" font-size="10" fill="#333">${labelBase}${unit}</text>`;
    if (labelHeight) {
      svg += `<line x1="${x3}" y1="${y3}" x2="${x3}" y2="${y1}" stroke="#D97706" stroke-width="1" stroke-dasharray="4"/>`;
      svg += `<text x="${x3+8}" y="${y1 - height/2}" text-anchor="start" font-size="10" fill="#D97706">${labelHeight}${unit}</text>`;
    }
    svg += `</svg>`;
    return svg;
  },

  // 4. Hình thang
  trapezoid: (baseBig, baseSmall, height, labelBig = "", labelSmall = "", labelHeight = "", unit = "cm") => {
    const offset = (baseBig - baseSmall) / 2;
    const x1 = 20, y1 = 50;
    const x2 = 20 + baseBig, y2 = 50;
    const x3 = 20 + baseBig - offset, y3 = 50 - height;
    const x4 = 20 + offset, y4 = 50 - height;
    let svg = `<svg width="${baseBig+40}" height="${height+30}" viewBox="0 0 ${baseBig+40} ${height+30}" style="display:block;margin:0 auto">
      <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}" fill="none" stroke="#7C3AED" stroke-width="2"/>`;
    if (labelBig) svg += `<text x="${x1+baseBig/2}" y="${y1+15}" text-anchor="middle" font-size="10" fill="#333">${labelBig}${unit}</text>`;
    if (labelSmall) svg += `<text x="${x4+baseSmall/2}" y="${y4-5}" text-anchor="middle" font-size="10" fill="#333">${labelSmall}${unit}</text>`;
    if (labelHeight) {
      svg += `<line x1="${x4+baseSmall/2}" y1="${y4}" x2="${x4+baseSmall/2}" y2="${y1}" stroke="#D97706" stroke-width="1" stroke-dasharray="4"/>`;
      svg += `<text x="${x4+baseSmall/2+5}" y="${y1 - height/2}" text-anchor="start" font-size="10" fill="#D97706">${labelHeight}${unit}</text>`;
    }
    svg += `</svg>`;
    return svg;
  },

  // 5. Hình bình hành
  parallelogram: (base, side, height, labelBase = "", labelSide = "", labelHeight = "", unit = "cm") => {
    const offset = 20; // độ xiên
    const x1 = 20, y1 = 50;
    const x2 = 20 + base, y2 = 50;
    const x3 = 20 + base + offset, y3 = 50 - height;
    const x4 = 20 + offset, y4 = 50 - height;
    let svg = `<svg width="${base+offset+30}" height="${height+30}" viewBox="0 0 ${base+offset+30} ${height+30}" style="display:block;margin:0 auto">
      <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}" fill="none" stroke="#7C3AED" stroke-width="2"/>`;
    if (labelBase) svg += `<text x="${x1+base/2}" y="${y1+15}" text-anchor="middle" font-size="10" fill="#333">${labelBase}${unit}</text>`;
    if (labelSide) svg += `<text x="${x4-15}" y="${y4+height/2}" text-anchor="middle" font-size="10" fill="#333">${labelSide}${unit}</text>`;
    if (labelHeight) {
      svg += `<line x1="${x4+base/2}" y1="${y4}" x2="${x4+base/2}" y2="${y1}" stroke="#D97706" stroke-width="1" stroke-dasharray="4"/>`;
      svg += `<text x="${x4+base/2+5}" y="${y1 - height/2}" text-anchor="start" font-size="10" fill="#D97706">${labelHeight}${unit}</text>`;
    }
    svg += `</svg>`;
    return svg;
  },

  // 6. Hình thoi
  rhombus: (diag1, diag2, labelD1 = "", labelD2 = "", unit = "cm") => {
    const centerX = 50, centerY = 50;
    const x1 = centerX, y1 = centerY - diag2/2;
    const x2 = centerX + diag1/2, y2 = centerY;
    const x3 = centerX, y3 = centerY + diag2/2;
    const x4 = centerX - diag1/2, y4 = centerY;
    let svg = `<svg width="${diag1+40}" height="${diag2+40}" viewBox="0 0 ${diag1+40} ${diag2+40}" style="display:block;margin:0 auto">
      <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}" fill="none" stroke="#7C3AED" stroke-width="2"/>`;
    if (labelD1) {
      svg += `<line x1="${x4}" y1="${y4}" x2="${x2}" y2="${y2}" stroke="#D97706" stroke-width="1" stroke-dasharray="4"/>`;
      svg += `<text x="${centerX+diag1/4+5}" y="${centerY-5}" text-anchor="middle" font-size="10" fill="#D97706">${labelD1}${unit}</text>`;
    }
    if (labelD2) {
      svg += `<line x1="${x1}" y1="${y1}" x2="${x3}" y2="${y3}" stroke="#D97706" stroke-width="1" stroke-dasharray="4"/>`;
      svg += `<text x="${centerX-10}" y="${centerY+diag2/4}" text-anchor="middle" font-size="10" fill="#D97706">${labelD2}${unit}</text>`;
    }
    svg += `</svg>`;
    return svg;
  },

  // 7. Hình tròn
  circle: (radius, labelR = "", labelD = "", unit = "cm") => `
    <svg width="${radius*2+40}" height="${radius*2+40}" viewBox="0 0 ${radius*2+40} ${radius*2+40}" style="display:block;margin:0 auto">
      <circle cx="${radius+20}" cy="${radius+20}" r="${radius}" fill="none" stroke="#7C3AED" stroke-width="2"/>
      ${labelR ? `<text x="${radius+20}" y="${radius/2+10}" text-anchor="middle" font-size="10" fill="#333">${labelR}${unit}</text>` : ''}
      ${labelD ? `<line x1="${20}" y1="${radius+20}" x2="${radius*2+20}" y2="${radius+20}" stroke="#D97706" stroke-width="1" stroke-dasharray="4"/>` : ''}
      ${labelD ? `<text x="${radius+20}" y="${radius+15}" text-anchor="middle" font-size="10" fill="#D97706">${labelD}${unit}</text>` : ''}
    </svg>
  `,

  // 8. Hình hộp chữ nhật (3D)
  box: (length, width, height, labelL = "", labelW = "", labelH = "", unit = "cm") => {
    const w = length, d = width, h = height;
    return `<svg width="${w+60}" height="${h+50}" viewBox="0 0 ${w+60} ${h+50}" style="display:block;margin:0 auto">
      <rect x="15" y="15" width="${w}" height="${h}" fill="none" stroke="#7C3AED" stroke-width="2"/>
      <polygon points="${15+w},15 ${25+w+10},25 ${25+d},25 ${15+d},15" fill="none" stroke="#7C3AED" stroke-width="2"/>
      <polygon points="${15},${15+h} ${15+d},${15+h} ${25+d},${25+h} ${15+w},${15+h}" fill="none" stroke="#7C3AED" stroke-width="2"/>
      <line x1="${15+w}" y1="15" x2="${15+w+10}" y2="25" stroke="#7C3AED" stroke-width="2"/>
      <line x1="${15+w}" y1="${15+h}" x2="${15+w+10}" y2="${25+h}" stroke="#7C3AED" stroke-width="2"/>
      ${labelL ? `<text x="${w/2+15}" y="12" text-anchor="middle" font-size="10" fill="#333">${labelL}${unit}</text>` : ''}
      ${labelW ? `<text x="${w+25}" y="${h/2+15}" text-anchor="middle" font-size="10" fill="#333">${labelW}${unit}</text>` : ''}
      ${labelH ? `<text x="${w/2+15}" y="${h+25}" text-anchor="middle" font-size="10" fill="#333">${labelH}${unit}</text>` : ''}
    </svg>`;
  },

  // 9. Hình lập phương (dùng lại box)
  cube: (side, label = "", unit = "cm") => Shapes.box(side, side, side, label, label, label, unit),

  // 10. Đoạn thẳng (cho bài tập đo lường)
  line: (length, label = "", unit = "cm", showRuler = false, startLabel = "", endLabel = "") => {
    const width = length * 8;
    const svgWidth = Math.max(width + 40, 100);
    let svg = `<svg width="${svgWidth}" height="70" viewBox="0 0 ${svgWidth} 70" style="display:block;margin:0 auto">`;
    svg += `<line x1="15" y1="35" x2="${15+width}" y2="35" stroke="#7C3AED" stroke-width="3"/>`;
    svg += `<circle cx="15" cy="35" r="5" fill="#7C3AED"/>`;
    svg += `<circle cx="${15+width}" cy="35" r="5" fill="#7C3AED"/>`;
    if (startLabel) svg += `<text x="8" y="30" text-anchor="end" font-size="12" fill="#333" font-weight="bold">${startLabel}</text>`;
    if (endLabel) svg += `<text x="${15+width+8}" y="30" text-anchor="start" font-size="12" fill="#333" font-weight="bold">${endLabel}</text>`;
    if (showRuler) {
      for (let i = 0; i <= length; i++) {
        let x = 15 + i * 8;
        svg += `<line x1="${x}" y1="35" x2="${x}" y2="45" stroke="#999" stroke-width="1"/>`;
        if (i % 2 === 0 && i > 0)
          svg += `<text x="${x}" y="55" text-anchor="middle" font-size="8" fill="#666">${i}</text>`;
      }
    }
    svg += `<text x="${15+width/2}" y="62" text-anchor="middle" font-size="10" fill="#333">${label || length+unit}</text>`;
    svg += `</svg>`;
    return svg;
  }
};