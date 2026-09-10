export interface ProjectDetails {
  id: string;
  title: string;
  role: string;
  longDescription: {
    en: string;
    ar: string;
  };
  technicalDetails?: {
    en: string;
    ar: string;
  };
  features: {
    en: string[];
    ar: string[];
  };
  technologies: string[];
  codeLink?: string;
  liveLink?: string;
}

export const projectsData: Record<string, ProjectDetails> = {
  "educational-platform": {
    id: "educational-platform",
    title: "Educational Platform",
    role: "Fullstack Developer",
    longDescription: {
      en: "This Educational Platform is a comprehensive and scalable Learning Management System (LMS) built from the ground up to revolutionize the online learning experience. Designed with a robust microservices-inspired backend and a responsive, dynamic frontend, it serves as a central hub for students, instructors, and administrators. The platform supports uploading and streaming video lectures, organizing interactive course modules, managing assignments, and delivering real-time quizzes. Instructors are provided with a dedicated administrative dashboard packed with deep analytics, enabling them to track student progress, engagement rates, and overall performance. Security and scalability were primary focuses during development, utilizing secure JWT authentication, role-based access control, and an optimized database structure capable of handling thousands of concurrent users.",
      ar: "منصة تعليمية شاملة ونظام متكامل لإدارة التعلم (LMS) تم بناؤه من الصفر لإحداث ثورة في تجربة التعلم عبر الإنترنت. تم تصميم المنصة بواجهة خلفية قوية قابلة للتوسع وواجهة مستخدم ديناميكية متجاوبة لتعمل كمركز رئيسي للطلاب والمعلمين والمديرين. تدعم المنصة رفع وبث المحاضرات المرئية، تنظيم وحدات دراسية تفاعلية، إدارة الواجبات، وتقديم اختبارات في الوقت الفعلي. تم تزويد المعلمين بلوحة تحكم إدارية مخصصة مليئة بالتحليلات العميقة التي تتيح لهم تتبع تقدم الطلاب ومعدلات التفاعل والأداء العام. تم التركيز بشكل أساسي على الأمان وقابلية التوسع أثناء التطوير، باستخدام مصادقة آمنة، وتحكم في الوصول بناءً على الأدوار، وهيكلة قاعدة بيانات محسنة قادرة على التعامل مع آلاف المستخدمين المتزامنين."
    },
    technicalDetails: {
      en: "The architecture utilizes a decoupled client-server model. The frontend is built with Next.js, leveraging Server-Side Rendering (SSR) for fast initial loads and SEO optimization. The backend relies on Node.js and Express, implementing a RESTful API. PostgreSQL serves as the primary relational database, managed via Prisma ORM to handle complex relationships between users, courses, and quiz results efficiently. Authentication is stateless using JWT stored in HttpOnly cookies to prevent XSS attacks. Real-time features, such as live notifications and chat, are powered by WebSockets. The system is containerized using Docker to ensure environment consistency across development and production.",
      ar: "تعتمد البنية التحتية على نموذج العميل والخادم المنفصل (Decoupled). تم بناء الواجهة الأمامية باستخدام Next.js، مع الاستفادة من التصيير على جانب الخادم (SSR) لضمان أوقات تحميل سريعة وتحسين محركات البحث. تعتمد الواجهة الخلفية على Node.js و Express لتنفيذ واجهة برمجة تطبيقات (RESTful API). تُستخدم PostgreSQL كقاعدة بيانات علائقية أساسية، تدار بواسطة Prisma ORM للتعامل بكفاءة مع العلاقات المعقدة بين المستخدمين والدورات ونتائج الاختبارات. المصادقة عديمة الحالة (Stateless) باستخدام JWT المخزنة في ملفات تعريف ارتباط (HttpOnly) لمنع هجمات XSS. الميزات في الوقت الفعلي مدعومة بتقنية WebSockets. النظام معبأ بالكامل داخل حاويات (Docker) لضمان اتساق بيئة التشغيل."
    },
    features: {
      en: [
        "Advanced Role-Based Access Control (RBAC) ensuring secure and tailored experiences for students, teachers, and admins.",
        "High-performance video streaming integration for seamless lecture playback without buffering.",
        "Interactive real-time quizzes with instant grading and detailed feedback reports.",
        "Comprehensive analytics dashboard for instructors to monitor student engagement and course popularity.",
        "Automated certificate generation upon successful completion of courses.",
        "Responsive, mobile-first design ensuring accessibility across all devices and screen sizes.",
        "Integrated payment gateway for seamless course enrollments and subscription management."
      ],
      ar: [
        "نظام متقدم للتحكم في الوصول بناءً على الأدوار (RBAC) لضمان تجربة آمنة ومخصصة للطلاب والمعلمين والمديرين.",
        "تكامل مع أنظمة بث الفيديو عالية الأداء لضمان تشغيل المحاضرات بسلاسة وبدون تقطيع.",
        "اختبارات تفاعلية في الوقت الفعلي مع تصحيح فوري وتقارير مفصلة للملاحظات.",
        "لوحة تحكم تحليلية شاملة للمدربين لمراقبة تفاعل الطلاب ومدى شعبية الدورات.",
        "توليد شهادات بشكل آلي عند إتمام الدورات بنجاح.",
        "تصميم متجاوب يعطي الأولوية للموبايل لضمان سهولة الاستخدام على جميع الشاشات والأجهزة.",
        "بوابة دفع مدمجة لتسهيل عملية التسجيل في الدورات وإدارة الاشتراكات بمرونة."
      ]
    },
    technologies: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Docker", "WebSockets"],
    codeLink: "https://github.com/keryakosALKOMOS/educational-platform"
  },
  "dokran": {
    id: "dokran",
    title: "DOKRAN Store",
    role: "Fullstack Developer",
    longDescription: {
      en: "DOKRAN Store is a full-featured, modern e-commerce application designed to deliver a flawless online shopping experience. Merging aesthetic UI design with a highly functional backend, the platform enables users to browse a vast catalog of products, filter items based on multiple parameters, and securely manage their shopping carts and wishlists. The project features a robust administrative dashboard that gives store owners complete control over inventory, order tracking, and user management. Complex state management was implemented to ensure the cart remains synchronized across sessions, and secure payment processing APIs were integrated to handle transactions safely. The architecture focuses on fast loading speeds and SEO optimization to maximize user retention and store visibility.",
      ar: "متجر DOKRAN هو تطبيق تجارة إلكترونية حديث ومتكامل مصمم لتقديم تجربة تسوق إلكتروني خالية من العيوب. من خلال دمج تصميم واجهة المستخدم الجذاب مع واجهة خلفية عالية الأداء، تتيح المنصة للمستخدمين تصفح كتالوج ضخم من المنتجات، تصفية العناصر بناءً على معايير متعددة، وإدارة سلة المشتريات وقائمة المفضلة بأمان. يتميز المشروع بلوحة تحكم إدارية قوية تمنح أصحاب المتجر تحكماً كاملاً في المخزون، تتبع الطلبات، وإدارة المستخدمين. تم تنفيذ إدارة حالة معقدة لضمان بقاء السلة متزامنة عبر الجلسات، وتم دمج واجهات برمجة تطبيقات لمعالجة المدفوعات بشكل آمن. تركز بنية النظام على سرعة التحميل وتحسين محركات البحث (SEO) لزيادة الاحتفاظ بالمستخدمين ووضوح المتجر."
    },
    technicalDetails: {
      en: "The project employs Next.js with the App Router to achieve excellent SEO through hybrid static and dynamic rendering. State management is a core technical challenge solved using Redux Toolkit, which maintains a globally accessible and synchronized state for user sessions, carts, and wishlists. The backend API is decoupled, written in Node.js, and connected to a PostgreSQL database schema specifically normalized to handle e-commerce data like multi-variant products, orders, and nested categories. Transactions are secured using bcrypt for password hashing and third-party API webhooks for payment verification.",
      ar: "يستخدم المشروع تقنية Next.js مع الـ App Router لتحقيق أداء ممتاز في الـ SEO عبر المزج بين التصيير الثابت والديناميكي. تعتبر إدارة الحالة (State Management) من أبرز التحديات التقنية التي تم حلها باستخدام Redux Toolkit لضمان مزامنة عالمية لحالة السلة وجلسات المستخدمين. تم فصل الواجهة الخلفية (Backend) وبناؤها بواسطة Node.js مع هيكلة قاعدة بيانات PostgreSQL مصممة خصيصاً للتعامل مع تعقيدات التجارة الإلكترونية مثل المنتجات متعددة الخصائص، الطلبات، والفئات المتداخلة. تُحمى المعاملات باستخدام خوارزميات التشفير (bcrypt) ونقاط الاتصال المرجعية (Webhooks) للتحقق من عمليات الدفع."
    },
    features: {
      en: [
        "Dynamic and visually appealing product catalog with advanced search, sorting, and filtering capabilities.",
        "Persistent user shopping cart and wishlist synced across multiple devices in real-time.",
        "Secure, encrypted checkout process integrated with popular third-party payment gateways.",
        "Full-fledged admin dashboard for comprehensive inventory management, sales tracking, and reporting.",
        "Automated email notifications for order confirmations, shipping updates, and promotional campaigns.",
        "SEO-optimized rendering using Next.js to ensure high visibility on search engines.",
        "Light and Dark mode support tailored to user preferences."
      ],
      ar: [
        "كتالوج منتجات ديناميكي وجذاب بصرياً مع إمكانيات متقدمة للبحث والفرز والتصفية.",
        "سلة مشتريات وقائمة مفضلة مستمرة ومتزامنة عبر أجهزة متعددة في الوقت الفعلي.",
        "عملية دفع آمنة ومشفرة متكاملة مع بوابات الدفع الإلكترونية الشهيرة.",
        "لوحة تحكم إدارية متكاملة لإدارة المخزون الشاملة، تتبع المبيعات، وإصدار التقارير.",
        "إشعارات بريد إلكتروني آلية لتأكيد الطلبات، تحديثات الشحن، والحملات الترويجية.",
        "تصيير (Rendering) محسن لمحركات البحث باستخدام Next.js لضمان ظهور عالٍ على جوجل.",
        "دعم الوضع الليلي والنهاري (Light/Dark mode) بناءً على تفضيلات المستخدم."
      ]
    },
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Redux Toolkit"],
    codeLink: "https://github.com/keryakosalkomos-rgb/DOKRAN.store",
    liveLink: "https://dokranstore-production.up.railway.app"
  },
  "healing-touch": {
    id: "healing-touch",
    title: "Healing Touch",
    role: "Mobile Developer",
    longDescription: {
      en: "Healing Touch is an innovative healthcare mobile application crafted to bridge the gap between patients and specialized medical professionals. With a focus on accessibility and user-centric design, the app streamlines the often tedious process of booking medical appointments, accessing health records, and finding the right doctors based on specialty and location. Beyond basic scheduling, Healing Touch incorporates a secure messaging system allowing patients to consult with their healthcare providers directly. The app also features a personalized health feed that provides daily wellness tips, medication reminders, and health tracking metrics. Built entirely with Flutter, it ensures a native-like, smooth experience across both iOS and Android platforms.",
      ar: "تطبيق Healing Touch هو تطبيق موبايل مبتكر للرعاية الصحية تم تصميمه لسد الفجوة بين المرضى والمتخصصين الطبيين. مع التركيز على سهولة الوصول والتصميم الذي يركز على المستخدم، يبسط التطبيق العملية التي غالباً ما تكون مملة لحجز المواعيد الطبية، الوصول إلى السجلات الصحية، والعثور على الأطباء المناسبين بناءً على التخصص والموقع. بالإضافة إلى الجدولة الأساسية، يدمج التطبيق نظام مراسلة آمن يتيح للمرضى استشارة مقدمي الرعاية الصحية مباشرة. يتميز التطبيق أيضاً بتغذية صحية مخصصة تقدم نصائح يومية للعافية، وتذكيرات بالأدوية، ومقاييس لتتبع الصحة. تم بناؤه بالكامل باستخدام فلاتر (Flutter)، مما يضمن تجربة سلسة تشبه التطبيقات الأصلية عبر منصات iOS و Android."
    },
    technicalDetails: {
      en: "The application is built using the Flutter framework, employing a Clean Architecture pattern to separate the UI from business logic and data layers. State management is efficiently handled using Provider/Riverpod, enabling reactive UI updates without performance bottlenecks. The backend relies heavily on Firebase services: Firebase Authentication for secure sign-ins, Cloud Firestore for real-time NoSQL data synchronization (crucial for the live chat functionality), and Firebase Cloud Messaging (FCM) for push notifications regarding medication reminders. For offline capabilities, SQLite is used locally to cache medical records, ensuring patients can access vital information without an internet connection. Heavy background tasks are offloaded to Dart Isolates to maintain a consistent 60 FPS UI rendering.",
      ar: "تم بناء التطبيق باستخدام إطار عمل Flutter، مع تطبيق نمط الهندسة النظيفة (Clean Architecture) لفصل واجهة المستخدم عن منطق الأعمال (Business Logic) وطبقات البيانات. تُدار الحالة بكفاءة عبر Provider/Riverpod، مما يتيح تحديثات تفاعلية دون التأثير على الأداء. تعتمد الواجهة الخلفية بشكل مكثف على خدمات Firebase: المصادقة (Auth)، و Cloud Firestore للمزامنة في الوقت الفعلي (ضرورية لميزة الدردشة)، و FCM لإرسال الإشعارات. لتوفير قدرات العمل دون إنترنت، تُستخدم قاعدة بيانات SQLite لتخزين السجلات الطبية محلياً. يتم تفريغ المهام الثقيلة في الخلفية باستخدام Dart Isolates للحفاظ على معدل إطارات ثابت (60 FPS) في الواجهة."
    },
    features: {
      en: [
        "Intuitive appointment scheduling system with real-time calendar synchronization and availability checks.",
        "Secure, encrypted chat interface for patient-doctor consultations and follow-ups.",
        "Personalized daily health feed offering wellness tips, articles, and preventative care advice.",
        "Smart medication reminder system with push notifications to ensure medical adherence.",
        "Comprehensive user profiles storing medical history, past prescriptions, and test results securely.",
        "Location-based search to find nearby clinics, hospitals, and specialized doctors.",
        "Cross-platform compatibility delivering buttery-smooth 60fps animations on iOS and Android."
      ],
      ar: [
        "نظام جدولة مواعيد بديهي مع مزامنة التقويم في الوقت الفعلي والتحقق من توافر الأطباء.",
        "واجهة دردشة آمنة ومشفرة للاستشارات والمتابعة الطبية بين المريض والطبيب.",
        "تغذية صحية يومية مخصصة تقدم نصائح حول العافية، مقالات، وإرشادات للرعاية الوقائية.",
        "نظام تذكير ذكي بالأدوية مع إشعارات فورية لضمان الالتزام بالمواعيد الطبية.",
        "ملفات شخصية شاملة للمستخدمين تخزن التاريخ الطبي، الوصفات السابقة، ونتائج التحاليل بأمان.",
        "بحث يعتمد على الموقع للعثور على العيادات، المستشفيات، والأطباء المتخصصين القريبين.",
        "توافق تام عبر المنصات يقدم حركات سلسة جداً (60 إطار في الثانية) على كل من iOS و Android."
      ]
    },
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "SQLite", "Riverpod"],
  },
  "elda7e7": {
    id: "elda7e7",
    title: "Elda7e7 POS",
    role: "Desktop / Fullstack Developer",
    longDescription: {
      en: "Elda7e7 is a comprehensive Desktop Point of Sale (POS) and Cashier system engineered to streamline daily business operations for retail and commercial stores. Designed to run smoothly on desktop machines, it provides an all-in-one solution for inventory management, real-time sales tracking, barcode scanning, and invoice generation. The system reduces human error and drastically speeds up the checkout process, while giving store owners powerful insights through detailed daily and monthly financial reports.",
      ar: "نظام الدحيح (Elda7e7 POS) هو نظام كاشير متكامل وتطبيق سطح مكتب (Desktop) مصمم لتسهيل وتبسيط العمليات التجارية اليومية لمتاجر التجزئة والمحلات التجارية. تم تصميمه ليعمل بسلاسة على أجهزة الكمبيوتر، ويوفر حلاً شاملاً لإدارة المخزون، تتبع المبيعات في الوقت الفعلي، مسح الباركود، وتوليد الفواتير. يقلل النظام من الأخطاء البشرية ويسرع عملية الدفع بشكل كبير، مع منح أصحاب المتاجر رؤى قوية من خلال تقارير مالية يومية وشهرية مفصلة."
    },
    technicalDetails: {
      en: "The desktop application was built using modern cross-platform frameworks to ensure compatibility across Windows and Linux environments without sacrificing performance. It utilizes a robust local database (SQLite) for instantaneous data retrieval during checkouts, paired with a background sync mechanism that securely backs up daily transactions to a remote cloud server (Node.js/Express) at the end of each shift. The UI is designed for high-speed interactions, heavily optimized for keyboard shortcuts and barcode scanner inputs to eliminate mouse reliance for cashiers.",
      ar: "تم بناء تطبيق سطح المكتب باستخدام أطر عمل حديثة عبر المنصات (Cross-platform) لضمان التوافق مع بيئات ويندوز ولينكس دون التضحية بالأداء. يعتمد على قاعدة بيانات محلية قوية (SQLite) لضمان استرجاع البيانات فورياً أثناء الدفع، مقترنة بآلية مزامنة في الخلفية تقوم بعمل نسخة احتياطية للمعاملات اليومية بأمان على خادم سحابي (Node.js/Express) في نهاية كل وردية. تم تصميم واجهة المستخدم للتفاعلات السريعة، وتم تحسينها بشكل كبير لاختصارات لوحة المفاتيح وإدخالات ماسح الباركود (Barcode Scanner) لتقليل اعتماد الكاشير على الماوس."
    },
    features: {
      en: [
        "Fast and responsive checkout interface optimized for barcode scanners and keyboard shortcuts.",
        "Advanced inventory management with low-stock alerts and automated reordering suggestions.",
        "Real-time sales dashboard generating comprehensive daily, weekly, and monthly financial reports.",
        "Secure user authentication with distinct roles for cashiers, managers, and store owners.",
        "Offline-first architecture allowing uninterrupted sales even during internet outages.",
        "Customizable invoice generation and seamless receipt printer integration.",
        "End-of-shift automated data synchronization to a secure cloud backend."
      ],
      ar: [
        "واجهة دفع سريعة ومتجاوبة محسنة للعمل مع ماسحات الباركود واختصارات لوحة المفاتيح.",
        "إدارة متقدمة للمخزون مع تنبيهات نقص المخزون واقتراحات إعادة الطلب التلقائية.",
        "لوحة معلومات للمبيعات في الوقت الفعلي تولد تقارير مالية شاملة يومية وأسبوعية وشهرية.",
        "مصادقة مستخدمين آمنة مع أدوار وصلاحيات منفصلة للكاشير، والمديرين، وأصحاب المتاجر.",
        "بنية تعتمد على العمل دون اتصال أولاً (Offline-first) للسماح بالمبيعات المستمرة حتى أثناء انقطاع الإنترنت.",
        "توليد فواتير قابلة للتخصيص وتكامل سلس مع طابعات الإيصالات الحرارية.",
        "مزامنة بيانات تلقائية في نهاية الوردية (End-of-shift) إلى خادم سحابي آمن."
      ]
    },
    technologies: ["Flutter Desktop", "SQLite", "Node.js", "Express", "REST APIs", "Barcode Integrations"],
  },
  "coffee-shop": {
    id: "coffee-shop",
    title: "Coffee Shop Web",
    role: "Fullstack Developer",
    longDescription: {
      en: "The Coffee Shop Web application is a premium digital storefront designed to capture the cozy, sophisticated, and aromatic atmosphere of a modern cafe. Built with a keen eye for aesthetic detail, the website offers visitors an immersive experience right from their browsers. It features a beautifully curated, interactive digital menu displaying high-quality imagery of beverages and pastries, complete with nutritional information and customization options. Users can seamlessly place orders online, manage their virtual carts, and select pickup times. The UI/UX design utilizes advanced glassmorphism techniques, smooth scrolling animations, and dynamic state transitions to ensure the website feels as premium as the coffee being sold.",
      ar: "تطبيق Coffee Shop Web هو واجهة رقمية متميزة مصممة لالتقاط الأجواء المريحة، الراقية، والعطرة لمقهى حديث. تم بناء الموقع بعين ثاقبة للتفاصيل الجمالية، ويقدم للزوار تجربة غامرة مباشرة من متصفحاتهم. يتميز بقائمة رقمية تفاعلية ومنسقة بعناية تعرض صوراً عالية الجودة للمشروبات والمعجنات، مكتملة بالمعلومات الغذائية وخيارات التخصيص. يمكن للمستخدمين بسهولة تقديم طلبات عبر الإنترنت، وإدارة سلاتهم الافتراضية، واختيار أوقات الاستلام. يستخدم تصميم UI/UX تقنيات الـ Glassmorphism المتقدمة، وحركات التمرير السلسة، وانتقالات الحالة الديناميكية لضمان أن يبدو الموقع راقياً تماماً مثل القهوة التي يتم بيعها."
    },
    technicalDetails: {
      en: "The core of the application is built on Next.js, explicitly leveraging Static Site Generation (SSG) to pre-render the menu and landing pages. This results in ultra-fast loading times and perfect Lighthouse performance scores. The stunning UI animations are orchestrated using Framer Motion, utilizing layout animations and scroll-triggered reveals without compromising the main thread's performance. Tailwind CSS is used extensively for utility-first styling, enabling rapid implementation of the complex glassmorphism effects and ensuring 100% responsive grids. The cart state is managed via React Context APIs, keeping the client-side logic lightweight and avoiding the overhead of heavier state management libraries for a localized application scope.",
      ar: "جوهر التطبيق مبني على Next.js، مع الاستفادة القصوى من ميزة التوليد الثابت للصفحات (SSG) لعرض القوائم والصفحات الرئيسية مسبقاً. يؤدي ذلك إلى أوقات تحميل فائقة السرعة ونتائج أداء مثالية على Lighthouse. تم تنسيق حركات واجهة المستخدم (Animations) المذهلة باستخدام Framer Motion، من خلال الاستفادة من حركات التخطيط (Layout Animations) دون التأثير على أداء المتصفح الرئيسي. تم استخدام Tailwind CSS بشكل مكثف لتطبيق تأثيرات الـ Glassmorphism المعقدة وضمان شبكات متجاوبة بنسبة 100%. تُدار حالة سلة المشتريات باستخدام React Context APIs للحفاظ على خفة المنطق البرمجي وتقليل استهلاك الموارد مقارنة بمكتبات إدارة الحالة الثقيلة."
    },
    features: {
      en: [
        "Highly interactive, visually stunning digital menu with category filtering and item search.",
        "Customizable order options (size, milk type, extra shots) seamlessly integrated into the cart.",
        "Fluid and responsive UI animations utilizing Framer Motion for a premium browsing experience.",
        "Real-time cart management with instant price calculation and order summary.",
        "Responsive grid layouts ensuring perfect alignment and readability on mobile, tablet, and desktop.",
        "Integration with an interactive map API to display cafe locations and provide routing directions.",
        "Optimized image loading and caching strategies to maintain high performance with rich media."
      ],
      ar: [
        "قائمة رقمية تفاعلية وجذابة للغاية بصرياً مع ميزات تصفية الفئات والبحث عن العناصر.",
        "خيارات طلب قابلة للتخصيص (الحجم، نوع الحليب، الإضافات) مدمجة بسلاسة في سلة المشتريات.",
        "حركات واجهة مستخدم سلسة ومتجاوبة باستخدام Framer Motion لتجربة تصفح فاخرة.",
        "إدارة سلة المشتريات في الوقت الفعلي مع حساب فوري للسعر وملخص للطلب.",
        "تخطيطات شبكية متجاوبة تضمن محاذاة مثالية وسهولة قراءة على الموبايل، الجهاز اللوحي، وسطح المكتب.",
        "تكامل مع واجهة برمجة تطبيقات خرائط تفاعلية لعرض مواقع المقهى وتوفير اتجاهات الطريق.",
        "استراتيجيات تحسين تحميل الصور والتخزين المؤقت للحفاظ على أداء عالٍ مع الوسائط الغنية."
      ]
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Context API"],
  },
  "chicko-web": {
    id: "chicko-web",
    title: "Chicko Web",
    role: "Frontend Developer",
    longDescription: {
      en: "Chicko Web is a vibrant, high-energy promotional website and online ordering platform custom-built for a fast-food restaurant chain. The goal of the project was to create a digital presence that reflects the brand's bold flavors and lively personality. The homepage hits users immediately with mouth-watering imagery, dynamic carousels highlighting special offers, and bold typography. Underneath the striking visuals lies a highly optimized and streamlined online ordering system designed to minimize friction between the user's craving and the checkout process. Accessibility, speed, and cross-browser compatibility were key focus areas to ensure every hungry customer enjoys a flawless experience.",
      ar: "موقع Chicko Web هو موقع ترويجي نابض بالحياة وعالي الطاقة ومنصة للطلب عبر الإنترنت تم بناؤها خصيصاً لسلسلة مطاعم وجبات سريعة. كان الهدف من المشروع إنشاء حضور رقمي يعكس النكهات الجريئة والشخصية الحيوية للعلامة التجارية. تستقبل الصفحة الرئيسية المستخدمين فوراً بصور تفتح الشهية، وشرائح عرض (Carousels) ديناميكية تسلط الضوء على العروض الخاصة، وطباعة نصوص (Typography) عريضة. وتحت هذه المرئيات المذهلة، يكمن نظام طلب عبر الإنترنت محسن ومبسط للغاية مصمم لتقليل الاحتكاك بين رغبة المستخدم وعملية الدفع. كانت سهولة الوصول، السرعة، والتوافق عبر المتصفحات مجالات تركيز رئيسية لضمان استمتاع كل عميل جائع بتجربة خالية من العيوب."
    },
    technicalDetails: {
      en: "The architecture takes full advantage of React Server Components (RSC) within the Next.js App Router to drastically reduce the JavaScript bundle size shipped to the client, leading to a much faster Time to Interactive (TTI). Images are heavily optimized using the next/image component, converting assets to modern formats like WebP dynamically while preventing cumulative layout shifts (CLS). Custom React hooks were developed to handle API interactions for fetching live promotional deals and managing the ordering pipeline. The styling is completely modularized using Tailwind CSS, allowing rapid iteration on the UI components while maintaining a strict, coherent design system.",
      ar: "تستفيد البنية التحتية بالكامل من مكونات خادم React (React Server Components) ضمن موجه التطبيقات (App Router) الخاص بـ Next.js لتقليل حجم حزمة الـ JavaScript المرسلة إلى العميل بشكل كبير، مما يؤدي إلى سرعة استجابة مذهلة (TTI). يتم تحسين الصور تلقائياً باستخدام مكون next/image، الذي يحول الوسائط إلى صيغ حديثة مثل WebP ويمنع انزياح التخطيط (CLS). تم تطوير خطافات مخصصة (Custom React Hooks) للتعامل مع الواجهة البرمجية (API) لجلب العروض الترويجية الحية وإدارة تدفق الطلبات. التنسيق البرمجي (Styling) مقسم إلى وحدات بفضل Tailwind CSS، مما يسهل التعديلات السريعة على واجهة المستخدم مع الحفاظ على نظام تصميم متماسك."
    },
    features: {
      en: [
        "Vibrant, eye-catching design language featuring bold colors, dynamic transitions, and large imagery.",
        "Interactive promotional carousels showcasing daily deals and limited-time combos.",
        "Frictionless online ordering flow allowing users to build their meals and add to cart in clicks.",
        "Custom-built UI components including specialized modals, toast notifications, and floating buttons.",
        "Strict adherence to Core Web Vitals, ensuring lightning-fast load times even on mobile networks.",
        "Fully responsive architecture that scales flawlessly from large desktop monitors to small smartphone screens.",
        "SEO-friendly structure to drive local organic traffic to the restaurant's website."
      ],
      ar: [
        "لغة تصميم نابضة بالحياة وملفتة للنظر تتميز بألوان جريئة، انتقالات ديناميكية، وصور كبيرة الحجم.",
        "شرائح عرض (Carousels) ترويجية تفاعلية تعرض الصفقات اليومية والوجبات المجمعة لفترة محدودة.",
        "تدفق طلب عبر الإنترنت خالي من الاحتكاك يتيح للمستخدمين بناء وجباتهم والإضافة للسلة بنقرات معدودة.",
        "مكونات واجهة مستخدم مبنية خصيصاً تشمل نوافذ منبثقة مخصصة، إشعارات توست، وأزرار عائمة.",
        "التزام صارم بمقاييس أداء الويب الأساسية (Core Web Vitals)، لضمان أوقات تحميل سريعة جداً حتى على شبكات الجوال.",
        "بنية متجاوبة بالكامل تتوسع بشكل لا تشوبه شائبة من شاشات سطح المكتب الكبيرة إلى شاشات الهواتف الصغيرة.",
        "هيكل صديق لمحركات البحث (SEO) لزيادة الزيارات العضوية المحلية إلى موقع المطعم."
      ]
    },
    technologies: ["Next.js", "React Components", "Framer Motion", "Tailwind CSS", "Web Vitals"],
  }
};
