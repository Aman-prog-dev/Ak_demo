/* aman.learn — shared data, icons and layout rendering */

const icon = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><path d="M9 13h6"/><path d="M9 17h4"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18l-7 8v6l-4-2v-4z"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M15 4h5v5"/><path d="M11 13 20 4"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 4 12 8-12 8z"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9 12 4 2 9l10 5z"/><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 7 4 4-4 4"/><path d="M12 16h7"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3l1.6 4.4L15 9l-4.4 1.6L9 15l-1.6-4.4L3 9l4.4-1.6z"/><path d="M18 13l.9 2.1L21 16l-2.1.9L18 19l-.9-2.1L15 16l2.1-.9z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6-6 6 6 6"/><path d="m15 6 6 6-6 6"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3 3 10.5l7 3 3 7z"/><path d="M21 3 10 14"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L20 8l-4-4L4 16z"/><path d="m14 6 4 4"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
    google: '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M23 12.2c0-.8-.1-1.4-.2-2.1H12v4h6.2c-.1 1-.8 2.5-2.2 3.5v.1l3.3 2.5c1.9-1.8 3-4.4 3-7.5z"/><path fill="#34A853" d="M12 23.5c2.9 0 5.3-1 7-2.6l-3.3-2.6c-.9.6-2.1 1-3.7 1-2.8 0-5.2-1.9-6.1-4.5l-.1.1-3.3 2.6C4.2 21 7.8 23.5 12 23.5z"/><path fill="#FBBC05" d="M5.9 14.8c-.2-.7-.4-1.4-.4-2.3s.1-1.6.4-2.3V10L2.5 7.4A11.5 11.5 0 0 0 1.2 12.5c0 1.9.4 3.6 1.3 5.1z"/><path fill="#EA4335" d="M12 5.7c2 0 3.3.9 4.1 1.6l3-2.9C17.3 2.7 14.9 1.5 12 1.5 7.8 1.5 4.2 4 2.5 7.4l3.4 2.7C6.8 7.6 9.2 5.7 12 5.7z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>'
};

const COURSES = [
    { slug: 'adca', title: 'ADCA — Advanced Diploma in Computer Applications', category: 'Core diploma', desc: 'A complete computer applications diploma covering office tools, design, internet skills and practical projects.', duration: '12 months', lessons: 48, icon: 'monitor', tone: 'tone-yellow' },
    { slug: 'dca', title: 'DCA — Diploma in Computer Applications', category: 'Core diploma', desc: 'Build a dependable foundation in computer operations, office productivity and day-to-day digital work.', duration: '6 months', lessons: 28, icon: 'bag', tone: 'tone-mint' },
    { slug: 'dtp', title: 'DTP — Desktop Publishing', category: 'Design', desc: 'Learn to create print-ready posters, invitations, notices and documents with confidence.', duration: '3 months', lessons: 20, icon: 'sparkle', tone: 'tone-coral' },
    { slug: 'advanced-excel', title: 'Advanced Excel', category: 'Analytics', desc: 'Go beyond spreadsheets with formulas, dashboards and VBA basics that save time at work.', duration: '8 weeks', lessons: 24, icon: 'bolt', tone: 'tone-sand' },
    { slug: 'power-bi', title: 'Power BI', category: 'Analytics', desc: 'Turn business data into clear, shareable dashboards and decisions people can act on.', duration: '8 weeks', lessons: 22, icon: 'target', tone: 'tone-mint' },
    { slug: 'programming', title: 'Programming', category: 'Programming', desc: 'Start with Python, C/C++, Java and full-stack basics through small projects that make code feel useful.', duration: '6 months', lessons: 40, icon: 'code', tone: 'tone-lilac' },
    { slug: 'cpa', title: 'CPA — Computerized Professional Accounting', category: 'Accounting', desc: 'Learn Tally Prime, GST, ledgers and business accounting workflows used by local employers.', duration: '4 months', lessons: 26, icon: 'bag', tone: 'tone-sand' },
    { slug: 'web-designing', title: 'Web Designing', category: 'Design', desc: 'Create responsive websites with HTML5, CSS3, JavaScript, Tailwind or Bootstrap and UI basics.', duration: '3 months', lessons: 24, icon: 'terminal', tone: 'tone-teal' },
    { slug: 'digital-marketing', title: 'Digital Marketing', category: 'Business', desc: 'Learn SEO, social media, Google Ads and content marketing to help a local business find its audience.', duration: '5 months', lessons: 22, icon: 'send', tone: 'tone-coral' }
];

