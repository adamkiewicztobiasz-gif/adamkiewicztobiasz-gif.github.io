import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform
} from "framer-motion";
import {
  HardHat,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Landmark,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
  Presentation,
  Home,
  Ruler,
  Layers,
  Building2,
  PaintRoller,
  TreePine,
  Warehouse,
  ClipboardList,
  Clock,
  ChevronDown,
  Check,
  ZoomIn,
  FileText,
  Stamp,
  Copy
} from "lucide-react";
const PHONES = ["502 296 397", "603 295 835"];
const EMAIL = "kontakt@j\u0142bud.pl";
const telForCopy = (p) => `+48 ${p}`;
function CopyButton({ value, className = "", iconClass = "w-4 h-4", ariaLabel = "Kopiuj" }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    };
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        done();
      } catch {
      }
      document.body.removeChild(ta);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).then(done).catch(fallback);
    } else {
      fallback();
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "button",
    {
      type: "button",
      onClick: copy,
      "aria-label": copied ? "Skopiowano" : ariaLabel,
      title: copied ? "Skopiowano" : "Kopiuj",
      className: `grid place-items-center transition-colors ${className} ${copied ? "text-emerald-500" : "hover:text-accent"}`,
      children: copied ? /* @__PURE__ */ jsxDEV(Check, { className: iconClass }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 52,
        columnNumber: 17
      }, this) : /* @__PURE__ */ jsxDEV(Copy, { className: iconClass }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 52,
        columnNumber: 51
      }, this)
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 5
    },
    this
  );
}
const NAV = [
  { label: "O nas", href: "#o-nas" },
  { label: "Us\u0142ugi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Kontakt", href: "#kontakt" }
];
const FEATURES = [
  {
    icon: Presentation,
    title: "Darmowa Wycena i Doradztwo",
    text: "Fachowy dob\xF3r materia\u0142\xF3w i darmowy kosztorys dopasowany do Twojego bud\u017Cetu i oczekiwa\u0144."
  },
  {
    icon: Truck,
    title: "W\u0142asne Rusztowania i Sprz\u0119t",
    text: "W\u0142asny park sprz\u0119towy oraz rusztowania. Brak dodatkowych koszt\xF3w wynajmu u podwykonawc\xF3w."
  },
  {
    icon: Sparkles,
    title: "Czysto\u015B\u0107 na Budowie",
    text: "Zabezpieczenie okien i elewacji, idealny porz\u0105dek na ka\u017Cdym etapie oraz po zako\u0144czeniu prac."
  },
  {
    icon: ShieldCheck,
    title: "Bezpiecze\u0144stwo i Precyzja",
    text: "Pracy zgodna z normami budowlanymi. Pe\u0142ne bezpiecze\u0144stwo dla ludzi, budynku i otoczenia."
  }
];
const SERVICES = [
  {
    icon: Layers,
    title: "Elewacje i Termoizolacja",
    option: "Elewacje i termoizolacja",
    color: "from-amber-400 to-orange-500",
    items: [
      "Styropian grafitowy i bia\u0142y",
      "We\u0142na mineralna",
      "Tynki silikonowe i akrylowe",
      "Deska elewacyjna",
      "Klinkier",
      "Beton architektoniczny"
    ]
  },
  {
    icon: PaintRoller,
    title: "Prace Wyko\u0144czeniowe",
    option: "Prace wyko\u0144czeniowe",
    color: "from-sky-500 to-indigo-500",
    items: [
      "Tynkowanie",
      "G\u0142adzie szpachlowe",
      "Posadzki",
      "Zabudowy z p\u0142yt G-K",
      "Malowanie",
      "Bia\u0142y monta\u017C"
    ]
  },
  {
    icon: Warehouse,
    title: "Stan Surowy i Konstrukcje Stalowe",
    option: "Stan surowy / konstrukcje stalowe",
    color: "from-slate-700 to-ink",
    items: [
      "Hale i wiaty",
      "Konstrukcje stalowe",
      "Obudowa p\u0142ytami warstwowymi",
      "Schody",
      "Balustrady"
    ]
  },
  {
    icon: TreePine,
    title: "Prace Towarzysz\u0105ce & Dachowe",
    option: "Prace towarzysz\u0105ce i dachowe",
    color: "from-emerald-500 to-teal-600",
    items: [
      "Parapety",
      "Obr\xF3bki blacharskie",
      "Systemy rynnowe",
      "Podbitka dachowa",
      "Hydroizolacja fundament\xF3w XPS"
    ]
  }
];
const FILTERS = ["Wszystkie", "Elewacje", "Wyko\u0144czenia", "Hale"];
const PROJECTS = [
  {
    id: 1,
    filter: "Elewacje",
    img: "elect",
    scene: "amber",
    title: "Ocieplenie i elewacja domu jednorodzinnego",
    location: "Ostr\xF3w Wielkopolski",
    timeline: "4 tygodnie",
    desc: "Kompleksowa termoizolacja budynku ze stylowym tynkiem silikonowym w jasnej tonacji.",
    tags: ["Grafit 20 cm", "Tynk Silikonowy", "Ostr\xF3w Wlkp."],
    scope: [
      "Ocieplenie \u015Bcian styropianem grafitowym 20 cm",
      "Wykonanie coko\u0142u z izolacj\u0105 XPS",
      "Wyko\u0144czenie tynkiem silikonowym baranek 1,5 mm",
      "Obr\xF3bki blacharskie i parapety zewn\u0119trzne",
      "Kolorystyka i malowanie tynku wykonawczego"
    ],
    materials: ["Styropian grafitowy 20 cm", "Tynk silikonowy", "Listwy startowe i naro\u017Cne"]
  },
  {
    id: 2,
    filter: "Elewacje",
    img: "kel",
    scene: "warm",
    title: "Termomodernizacja z elementami klinkieru",
    location: "Raszk\xF3w",
    timeline: "6 tygodni",
    desc: "Nowoczesna elewacja \u0142\u0105cz\u0105ca ciemny grafit z dekoracyjnymi pasami klinkierowymi.",
    tags: ["Grafit 15 cm", "Klinkier", "Raszk\xF3w"],
    scope: [
      "Ocieplenie styropianem grafitowym 15 cm",
      "Elewacyjne pasy klinkierowe r\u0119cznie mocowane",
      "Tynk cienkowarstwowy akrylowy",
      "Do\u015Bwietlenie i nowe oprawy elewacyjne",
      "Uporz\u0105dkowanie strefy wej\u015Bciowej"
    ],
    materials: ["Styropian grafitowy 15 cm", "Klinkier elewacyjny", "Tynk akrylowy"]
  },
  {
    id: 3,
    filter: "Wyko\u0144czenia",
    img: "interior",
    scene: "cool",
    title: "Kompleksowe wyko\u0144czenie wn\u0119trz",
    location: "Odolan\xF3w",
    timeline: "5 tygodni",
    desc: "Prace wyko\u0144czeniowe stanu surowego po klucz \u2014 od g\u0142adzi po bia\u0142y monta\u017C.",
    tags: ["G\u0142adzie", "Zabudowy G-K", "Bia\u0142y Monta\u017C", "Odolan\xF3w"],
    scope: [
      "Wykonanie tynk\xF3w i g\u0142adzi szpachlowych",
      "Zabudowy i sufity podwieszane G-K z o\u015Bwietleniem",
      "Posadzki cementowe i samopoziomuj\u0105ce",
      "Malowanie oraz tapetowanie \u015Bcian",
      "Monta\u017C armatury \u2013 bia\u0142y monta\u017C"
    ],
    materials: ["P\u0142yty G-K", "G\u0142ad\u017A szpachlowa", "Farby lateksowe"]
  },
  {
    id: 4,
    filter: "Elewacje",
    img: "build",
    scene: "dust",
    title: "Elewacja budynku us\u0142ugowego",
    location: "Ostr\xF3w Wielkopolski",
    timeline: "3 tygodnie",
    desc: "Praktyczna, trwa\u0142a elewacja lakierowa hotelu i punktu us\u0142ugowego z grafniti\u0105.",
    tags: ["Grafit 18 cm", "Tynk Lakierowy", "Ostr\xF3w Wlkp."],
    scope: [
      "Docieplenie strop\xF3w i \u015Bcian zewn\u0119trznych",
      "Wyko\u0144czenie tynkiem akrylowo-silikonowym",
      "Wymiana parapet\xF3w i rynien",
      "Nowe obr\xF3bki blacharskie w kolorze elewacji",
      "Remont klatki i strefy wej\u015Bciowej"
    ],
    materials: ["Styropian grafitowy 18 cm", "Tynk silikonowy", "Blacha tytan-cynk"]
  },
  {
    id: 5,
    filter: "Hale",
    img: "hal",
    scene: "steel",
    title: "Hala magazynowa z p\u0142yt warstwowych",
    location: "\u0141\u0105kociny",
    timeline: "8 tygodni",
    desc: "Realizacja stanu surowego hali o konstrukcji stalowej z elewacj\u0105 warstwow\u0105.",
    tags: ["Hala", "P\u0142yty Warstwowe", "Konstrukcja Stalowa", "\u0141\u0105kociny"],
    scope: [
      "Monta\u017C konstrukcji stalowej hali",
      "Obudowa \u015Bcian p\u0142ytami warstwowymi",
      "Wiata logistyczna przy hali",
      "Schody stalowe i balustrady",
      "Posadzka betonowa przemys\u0142owa"
    ],
    materials: ["Konstrukcja stalowa", "P\u0142yty warstwowe", "Beton przemys\u0142owy"]
  },
  {
    id: 6,
    filter: "Wyko\u0144czenia",
    img: "white",
    scene: "breeze",
    title: "Wyko\u0144czenia stanu surowego \u2013 dom w zabudowie bli\u017Aniaczej",
    location: "Sieroszewice",
    timeline: "7 tygodni",
    desc: "Pe\u0142ny zakres prac wyko\u0144czeniowych dla bli\u017Aniaka z tarasem i zagospodarowaniem.",
    tags: ["Tynkowanie", "Posadzki", "Bia\u0142y Monta\u017C", "Sieroszewice"],
    scope: [
      "Tynkowanie \u015Bcian i sufit\xF3w",
      "Posadzki samopoziomuj\u0105ce pod panele",
      "Zabudowy kuchenne i \u0142azienkowe G-K",
      "Malowanie ca\u0142ego budynku",
      "Monta\u017C stolarki i bia\u0142y monta\u017C"
    ],
    materials: ["G\u0142adzie", "P\u0142yty G-K", "Farby akrylowe"]
  }
];
const IMAGES = {
  amber: "jednorodzinny.png",
  warm: "termmod.png",
  cool: "wykwne.png",
  dust: "ele.png",
  steel: "hala.png",
  breeze: "blizniak.png"
};
function SceneImage({ variant = "amber", alt = "", eager = false }) {
  return /* @__PURE__ */ jsxDEV(
    "img",
    {
      src: IMAGES[variant] || IMAGES.amber,
      alt,
      loading: eager ? "eager" : "lazy",
      className: "w-full h-full object-cover"
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 243,
      columnNumber: 5
    },
    this
  );
}
function FadeUp({ children, delay = 0, className, y = 26 }) {
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className,
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      children
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 258,
      columnNumber: 5
    },
    this
  );
}
function SectionHeading({ kicker, title, sub, center }) {
  return /* @__PURE__ */ jsxDEV("div", { className: `max-w-2xl ${center ? "mx-auto text-center" : ""}`, children: [
    /* @__PURE__ */ jsxDEV(FadeUp, { children: /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-wide uppercase", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "h-px w-8 bg-accent inline-block" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 275,
        columnNumber: 11
      }, this),
      kicker
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 274,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 273,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FadeUp, { delay: 0.05, children: /* @__PURE__ */ jsxDEV("h2", { className: "mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-ink leading-[1.1]", children: title }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 280,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 279,
      columnNumber: 7
    }, this),
    sub && /* @__PURE__ */ jsxDEV(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-slate-500 text-base sm:text-lg leading-relaxed", children: sub }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 286,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 285,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 272,
    columnNumber: 5
  }, this);
}
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const smooth = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "bg-ink text-white text-[13px]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "hidden sm:flex items-center gap-2 text-slate-300", children: [
        /* @__PURE__ */ jsxDEV(MapPin, { className: "w-3.5 h-3.5 text-accent" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 320,
          columnNumber: 13
        }, this),
        " ul. Olszowa 36, Ostr\xF3w Wielkopolski"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 319,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-5", children: PHONES.map((p) => /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1.5 text-slate-200", children: [
        /* @__PURE__ */ jsxDEV(Phone, { className: "w-3.5 h-3.5 text-accent" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 325,
          columnNumber: 17
        }, this),
        " ",
        p,
        /* @__PURE__ */ jsxDEV(
          CopyButton,
          {
            value: telForCopy(p),
            ariaLabel: `Kopiuj numer ${p}`,
            className: "w-5 h-5 rounded text-slate-300",
            iconClass: "w-3.5 h-3.5"
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 326,
            columnNumber: 17
          },
          this
        )
      ] }, p, true, {
        fileName: "<stdin>",
        lineNumber: 324,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 322,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 318,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 317,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-soft" : "bg-white/50 backdrop-blur-sm"}`, children: [
      /* @__PURE__ */ jsxDEV("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "#top", onClick: (e) => smooth(e, "#top"), className: "flex items-center group", children: /* @__PURE__ */ jsxDEV("img", { src: "logo.png", alt: "J\u0141 BUD", className: "h-10 w-auto" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 343,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 342,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:flex items-center gap-8", children: NAV.map((n) => /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: n.href,
            onClick: (e) => smooth(e, n.href),
            className: "link-underline text-sm font-medium text-slate-600 hover:text-ink transition-colors",
            children: n.label
          },
          n.href,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 348,
            columnNumber: 15
          },
          this
        )) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 346,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "#kontakt",
              onClick: (e) => smooth(e, "#kontakt"),
              className: "hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-deep text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-soft hover:shadow-lift hover:-translate-y-0.5",
              children: [
                "Darmowa Wycena ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 358,
                  columnNumber: 30
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 356,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("button", { onClick: () => setOpen(!open), className: "lg:hidden p-2 text-ink", "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxDEV(X, { className: "w-6 h-6" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 361,
            columnNumber: 23
          }, this) : /* @__PURE__ */ jsxDEV(Menu, { className: "w-6 h-6" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 361,
            columnNumber: 51
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 360,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 355,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 341,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(AnimatePresence, { children: open && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.25 },
          className: "lg:hidden overflow-hidden bg-white border-t border-line",
          children: /* @__PURE__ */ jsxDEV("div", { className: "px-6 py-4 flex flex-col gap-1", children: [
            NAV.map((n) => /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: n.href,
                onClick: (e) => smooth(e, n.href),
                className: "py-2.5 text-slate-700 font-medium hover:text-accent transition-colors",
                children: n.label
              },
              n.href,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 377,
                columnNumber: 19
              },
              this
            )),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#kontakt",
                onClick: (e) => smooth(e, "#kontakt"),
                className: "mt-2 inline-flex items-center justify-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-3 rounded-xl",
                children: [
                  "Darmowa Wycena ",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 384,
                    columnNumber: 34
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 382,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 375,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 368,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 366,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 338,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 316,
    columnNumber: 5
  }, this);
}
function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const smooth = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const badges = [
    "W\u0142asny park sprz\u0119towy & rusztowania",
    "Gwarancja terminowo\u015Bci",
    "Czysto\u015B\u0107 i bezpiecze\u0144stwo"
  ];
  return /* @__PURE__ */ jsxDEV("section", { ref, className: "relative overflow-hidden bg-white", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 grid-pattern opacity-60" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 417,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 418,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-40 -left-40 w-[480px] h-[480px] bg-slate-200/50 rounded-full blur-3xl" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 419,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(motion.div, { style: { y, opacity }, className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-24 lg:pb-24 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV(
          motion.span,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "inline-flex items-center gap-2 bg-white border border-line text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm",
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: "relative flex w-2 h-2", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 428,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "relative inline-flex rounded-full w-2 h-2 bg-accent" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 429,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 427,
                columnNumber: 13
              }, this),
              "Kompleksowa obs\u0142uga budynk\xF3w"
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 423,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.h1,
          {
            initial: { opacity: 0, y: 28 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
            className: "mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.05] text-ink",
            children: [
              "Elewacje, ",
              /* @__PURE__ */ jsxDEV("span", { className: "relative text-accent", children: [
                "Ocieplenia",
                /* @__PURE__ */ jsxDEV("svg", { className: "absolute -bottom-2 left-0 w-full", height: "10", viewBox: "0 0 300 10", preserveAspectRatio: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("path", { d: "M2 8 C 80 2, 220 2, 298 6", stroke: "currentColor", strokeWidth: "4", fill: "none", strokeLinecap: "round" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 440,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 439,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 438,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 442,
                columnNumber: 20
              }, this),
              "i Prace Budowlane",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 442,
                columnNumber: 43
              }, this),
              "na Najwy\u017Cszym Poziomie"
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 434,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.p,
          {
            initial: { opacity: 0, y: 28 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
            className: "mt-6 text-lg text-slate-500 max-w-xl leading-relaxed",
            children: "Kompleksowa obs\u0142uga budynk\xF3w jednorodzinnych i us\u0142ugowych. Od projektu po idealny porz\u0105dek na budowie."
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 445,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 28 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
            className: "mt-8 flex flex-wrap gap-4",
            children: [
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#kontakt",
                  onClick: (e) => smooth(e, "#kontakt"),
                  className: "group inline-flex items-center gap-2 bg-ink hover:bg-slate-800 text-white text-base font-semibold px-7 py-4 rounded-full shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all",
                  children: [
                    "Zam\xF3w Bezp\u0142atn\u0105 Wycen\u0119",
                    /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 460,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "<stdin>",
                  lineNumber: 457,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#realizacje",
                  onClick: (e) => smooth(e, "#realizacje"),
                  className: "inline-flex items-center gap-2 bg-white border border-line text-ink text-base font-semibold px-7 py-4 rounded-full hover:border-accent hover:text-accent transition-all",
                  children: [
                    "Zobacz Nasze Realizacje",
                    /* @__PURE__ */ jsxDEV(ArrowUpRight, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 465,
                      columnNumber: 15
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "<stdin>",
                  lineNumber: 462,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 453,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.45 },
            className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-3",
            children: badges.map((b, i) => /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2 text-sm text-slate-600", children: [
              /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4 text-accent shrink-0" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 475,
                columnNumber: 17
              }, this),
              b,
              i < badges.length - 1 && /* @__PURE__ */ jsxDEV("span", { className: "hidden sm:block w-1 h-1 rounded-full bg-slate-300 mx-3" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 477,
                columnNumber: 43
              }, this)
            ] }, b, true, {
              fileName: "<stdin>",
              lineNumber: 474,
              columnNumber: 15
            }, this))
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 469,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 422,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-[2rem] blur-2xl" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 487,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-[2rem] overflow-hidden shadow-lift border border-white/40 ring-1 ring-line", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxDEV(SceneImage, { variant: "amber", alt: "Termomodernizacja domu jednorodzinnego", eager: true }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 490,
                columnNumber: 15
              }, this) }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 489,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 492,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 inset-x-0 p-6 flex items-end justify-between", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "text-white", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent", children: "Realizacja 2025" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 495,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-bold mt-1", children: [
                    "Termomodernizacja domu",
                    /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 496,
                      columnNumber: 77
                    }, this),
                    "w Ostr. Wlkp."
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 496,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 494,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-11 h-11 bg-white/15 backdrop-blur-md border border-white/30 rounded-full", children: /* @__PURE__ */ jsxDEV(HardHat, { className: "w-5 h-5 text-white" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 499,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 498,
                  columnNumber: 15
                }, this)
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 493,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 488,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.6 },
                className: "absolute -left-6 -bottom-6 bg-white rounded-2xl shadow-lift border border-line px-5 py-4 flex items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-11 h-11 rounded-xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsxDEV(Landmark, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 508,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 507,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-extrabold text-ink leading-none", children: "15+ lat" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 511,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500 font-medium mt-1", children: "do\u015Bwiadczenia w budownictwie" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 512,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 510,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 504,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 483,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 421,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 416,
    columnNumber: 5
  }, this);
}
function WhyUs() {
  return /* @__PURE__ */ jsxDEV("section", { id: "o-nas", className: "relative py-20 lg:py-28 bg-mist", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        center: true,
        kicker: "Dlaczego my",
        title: "Budujemy inaczej \u2014 z trosk\u0105 o detale",
        sub: "\u0141\u0105czymy do\u015Bwiadczenie, w\u0142asny sprz\u0119t i rzemie\u015Blnicz\u0105 precyzj\u0119, aby Twoja inwestycja by\u0142a realizowana spokojnie, terminowo i bez zb\u0119dnych koszt\xF3w."
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 529,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: FEATURES.map((f, i) => /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.1 },
        whileHover: { y: -6 },
        className: "group relative bg-white rounded-2xl border border-line p-7 shadow-sm hover:shadow-lift transition-shadow",
        children: [
          /* @__PURE__ */ jsxDEV("span", { className: "absolute top-0 left-7 right-7 h-1 bg-gradient-to-r from-accent to-accent-deep rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 546,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-grid place-items-center w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300", children: /* @__PURE__ */ jsxDEV(f.icon, { className: "w-6 h-6" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 548,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 547,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "mt-5 text-lg font-bold text-ink", children: f.title }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 550,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-slate-500 leading-relaxed", children: f.text }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 551,
            columnNumber: 15
          }, this)
        ]
      },
      f.title,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 537,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 535,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 528,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 527,
    columnNumber: 5
  }, this);
}
function Services() {
  const [open, setOpen] = useState(0);
  useEffect(() => {
    const handler = (e) => {
      const idx = e.detail?.index;
      if (typeof idx === "number" && idx >= 0 && idx < SERVICES.length) {
        setOpen(idx);
        document.getElementById("uslugi")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("open-service", handler);
    return () => window.removeEventListener("open-service", handler);
  }, []);
  return /* @__PURE__ */ jsxDEV("section", { id: "uslugi", className: "py-20 lg:py-28 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "lg:sticky lg:top-28", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeading,
        {
          kicker: "Zakres us\u0142ug",
          title: "Kompleksowo \u2014 od elewacji po schody",
          sub: "Wybierz katalog, kt\xF3ry najlepiej opisuje Twoje potrzeby. Ka\u017Cdy zakres realizujemy od pocz\u0105tku do ko\u0144ca, z pe\u0142n\u0105 odpowiedzialno\u015Bci\u0105 za jako\u015B\u0107 i porz\u0105dek."
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 584,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex items-center gap-5", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-12 h-12 rounded-xl bg-ink text-accent shadow-soft", children: /* @__PURE__ */ jsxDEV(Zap, { className: "w-5 h-5" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 591,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 590,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-800 font-semibold", children: "Wycena w 24 h" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 594,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-500", children: "Odpowiadamy szybko i konkretnie" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 595,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 593,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 589,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 583,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: SERVICES.map((s, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: i * 0.06 },
          className: "bg-white border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-soft transition-shadow",
          children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => setOpen(isOpen ? null : i),
                className: "w-full flex items-center justify-between gap-4 p-6 text-left",
                children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: `grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white shadow-soft`, children: /* @__PURE__ */ jsxDEV(s.icon, { className: "w-5.5 h-5.5", style: { width: 22, height: 22 } }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 618,
                      columnNumber: 25
                    }, this) }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 617,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-ink", children: s.title }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 621,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400", children: [
                        s.items.length,
                        " zakres\xF3w prac"
                      ] }, void 0, true, {
                        fileName: "<stdin>",
                        lineNumber: 622,
                        columnNumber: 25
                      }, this)
                    ] }, void 0, true, {
                      fileName: "<stdin>",
                      lineNumber: 620,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 616,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    motion.span,
                    {
                      animate: { rotate: isOpen ? 180 : 0 },
                      transition: { duration: 0.3 },
                      className: "grid place-items-center w-9 h-9 rounded-full bg-mist text-slate-600 border border-line shrink-0",
                      children: /* @__PURE__ */ jsxDEV(ChevronDown, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 630,
                        columnNumber: 23
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "<stdin>",
                      lineNumber: 625,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "<stdin>",
                lineNumber: 612,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxDEV("div", { className: "px-6 pb-6 pt-1", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "h-px bg-line mb-4" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 644,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV("ul", { className: "grid sm:grid-cols-2 gap-x-6 gap-y-2.5", children: s.items.map((it) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2.5 text-sm text-slate-600", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-5 h-5 rounded-full bg-accent/10 text-accent shrink-0", children: /* @__PURE__ */ jsxDEV(Check, { className: "w-3 h-3" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 649,
                      columnNumber: 35
                    }, this) }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 648,
                      columnNumber: 33
                    }, this),
                    it
                  ] }, it, true, {
                    fileName: "<stdin>",
                    lineNumber: 647,
                    columnNumber: 31
                  }, this)) }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 645,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "a",
                    {
                      href: "#kontakt",
                      onClick: (e) => {
                        e.preventDefault();
                        document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
                      },
                      className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-deep hover:text-accent transition-colors cursor-pointer",
                      children: [
                        "Zam\xF3w wycen\u0119 tej us\u0142ugi ",
                        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                          fileName: "<stdin>",
                          lineNumber: 660,
                          columnNumber: 51
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "<stdin>",
                      lineNumber: 655,
                      columnNumber: 1
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 643,
                  columnNumber: 25
                }, this)
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 636,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 634,
              columnNumber: 19
            }, this)
          ]
        },
        s.title,
        true,
        {
          fileName: "<stdin>",
          lineNumber: 604,
          columnNumber: 17
        },
        this
      );
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 600,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 582,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 581,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 580,
    columnNumber: 5
  }, this);
}
function ProjectCard({ project, onOpen, index }) {
  return /* @__PURE__ */ jsxDEV(
    motion.article,
    {
      layout: true,
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      className: "group bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-lift transition-[box-shadow] flex flex-col",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden aspect-[4/3] cursor-pointer", onClick: () => onOpen(project), children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-full h-full transition-transform duration-700 ease-out group-hover:scale-110", children: /* @__PURE__ */ jsxDEV(SceneImage, { variant: project.scene, alt: project.title }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 692,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 691,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 694,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur text-ink text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm", children: [
            /* @__PURE__ */ jsxDEV(Home, { className: "w-3.5 h-3.5 text-accent" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 696,
              columnNumber: 11
            }, this),
            " ",
            project.filter
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 695,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "absolute top-4 right-4 inline-flex items-center gap-1.5 bg-ink/60 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full", children: [
            /* @__PURE__ */ jsxDEV(Clock, { className: "w-3.5 h-3.5 text-accent" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 699,
              columnNumber: 11
            }, this),
            " ",
            project.timeline
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 698,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-4 inset-x-4 flex items-end justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-white text-sm font-semibold", children: "Zobacz szczeg\xF3\u0142y" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 702,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-10 h-10 rounded-full bg-accent text-white shadow-soft", children: /* @__PURE__ */ jsxDEV(ZoomIn, { className: "w-4 h-4" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 704,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 703,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 701,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 690,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-ink leading-snug", children: project.title }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 710,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2", children: project.desc }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 711,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex flex-wrap gap-2", children: project.tags.map((t) => /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-mist border border-line px-2.5 py-1 rounded-md", children: [
            /* @__PURE__ */ jsxDEV(Stamp, { className: "w-3 h-3 text-accent" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 716,
              columnNumber: 15
            }, this),
            " ",
            t
          ] }, t, true, {
            fileName: "<stdin>",
            lineNumber: 715,
            columnNumber: 13
          }, this)) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 713,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => onOpen(project),
              className: "mt-5 pt-4 border-t border-line inline-flex items-center gap-2 text-sm font-semibold text-ink group/btn w-full text-left hover:text-accent transition-colors",
              children: [
                "Zobacz szczeg\xF3\u0142y",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 transition-transform group-hover/btn:translate-x-1" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 724,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "<stdin>",
              lineNumber: 721,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 709,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 682,
      columnNumber: 5
    },
    this
  );
}
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const ask = () => {
    document.body.style.overflow = "";
    onClose();
    setTimeout(() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" }), 400);
  };
  if (!project) return null;
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex items-end sm:items-center justify-center",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-ink/60 backdrop-blur-sm", onClick: onClose }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 755,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 60, scale: 0.97 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 60, scale: 0.97 },
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            className: "relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-lift flex flex-col modal-scroll",
            children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: onClose,
                  className: "absolute top-4 right-4 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/90 backdrop-blur text-ink hover:bg-accent hover:text-white transition-colors shadow-sm",
                  "aria-label": "Zamknij",
                  children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 766,
                    columnNumber: 11
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 763,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("div", { className: "relative shrink-0", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsxDEV(SceneImage, { variant: project.scene, alt: project.title }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 771,
                  columnNumber: 13
                }, this) }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 770,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 773,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-5 inset-x-6 text-white", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-semibold uppercase tracking-wider text-accent", children: project.filter }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 775,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-xl sm:text-2xl font-bold mt-1 leading-snug", children: project.title }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 776,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 774,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 769,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "overflow-y-auto p-6 sm:p-8", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-4", children: [
                  { icon: MapPin, label: "Lokalizacja", value: project.location },
                  { icon: Clock, label: "Czas realizacji", value: project.timeline },
                  { icon: Ruler, label: "Zakres", value: `${project.scope.length} pozycji` }
                ].map((s) => /* @__PURE__ */ jsxDEV("div", { className: "bg-mist border border-line rounded-xl p-4", children: [
                  /* @__PURE__ */ jsxDEV(s.icon, { className: "w-4 h-4 text-accent" }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 788,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] font-semibold uppercase tracking-wide text-slate-400 mt-2", children: s.label }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 789,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold text-ink mt-0.5", children: s.value }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 790,
                    columnNumber: 17
                  }, this)
                ] }, s.label, true, {
                  fileName: "<stdin>",
                  lineNumber: 787,
                  columnNumber: 15
                }, this)) }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 781,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: [
                  /* @__PURE__ */ jsxDEV("h4", { className: "flex items-center gap-2 text-base font-bold text-ink", children: [
                    /* @__PURE__ */ jsxDEV(ClipboardList, { className: "w-4.5 h-4.5 text-accent", style: { width: 18, height: 18 } }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 797,
                      columnNumber: 15
                    }, this),
                    " Zakres prac"
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 796,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ jsxDEV("ul", { className: "mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2.5", children: project.scope.map((s) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2.5 text-sm text-slate-600", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-5 h-5 rounded-full bg-accent/10 text-accent shrink-0 mt-0.5", children: /* @__PURE__ */ jsxDEV(Check, { className: "w-3 h-3" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 803,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 802,
                      columnNumber: 19
                    }, this),
                    s
                  ] }, s, true, {
                    fileName: "<stdin>",
                    lineNumber: 801,
                    columnNumber: 17
                  }, this)) }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 799,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 795,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: [
                  /* @__PURE__ */ jsxDEV("h4", { className: "flex items-center gap-2 text-base font-bold text-ink", children: [
                    /* @__PURE__ */ jsxDEV(Layers, { className: "w-4.5 h-4.5 text-accent", style: { width: 18, height: 18 } }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 813,
                      columnNumber: 15
                    }, this),
                    " Zastosowane materia\u0142y"
                  ] }, void 0, true, {
                    fileName: "<stdin>",
                    lineNumber: 812,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "mt-3 flex flex-wrap gap-2", children: project.materials.map((m) => /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-line px-3 py-1.5 rounded-full", children: [
                    /* @__PURE__ */ jsxDEV(Stamp, { className: "w-3.5 h-3.5 text-accent" }, void 0, false, {
                      fileName: "<stdin>",
                      lineNumber: 818,
                      columnNumber: 19
                    }, this),
                    " ",
                    m
                  ] }, m, true, {
                    fileName: "<stdin>",
                    lineNumber: 817,
                    columnNumber: 17
                  }, this)) }, void 0, false, {
                    fileName: "<stdin>",
                    lineNumber: 815,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "<stdin>",
                  lineNumber: 811,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: ask,
                    className: "mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all",
                    children: [
                      "Zapytaj o podobn\u0105 realizacj\u0119 ",
                      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                        fileName: "<stdin>",
                        lineNumber: 826,
                        columnNumber: 42
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "<stdin>",
                    lineNumber: 824,
                    columnNumber: 11
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 780,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 756,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "<stdin>",
      lineNumber: 751,
      columnNumber: 5
    },
    this
  );
}
function Portfolio() {
  const [active, setActive] = useState("Wszystkie");
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(
    () => active === "Wszystkie" ? PROJECTS : PROJECTS.filter((p) => p.filter === active),
    [active]
  );
  return /* @__PURE__ */ jsxDEV("section", { id: "realizacje", className: "py-20 lg:py-28 bg-mist", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6", children: [
        /* @__PURE__ */ jsxDEV(
          SectionHeading,
          {
            kicker: "Portfolio",
            title: "Nasze zrealizowane projekty",
            sub: "Ka\u017Cda realizacja to efekt pracy i do\u015Bwiadczenia ca\u0142ego zespo\u0142u J\u0141 BUD. Kliknij projekt, aby zobaczy\u0107 szczeg\xF3\u0142y."
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 847,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: FILTERS.map((f) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActive(f),
            className: `relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${active === f ? "text-white" : "text-slate-600 bg-white border border-line hover:border-accent hover:text-accent"}`,
            children: [
              active === f && /* @__PURE__ */ jsxDEV(
                motion.span,
                {
                  layoutId: "portfolio-filter",
                  className: "absolute inset-0 bg-ink rounded-full transition-colors",
                  transition: { type: "spring", stiffness: 350, damping: 30 }
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 860,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("span", { className: "relative z-10", children: f }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 863,
                columnNumber: 19
              }, this)
            ]
          },
          f,
          true,
          {
            fileName: "<stdin>",
            lineNumber: 855,
            columnNumber: 17
          },
          this
        )) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 853,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 852,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 846,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(motion.div, { layout: true, className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "popLayout", children: filtered.map((p, i) => /* @__PURE__ */ jsxDEV(ProjectCard, { project: p, onOpen: setSelected, index: i }, p.id, false, {
        fileName: "<stdin>",
        lineNumber: 873,
        columnNumber: 15
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 871,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 870,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 845,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: selected && /* @__PURE__ */ jsxDEV(ProjectModal, { project: selected, onClose: () => setSelected(null) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 880,
      columnNumber: 22
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 879,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 844,
    columnNumber: 5
  }, this);
}
function Contact() {
  return /* @__PURE__ */ jsxDEV("section", { id: "kontakt", className: "py-20 lg:py-28 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeading,
        {
          kicker: "Kontakt",
          title: "Porozmawiajmy o Twojej inwestycji",
          sub: "Odpowiemy na pytania i przygotujemy bezp\u0142atn\u0105, szczeg\xF3\u0142ow\u0105 wycen\u0119. Jeste\u015Bmy do dyspozycji od poniedzia\u0142ku do pi\u0105tku."
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 895,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 space-y-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0", children: /* @__PURE__ */ jsxDEV(Building2, { className: "w-5 h-5" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 903,
            columnNumber: 112
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 903,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400 font-medium", children: "Firma" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 905,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-ink", children: "J\u0141 BUD Sp. z o.o." }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 906,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 904,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 902,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 910,
            columnNumber: 112
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 910,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400 font-medium", children: "Adres" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 912,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-ink", children: "ul. Olszowa 36, 63-400 Ostr\xF3w Wielkopolski" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 913,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 911,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 909,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 917,
            columnNumber: 112
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 917,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400 font-medium", children: "Telefon" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 919,
              columnNumber: 17
            }, this),
            PHONES.map((p) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-ink select-all", children: p }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 922,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV(
                CopyButton,
                {
                  value: telForCopy(p),
                  ariaLabel: `Kopiuj numer ${p}`,
                  className: "w-7 h-7 rounded-lg bg-accent/10 text-accent",
                  iconClass: "w-3.5 h-3.5"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 923,
                  columnNumber: 21
                },
                this
              )
            ] }, p, true, {
              fileName: "<stdin>",
              lineNumber: 921,
              columnNumber: 19
            }, this))
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 918,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 916,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 930,
            columnNumber: 112
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 930,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400 font-medium", children: "Email" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 932,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-ink select-all", children: EMAIL }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 934,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                CopyButton,
                {
                  value: EMAIL,
                  ariaLabel: "Kopiuj email",
                  className: "w-7 h-7 rounded-lg bg-accent/10 text-accent",
                  iconClass: "w-3.5 h-3.5"
                },
                void 0,
                false,
                {
                  fileName: "<stdin>",
                  lineNumber: 935,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 933,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 931,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 929,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0", children: /* @__PURE__ */ jsxDEV(FileText, { className: "w-5 h-5" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 941,
            columnNumber: 112
          }, this) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 941,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400 font-medium", children: "Dane rejestrowe" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 943,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-600 font-medium", children: "NIP: 622 286 35 90 \xB7 REGON: 541527553" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 944,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 942,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 940,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 901,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 894,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsxDEV("div", { className: "bg-mist border border-line rounded-3xl p-6 sm:p-8 shadow-soft relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full blur-2xl" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 952,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-14 h-14 rounded-xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-6 h-6" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 954,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 953,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("h3", { className: "mt-5 text-xl font-bold text-ink", children: "Jak poprosi\u0107 o wycen\u0119?" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 956,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-sm text-slate-500 leading-relaxed", children: "Je\u015Bli chcesz poprosi\u0107 o darmow\u0105 wycen\u0119, skontaktuj si\u0119 z nami mailowo podaj\u0105c:" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 957,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-2.5", children: ["Imi\u0119", "Nazwisko", "\u017B\u0105dan\u0105 us\u0142ug\u0119", "Mail/telefon"].map((item) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-2.5 text-sm text-slate-700", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "grid place-items-center w-5 h-5 rounded-full bg-accent/10 text-accent shrink-0", children: /* @__PURE__ */ jsxDEV(Check, { className: "w-3 h-3" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 964,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 963,
          columnNumber: 19
        }, this),
        item
      ] }, item, true, {
        fileName: "<stdin>",
        lineNumber: 962,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 960,
        columnNumber: 13
      }, this),
      /* @_PURE_ */ jsxDEV(
          "div",
          {
              className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-deep",
              children: [
      /* @_PURE_ */ jsxDEV(Mail, { className: "w-4 h-4" }, void 0, false, { fileName: "<stdin>", lineNumber: 972, columnNumber: 15 }, this),
                  " ",
                  EMAIL,
      /* @_PURE_ */ jsxDEV(CopyButton, { value: EMAIL, ariaLabel: "Kopiuj adres e-mail" }, void 0, false, { fileName: "<stdin>", lineNumber: 975, columnNumber: 15 }, this)
              ]
          },
          void 0,
          true,
          { fileName: "<stdin>", lineNumber: 970, columnNumber: 13 },
          this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 951,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 950,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 893,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 892,
    columnNumber: 5
  }, this);
}
function Footer() {
  const smooth = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxDEV("footer", { className: "bg-ink text-slate-300", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("img", { src: "ikonka.png", alt: "JŁ BUD", className: "h-10 w-auto brightness-0 invert" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 994,
          columnNumber: 13
        }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 994,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-sm text-slate-400 leading-relaxed", children: "Elewacje, ocieplenia i prace budowlane na najwy\u017Cszym poziomie. Kompleksowo od projektu po idealny porz\u0105dek na budowie." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1e3,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 993,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-white font-bold text-sm uppercase tracking-wider", children: "Nawigacja" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1004,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-2.5", children: NAV.map((n) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV("a", { href: n.href, onClick: (e) => smooth(e, n.href), className: "text-sm text-slate-400 hover:text-accent transition-colors", children: n.label }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1007,
          columnNumber: 34
        }, this) }, n.href, false, {
          fileName: "<stdin>",
          lineNumber: 1007,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1005,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 1003,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-white font-bold text-sm uppercase tracking-wider", children: "Us\u0142ugi" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1013,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-2.5", children: SERVICES.slice(0, 4).map((s, i) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: "#uslugi",
            onClick: (e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("open-service", { detail: { index: i } }));
            },
            className: "text-sm text-slate-400 hover:text-accent transition-colors cursor-pointer",
            children: s.title
          },
          void 0,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 1017,
            columnNumber: 19
          },
          this
        ) }, s.title, false, {
          fileName: "<stdin>",
          lineNumber: 1016,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1014,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 1012,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-white font-bold text-sm uppercase tracking-wider", children: "Dane kontaktowe" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 1031,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-3 text-sm text-slate-400", children: [
          /* @__PURE__ */ jsxDEV("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 1033,
              columnNumber: 42
            }, this),
            " ul. Olszowa 36, 63-400 Ostr\xF3w Wielkopolski"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 1033,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 1034,
              columnNumber: 42
            }, this),
            " 502 296 397 \xB7 603 295 835"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 1034,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4 text-accent shrink-0 mt-0.5" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 1035,
              columnNumber: 42
            }, this),
              "kontakt@j\u0142bud.pl"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 1035,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 1032,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 1030,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 992,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " J\u0141 BUD Sp. z o.o. Wszelkie prawa zastrze\u017Cone."
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 1041,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-500", children: "NIP: 622 286 35 90 \xB7 REGON: 541527553 \xB7 ul. Olszowa 36, 63-400 Ostr\xF3w Wielkopolski" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 1042,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 1040,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 991,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 990,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 1056,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { id: "top", children: [
      /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 1058,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(WhyUs, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 1059,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Services, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 1060,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Portfolio, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 1061,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 1062,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 1057,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 1064,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 1055,
    columnNumber: 5
  }, this);
}
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 1069,
  columnNumber: 52
}));
