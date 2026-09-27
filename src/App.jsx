import { useEffect, useRef, useState } from 'react';

const navItems = [
  { href: '#services', label: 'حوزه‌های فعالیت' },
  { href: '#approach', label: 'شیوه همکاری' },
  { href: '#about', label: 'درباره من' },
  { href: '#faq', label: 'پرسش‌ها' },
];

const services = [
  {
    number: '۰۱',
    icon: 'family',
    title: 'دعاوی خانواده',
    description: 'بررسی دقیق پرونده‌های مهریه، نفقه، حضانت، طلاق و سایر موضوعات خانواده با حفظ حریم خصوصی طرفین.',
    tags: ['مهریه و نفقه', 'حضانت', 'طلاق'],
  },
  {
    number: '۰۲',
    icon: 'building',
    title: 'دعاوی ملکی',
    description: 'پیگیری اختلافات مالکیت، الزام به تنظیم سند، خلع ید، سرقفلی و تعهدات ناشی از معاملات املاک.',
    tags: ['مالکیت', 'تنظیم سند', 'سرقفلی'],
  },
  {
    number: '۰۳',
    icon: 'contract',
    title: 'قراردادها و تعهدات',
    description: 'تنظیم، بازبینی و تفسیر قراردادها با هدف پیشگیری از اختلاف و محافظت روشن از منافع شما.',
    tags: ['تنظیم قرارداد', 'بازبینی', 'مطالبه تعهد'],
  },
  {
    number: '۰۴',
    icon: 'wallet',
    title: 'اسناد تجاری',
    description: 'اقدام حقوقی درباره چک، سفته، مطالبات و اختلافات مالی با انتخاب مسیر متناسب با اسناد موجود.',
    tags: ['چک و سفته', 'مطالبات', 'تضمینات'],
  },
  {
    number: '۰۵',
    icon: 'shield',
    title: 'پرونده‌های کیفری',
    description: 'دفاع مسئولانه و مرحله‌به‌مرحله در پرونده‌های کیفری، از تحقیقات مقدماتی تا رسیدگی نهایی.',
    tags: ['دفاع کیفری', 'شکواییه', 'دادسرا'],
  },
  {
    number: '۰۶',
    icon: 'chat',
    title: 'مشاوره حقوقی',
    description: 'تحلیل موقعیت، سنجش ریسک و طراحی نقشه اقدام پیش از امضا، طرح دعوا یا هر تصمیم حقوقی مهم.',
    tags: ['تحلیل پرونده', 'نقشه اقدام', 'ریسک‌سنجی'],
  },
];

const steps = [
  {
    number: '۱',
    title: 'شنیدن و صورت‌بندی مسئله',
    text: 'شرح ماجرا، نگرانی‌ها و نتیجه مطلوب شما را می‌شنوم تا مسئله حقوقی، دقیق و بدون ابهام تعریف شود.',
  },
  {
    number: '۲',
    title: 'بررسی مدارک و مسیرها',
    text: 'اسناد و شواهد بررسی می‌شوند و مسیرهای ممکن، محدودیت‌ها و ریسک هر انتخاب به زبان روشن توضیح داده می‌شود.',
  },
  {
    number: '۳',
    title: 'طراحی راهبرد پرونده',
    text: 'بر مبنای واقعیت‌های پرونده، یک نقشه اقدام منسجم با اولویت‌ها و گام‌های مشخص تدوین می‌کنیم.',
  },
  {
    number: '۴',
    title: 'پیگیری و گزارش شفاف',
    text: 'در طول مسیر، از اقدامات انجام‌شده و وضعیت پرونده آگاه می‌مانید و تصمیم‌ها با هماهنگی شما پیش می‌روند.',
  },
];

