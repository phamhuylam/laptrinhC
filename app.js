(() => {
  'use strict';

  const lessons = window.C_LESSONS;
  const storageKey = 'c-moi-ngay-v1';
  const main = document.querySelector('main');
  const icons = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
    book: '<path d="M12 5v16M3 3h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v16h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z"/>',
    code: '<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18"/>',
    chart: '<path d="M4 3v17h17M9 15v-4m5 4V6m5 9V9"/>',
    search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    'arrow-up': '<path d="M6 18 18 6M6 6h12v12"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/><rect x="10" y="10" width="4" height="4"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    terminal: '<path d="m5 7 5 5-5 5m8 0h6"/>',
    flag: '<path d="M5 21V3m0 1c5-4 9 4 14 0v10c-5 4-9-4-14 0"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
    leaf: '<path d="M20 3c1 11-2 17-9 17a7 7 0 0 1-7-7C4 6 12 7 20 3ZM4 21 15 10"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>'
  };
  let state = readState();
  let currentTab = 'lesson';
  let searchTerm = '';
  let toastTimer;

  function escape(value) {
    return String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  }

  function icon(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.code}</svg>`;
  }

  function hydrateIcons(root = document) {
    root.querySelectorAll('[data-icon]').forEach(element => { element.innerHTML = icon(element.dataset.icon); });
  }

  function normalizeState(value) {
    const clean = {completed: [], quiz: {}, drafts: {}};
    if (!value || typeof value !== 'object') return clean;
    if (Array.isArray(value.completed)) clean.completed = [...new Set(value.completed.filter(day => Number.isInteger(day) && day >= 1 && day <= 7))];
    for (const lesson of lessons) {
      const entry = value.quiz?.[lesson.day];
      if (entry && Array.isArray(entry.answers)) {
        clean.quiz[lesson.day] = {answers: lesson.quiz.map((question, index) => Number.isInteger(entry.answers[index]) && entry.answers[index] >= 0 && entry.answers[index] < question.options.length ? entry.answers[index] : null), graded: entry.graded === true};
      }
      if (typeof value.drafts?.[lesson.day] === 'string') clean.drafts[lesson.day] = value.drafts[lesson.day].slice(0, 100000);
    }
    return clean;
  }

  function readState() {
    try { return normalizeState(JSON.parse(localStorage.getItem(storageKey))); }
    catch { return normalizeState(null); }
  }

  function saveState() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); }
    catch { toast('Trình duyệt đang chặn lưu dữ liệu. Hãy tải bản tiến độ để giữ lại.'); }
    updateProgress();
  }

  function updateProgress() {
    document.querySelector('#side-progress').style.width = `${state.completed.length / 7 * 100}%`;
    document.querySelector('#side-progress-label').textContent = `${state.completed.length} / 7 ngày hoàn thành`;
  }

  function toast(message) {
    const element = document.querySelector('#toast');
    element.textContent = message;
    element.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.classList.remove('visible'), 3500);
  }

  function nextDay() { return lessons.find(lesson => !state.completed.includes(lesson.day))?.day || 7; }
  function isDone(day) { return state.completed.includes(day); }
  function lessonFromRoute() { return lessons.find(lesson => `#bai-${lesson.day}` === location.hash); }
  function scoreFor(lesson) {
    const attempt = state.quiz[lesson.day];
    if (!attempt?.graded) return null;
    return lesson.quiz.reduce((score, question, index) => score + Number(attempt.answers[index] === question.answer), 0);
  }

  function highlight(code) {
    const tokens = /\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|\b(?:int|float|double|char|void|return|if|else|for|while|const|sizeof|struct)\b|\b\d+(?:\.\d+)?\b/g;
    let html = '';
    let lastIndex = 0;
    for (const token of code.matchAll(tokens)) {
      html += escape(code.slice(lastIndex, token.index));
      const value = token[0];
      const kind = value.startsWith('/') ? 'comment' : value.startsWith('"') ? 'string' : /^\d/.test(value) ? 'number' : 'keyword';
      html += `<span class="code-${kind}">${escape(value)}</span>`;
      lastIndex = token.index + value.length;
    }
    return html + escape(code.slice(lastIndex));
  }

  function renderCards() {
    const symbols = ['{ }', 'if', 'for', '[ ]', 'f(x)', '.0', '</>'];
    const normalized = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();
    const matches = lessons.filter(lesson => normalized(`${lesson.title} ${lesson.shortTitle} ${lesson.objective} ngay ${lesson.day}`).includes(normalized(searchTerm.trim())));
    if (!matches.length) return '<p class="empty-results">Chưa tìm thấy bài phù hợp. Thử “mảng”, “hàm” hoặc “ngày 1”.</p>';
    return matches.map(lesson => `<a class="lesson-card ${lesson.day === nextDay() ? 'current' : ''} ${lesson.day === 7 ? 'final-card' : ''}" href="#bai-${lesson.day}"><div class="card-top"><span class="day-label">NGÀY ${String(lesson.day).padStart(2, '0')}</span><span class="lesson-symbol">${isDone(lesson.day) ? icon('check') : escape(symbols[lesson.day - 1])}</span></div><h3>${escape(lesson.title)}</h3><p>${escape(lesson.subtitle)}</p><div class="card-bottom"><span>${icon('clock')}45–60 phút</span><span class="card-action">${isDone(lesson.day) ? 'Đã hoàn thành' : lesson.day === nextDay() ? 'Bắt đầu học' : lesson.day === 7 ? 'Bài tổng hợp' : 'Xem bài học'}${icon('arrow')}</span></div></a>`).join('');
  }

  function roadmapSection() {
    return `<section id="roadmap"><div class="section-heading"><h2>Lộ trình của bạn</h2><span>7 ngày · Từng bước làm quen với C</span></div><div class="lesson-grid" id="lesson-grid">${renderCards()}</div></section>`;
  }

  function renderHome(roadmapOnly = false) {
    if (roadmapOnly) {
      main.innerHTML = `<div class="page-heading"><h1>Một tuần, bảy bước nhỏ.</h1><p>Mỗi bài gồm kiến thức, thực hành và 3 câu tự kiểm tra. Bạn có thể mở bài theo bất kỳ thứ tự nào.</p></div>${roadmapSection()}`;
      return;
    }
    main.innerHTML = `<div class="welcome"><p>Chào bạn, <strong>hôm nay mình cùng học C nhé!</strong></p><span>${icon('sun')}Mỗi ngày một bước tiến</span></div>
      <section class="hero"><div><div class="eyebrow">Lập trình C dành cho người mới</div><h1>Mỗi ngày một chút.<br>Tự viết chương trình C.</h1><p>Bắt đầu từ biến, đi qua vòng lặp, rồi tự hoàn thành chương trình đầu tiên trong 7 ngày.</p><a class="button primary" href="#bai-${nextDay()}">${state.completed.length ? 'Tiếp tục học' : 'Bắt đầu ngày 1'}${icon('arrow')}</a><div class="hero-foot">45–60 phút mỗi ngày, theo nhịp của bạn.</div></div><div class="hero-code" aria-label="Ví dụ chương trình C đầu tiên"><div class="code-titlebar"><i class="window-dot"></i><i class="window-dot"></i><i class="window-dot"></i><span>xin_chao.c</span></div><pre><code>${highlight('#include <stdio.h>\n\nint main(void) {\n    // Dòng code đầu tiên của bạn\n    printf("Xin chao, C!\\n");\n    return 0;\n}')}</code></pre><div class="hero-code-bottom"><span>→ Xin chao, C!</span><span>C · UTF-8</span></div></div></section>
      <div class="metrics"><div class="metric"><span class="metric-icon">${icon('book')}</span><div><strong>7 ngày học</strong><small>Từ cơ bản đến bài tổng hợp</small></div></div><div class="metric"><span class="metric-icon">${icon('clock')}</span><div><strong>45–60 phút / ngày</strong><small>Đọc hiểu, tự viết, thử lại</small></div></div><div class="metric"><span class="metric-icon">${icon('check')}</span><div><strong>21 câu tự kiểm tra</strong><small>Củng cố sau mỗi bài học</small></div></div></div>
      <div class="content-grid">${roadmapSection()}<aside class="home-aside"><section class="side-panel"><div class="panel-label">${icon('leaf')}Một buổi học của bạn</div><div class="session-step"><span class="step-icon">${icon('book')}</span><div><strong>Đọc và hiểu ví dụ</strong><p>10 phút · Đọc từng dòng code</p></div></div><div class="session-step"><span class="step-icon">${icon('terminal')}</span><div><strong>Tự tay viết lại</strong><p>25–35 phút · Thay đổi và thử nghiệm</p></div></div><div class="session-step"><span class="step-icon">${icon('check')}</span><div><strong>Tự kiểm tra</strong><p>10–15 phút · Dự đoán trước khi chạy</p></div></div></section><section class="side-panel project"><div class="panel-label">${icon('flag')}ĐÍCH ĐẾN CUỐI TUẦN</div><h3>Chương trình<br>thống kê điểm</h3><p>Tìm điểm cao nhất, tính trung bình và đếm số điểm đạt từ một mảng dữ liệu.</p><div class="project-bottom">${icon('code')}Bạn sẽ tự viết được.</div></section><p class="note">Một tuần để làm quen với nền tảng.<br>Hiểu bài nào, chắc bài đó.</p></aside></div>`;
  }

  function codePanel(lesson) {
    return `<div class="code-panel"><div class="code-panel-header"><span>ngay_${lesson.day}.c</span><button data-action="copy-code" data-day="${lesson.day}">${icon('copy')}Sao chép</button></div><pre><code>${highlight(lesson.code)}</code></pre><div class="output"><span>KẾT QUẢ DỰ KIẾN</span><pre>${escape(lesson.output)}</pre></div></div><p class="code-note">Ví dụ dùng trình biên dịch C với <code>main()</code> và <code>printf()</code>. <button class="inline-button text-link" data-action="arduino">Học bằng Arduino IDE</button></p>`;
  }

  function lessonBody(lesson) {
    return `<div class="lesson-content"><article class="article-panel"><h2>Nắm chắc từng ý</h2>${lesson.concepts.map(concept => `<section class="concept"><h3>${escape(concept.title)}</h3><p>${escape(concept.text)}</p></section>`).join('')}<h3 style="margin-top:27px">Thử theo từng bước</h3><ol class="steps">${lesson.steps.map(step => `<li>${escape(step)}</li>`).join('')}</ol><button class="button primary" data-action="tab" data-tab="practice">Sang phần thực hành ${icon('arrow')}</button></article><div>${codePanel(lesson)}</div></div>`;
  }

  function practiceBody(lesson) {
    const draft = state.drafts[lesson.day] ?? lesson.code;
    return `<div class="lesson-content"><article class="article-panel"><h2>Đến lượt bạn viết</h2><p class="exercise-prompt">${escape(lesson.exercise.prompt)}</p><details class="disclosure"><summary>Mình cần một gợi ý</summary><p>${escape(lesson.exercise.hint)}</p></details><details class="disclosure"><summary>Đối chiếu lời giải</summary><pre>${escape(lesson.exercise.solution)}</pre></details><p class="practice-note">Hãy tự thử trước khi mở lời giải. Phần lời giải có thể là một hàm cần gọi từ <code>main()</code>.</p><button class="button secondary" data-action="tab" data-tab="quiz">Sang phần tự kiểm tra ${icon('arrow')}</button></article><section class="article-panel"><label class="scratch-label" for="scratchpad">Bản nháp C của bạn</label><textarea class="scratchpad" id="scratchpad" spellcheck="false" maxlength="100000" aria-describedby="scratch-help">${escape(draft)}</textarea><div class="practice-actions"><button class="button secondary" data-action="download-code" data-day="${lesson.day}">${icon('download')}Tải tệp .c</button><button class="button secondary" data-action="copy-draft" data-day="${lesson.day}">${icon('copy')}Sao chép code</button><a class="button primary" href="https://www.programiz.com/c-programming/online-compiler/" target="_blank" rel="noopener noreferrer">Mở trình biên dịch C ${icon('arrow-up')}</a></div><p id="scratch-help" class="practice-note">Bản nháp tự lưu trên trình duyệt. Sao chép rồi dán code vào trình biên dịch C để chạy.</p></section></div>`;
  }

  function quizBody(lesson) {
    const attempt = state.quiz[lesson.day] || {answers: [], graded: false};
    const score = scoreFor(lesson);
    return `<section class="quiz-wrap"><div class="section-heading"><h2>Kiểm tra xem bạn đã hiểu chưa</h2><span>3 câu · Đạt từ 2 câu đúng</span></div><form id="quiz-form">${lesson.quiz.map((question, questionIndex) => `<fieldset class="quiz-card"><legend>${questionIndex + 1}. ${escape(question.question)}</legend>${question.options.map((option, optionIndex) => `<label class="quiz-option ${attempt.graded && optionIndex === question.answer ? 'correct' : attempt.graded && attempt.answers[questionIndex] === optionIndex ? 'incorrect' : ''}"><input type="radio" name="question-${questionIndex}" id="answer-${questionIndex}-${optionIndex}" value="${optionIndex}" data-question="${questionIndex}" ${attempt.answers[questionIndex] === optionIndex ? 'checked' : ''}><span>${escape(option)}</span></label>`).join('')}${attempt.graded ? `<p class="quiz-explanation">${escape(question.explanation)}</p>` : ''}</fieldset>`).join('')}<div class="quiz-actions"><button class="button secondary" type="submit">Kiểm tra đáp án ${icon('check')}</button><button class="button primary" type="button" data-action="complete" data-day="${lesson.day}" ${score === null || score < 2 || isDone(lesson.day) ? 'disabled' : ''}>${isDone(lesson.day) ? 'Đã hoàn thành bài' : 'Đánh dấu hoàn thành'}${icon('check')}</button></div></form>${score !== null ? `<div class="quiz-result" role="status">Bạn trả lời đúng <strong>${score}/3 câu</strong>. ${score >= 2 ? 'Bạn đã đạt phần tự kiểm tra. Hãy đánh dấu hoàn thành để ghi lại tiến độ.' : 'Đọc phần giải thích, xem lại bài rồi thử lại nhé.'}</div>` : ''}</section>`;
  }

  function renderLesson(lesson) {
    const labels = {lesson: 'Bài học', practice: 'Thực hành', quiz: 'Tự kiểm tra'};
    main.innerHTML = `<a class="back-link" href="#lo-trinh">${icon('arrow')}Về lộ trình</a><div class="lesson-intro"><div><div class="lesson-day">NGÀY ${String(lesson.day).padStart(2, '0')} / 07 · ${escape(lesson.duration)}</div><h1>${escape(lesson.title)}</h1><p>${escape(lesson.subtitle)}</p></div><a class="button secondary" href="#tien-do">${icon('chart')}Xem tiến độ</a></div><div class="objective"><strong>Mục tiêu hôm nay</strong>${escape(lesson.objective)}</div><div class="lesson-tabs" role="tablist" aria-label="Phần học">${Object.entries(labels).map(([key, label]) => `<button role="tab" id="tab-${key}" aria-controls="lesson-panel" aria-selected="${key === currentTab}" data-action="tab" data-tab="${key}" class="${currentTab === key ? 'active' : ''}">${label}</button>`).join('')}</div><div id="lesson-panel" role="tabpanel" aria-labelledby="tab-${currentTab}">${currentTab === 'practice' ? practiceBody(lesson) : currentTab === 'quiz' ? quizBody(lesson) : lessonBody(lesson)}</div><div class="next-lesson"><span>${isDone(lesson.day) ? '✓ Bạn đã hoàn thành ngày học này.' : 'Cứ thử từng chút. Bạn đang tiến bộ.'}</span>${lesson.day < 7 ? `<a class="lesson-next-link" href="#bai-${lesson.day + 1}">Ngày ${lesson.day + 1} · ${escape(lessons[lesson.day].shortTitle)} ${icon('arrow')}</a>` : '<a class="lesson-next-link" href="#tien-do">Xem thành quả của bạn →</a>'}</div>`;
  }

  function renderReference() {
    const references = [
      {title:'Biến và phép tính',code:'int tuoi = 18;\nfloat diem = 7.5f;\nchar ky_tu = \'A\';\nint du = 7 % 2;  // 1',text:'int lưu số nguyên, float lưu số thực, char lưu ký tự. % lấy phần dư của phép chia số nguyên.'},
      {title:'Điều kiện',code:'if (diem >= 5) {\n    printf("Dat\\n");\n} else {\n    printf("Chua dat\\n");\n}',text:'Dùng == để so sánh bằng nhau, = để gán giá trị. Có thể kết hợp điều kiện bằng && (và), || (hoặc).'},
      {title:'Vòng lặp',code:'int tong = 0;\nfor (int i = 1; i <= 5; i++) {\n    tong += i;\n}\n// tong = 15',text:'Đọc theo thứ tự khởi tạo, kiểm tra điều kiện, chạy thân vòng lặp, cập nhật. Kiểm tra điểm dừng để tránh lặp vô hạn.'},
      {title:'Mảng',code:'int diem[] = {8, 4, 5, 9, 6};\nfor (int i = 0; i < 5; i++) {\n    printf("%d\\n", diem[i]);\n}',text:'Mảng 5 phần tử có chỉ số từ 0 đến 4. Chỉ truy cập trong phạm vi mảng và truyền số phần tử khi đưa mảng vào hàm.'},
      {title:'Hàm',code:'int cong(int a, int b) {\n    return a + b;\n}\n// Goi trong main:\nint ket_qua = cong(2, 3);',text:'Hàm gom một công việc có tên để gọi lại. Tham số nhận dữ liệu đầu vào và return trả kết quả về nơi gọi.'},
      {title:'Chia lấy phần thập phân',code:'int tong = 11;\nint so_luong = 2;\nfloat trung_binh = (float)tong / so_luong;\n// trung_binh = 5.5',text:'11 / 2 bằng 5 vì cả hai toán hạng là số nguyên. Ép kiểu trước phép chia để giữ phần thập phân. Mẫu số phải khác 0.'}
    ];
    main.innerHTML = `<div class="page-heading"><h1>Sổ tay C</h1><p>Mở lại khi cần nhớ cú pháp. Các đoạn ví dụ được dùng trong chương trình C có khai báo phù hợp.</p></div><div class="reference-grid">${references.map(item => `<article class="reference-card"><h2>${item.title}</h2><pre><code>${escape(item.code)}</code></pre><p>${item.text}</p></article>`).join('')}</div>`;
  }

  function renderProgress() {
    const percent = Math.round(state.completed.length / 7 * 100);
    const totalScore = lessons.reduce((total, lesson) => total + (scoreFor(lesson) || 0), 0);
    main.innerHTML = `<div class="page-heading"><h1>Từng dòng code đều có ý nghĩa.</h1><p>Theo dõi những bài bạn đã học và quay lại phần cần luyện thêm.</p></div><section class="progress-hero"><div class="progress-ring" style="background:conic-gradient(#527746 ${percent}%,#c3d7b8 0)"><span>${percent}%</span></div><div><h2>${state.completed.length === 7 ? 'Bạn đã hoàn thành 7 ngày!' : `${state.completed.length} / 7 ngày đã hoàn thành`}</h2><p>${totalScore} / 21 câu trả lời đúng ở các lần kiểm tra gần nhất.</p></div></section><div class="progress-list">${lessons.map(lesson => `<div class="progress-row"><span class="progress-day ${isDone(lesson.day) ? 'done' : ''}">${isDone(lesson.day) ? icon('check') : lesson.day}</span><div><strong>${escape(lesson.title)}</strong><small>${scoreFor(lesson) === null ? 'Chưa làm phần tự kiểm tra' : `Tự kiểm tra ${scoreFor(lesson)}/3 câu đúng`}</small></div><a class="button secondary" href="#bai-${lesson.day}">${isDone(lesson.day) ? 'Ôn lại' : 'Học bài'}${icon('arrow')}</a></div>`).join('')}</div><div class="progress-tools"><button class="button secondary" data-action="export">${icon('download')}Tải bản tiến độ</button><label class="button secondary" for="import-progress">Khôi phục tiến độ<input id="import-progress" type="file" accept="application/json,.json" hidden></label></div><p class="local-notice">Tiến độ và bản nháp được lưu riêng trên trình duyệt này. Tải bản tiến độ để chuyển sang máy khác.</p>`;
  }

  function render() {
    const lesson = lessonFromRoute();
    let view = 'home';
    let label = 'Tổng quan';
    if (lesson) { view = 'roadmap'; label = `Ngày ${lesson.day}`; renderLesson(lesson); }
    else if (location.hash === '#lo-trinh') { view = 'roadmap'; label = 'Lộ trình 7 ngày'; renderHome(true); }
    else if (location.hash === '#so-tay') { view = 'reference'; label = 'Sổ tay C'; renderReference(); }
    else if (location.hash === '#tien-do') { view = 'progress'; label = 'Tiến độ của bạn'; renderProgress(); }
    else { renderHome(); }
    document.querySelector('#breadcrumb').textContent = label;
    document.title = `${lesson ? `${lesson.title} · Ngày ${lesson.day}` : label} — C mỗi ngày`;
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.classList.toggle('active', link.dataset.nav === view);
      if (link.dataset.nav === view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    updateProgress();
  }

  function download(filename, content, type) {
    const blob = new Blob([content], {type});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); toast('Đã sao chép code.'); }
    catch {
      const field = document.createElement('textarea');
      field.value = text;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      toast(copied ? 'Đã sao chép code.' : 'Hãy chọn đoạn code rồi sao chép thủ công.');
    }
  }

  document.addEventListener('click', event => {
    if (event.target.closest('.skip-link')) {
      event.preventDefault();
      main.focus({preventScroll:true});
      main.scrollIntoView({block:'start'});
      return;
    }
    const target = event.target.closest('[data-action]');
    if (!target) return;
    const lesson = lessonFromRoute();
    switch (target.dataset.action) {
      case 'menu': {
        const open = document.querySelector('#sidebar').classList.toggle('open');
        target.setAttribute('aria-expanded', String(open));
        target.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
        break;
      }
      case 'arduino': document.querySelector('#help-dialog').showModal(); break;
      case 'close-help': document.querySelector('#help-dialog').close(); break;
      case 'tab':
        if (!lesson || !['lesson','practice','quiz'].includes(target.dataset.tab)) break;
        currentTab = target.dataset.tab;
        renderLesson(lesson);
        document.querySelector(`#tab-${currentTab}`).focus({preventScroll:true});
        break;
      case 'copy-code': if (lesson) copy(lesson.code); break;
      case 'copy-draft': if (lesson) copy(state.drafts[lesson.day] ?? lesson.code); break;
      case 'download-code': if (lesson) download(`ngay_${lesson.day}.c`, state.drafts[lesson.day] ?? lesson.code, 'text/x-c;charset=utf-8'); break;
      case 'complete':
        if (!lesson || scoreFor(lesson) < 2 || scoreFor(lesson) === null || isDone(lesson.day)) break;
        state.completed.push(lesson.day);
        saveState();
        renderLesson(lesson);
        toast(`Đã hoàn thành ngày ${lesson.day}. ${state.completed.length === 7 ? 'Bạn đã đi hết lộ trình!' : 'Hẹn bạn ở bài tiếp theo!'}`);
        break;
      case 'export': download('tien-do-hoc-c.json', JSON.stringify({app:'c-moi-ngay',version:1,...state}, null, 2), 'application/json'); break;
    }
  });

  document.addEventListener('input', event => {
    if (event.target.id === 'scratchpad') {
      const lesson = lessonFromRoute();
      if (lesson) { state.drafts[lesson.day] = event.target.value; saveState(); }
    }
    if (event.target.id === 'lesson-search') {
      searchTerm = event.target.value;
      if (!document.querySelector('#lesson-grid')) location.hash = '#lo-trinh';
      else document.querySelector('#lesson-grid').innerHTML = renderCards();
    }
  });

  document.addEventListener('change', async event => {
    if (event.target.matches('#quiz-form input[type="radio"]')) {
      const lesson = lessonFromRoute();
      if (!lesson) return;
      const attempt = state.quiz[lesson.day] || {answers: Array(3).fill(null), graded: false};
      attempt.answers[Number(event.target.dataset.question)] = Number(event.target.value);
      attempt.graded = false;
      state.quiz[lesson.day] = attempt;
      saveState();
      document.querySelectorAll('.quiz-explanation,.quiz-result').forEach(element => element.remove());
      document.querySelectorAll('.quiz-option').forEach(element => element.classList.remove('correct','incorrect'));
      document.querySelector('[data-action="complete"]').disabled = true;
    }
    if (event.target.id === 'import-progress') {
      const file = event.target.files[0];
      if (!file) return;
      try {
        if (file.size > 1500000) throw new Error('size');
        const imported = JSON.parse(await file.text());
        if (imported.app !== 'c-moi-ngay' || imported.version !== 1 || !Array.isArray(imported.completed)) throw new Error('format');
        const incoming = normalizeState(imported);
        state.completed = [...new Set([...state.completed, ...incoming.completed])];
        state.drafts = {...state.drafts, ...incoming.drafts};
        state.quiz = {...state.quiz, ...incoming.quiz};
        saveState();
        render();
        toast('Đã khôi phục tiến độ và bản nháp.');
      } catch { toast('Tệp chưa đúng định dạng. Hãy chọn bản tiến độ đã tải từ web này.'); }
      event.target.value = '';
    }
  });

  document.addEventListener('submit', event => {
    if (event.target.id !== 'quiz-form') return;
    event.preventDefault();
    const lesson = lessonFromRoute();
    const attempt = state.quiz[lesson.day];
    if (!attempt || lesson.quiz.some((question, index) => !Number.isInteger(attempt.answers[index]))) {
      toast('Bạn hãy chọn đáp án cho đủ 3 câu nhé.');
      return;
    }
    attempt.graded = true;
    saveState();
    renderLesson(lesson);
    document.querySelector('.quiz-result').scrollIntoView({block:'nearest',behavior:'smooth'});
  });

  document.addEventListener('keydown', event => {
    if (event.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(event.target.tagName) && !event.ctrlKey && !event.metaKey) {
      event.preventDefault(); document.querySelector('#lesson-search').focus();
    }
    if (event.key === 'Escape') {
      document.querySelector('#sidebar').classList.remove('open');
      document.querySelector('[data-action="menu"]').setAttribute('aria-expanded','false');
    }
    if (event.target.matches('[role="tab"]') && ['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) {
      event.preventDefault();
      const tabs = ['lesson','practice','quiz'];
      const index = tabs.indexOf(currentTab);
      currentTab = event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs[2] : tabs[(index + (event.key === 'ArrowRight' ? 1 : 2)) % 3];
      renderLesson(lessonFromRoute());
      document.querySelector(`#tab-${currentTab}`).focus({preventScroll:true});
    }
    if (event.target.id === 'scratchpad' && event.key === 'Tab') {
      if (event.shiftKey) return;
      event.preventDefault();
      const textarea = event.target;
      const start = textarea.selectionStart;
      textarea.setRangeText('    ', start, textarea.selectionEnd, 'end');
      textarea.dispatchEvent(new Event('input', {bubbles:true}));
    }
  });

  window.addEventListener('hashchange', () => {
    currentTab = 'lesson';
    document.querySelector('#sidebar').classList.remove('open');
    document.querySelector('[data-action="menu"]').setAttribute('aria-expanded','false');
    render();
    window.scrollTo(0, 0);
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    state = readState();
    if (document.activeElement?.id !== 'scratchpad') render();
    updateProgress();
  });
  hydrateIcons();
  render();
})();