const NOTES = [
    { title: 'MS Excel Formulas — one page revision', type: 'Quick revision', desc: 'SUM, AVERAGE, IF and lookup reminders with small examples you can copy into practice.', subject: 'MS Office', pages: 2, downloads: 248, tone: 'tone-sand' },
    { title: 'Tally Prime: GST basics', type: 'Handwritten notes', desc: 'A clean walkthrough of ledgers, tax rates and the voucher flow from class.', subject: 'Tally + GST', pages: 5, downloads: 191, tone: 'tone-mint' },
    { title: 'Computer shortcuts worth remembering', type: 'Cheat sheet', desc: 'The shortcuts that save minutes every day, arranged by the moment you need them.', subject: 'Fundamentals', pages: 1, downloads: 164, tone: 'tone-coral' },
    { title: 'HTML tags & page structure', type: 'Handwritten notes', desc: 'From the first doctype to a neat semantic page skeleton, with margin notes.', subject: 'Web Design', pages: 4, downloads: 137, tone: 'tone-teal' },
    { title: 'Python logic: loops made simple', type: 'Practice notes', desc: 'Trace a loop on paper first, then write it in code. Includes three tiny exercises.', subject: 'Python', pages: 3, downloads: 122, tone: 'tone-mint' },
    { title: 'Interview & email phrases', type: 'Practice sheet', desc: 'Polite, clear lines for introducing yourself, asking questions and following up.', subject: 'Workplace English', pages: 2, downloads: 96, tone: 'tone-lilac' }
];

const NAV = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'courses.html', label: 'Courses', key: 'courses' },
    { href: 'notes.html', label: 'Notes Hub', key: 'notes' },
    { href: 'dashboard.html', label: 'My learning', key: 'dashboard' }
];

const logoMarkup = `<a class="logo" href="index.html">
    <span class="logo-tile">${icon.terminal}</span>
    <span class="logo-word">aman.learn</span>
</a>`;

function renderHeader(active) {
    const links = NAV.map(
        (n) =>
            `<a href="${n.href}"${n.key === active ? ' aria-current="page"' : ''}>${n.label}</a>`
    ).join('');

    return `<header class="site-header">
    <div class="shell">
        <div class="header-row">
            ${logoMarkup}
            <nav class="nav-center">${links}</nav>
            <div class="header-actions">
                <a class="login" href="sign-in.html">Log in</a>
                <a class="btn btn-primary btn-sm" href="sign-up.html">Sign up</a>
                <span class="avatar" aria-hidden="true">AK</span>
                <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false">${icon.menu}</button>
            </div>
        </div>
        <nav class="nav-mobile">${links}<a href="sign-in.html">Log in</a></nav>
    </div>
</header>`;
}

function renderFooter() {
    return `<footer class="site-footer">
    <div class="shell">
        <div class="footer-grid">
            <div>
                ${logoMarkup}
                <p>Practical computer skills, taught with patience. One useful lesson at a time, closer to the work you want.</p>
                <span class="footer-note">Local learning. Real confidence.</span>
            </div>
            <div>
                <h4>Visit the centre</h4>
                <address>Indra Park, Palam Village<br />New Delhi 110045</address>
            </div>
            <div>
                <h4>Talk to Aman</h4>
                <div class="contact">
                    <a href="tel:9582358297">${icon.phone}9582358297</a>
                    <a href="mailto:ak6141318@gmail.com">${icon.send}ak6141318@gmail.com</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">© 2024 Aman Kumar Computer Training Centre · Built for learners in Palam and beyond.</div>
    </div>
</footer>`;
}

function courseCard(course) {
    return `<article class="card">
    <div class="card-top">
        <span class="icon-tile ${course.tone}">${icon[course.icon]}</span>
        <span class="tag">${course.category}</span>
    </div>
    <h3>${course.title}</h3>
    <p>${course.desc}</p>
    <div class="card-meta">
        <span>${icon.clock}${course.duration}</span>
        <span>${icon.book}${course.lessons} lessons</span>
    </div>
    <div class="card-foot">
        <a class="textlink" href="courses.html">View course ${icon.arrow}</a>
        <a class="btn btn-primary btn-sm" href="sign-in.html">Start learning</a>
    </div>
</article>`;
}