const preparations = [
  {
    icon: 'folder',
    title: 'اسناد را یک‌جا کنید',
    text: 'قراردادها، پیام‌ها، رسیدها، آرای قبلی و هر مدرک مرتبط را به ترتیب زمانی آماده کنید.',
  },
  {
    icon: 'timeline',
    title: 'روایت زمانی بنویسید',
    text: 'تاریخ رویدادهای مهم را کوتاه و دقیق یادداشت کنید؛ این کار تحلیل اولیه را سریع‌تر می‌کند.',
  },
  {
    icon: 'target',
    title: 'نتیجه مطلوب را مشخص کنید',
    text: 'بدانید چه نتیجه‌ای برای شما اولویت دارد تا راهکارها واقع‌بینانه و هدفمند بررسی شوند.',
  },
];

const faqs = [
  {
    question: 'برای جلسه نخست چه مدارکی همراه داشته باشم؟',
    answer: 'هر سندی که به موضوع مرتبط است؛ از قرارداد، رسید و مکاتبه تا رأی یا ابلاغیه قبلی. اگر درباره اهمیت مدرکی مطمئن نیستید، بهتر است آن را نیز همراه داشته باشید. پس از بررسی اولیه، فهرست دقیق مدارک لازم مشخص می‌شود.',
  },
  {
    question: 'آیا اطلاعات پرونده محرمانه می‌ماند؟',
    answer: 'بله. حفظ اسرار و اطلاعات موکل، بخش بنیادین رابطه حرفه‌ای وکیل و موکل است. جزئیات پرونده تنها در حدود لازم برای پیگیری موضوع و مطابق قانون استفاده می‌شود.',
  },
  {
    question: 'آیا پیش از پذیرش وکالت، نتیجه پرونده تضمین می‌شود؟',
    answer: 'خیر. نتیجه هیچ پرونده‌ای را نمی‌توان پیشاپیش تضمین کرد. آنچه ارائه می‌شود، ارزیابی صادقانه اسناد، توضیح ریسک‌ها و پیگیری حرفه‌ای بر پایه قانون و وضعیت واقعی پرونده است.',
  },
  {
    question: 'مدت رسیدگی به پرونده چقدر است؟',
    answer: 'زمان رسیدگی به موضوع پرونده، مرجع صالح، حجم اسناد و روند شعبه بستگی دارد. پس از بررسی اولیه می‌توان تصویری واقع‌بینانه‌تر از مراحل پیش رو ارائه کرد، اما زمان قطعی در اختیار وکیل نیست.',
  },
  {
    question: 'آیا امکان مشاوره پیش از تنظیم قرارداد وجود دارد؟',
    answer: 'بله. بررسی حقوقی پیش از امضا معمولاً کم‌هزینه‌تر و مؤثرتر از حل اختلاف پس از آن است. متن قرارداد و مستندات مرتبط باید پیش از جلسه ارسال یا همراه آورده شود.',
  },
];

