export type LanguageCode = "EN" | "FA" | "TR";
export type ActiveLocale = "en" | "fa" | "tr";

export const translations = {
  en: {
    meta: {
      title: "Pars Azma Co",
    },
    navbar: {
      companyName: "Pars Azma Company",
      knowledgeBased: "(Knowledge-Based)",
      logoAlt: "Pars Azma Company Logo",
      navAriaLabel: "Main Navigation",
      links: {
        products: "Products",
        services: "Services and Support",
        about: "About Us",
        contact: "Contact Us",
      },
      search: "Search",
      selectLanguageAria: "Select language",
      closeMenuAria: "Close menu",
    },
    hero: {
      title: "Specialized Laboratory Equipment",
      description:
        "Design and manufacture of equipment such as laboratory ovens and furnaces, incubators, centrifuges, laboratory hoods and environmental testing equipment.",
      primaryCta: "Explore Product Range",
      secondaryCta: "Free Technical Consultation",
      socials: {
        telegram: "Telegram",
        whatsapp: "Whatsapp",
        instagram: "Instagram",
      },
    },
    statementBanner:
      "The first large factory producing various laboratory equipment according to global standards in Iran",
    productsPreview: {
      title: "Featured Products",
      description:
        "With more than 37 years of experience, Pars Azma operates as one of the first specialized manufacturers of laboratory and medical equipment in Iran. By relying on its design capabilities and customized production expertise, this company provides solutions tailored to the needs of academic, research, and industrial sectors.",
      viewSpecs: "View Specs",
      viewAll: "View All Products",
      items: [
        { title: "Laboratory Plant Germinator", category: "germinators" },
        { title: "Universal Laboratory Centrifuge", category: "centrifuges" },
        { title: "Laboratory Platelet Agitator", category: "agitators" },
        { title: "Laboratory Incubator", category: "incubators" },
        { title: "Laminar Hood", category: "hoods" },
        { title: "Vacuum Oven", category: "ovens" },
        {
          title: "Laboratory Fogging Test Apparatus for Insulating Glass",
          category: "environmental",
        },
        { title: "Laboratory Boiling Water Bath", category: "Bain-Marie" },
      ],
    },
    departments: {
      title: "The Main Departments of Pars Azma",
      description:
        "Exploring our specialized facilities dedicated to custom laboratory furniture design and high-precision equipment assembly.",
      viewMoreDetails: "View More Details",
      main: [
        {
          title: "Laboratory Furniture Division",
          description:
            "Designing chemical-resistant workstations, storage cabinets, and fume hoods engineered to enhance safety, efficiency, and flexibility in scientific environments.",
        },
        {
          title: "Assembly Department",
          description:
            "Integrating mechanical and electronic components under strict ISO standards with rigorous quality control to deliver precise, reliable laboratory equipment.",
        },
      ],
      sub: [
        { title: "Quality Control" },
        { title: "Research & Development" },
        { title: "Sheet Metal Fabrication" },
        { title: "Powder Coating" },
        { title: "Electronics Lab" },
      ],
    },
    testimonials: {
      title:
        "Opinions of customers and scientific and industrial centers about ParsAzma",
      subtitleBefore: "Achieving the satisfaction of our valued customers is ",
      subtitleHighlight: "our priority",
      subtitleAfter: ", and their satisfaction is our pride.",
      prevAria: "Previous testimonial",
      nextAria: "Next testimonial",
      items: [
        {
          quote:
            "The laboratory equipment provided by Pars Azma meets the university's laboratory needs in terms of quality of construction and precision of performance, and appropriate technical cooperation has been provided in the design and conversion process.",
          authorName: "Tehran University",
        },
        {
          quote:
            "Pars Azma has demonstrated the ability to design and manufacture industrial testing equipment in accordance with working conditions and industrial needs.",
          authorName: "Esfahan's Mobarakeh Steel Company",
        },
        {
          quote:
            "Pars Arma has provided a specialized approach based on the real needs of university laboratories in designing and producing the laboratory equipment required for this complex.",
          authorName: "Shiraz University of Medical Sciences",
        },
      ],
    },
    articles: {
      title: "Specialized articles on laboratory equipment",
      readMore: "Read More",
      viewAll: "View All",
      scrollLeftAria: "Scroll left",
      scrollRightAria: "Scroll right",
      items: [
        {
          title:
            "Laboratory scaffolding | Design, standardization and implementation by Pars Azma",
        },
        {
          title:
            "A deeper understanding of incubator types for specialized laboratory applications",
        },
        {
          title: "Introduction and important explanations about laminar hood",
        },
        {
          title: "Comprehensive Guide to Buying a Laboratory Centrifuge",
        },
        {
          title:
            "Comprehensive list of general and specialized laboratory equipment | Selection and application guide",
        },
      ],
    },
    faq: {
      titleMain: "Frequently Asked Questions",
      titleSuffix: " about Pars Azma Laboratory Equipment Production",
      moreQuestions: "Have more questions?",
      contactUs: "Contact us",
      items: [
        {
          question:
            "What is the advantage of knowledge-based production of laboratory equipment at ParsAzma?",
          answer:
            "Knowledge-based production allows ParsAzma to design laboratory equipment in accordance with the application, scientific standards, and actual conditions of laboratories, and provides the ability to optimize and develop the product.",
        },
        {
          question:
            "Is it possible to design and manufacture custom laboratory equipment?",
          answer:
            "Yes, due to its knowledge-based approach, ParsAzma has enabled the design and manufacture of customized laboratory equipment based on the needs of research, academic, and industrial centers.",
        },
        {
          question:
            "In which centers is Pars Azma's knowledge-based laboratory equipment used?",
          answer:
            "Pars Azma products are used in university laboratories, research centers, pharmaceutical, food, chemical industries, and industrial units.",
        },
        {
          question:
            "Do Pars Azma's knowledge-based equipment include warranty and technical support?",
          answer:
            "All Pars Azma laboratory equipment has a warranty and technical support, and after-sales services and parts supply are provided.",
        },
      ],
    },
    footer: {
      companyName: "Pars Azma Co.",
      knowledgeBased: "(Knowledge-Based)",
      logoAlt: "Pars Azma Co. Logo",
      description:
        "ISO 9001 and ISO 9002 certified environmental chambers, specialized ovens, and climate control systems for advanced scientific research.",
      factory: "Factory",
      businessAffairs: "Business Affairs",
      phoneNumbers: "Phone Numbers:",
      fax: "Fax:",
      ourServices: "Our Services",
      services: {
        labFurniture: "Lab Furniture Solutions",
        orders: "Orders",
        trackOrder: "Track Order",
        productCatalog: "Product Catalog",
        contactUs: "Contact Us",
      },
      addressHeading: "Address:",
      factoryAddress:
        "No. 175, corner of Sheikh Bahai 6th, Sheikh Bahai St., Morchekhort Industrial Park, Isfahan",
      businessAddress:
        "No. 251, 2nd Floor, Unit 4, Tehran, Dr. Beheshti St. (Abbas Abad) Between Pakistan and Modarres",
      copyrightBefore:
        "All material and intellectual property rights of this site belong to ",
      copyrightBrand: "Pars Azma",
      copyrightAfter: " Company.",
    },
    searchModal: {
      placeholder: "Search",
      closeAria: "Close search",
      clearAria: "Clear search",
      productsLabel: "Products",
      articlesLabel: "Articles",
      noResults: "No matching results found.",
    },
  },
  fa: {
    meta: {
      title: "شرکت پارس آزما",
    },
    navbar: {
      companyName: "شرکت پارس آزما",
      knowledgeBased: "(دانش بنیان)",
      logoAlt: "لوگوی شرکت پارس آزما",
      navAriaLabel: "منوی اصلی",
      links: {
        products: "محصولات",
        services: "خدمات و پشتیبانی",
        about: "درباره ما",
        contact: "ارتباط با ما",
      },
      search: "جستجو",
      selectLanguageAria: "انتخاب زبان",
      closeMenuAria: "بستن منو",
    },
    hero: {
      title: "تجهیزات آزمایشگاهی تخصصی",
      description:
        "طراحی و تولید تجهیزاتی مانند آون و فور آزمایشگاهی، انکوباتور، سانتریفیوژ، هود آزمایشگاهی و تجهیزات تست محیطی",
      primaryCta: "مشاهده کامل محصولات",
      secondaryCta: "مشاوره فنی رایگان",
      socials: {
        telegram: "تلگرام",
        whatsapp: "واتساپ",
        instagram: "اینستاگرام",
      },
    },
    statementBanner:
      "اولین کارخانه بزرگ تولید انواع تجهیزات آزمایشگاهی مطابق با استانداردهای جهانی در ایران",
    productsPreview: {
      title: "خرید تجهیزات آزمایشگاهی",
      description:
        "پارس‌آزما با بیش از ۳۷ سال تجربه، به‌عنوان یکی از نخستین تولیدکنندگان تخصصی تجهیزات آزمایشگاهی و پزشکی در ایران فعالیت می‌کند. این مجموعه با تکیه بر توان طراحی و تولید سفارشی، راهکارهایی متناسب با نیازهای دانشگاهی، تحقیقاتی و صنعتی ارائه می‌دهد.",
      viewSpecs: "مشاهده مشخصات",
      viewAll: "مشاهده همه محصولات",
      items: [
        { title: "ژرمیناتور گیاهی آزمایشگاهی", category: "ژرمیناتورها" },
        { title: "سانتریفیوژ آزمایشگاهی یونیورسال", category: "سانتریفیوژها" },
        { title: "آژیتاتور پلاکت آزمایشگاهی", category: "آژیتاتورها" },
        { title: "انکوباتور آزمایشگاهی", category: "انکوباتورها" },
        { title: "هود لامینار", category: "هودها" },
        { title: "آون خلاء آزمایشگاهی", category: "آون‌ها" },
        {
          title: "دستگاه تست بخارگرفتگی شیشه دوجداره",
          category: "تست محیطی",
        },
        { title: "بن‌ماری جوش آزمایشگاهی", category: "بن‌ماری" },
      ],
    },
    departments: {
      title: "مهم‌ترین واحدهای شرکت پارس آزما",
      description:
        "بررسی امکانات تخصصی ما که به سکوبندی سفارشی و مونتاژ تجهیزات با دقت بالا اختصاص داده شده است.",
      viewMoreDetails: "مشاهده جزئیات بیشتر",
      main: [
        {
          title: "واحد سکوبندی",
          description:
            "طراحی انواع سکوبندی مقاوم در برابر مواد شیمیایی، کابینت‌های نگهداری و هودهای تخصصی؛ مهندسی‌شده برای ارتقای ایمنی، کارایی و انعطاف‌پذیری در محیط‌های علمی.",
        },
        {
          title: "واحد مونتاژ",
          description:
            "مونتاژ قطعات مکانیکی و الکترونیکی بر اساس استانداردهای سخت‌گیرانه ایزو و کنترل کیفیت دقیق، جهت ارائه تجهیزات آزمایشگاهی دقیق و قابل اعتماد.",
        },
      ],
      sub: [
        { title: "کنترل کیفیت" },
        { title: "تحقیق و توسعه" },
        { title: "ورق‌کاری و فلزکاری" },
        { title: "رنگ پودری الکترواستاتیک" },
        { title: "آزمایشگاه الکترونیک" },
      ],
    },
    testimonials: {
      title: "نظرات مشتریان و مراکز علمی و صنعتی درباره پارس‌آزما",
      subtitleBefore: "کسب رضایت مشتریان گرامی ",
      subtitleHighlight: "اولویت ما",
      subtitleAfter: " و رضایتشان افتخار ماست.",
      prevAria: "نظر قبلی",
      nextAria: "نظر بعدی",
      items: [
        {
          quote:
            "تجهیزات آزمایشگاهی تأمین شده توسط پارس آزما از نظر کیفیت ساخت و دقت عملکرد، پاسخگوی نیازهای آزمایشگاهی دانشگاه بوده و همکاری فنی مناسبی در فرآیند طراحی و تحویل انجام شده است.",
          authorName: "دانشگاه تهران",
        },
        {
          quote:
            "پارس آزما توانمندی خود را در طراحی و ساخت تجهیزات آزمون صنعتی متناسب با شرایط کاری و نیازهای صنعت به خوبی نشان داده است.",
          authorName: "شرکت فولاد مبارکه اصفهان",
        },
        {
          quote:
            "پارس آزما رویکردی تخصصی و مبتنی بر نیازهای واقعی آزمایشگاه‌های دانشگاهی در طراحی و تولید تجهیزات آزمایشگاهی مورد نیاز این مجموعه ارائه داده است.",
          authorName: "دانشگاه علوم پزشکی شیراز",
        },
      ],
    },
    articles: {
      title: "مقالات تخصصی تجهیزات آزمایشگاهی",
      readMore: "مطالعه بیشتر",
      viewAll: "مشاهده همه",
      scrollLeftAria: "اسکرول به چپ",
      scrollRightAria: "اسکرول به راست",
      items: [
        {
          title: "سکوبندی آزمایشگاهی | طراحی، استانداردسازی و اجرا توسط پارس آزما",
        },
        {
          title: "شناخت عمیق‌تر انواع انکوباتور برای کاربردهای تخصصی آزمایشگاهی",
        },
        {
          title: "آشنایی و توضیحات مهم درباره هود لامینار",
        },
        {
          title: "راهنمای جامع خرید سانتریفیوژ آزمایشگاهی",
        },
        {
          title:
            "فهرست جامع تجهیزات آزمایشگاهی عمومی و تخصصی | راهنمای انتخاب و کاربرد",
        },
      ],
    },
    faq: {
      titleMain: "سوالات متداول",
      titleSuffix: " درباره تولید تجهیزات آزمایشگاهی پارس‌آزما",
      moreQuestions: "سوال دیگری دارید؟",
      contactUs: "تماس با ما",
      items: [
        {
          question:
            "مزیت تولید دانش‌بنیان تجهیزات آزمایشگاهی در پارس‌آزما چیست؟",
          answer:
            "تولید دانش‌بنیان به پارس‌آزما امکان می‌دهد تجهیزات آزمایشگاهی را متناسب با نوع کاربرد، استانداردهای علمی و شرایط واقعی آزمایشگاه‌ها طراحی کرده و قابلیت بهینه‌سازی و توسعه محصول را فراهم کند.",
        },
        {
          question:
            "آیا امکان طراحی و ساخت تجهیزات آزمایشگاهی سفارشی وجود دارد؟",
          answer:
            "بله، پارس‌آزما با تکیه بر رویکرد دانش‌بنیان خود، امکان طراحی و ساخت تجهیزات آزمایشگاهی سفارشی را بر اساس نیاز مراکز تحقیقاتی، دانشگاهی و صنعتی فراهم کرده است.",
        },
        {
          question:
            "تجهیزات آزمایشگاهی دانش‌بنیان پارس‌آزما در چه مراکزی کاربرد دارند؟",
          answer:
            "محصولات پارس‌آزما در آزمایشگاه‌های دانشگاهی، مراکز تحقیقاتی، صنایع دارویی، غذایی، شیمیایی و واحدهای صنعتی مورد استفاده قرار می‌گیرند.",
        },
        {
          question:
            "آیا تجهیزات دانش‌بنیان پارس‌آزما شامل گارانتی و پشتیبانی فنی هستند؟",
          answer:
            "تمامی تجهیزات آزمایشگاهی پارس‌آزما دارای گارانتی و پشتیبانی فنی بوده و خدمات پس از فروش و تأمین قطعات آن‌ها ارائه می‌شود.",
        },
      ],
    },
    footer: {
      companyName: "شرکت پارس آزما",
      knowledgeBased: "(دانش بنیان)",
      logoAlt: "لوگوی شرکت پارس آزما",
      description:
        "چمبرهای آزمون محیطی، آون‌های تخصصی و سیستم‌های کنترل شرایط اقلیمی دارای گواهینامه‌های ایزو ۹۰۰۱ و ایزو ۹۰۰۲ برای تحقیقات پیشرفته علمی.",
      factory: "کارخانه",
      businessAffairs: "امور بازرگانی",
      phoneNumbers: "شماره تلفن:",
      fax: "فکس:",
      ourServices: "خدمات ما",
      services: {
        labFurniture: "سکوبندی آزمایشگاه",
        orders: "سفارشات",
        trackOrder: "وضعیت خرید",
        productCatalog: "محصولات",
        contactUs: "تماس با ما",
      },
      addressHeading: "آدرس:",
      factoryAddress:
        "اصفهان، شهرک صنعتی مورچه خورت، خیابان شیخ‌بهایی، نبش شیخ‌بهایی ششم، پلاک ۱۷۵",
      businessAddress:
        "تهران، خیابان دکتر بهشتی (عباس آباد)، بین پاکستان و مدرس، پلاک ۲۵۱، طبقه دوم، واحد ۴",
      copyrightBefore: "تمامی حقوق مادی و معنوی این سایت متعلق به ",
      copyrightBrand: "پارس آزما",
      copyrightAfter: " است.",
    },
    searchModal: {
      placeholder: "جستجو",
      closeAria: "بستن جستجو",
      clearAria: "پاک کردن جستجو",
      productsLabel: "محصولات",
      articlesLabel: "مقالات",
      noResults: "نتیجه‌ای یافت نشد.",
    },
  },
  tr: {
    meta: {
      title: "Pars Azma",
    },
    navbar: {
      companyName: "Pars Azma Şirketi",
      knowledgeBased: "(Bilgi Tabanlı)",
      logoAlt: "Pars Azma Şirketi Logosu",
      navAriaLabel: "Ana Gezinme",
      links: {
        products: "Ürünler",
        services: "Hizmetler ve Destek",
        about: "Hakkımızda",
        contact: "İletişim",
      },
      search: "Ara",
      selectLanguageAria: "Dil seçin",
      closeMenuAria: "Menüyü kapat",
    },
    hero: {
      title: "Özel Laboratuvar Ekipmanları",
      description:
        "Laboratuvar etüvleri ve fırınları, inkübatörler, santrifüjler, laboratuvar kabinleri ve çevresel test cihazlarının tasarımı ve üretimi.",
      primaryCta: "Ürün Yelpazesini Keşfet",
      secondaryCta: "Ücretsiz Teknik Danışmanlık",
      socials: {
        telegram: "Telegram",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
    },
    statementBanner:
      "İran'da dünya standartlarına uygun çeşitli laboratuvar ekipmanları üreten ilk büyük fabrika",
    productsPreview: {
      title: "Öne Çıkan Ürünler",
      description:
        "37 yılı aşkın deneyimiyle Pars Azma, İran'da laboratuvar ve medikal ekipmanların ilk uzman üreticilerinden biri olarak faaliyet göstermektedir. Tasarım yetkinliği ve özel üretim uzmanlığıyla akademik, araştırma ve sanayi sektörlerinin ihtiyaçlarına özel çözümler sunmaktadır.",
      viewSpecs: "Özellikleri İncele",
      viewAll: "Tüm Ürünleri Gör",
      items: [
        {
          title: "Laboratuvar Bitki Çimlendirme Kabini",
          category: "Çimlendirme Kabinleri",
        },
        {
          title: "Üniversal Laboratuvar Santrifüjü",
          category: "Santrifüjler",
        },
        {
          title: "Laboratuvar Trombosit Ajitatörü",
          category: "Ajitatörler",
        },
        { title: "Laboratuvar İnkübatörü", category: "İnkübatörler" },
        { title: "Laminar Akış Kabini", category: "Kabinler" },
        { title: "Vakumlu Etüv", category: "Etüvler" },
        {
          title: "Çift Cam Buharlanma (Fogging) Test Cihazı",
          category: "Çevresel Test",
        },
        {
          title: "Laboratuvar Kaynar Su Banyosu (Benmari)",
          category: "Benmari",
        },
      ],
    },
    departments: {
      title: "Pars Azma'nın Ana Birimleri",
      description:
        "Özel laboratuvar mobilyası tasarımı ve yüksek hassasiyetli ekipman montajına adanmış uzman tesislerimizi keşfedin.",
      viewMoreDetails: "Daha Fazla Detay",
      main: [
        {
          title: "Laboratuvar Mobilyaları Birimi",
          description:
            "Bilimsel ortamlarda güvenliği, verimliliği ve esnekliği artırmak üzere tasarlanmış kimyasallara dayanıklı tezgâhlar, saklama dolapları ve çeker ocaklar.",
        },
        {
          title: "Montaj Birimi",
          description:
            "Hassas ve güvenilir laboratuvar ekipmanları sunmak amacıyla mekanik ve elektronik bileşenlerin sıkı ISO standartları ve titiz kalite kontrol altında entegrasyonu.",
        },
      ],
      sub: [
        { title: "Kalite Kontrol" },
        { title: "Araştırma ve Geliştirme" },
        { title: "Sac Metal İşleme" },
        { title: "Elektrostatik Toz Boya" },
        { title: "Elektronik Laboratuvarı" },
      ],
    },
    testimonials: {
      title:
        "Müşterilerin, Bilimsel ve Endüstriyel Merkezlerin Pars Azma Hakkındaki Görüşleri",
      subtitleBefore: "Değerli müşterilerimizin memnuniyetini kazanmak ",
      subtitleHighlight: "önceliğimizdir",
      subtitleAfter: ", onların memnuniyeti ise gururumuzdur.",
      prevAria: "Önceki görüş",
      nextAria: "Sonraki görüş",
      items: [
        {
          quote:
            "Pars Azma tarafından tedarik edilen laboratuvar ekipmanları, üretim kalitesi ve performans hassasiyeti açısından üniversitemizin laboratuvar ihtiyaçlarını karşılamakta olup tasarım ve teslimat sürecinde verimli bir teknik iş birliği sağlanmıştır.",
          authorName: "Tahran Üniversitesi",
        },
        {
          quote:
            "Pars Azma, çalışma koşullarına ve endüstriyel gereksinimlere uygun endüstriyel test ekipmanları tasarlama ve üretme yetkinliğini başarıyla kanıtlamıştır.",
          authorName: "İsfahan Mübareke Çelik Şirketi",
        },
        {
          quote:
            "Pars Azma, bu kompleksin ihtiyaç duyduğu laboratuvar ekipmanlarının tasarımı ve üretiminde üniversite laboratuvarlarının gerçek gereksinimlerine dayanan uzman bir yaklaşım sunmuştur.",
          authorName: "Şiraz Tıp Bilimleri Üniversitesi",
        },
      ],
    },
    articles: {
      title: "Laboratuvar ekipmanları üzerine uzman makaleler",
      readMore: "Devamını Oku",
      viewAll: "Tümünü Gör",
      scrollLeftAria: "Sola kaydır",
      scrollRightAria: "Sağa kaydır",
      items: [
        {
          title:
            "Laboratuvar Tezgâh Sistemleri | Pars Azma Tasarım, Standartlaştırma ve Uygulama",
        },
        {
          title:
            "Özel Laboratuvar Uygulamaları İçin İnkübatör Türlerinin Derinlemesine İncelenmesi",
        },
        {
          title:
            "Laminar Akış Kabini Hakkında Giriş ve Önemli Açıklamalar",
        },
        {
          title: "Laboratuvar Santrifüjü Satın Alma Kapsamlı Rehberi",
        },
        {
          title:
            "Genel ve Özel Laboratuvar Ekipmanları Kapsamlı Listesi | Seçim ve Kullanım Rehberi",
        },
      ],
    },
    faq: {
      titleMain: "Sıkça Sorulan Sorular",
      titleSuffix: " — Pars Azma Laboratuvar Ekipmanları Üretimi",
      moreQuestions: "Başka sorularınız mı var?",
      contactUs: "Bize Ulaşın",
      items: [
        {
          question:
            "Pars Azma'da bilgi tabanlı laboratuvar ekipmanı üretiminin avantajı nedir?",
          answer:
            "Bilgi tabanlı üretim, Pars Azma'nın laboratuvar ekipmanlarını kullanım alanına, bilimsel standartlara ve laboratuvarların gerçek çalışma koşullarına uygun olarak tasarlamasına, ayrıca ürün optimizasyonu ve geliştirme imkânı sunmasına olanak tanır.",
        },
        {
          question:
            "Özel tasarım laboratuvar ekipmanı üretimi mümkün mü?",
          answer:
            "Evet, Pars Azma bilgi tabanlı yaklaşımı sayesinde araştırma, akademik ve endüstriyel merkezlerin ihtiyaçlarına göre özel laboratuvar ekipmanlarının tasarımını ve üretimini gerçekleştirmektedir.",
        },
        {
          question:
            "Pars Azma'nın bilgi tabanlı laboratuvar ekipmanları hangi merkezlerde kullanılmaktadır?",
          answer:
            "Pars Azma ürünleri üniversite laboratuvarları, araştırma merkezleri, ilaç, gıda, kimya endüstrileri ve çeşitli sanayi tesislerinde kullanılmaktadır.",
        },
        {
          question:
            "Pars Azma'nın bilgi tabanlı ekipmanları garanti ve teknik destek kapsamında mı?",
          answer:
            "Tüm Pars Azma laboratuvar ekipmanları garanti ve teknik destek kapsamındadır; satış sonrası hizmetler ve yedek parça tedariki sağlanmaktadır.",
        },
      ],
    },
    footer: {
      companyName: "Pars Azma",
      knowledgeBased: "(Bilgi Tabanlı)",
      logoAlt: "Pars Azma Logosu",
      description:
        "İleri düzey bilimsel araştırmalar için ISO 9001 ve ISO 9002 sertifikalı iklimlendirme kabinleri, özel etüvler ve çevresel kontrol sistemleri.",
      factory: "Fabrika",
      businessAffairs: "Ticari İlişkiler",
      phoneNumbers: "Telefon Numaraları:",
      fax: "Faks:",
      ourServices: "Hizmetlerimiz",
      services: {
        labFurniture: "Laboratuvar Mobilyası Çözümleri",
        orders: "Siparişler",
        trackOrder: "Sipariş Takibi",
        productCatalog: "Ürün Kataloğu",
        contactUs: "İletişim",
      },
      addressHeading: "Adres:",
      factoryAddress:
        "No. 175, Şeyh Bahai 6. Sokak Köşesi, Şeyh Bahai Cad., Morçehort Sanayi Bölgesi, İsfahan",
      businessAddress:
        "No. 251, 2. Kat, Daire 4, Dr. Beheşti Cad. (Abbas Abad), Pakistan ve Müderris Arası, Tahran",
      copyrightBefore:
        "Bu sitenin tüm maddi ve fikri mülkiyet hakları ",
      copyrightBrand: "Pars Azma",
      copyrightAfter: " Şirketi'ne aittir.",
    },
    searchModal: {
      placeholder: "Ara",
      closeAria: "Aramayı kapat",
      clearAria: "Aramayı temizle",
      productsLabel: "Ürünler",
      articlesLabel: "Makaleler",
      noResults: "Eşleşen sonuç bulunamadı.",
    },
  },
};

export type Translations = (typeof translations)["en"];