function noteCard(note) {
    return `<article class="card">
    <div class="card-top">
        <span class="icon-tile ${note.tone}">${icon.file}</span>
        <span class="tag tag-plain">${note.type}</span>
    </div>
    <h3>${note.title}</h3>
    <p>${note.desc}</p>
    <div class="note-meta">
        <span>${note.subject} · ${note.pages} pages</span>
        <span class="dl">${icon.download}${note.downloads} downloads</span>
    </div>
    <button class="save-link" type="button">${icon.download}Save to my shelf</button>
</article>`;
}

/* ---------- boot ---------- */

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;

    const headerSlot = document.querySelector('[data-slot="header"]');
    if (headerSlot) headerSlot.outerHTML = renderHeader(page);

    const footerSlot = document.querySelector('[data-slot="footer"]');
    if (footerSlot) footerSlot.outerHTML = renderFooter();

    // inject icons into placeholders
    document.querySelectorAll('[data-icon]').forEach((el) => {
        const name = el.dataset.icon;
        if (icon[name]) el.innerHTML = icon[name];
    });

    // mobile nav
    const toggle = document.querySelector('.nav-toggle');
    const mobile = document.querySelector('.nav-mobile');
    if (toggle && mobile) {
        toggle.addEventListener('click', () => {
            const open = mobile.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
    }

    // save-to-shelf toggles
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.save-link');
        if (!btn) return;
        const saved = btn.classList.toggle('is-saved');
        btn.innerHTML = saved
            ? `${icon.check}Saved to my shelf`
            : `${icon.download}Save to my shelf`;
    });

    if (page === 'home') bootHome();
    if (page === 'courses') bootCatalog();
    if (page === 'notes') bootNotes();
});

function bootHome() {
    const grid = document.querySelector('[data-home-courses]');
    if (grid) grid.innerHTML = COURSES.slice(0, 4).map(courseCard).join('');

    const rows = document.querySelector('[data-home-notes]');
    if (rows) {
        rows.innerHTML = NOTES.slice(0, 3)
            .map(
                (n) => `<a class="note-row" href="notes.html">
    <span class="icon-tile ${n.tone}">${icon.file}</span>
    <span class="body">
        <b>${n.title}</b>
        <small>${n.subject} · ${n.pages} pages</small>
    </span>
    ${icon.arrow}
</a>`
            )
            .join('');
    }
}

function makeFilter({ items, chipSelector, inputSelector, gridSelector, countSelector, match, render, label }) {
    const grid = document.querySelector(gridSelector);
    const input = document.querySelector(inputSelector);
    const chips = [...document.querySelectorAll(chipSelector)];
    const count = document.querySelector(countSelector);
    let filter = 'all';

    function apply() {
        const q = (input?.value || '').trim().toLowerCase();
        const list = items.filter((item) => match(item, filter, q));
        grid.innerHTML = list.length
            ? list.map(render).join('')
            : `<div class="empty">Nothing matches that yet. Try another word or clear the filters.</div>`;
        grid.style.gridTemplateColumns = list.length ? '' : '1fr';
        if (count) count.innerHTML = `<strong>${list.length}</strong> ${label(list.length)}`;
    }

    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            chips.forEach((c) => c.classList.remove('active', 'active-yellow'));
            chip.classList.add(chip.dataset.tone === 'yellow' ? 'active-yellow' : 'active');
            filter = chip.dataset.filter;
            apply();
        });
    });

    input?.addEventListener('input', apply);
    apply();
}

function bootCatalog() {
    makeFilter({
        items: COURSES,
        chipSelector: '[data-course-chip]',
        inputSelector: '[data-course-search]',
        gridSelector: '[data-course-grid]',
        countSelector: '[data-course-count]',
        label: (n) => `${n === 1 ? 'course' : 'courses'} to explore`,
        match: (c, filter, q) =>
            (filter === 'all' || c.category === filter) &&
            (!q || (c.title + ' ' + c.desc + ' ' + c.category).toLowerCase().includes(q)),
        render: courseCard
    });
}

function bootNotes() {
    makeFilter({
        items: NOTES,
        chipSelector: '[data-note-chip]',
        inputSelector: '[data-note-search]',
        gridSelector: '[data-note-grid]',
        countSelector: '[data-note-count]',
        label: (n) => `${n === 1 ? 'note' : 'notes'} on the shelf`,
        match: (n, filter, q) =>
            (filter === 'all' || n.type === filter) &&
            (!q || (n.title + ' ' + n.desc + ' ' + n.subject).toLowerCase().includes(q)),
        render: noteCard
    });
}