function Icon({ name, size = 24, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  };

  const paths = {
    arrow: <><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></>,
    arrowUp: <><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></>,
    check: <path d="m20 6-11 11-5-5" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
    scale: <><path d="m16 16 3-8 3 8a5 5 0 0 1-6 0Z" /><path d="M2 16 5 8l3 8a5 5 0 0 1-6 0Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h18" /></>,
    family: <><circle cx="9" cy="7" r="3" /><path d="M3.5 20v-2.2A4.8 4.8 0 0 1 8.3 13h1.4a4.8 4.8 0 0 1 4.8 4.8V20" /><circle cx="17" cy="9" r="2.3" /><path d="M15.6 14.2a4 4 0 0 1 4.9 3.9V20" /></>,
    building: <><path d="M3 21h18" /><path d="M6 21V5l6-2 6 2v16" /><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" /></>,
    contract: <><path d="M6 2h9l4 4v16H6z" /><path d="M14 2v5h5" /><path d="M9 12h6M9 16h6" /></>,
    wallet: <><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H18v4H5.5a2.5 2.5 0 0 0 0 5H21v7H5a2 2 0 0 1-2-2Z" /><path d="M16 13v-2h5v2" /></>,
    shield: <><path d="M12 22s8-3.8 8-10V5l-8-3-8 3v7c0 6.2 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></>,
    chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 9h8M8 13h5" /></>,
    folder: <><path d="M3 6h7l2 2h9v11H3Z" /><path d="M3 6V4h7l2 2" /></>,
    timeline: <><circle cx="6" cy="6" r="2" /><circle cx="18" cy="12" r="2" /><circle cx="8" cy="19" r="2" /><path d="M8 6h4a4 4 0 0 1 4 4M16 14a5 5 0 0 1-5 5H10" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    document: <><path d="M6 2h9l4 4v16H6z" /><path d="M14 2v5h5M9 12h6M9 16h6" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15 9-2 4-4 2 2-4Z" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .4 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  };
  return <svg {...common}>{paths[name] || paths.scale}</svg>;
}

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#top" aria-label="لیلا آبکه، بازگشت به ابتدای صفحه">
      <span className="brand__mark" aria-hidden="true"><Icon name="scale" size={22} /></span>
      <span className="brand__copy">
        <strong>لیلا آبکه</strong>
        <small>عضو کانون وکلای دادگستری</small>
      </span>
    </a>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -35px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
}

function Header({ onOpenConsultation }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <Brand />
        <nav className="desktop-nav" aria-label="ناوبری اصلی">
          {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className="header__actions">
          <button className="header__cta" type="button" onClick={onOpenConsultation}>
            درخواست مشاوره
            <Icon name="arrow" size={17} />
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'بستن فهرست' : 'باز کردن فهرست'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu__inner">
          <span className="mobile-menu__eyebrow">فهرست دسترسی</span>
          {navItems.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              <span>۰{index + 1}</span>{item.label}
            </a>
          ))}
          <button type="button" onClick={() => { setOpen(false); onOpenConsultation(); }}>
            شروع گفت‌وگوی حقوقی <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onOpenConsultation }) {
  return (
    <section className="hero" id="top">
      <div className="hero__texture" aria-hidden="true" />
      <div className="hero__line hero__line--one" aria-hidden="true" />
      <div className="hero__line hero__line--two" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <Reveal>
            <p className="eyebrow eyebrow--light"><span /> وکالت، مشاوره و همراهی حقوقی</p>
          </Reveal>
          <Reveal delay={90}>
            <h1>در تصمیم‌های حقوقی،<br /><em>یک قدم جلوتر</em> باشید.</h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="hero__lead">مسیر حقوقی شما باید روشن، قابل‌فهم و متکی بر راهبرد باشد؛ از نخستین بررسی تا آخرین مرحله، با دقت و مسئولیت حرفه‌ای در کنار شما هستم.</p>
          </Reveal>
          <Reveal delay={270}>
            <div className="hero__buttons">
              <button className="button button--gold" type="button" onClick={onOpenConsultation}>
                ارزیابی اولیه موضوع <Icon name="arrow" size={19} />
              </button>
              <a className="button button--ghost" href="#services">مشاهده حوزه‌های فعالیت</a>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero__trust" aria-label="اصول حرفه‌ای">
              <span><Icon name="scale" size={18} /> عضو کانون وکلای دادگستری</span>
              <span><Icon name="lock" size={18} /> تعهد به محرمانگی</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__visual-wrap" delay={150}>
          <div className="hero__visual">
            <div className="hero__photo-frame">
              <img src="/images/leyla-abkeh.jpg" alt="تصویر معرفی لیلا آبکه" fetchPriority="high" />
              <div className="hero__photo-shade" />
              <div className="hero__nameplate">
                <span>لیلا آبکه</span>
                <small>وکیل دادگستری</small>
              </div>
            </div>
            <div className="hero__quote">
              <span className="hero__quote-mark">«</span>
              <p>هر پرونده، پیش از هر اقدام، به یک مسیر روشن نیاز دارد.</p>
            </div>
            <span className="hero__edition">LAW · 01</span>
          </div>
        </Reveal>
      </div>
      <a className="hero__scroll" href="#intro" aria-label="رفتن به بخش بعد">
        <span>کشف بیشتر</span><i /><Icon name="arrowUp" size={16} />
      </a>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="container intro__grid">
        <Reveal className="intro__index"><span>۰۱</span><small>چرا راهبرد مهم است؟</small></Reveal>
        <Reveal className="intro__statement" delay={100}>
          <p>یک تصمیم حقوقی خوب، فقط به دانستن قانون وابسته نیست؛ به <strong>دیدن تصویر کامل</strong>، سنجیدن پیامدها و انتخاب زمان درست برای اقدام نیاز دارد.</p>
        </Reveal>
        <Reveal className="intro__side" delay={180}>
          <span className="mini-seal"><Icon name="compass" size={26} /></span>
          <p>هدف، تبدیل پیچیدگی پرونده به یک مسیر مشخص و قابل پیگیری است.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Services({ onOpenConsultation }) {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-heading">
          <Reveal>
            <p className="eyebrow"><span /> حوزه‌های فعالیت</p>
            <h2>پوشش حقوقی برای<br />مسائل مهم زندگی و کسب‌وکار</h2>
          </Reveal>
          <Reveal className="section-heading__aside" delay={120}>
            <p>هر موضوع با یک بررسی اولیه آغاز می‌شود تا مسیر مناسب، پیش از صرف زمان و هزینه، روشن شود.</p>
            <button className="text-link" type="button" onClick={onOpenConsultation}>طرح موضوع پرونده <Icon name="arrow" size={18} /></button>
          </Reveal>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <article className="service-card">
                <div className="service-card__top">
                  <span className="service-card__icon"><Icon name={service.icon} size={27} /></span>
                  <span className="service-card__number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card__tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <button type="button" aria-label={`درخواست مشاوره برای ${service.title}`} onClick={onOpenConsultation}>
                  بررسی این موضوع <Icon name="arrow" size={17} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach section section--dark" id="approach">
      <div className="approach__glow" aria-hidden="true" />
      <div className="container approach__grid">
        <div className="approach__sticky">
          <Reveal>
            <p className="eyebrow eyebrow--light"><span /> شیوه همکاری</p>
            <h2>از ابهام تا<br /><em>یک مسیر روشن</em></h2>
            <p className="approach__lead">شما باید بدانید در هر مرحله کجا ایستاده‌اید، اقدام بعدی چیست و هر انتخاب چه پیامدی دارد.</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="approach__promise">
              <Icon name="lock" size={22} />
              <div><strong>گفت‌وگوی امن و محرمانه</strong><span>اطلاعات شما با مسئولیت حرفه‌ای حفظ می‌شود.</span></div>
            </div>
          </Reveal>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <article className="step">
                <span className="step__number">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
                <span className="step__check"><Icon name="check" size={16} /></span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <img src="/images/legal-desk-hero.jpg" alt="فضای حرفه‌ای مشاوره حقوقی" loading="lazy" />
          <div className="about__media-caption">
            <span>اصل حرفه‌ای</span>
            <p>صداقت در ارزیابی، دقت در اقدام و شفافیت در ارتباط</p>
          </div>
          <div className="about__outline" aria-hidden="true" />
        </Reveal>
        <div className="about__content">
          <Reveal>
            <p className="eyebrow"><span /> درباره من</p>
            <h2>حقوق، وقتی معنا پیدا می‌کند که به <em>تصمیم بهتر</em> برسد.</h2>
            <p className="about__lead">من لیلا آبکه، عضو کانون وکلای دادگستری هستم. رویکردم در هر پرونده بر شنیدن دقیق، تحلیل مستند و ارائه تصویری صادقانه از مسیرهای پیش رو استوار است.</p>
            <p>پیچیدگی زبان حقوقی نباید مانع درک شما از پرونده خودتان باشد. تلاش می‌کنم موضوع، گزینه‌ها و ریسک‌ها را روشن توضیح دهم تا هر تصمیم با آگاهی و آرامش بیشتری گرفته شود.</p>
          </Reveal>
          <Reveal delay={130}>
            <div className="about__principles">
              <div><Icon name="document" size={22} /><span><strong>تحلیل مستند</strong><small>تصمیم بر پایه مدارک و واقعیت پرونده</small></span></div>
              <div><Icon name="compass" size={22} /><span><strong>راهبرد متناسب</strong><small>راه‌حل متناسب با هدف و شرایط شما</small></span></div>
              <div><Icon name="chat" size={22} /><span><strong>ارتباط روشن</strong><small>اطلاع‌رسانی قابل‌فهم در طول مسیر</small></span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Preparation() {
  return (
    <section className="preparation section">
      <div className="container">
        <Reveal className="preparation__head">
          <div><p className="eyebrow"><span /> پیش از جلسه</p><h2>سه قدم برای یک مشاوره مؤثرتر</h2></div>
          <p>آمادگی کوتاه شما کمک می‌کند زمان جلسه صرف مهم‌ترین بخش مسئله و یافتن راهکار شود.</p>
        </Reveal>
        <div className="preparation__grid">
          {preparations.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="prep-card">
                <span className="prep-card__index">۰{index + 1}</span>
                <span className="prep-card__icon"><Icon name={item.icon} size={25} /></span>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="faq section" id="faq">
      <div className="container faq__grid">
        <Reveal className="faq__heading">
          <p className="eyebrow"><span /> پرسش‌های متداول</p>
          <h2>پیش از شروع،<br />پاسخ پرسش‌های شما</h2>
          <p>اگر پاسخ پرسش خود را اینجا نمی‌بینید، می‌توانید موضوع را برای بررسی اولیه ارسال کنید.</p>
        </Reveal>
        <div className="faq__list">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <Reveal key={faq.question} delay={index * 45}>
                <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span><small>۰{index + 1}</small>{faq.question}</span>
                      <i><Icon name="chevron" size={18} /></i>
                    </button>
                  </h3>
                  <div className="faq-item__answer" id={`faq-answer-${index}`}>
                    <div><p>{faq.answer}</p></div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact({ formRef }) {
  const [state, setState] = useState('idle');
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const normalizedPhone = String(data.phone || '')
      .replace(/[۰-۹]/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))
      .replace(/[٠-٩]/g, (digit) => '٠١٢٣٤٥٦٧٨٩'.indexOf(digit))
      .replace(/[\s()-]/g, '');

    if (!data.name?.trim() || !/^(?:\+98|0098|98|0)?9\d{9}$/.test(normalizedPhone)) {
      setError('لطفاً نام و شماره همراه معتبر وارد کنید.');
      return;
    }
    if (!data.subject) {
      setError('لطفاً موضوع مشاوره را انتخاب کنید.');
      return;
    }
    if (!data.consent) {
      setError('برای ارسال درخواست، تأیید بررسی اطلاعات لازم است.');
      return;
    }

    data.phone = normalizedPhone;
    setState('loading');
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('request failed');
      } catch {
        setState('idle');
        setError('ارسال درخواست انجام نشد. لطفاً کمی بعد دوباره تلاش کنید.');
        return;
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 650));
    }
    setState('success');
    form.reset();
  };

  return (
    <section className="contact" id="contact" ref={formRef}>
      <div className="contact__rings" aria-hidden="true" />
      <div className="container contact__grid">
        <Reveal className="contact__copy">
          <p className="eyebrow eyebrow--light"><span /> شروع گفت‌وگو</p>
          <h2>برای تصمیم بعدی،<br /><em>دید روشن‌تری</em> بسازیم.</h2>
          <p>شرح کوتاهی از موضوع و راه ارتباطی خود بنویسید. پس از بررسی اولیه، برای هماهنگی ادامه گفت‌وگو با شما تماس گرفته می‌شود.</p>
          <div className="contact__notes">
            <span><Icon name="lock" size={19} /> اطلاعات شما محرمانه می‌ماند.</span>
            <span><Icon name="check" size={19} /> ارسال فرم به معنای پذیرش قطعی وکالت نیست.</span>
          </div>
        </Reveal>
        <Reveal className="contact__form-wrap" delay={140}>
          {state === 'success' ? (
            <div className="form-success" role="status">
              <span><Icon name="check" size={34} /></span>
              <h3>درخواست شما دریافت شد</h3>
              <p>سپاس از اعتماد شما. پس از بررسی اولیه، برای هماهنگی با شما تماس گرفته خواهد شد.</p>
              <button type="button" onClick={() => setState('idle')}>ثبت درخواست دیگر</button>
            </div>
          ) : (
            <form className="consultation-form" onSubmit={submit} noValidate>
              <div className="form-row">
                <label><span>نام و نام خانوادگی</span><input name="name" type="text" autoComplete="name" placeholder="مثلاً سارا احمدی" /></label>
                <label><span>شماره همراه</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" placeholder="0912 000 0000" /></label>
              </div>
              <label>
                <span>موضوع مشاوره</span>
                <select name="subject" defaultValue="">
                  <option value="" disabled>انتخاب کنید</option>
                  {services.map((service) => <option value={service.title} key={service.title}>{service.title}</option>)}
                  <option value="other">سایر موضوعات</option>
                </select>
              </label>
              <label><span>شرح کوتاه موضوع <small>(اختیاری)</small></span><textarea name="message" rows="4" placeholder="در چند جمله، موضوع و دغدغه اصلی خود را بنویسید..." /></label>
              <label className="form-consent"><input type="checkbox" required name="consent" /><span>با بررسی این اطلاعات صرفاً برای هماهنگی مشاوره موافقم.</span></label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="form-submit" type="submit" disabled={state === 'loading'}>
                {state === 'loading' ? <span className="spinner" /> : <>ارسال درخواست اولیه <Icon name="arrow" size={18} /></>}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ onOpenConsultation }) {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <Brand compact />
        <div className="footer__nav">
          <span>دسترسی سریع</span>
          <div>{navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
        </div>
        <div className="footer__location">
          <span>حوزه خدمات</span>
          <p><Icon name="map" size={18} /> مشاوره و پیگیری امور حقوقی</p>
          <button type="button" onClick={onOpenConsultation}>درخواست هماهنگی <Icon name="arrow" size={16} /></button>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Intl.DateTimeFormat('fa-IR', { year: 'numeric' }).format(new Date())} لیلا آبکه. تمامی حقوق محفوظ است.</p>
        <p>مطالب این وب‌سایت جایگزین مشاوره حقوقی متناسب با پرونده نیست.</p>
        <a href="#top" aria-label="بازگشت به بالا"><Icon name="arrowUp" size={18} /></a>
      </div>
    </footer>
  );
}

function App() {
  const formRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const openConsultation = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => formRef.current?.querySelector('input')?.focus({ preventScroll: true }), 700);
  };

  return (
    <>
      <a className="skip-link" href="#main">پرش به محتوای اصلی</a>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <Header onOpenConsultation={openConsultation} />
      <main id="main">
        <Hero onOpenConsultation={openConsultation} />
        <Intro />
        <Services onOpenConsultation={openConsultation} />
        <Approach />
        <About />
        <Preparation />
        <FAQ />
        <Contact formRef={formRef} />
      </main>
      <Footer onOpenConsultation={openConsultation} />
      <button className="floating-contact" type="button" onClick={openConsultation} aria-label="درخواست مشاوره">
        <span><Icon name="chat" size={21} /></span><small>مشاوره</small>
      </button>
    </>
  );
}

export default App;
