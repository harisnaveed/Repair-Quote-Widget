// ─── repairData.js ───────────────────────────────────────────────────────────
// Central data store. In a real-world app this lives on your backend/database.
// The API layer (repairApi.js) reads from here and wraps calls in async delays.

export const devices = [
  { id: "smartphone", label: "Smartphone", icon: "📱", desc: "iOS & Android" },
  { id: "laptop",     label: "Laptop",     icon: "💻", desc: "All brands"    },
  { id: "pc",         label: "Desktop PC", icon: "🖥️", desc: "Tower & AIO"  },
  { id: "tablet",     label: "Tablet",     icon: "📲", desc: "iPad & more"   },
  { id: "watch",      label: "Smartwatch", icon: "⌚", desc: "Wearables"     },
  { id: "console",    label: "Console",    icon: "🎮", desc: "Gaming"        },
];

export const brands = {
  smartphone: [
    { id: "apple",   label: "Apple",   icon: "🍎", hasCategories: false },
    { id: "samsung", label: "Samsung", icon: "🔷", hasCategories: true  },
    { id: "huawei",  label: "Huawei",  icon: "🌸", hasCategories: true  },
    { id: "xiaomi",  label: "Xiaomi",  icon: "⚡", hasCategories: true  },
    { id: "oppo",    label: "OPPO",    icon: "🟢", hasCategories: true  },
    { id: "google",  label: "Google",  icon: "🔴", hasCategories: false },
    { id: "nokia",   label: "Nokia",   icon: "🔵", hasCategories: false },
    { id: "oneplus", label: "OnePlus", icon: "🔴", hasCategories: true  },
  ],
  laptop: [
    { id: "apple",  label: "Apple",   icon: "🍎", hasCategories: false },
    { id: "dell",   label: "Dell",    icon: "💠", hasCategories: true  },
    { id: "hp",     label: "HP",      icon: "🖨️", hasCategories: true  },
    { id: "lenovo", label: "Lenovo",  icon: "🔲", hasCategories: true  },
    { id: "asus",   label: "ASUS",    icon: "🔺", hasCategories: true  },
    { id: "msi",    label: "MSI",     icon: "🐉", hasCategories: false },
    { id: "acer",   label: "Acer",    icon: "🟧", hasCategories: true  },
  ],
  pc: [
    { id: "custom",  label: "Custom Build", icon: "🔧", hasCategories: false },
    { id: "dell",    label: "Dell",         icon: "💠", hasCategories: true  },
    { id: "hp",      label: "HP",           icon: "🖨️", hasCategories: true  },
    { id: "lenovo",  label: "Lenovo",       icon: "🔲", hasCategories: false },
    { id: "asus",    label: "ASUS",         icon: "🔺", hasCategories: false },
  ],
  tablet: [
    { id: "apple",   label: "Apple",   icon: "🍎", hasCategories: true  },
    { id: "samsung", label: "Samsung", icon: "🔷", hasCategories: true  },
    { id: "huawei",  label: "Huawei",  icon: "🌸", hasCategories: false },
    { id: "lenovo",  label: "Lenovo",  icon: "🔲", hasCategories: false },
    { id: "amazon",  label: "Amazon",  icon: "🟠", hasCategories: false },
  ],
  watch: [
    { id: "apple",   label: "Apple Watch",  icon: "🍎", hasCategories: false },
    { id: "samsung", label: "Galaxy Watch", icon: "🔷", hasCategories: false },
    { id: "garmin",  label: "Garmin",       icon: "🏃", hasCategories: false },
    { id: "fitbit",  label: "Fitbit",       icon: "💚", hasCategories: false },
  ],
  console: [
    { id: "sony",      label: "PlayStation", icon: "🎮", hasCategories: true  },
    { id: "microsoft", label: "Xbox",        icon: "💚", hasCategories: true  },
    { id: "nintendo",  label: "Nintendo",    icon: "🔴", hasCategories: false },
  ],
};

export const categories = {
  "smartphone-samsung": [
    { id: "z-series",  label: "Z Series",  icon: "🔄", desc: "Foldable phones"   },
    { id: "s-series",  label: "S Series",  icon: "⭐", desc: "Flagship series"  },
    { id: "a-series",  label: "A Series",  icon: "🔵", desc: "Mid-range series"  },
    { id: "m-series",  label: "M Series",  icon: "🟣", desc: "Budget series"     },
    { id: "f-series",  label: "F Series",  icon: "🔶", desc: "Fan edition"       },
  ],
  "smartphone-huawei": [
    { id: "p-series",    label: "P Series",    icon: "📸", desc: "Camera focused"  },
    { id: "mate-series", label: "Mate Series", icon: "💼", desc: "Business series" },
    { id: "nova-series", label: "Nova Series", icon: "✨", desc: "Youth series"    },
  ],
  "smartphone-xiaomi": [
    { id: "14-series",  label: "Xiaomi 14",   icon: "🔝", desc: "Flagship"       },
    { id: "redmi-note", label: "Redmi Note",  icon: "📝", desc: "Mid-range"      },
    { id: "poco",       label: "POCO",        icon: "⚡", desc: "Performance"    },
    { id: "redmi",      label: "Redmi",       icon: "🔴", desc: "Entry level"    },
  ],
  "smartphone-oppo": [
    { id: "find-x",   label: "Find X",   icon: "🔍", desc: "Flagship"       },
    { id: "reno",     label: "Reno",     icon: "🎨", desc: "Photography"    },
    { id: "a-series", label: "A Series", icon: "🟢", desc: "Entry level"    },
  ],
  "smartphone-oneplus": [
    { id: "flagship", label: "Nord Series",   icon: "🔝", desc: "Mid-range"   },
    { id: "numbered", label: "Numbered (11, 12)", icon: "🔢", desc: "Flagship" },
  ],
  "laptop-dell": [
    { id: "xps",       label: "XPS",       icon: "💎", desc: "Premium thin & light" },
    { id: "inspiron",  label: "Inspiron",  icon: "💡", desc: "Everyday use"         },
    { id: "alienware", label: "Alienware", icon: "👽", desc: "Gaming"               },
    { id: "latitude",  label: "Latitude",  icon: "🌍", desc: "Business"             },
  ],
  "laptop-hp": [
    { id: "spectre",  label: "Spectre",  icon: "✨", desc: "Premium series"  },
    { id: "envy",     label: "Envy",     icon: "💜", desc: "Creator series"  },
    { id: "pavilion", label: "Pavilion", icon: "🏛️", desc: "Everyday use"   },
    { id: "omen",     label: "OMEN",     icon: "🎯", desc: "Gaming"          },
  ],
  "laptop-lenovo": [
    { id: "thinkpad", label: "ThinkPad", icon: "💭", desc: "Business series" },
    { id: "ideapad",  label: "IdeaPad",  icon: "💡", desc: "Consumer series" },
    { id: "legion",   label: "Legion",   icon: "⚔️", desc: "Gaming series"  },
    { id: "yoga",     label: "Yoga",     icon: "🧘", desc: "2-in-1 series"  },
  ],
  "laptop-asus": [
    { id: "rog",      label: "ROG",      icon: "🎯", desc: "Republic of Gamers" },
    { id: "zenbook",  label: "ZenBook",  icon: "🧘", desc: "Premium ultrabook"  },
    { id: "vivobook", label: "VivoBook", icon: "🌈", desc: "Everyday series"    },
    { id: "tuf",      label: "TUF",      icon: "🛡️", desc: "Durable gaming"    },
  ],
  "laptop-acer": [
    { id: "predator", label: "Predator", icon: "🦖", desc: "Gaming"         },
    { id: "aspire",   label: "Aspire",   icon: "🌟", desc: "Everyday"       },
    { id: "swift",    label: "Swift",    icon: "🦅", desc: "Ultrabook"      },
  ],
  "tablet-apple": [
    { id: "ipad-pro",  label: "iPad Pro",  icon: "💻", desc: "Pro performance" },
    { id: "ipad-air",  label: "iPad Air",  icon: "💨", desc: "Versatile"       },
    { id: "ipad-mini", label: "iPad Mini", icon: "🤏", desc: "Compact"         },
    { id: "ipad",      label: "iPad",      icon: "📲", desc: "Standard"        },
  ],
  "tablet-samsung": [
    { id: "galaxy-tab-s", label: "Galaxy Tab S", icon: "⭐", desc: "Flagship tablets" },
    { id: "galaxy-tab-a", label: "Galaxy Tab A", icon: "🔵", desc: "Budget tablets"   },
  ],
  "pc-dell": [
    { id: "optiplex",  label: "OptiPlex",  icon: "🏢", desc: "Business desktops" },
    { id: "xps",       label: "XPS",       icon: "💎", desc: "Premium desktops"  },
    { id: "alienware", label: "Alienware", icon: "👽", desc: "Gaming desktops"   },
  ],
  "pc-hp": [
    { id: "elite",    label: "EliteDesk", icon: "💼", desc: "Business"  },
    { id: "pavilion", label: "Pavilion",  icon: "🏛️", desc: "Home use" },
    { id: "omen",     label: "OMEN",      icon: "🎯", desc: "Gaming"   },
  ],
  "console-sony": [
    { id: "ps5", label: "PlayStation 5", icon: "5️⃣", desc: "Latest gen"   },
    { id: "ps4", label: "PlayStation 4", icon: "4️⃣", desc: "Previous gen" },
  ],
  "console-microsoft": [
    { id: "series-x", label: "Xbox Series X", icon: "❎", desc: "Latest gen"   },
    { id: "one",      label: "Xbox One",      icon: "1️⃣", desc: "Previous gen" },
  ],
};

export const models = {
  // Smartphones - Apple (no category)
  "smartphone-apple": [
    { id: "iphone16promax", label: "iPhone 16 Pro Max", icon: "📱", desc: "Top of the line" },
    { id: "iphone16pro",    label: "iPhone 16 Pro",     icon: "📱", desc: "Latest Pro"      },
    { id: "iphone16plus",   label: "iPhone 16 Plus",    icon: "📱", desc: "Big screen"      },
    { id: "iphone16",       label: "iPhone 16",         icon: "📱", desc: "Latest standard" },
    { id: "iphone15pro",    label: "iPhone 15 Pro",     icon: "📱", desc: "Pro camera"      },
    { id: "iphone15",       label: "iPhone 15",         icon: "📱", desc: "Popular"         },
    { id: "iphone14",       label: "iPhone 14",         icon: "📱", desc: "Reliable"        },
    { id: "iphone13",       label: "iPhone 13",         icon: "📱", desc: "Classic"         },
    { id: "iphonese3",      label: "iPhone SE (3rd)",   icon: "📱", desc: "Compact budget"  },
  ],
  "smartphone-google": [
    { id: "pixel9pro", label: "Pixel 9 Pro",  icon: "📱", desc: "AI-powered flagship" },
    { id: "pixel9",    label: "Pixel 9",      icon: "📱", desc: "Pure Android"        },
    { id: "pixel8pro", label: "Pixel 8 Pro",  icon: "📱", desc: "Previous flagship"   },
    { id: "pixel8",    label: "Pixel 8",      icon: "📱", desc: "Popular"             },
    { id: "pixel7a",   label: "Pixel 7a",     icon: "📱", desc: "Mid-range"           },
  ],
  "smartphone-nokia": [
    { id: "nokia-g60",  label: "Nokia G60",  icon: "📱", desc: "5G budget"   },
    { id: "nokia-x30",  label: "Nokia X30",  icon: "📱", desc: "Eco-friendly" },
    { id: "nokia-3310", label: "Nokia 3310", icon: "📱", desc: "Classic"      },
  ],
  // Samsung categories
  "smartphone-samsung-z-series": [
    { id: "z-fold6", label: "Galaxy Z Fold 6", icon: "📱", desc: "Foldable flagship" },
    { id: "z-flip6", label: "Galaxy Z Flip 6", icon: "📱", desc: "Flip style"        },
    { id: "z-fold5", label: "Galaxy Z Fold 5", icon: "📱", desc: "Previous gen"      },
    { id: "z-flip5", label: "Galaxy Z Flip 5", icon: "📱", desc: "Compact flip"      },
  ],
  "smartphone-samsung-s-series": [
    { id: "s24ultra", label: "Galaxy S24 Ultra", icon: "📱", desc: "Ultimate"        },
    { id: "s24plus",  label: "Galaxy S24+",      icon: "📱", desc: "Large screen"    },
    { id: "s24",      label: "Galaxy S24",       icon: "📱", desc: "Standard"        },
    { id: "s23ultra", label: "Galaxy S23 Ultra", icon: "📱", desc: "Prev flagship"   },
    { id: "s23",      label: "Galaxy S23",       icon: "📱", desc: "Previous gen"    },
  ],
  "smartphone-samsung-a-series": [
    { id: "a55", label: "Galaxy A55", icon: "📱", desc: "Mid-range"  },
    { id: "a35", label: "Galaxy A35", icon: "📱", desc: "Affordable" },
    { id: "a25", label: "Galaxy A25", icon: "📱", desc: "Value"      },
    { id: "a15", label: "Galaxy A15", icon: "📱", desc: "Entry"      },
  ],
  "smartphone-samsung-m-series": [
    { id: "m55", label: "Galaxy M55", icon: "📱", desc: "Budget king" },
    { id: "m35", label: "Galaxy M35", icon: "📱", desc: "Value pick"  },
    { id: "m15", label: "Galaxy M15", icon: "📱", desc: "Entry"       },
  ],
  "smartphone-samsung-f-series": [
    { id: "f55", label: "Galaxy F55", icon: "📱", desc: "Fan edition" },
    { id: "f15", label: "Galaxy F15", icon: "📱", desc: "Fan budget"  },
  ],
  // Huawei
  "smartphone-huawei-p-series": [
    { id: "p60pro",   label: "Huawei P60 Pro", icon: "📱", desc: "Camera king"    },
    { id: "p60",      label: "Huawei P60",     icon: "📱", desc: "Balanced"       },
    { id: "p50pro",   label: "Huawei P50 Pro", icon: "📱", desc: "Previous gen"   },
  ],
  "smartphone-huawei-mate-series": [
    { id: "mate60pro", label: "Mate 60 Pro", icon: "📱", desc: "Satellite comms" },
    { id: "mate60",    label: "Mate 60",     icon: "📱", desc: "Flagship"        },
    { id: "mate50",    label: "Mate 50",     icon: "📱", desc: "Previous"        },
  ],
  "smartphone-huawei-nova-series": [
    { id: "nova12pro", label: "Nova 12 Pro", icon: "📱", desc: "Youth flagship" },
    { id: "nova12",    label: "Nova 12",     icon: "📱", desc: "Standard"       },
    { id: "nova11",    label: "Nova 11",     icon: "📱", desc: "Previous gen"   },
  ],
  // Xiaomi
  "smartphone-xiaomi-14-series": [
    { id: "14ultra", label: "Xiaomi 14 Ultra", icon: "📱", desc: "Leica camera" },
    { id: "14pro",   label: "Xiaomi 14 Pro",   icon: "📱", desc: "Flagship"     },
    { id: "14",      label: "Xiaomi 14",       icon: "📱", desc: "Standard"     },
  ],
  "smartphone-xiaomi-redmi-note": [
    { id: "note13pro5g", label: "Redmi Note 13 Pro 5G", icon: "📱", desc: "Best value" },
    { id: "note13pro",   label: "Redmi Note 13 Pro",    icon: "📱", desc: "Mid-range"  },
    { id: "note13",      label: "Redmi Note 13",        icon: "📱", desc: "Entry mid"  },
  ],
  "smartphone-xiaomi-poco": [
    { id: "f6pro", label: "POCO F6 Pro", icon: "📱", desc: "Performance king" },
    { id: "f6",    label: "POCO F6",     icon: "📱", desc: "Fast charger"     },
    { id: "x6pro", label: "POCO X6 Pro", icon: "📱", desc: "Gaming"          },
    { id: "m6pro", label: "POCO M6 Pro", icon: "📱", desc: "Budget"          },
  ],
  "smartphone-xiaomi-redmi": [
    { id: "redmi13", label: "Redmi 13",   icon: "📱", desc: "Entry level" },
    { id: "redmi12", label: "Redmi 12",   icon: "📱", desc: "Budget"      },
  ],
  // OPPO
  "smartphone-oppo-find-x": [
    { id: "findx7ultra", label: "Find X7 Ultra", icon: "📱", desc: "Top flagship" },
    { id: "findx7",      label: "Find X7",       icon: "📱", desc: "Flagship"     },
    { id: "findx6pro",   label: "Find X6 Pro",   icon: "📱", desc: "Previous"     },
  ],
  "smartphone-oppo-reno": [
    { id: "reno12pro", label: "Reno 12 Pro", icon: "📱", desc: "Portrait king"  },
    { id: "reno12",    label: "Reno 12",     icon: "📱", desc: "Mid flagship"   },
    { id: "reno11",    label: "Reno 11",     icon: "📱", desc: "Previous gen"   },
  ],
  "smartphone-oppo-a-series": [
    { id: "a98", label: "OPPO A98", icon: "📱", desc: "Upper mid"  },
    { id: "a78", label: "OPPO A78", icon: "📱", desc: "Mid-range"  },
    { id: "a58", label: "OPPO A58", icon: "📱", desc: "Entry"      },
  ],
  // OnePlus
  "smartphone-oneplus-numbered": [
    { id: "12",    label: "OnePlus 12",    icon: "📱", desc: "Flagship"     },
    { id: "11",    label: "OnePlus 11",    icon: "📱", desc: "Previous flagship" },
    { id: "12r",   label: "OnePlus 12R",   icon: "📱", desc: "Value"        },
  ],
  "smartphone-oneplus-flagship": [
    { id: "nord4",  label: "Nord 4",  icon: "📱", desc: "Metal mid-range" },
    { id: "nord3",  label: "Nord 3",  icon: "📱", desc: "Previous Nord"   },
    { id: "nord-ce4", label: "Nord CE4", icon: "📱", desc: "Budget Nord"  },
  ],
  // Laptops - Apple (no category)
  "laptop-apple": [
    { id: "mbp16m4",  label: 'MacBook Pro 16" M4', icon: "💻", desc: "Powerhouse"    },
    { id: "mbp14m4",  label: 'MacBook Pro 14" M4', icon: "💻", desc: "Portable pro"  },
    { id: "mba15m3",  label: 'MacBook Air 15" M3', icon: "💻", desc: "Thin & light"  },
    { id: "mba13m3",  label: 'MacBook Air 13" M3', icon: "💻", desc: "Ultraportable" },
    { id: "mba13m2",  label: 'MacBook Air 13" M2', icon: "💻", desc: "Previous Air"  },
  ],
  "laptop-msi": [
    { id: "titan",   label: "Titan GT77",  icon: "💻", desc: "Desktop replacement" },
    { id: "raider",  label: "Raider GE78", icon: "💻", desc: "Gaming powerhouse"   },
    { id: "stealth", label: "Stealth 16",  icon: "💻", desc: "Slim gaming"         },
    { id: "modern",  label: "Modern 15",   icon: "💻", desc: "Business"            },
  ],
  // Dell laptops
  "laptop-dell-xps": [
    { id: "xps15", label: "XPS 15 (9530)", icon: "💻", desc: "Creator laptop" },
    { id: "xps13", label: "XPS 13 (9340)", icon: "💻", desc: "Ultra compact"  },
    { id: "xps16", label: "XPS 16 (9640)", icon: "💻", desc: "OLED display"   },
  ],
  "laptop-dell-inspiron": [
    { id: "ins15", label: "Inspiron 15",  icon: "💻", desc: "Everyday 15\""  },
    { id: "ins16", label: "Inspiron 16",  icon: "💻", desc: "Everyday 16\""  },
    { id: "ins14", label: "Inspiron 14",  icon: "💻", desc: "Compact 14\""   },
  ],
  "laptop-dell-alienware": [
    { id: "m18r2",  label: "Alienware m18 R2", icon: "💻", desc: "Massive gaming"   },
    { id: "m16r2",  label: "Alienware m16 R2", icon: "💻", desc: "Powerful gaming"  },
    { id: "x16r2",  label: "Alienware x16 R2", icon: "💻", desc: "Thin gaming"      },
  ],
  "laptop-dell-latitude": [
    { id: "lat5450", label: "Latitude 5450", icon: "💻", desc: "Business workhorse" },
    { id: "lat7450", label: "Latitude 7450", icon: "💻", desc: "Premium business"   },
  ],
  // HP
  "laptop-hp-spectre": [
    { id: "spectrex360", label: "Spectre x360 14", icon: "💻", desc: "2-in-1 premium" },
    { id: "spectre14",   label: "Spectre x360 14", icon: "💻", desc: "OLED 2-in-1"   },
  ],
  "laptop-hp-envy": [
    { id: "envy17", label: "Envy 17",     icon: "💻", desc: "Large display"  },
    { id: "envy15", label: "Envy 15",     icon: "💻", desc: "Creator 15\""  },
    { id: "envyx360", label: "Envy x360", icon: "💻", desc: "2-in-1"        },
  ],
  "laptop-hp-pavilion": [
    { id: "pav15",  label: "Pavilion 15",  icon: "💻", desc: "Everyday 15\"" },
    { id: "pav16",  label: "Pavilion 16",  icon: "💻", desc: "Everyday 16\"" },
  ],
  "laptop-hp-omen": [
    { id: "omen16",  label: "OMEN 16",     icon: "💻", desc: "Gaming 16\""  },
    { id: "omen17",  label: "OMEN 17",     icon: "💻", desc: "Gaming 17\""  },
    { id: "omenmax", label: "OMEN Max 16", icon: "💻", desc: "Flagship gaming" },
  ],
  // Lenovo
  "laptop-lenovo-thinkpad": [
    { id: "x1carbon", label: "ThinkPad X1 Carbon", icon: "💻", desc: "Ultralight business" },
    { id: "t14s",     label: "ThinkPad T14s",      icon: "💻", desc: "Balanced business"   },
    { id: "e15",      label: "ThinkPad E15",       icon: "💻", desc: "Entry business"      },
  ],
  "laptop-lenovo-ideapad": [
    { id: "slim5",  label: "IdeaPad Slim 5",  icon: "💻", desc: "Slim everyday"  },
    { id: "flex5",  label: "IdeaPad Flex 5",  icon: "💻", desc: "2-in-1"         },
    { id: "ip3",    label: "IdeaPad 3",       icon: "💻", desc: "Budget"         },
  ],
  "laptop-lenovo-legion": [
    { id: "legion7",   label: "Legion 7",   icon: "💻", desc: "Gaming flagship" },
    { id: "legion5pro",label: "Legion 5 Pro",icon: "💻", desc: "Value gaming"  },
    { id: "legion5",   label: "Legion 5",   icon: "💻", desc: "Entry gaming"   },
  ],
  "laptop-lenovo-yoga": [
    { id: "yoga9",  label: "Yoga 9i",  icon: "💻", desc: "Premium 2-in-1"  },
    { id: "yoga7",  label: "Yoga 7i",  icon: "💻", desc: "Mid 2-in-1"      },
    { id: "yogaslim",label:"Yoga Slim 7",icon:"💻",desc:"Ultraslim"       },
  ],
  // ASUS
  "laptop-asus-rog": [
    { id: "strix",  label: "ROG Strix G18",   icon: "💻", desc: "Gaming beast"   },
    { id: "zephyrus",label: "ROG Zephyrus G14",icon:"💻",desc:"Portable gaming" },
    { id: "flow",   label: "ROG Flow X16",    icon: "💻", desc: "2-in-1 gaming"  },
  ],
  "laptop-asus-zenbook": [
    { id: "zb14",   label: "ZenBook 14",    icon: "💻", desc: "Compact"       },
    { id: "zbs",    label: "ZenBook S 13",  icon: "💻", desc: "Ultra-slim"    },
    { id: "zb14flip",label:"ZenBook 14 Flip",icon:"💻",desc:"2-in-1 premium" },
  ],
  "laptop-asus-vivobook": [
    { id: "vb15",   label: "VivoBook 15",  icon: "💻", desc: "Colorful everyday" },
    { id: "vbs",    label: "VivoBook S 15",icon: "💻", desc: "OLED display"      },
    { id: "vb16x",  label: "VivoBook 16X", icon: "💻", desc: "Large display"     },
  ],
  "laptop-asus-tuf": [
    { id: "tuf15",  label: "TUF Gaming A15",icon:"💻",desc:"Durable 15\""  },
    { id: "tuf16",  label: "TUF Gaming F16",icon:"💻",desc:"Budget gaming"  },
  ],
  "laptop-acer-predator": [
    { id: "helios18", label: "Predator Helios 18", icon: "💻", desc: "Gaming beast"  },
    { id: "helios16", label: "Predator Helios 16", icon: "💻", desc: "Flagship gaming"},
    { id: "triton",   label: "Predator Triton 16", icon: "💻", desc: "Thin gaming"   },
  ],
  "laptop-acer-aspire": [
    { id: "asp5",  label: "Aspire 5",  icon: "💻", desc: "Value laptop"    },
    { id: "asp3",  label: "Aspire 3",  icon: "💻", desc: "Budget"          },
    { id: "asp7",  label: "Aspire 7",  icon: "💻", desc: "Mid gaming"      },
  ],
  "laptop-acer-swift": [
    { id: "swift5",  label: "Swift 5",     icon: "💻", desc: "Ultralight"      },
    { id: "swift3",  label: "Swift 3",     icon: "💻", desc: "Slim everyday"   },
    { id: "swiftgo", label: "Swift Go 14", icon: "💻", desc: "AI laptop"       },
  ],
  // PC
  "pc-custom": [
    { id: "gaming-build",   label: "Custom Gaming PC",   icon: "🖥️", desc: "High-end rig" },
    { id: "workstation",    label: "Custom Workstation",  icon: "🖥️", desc: "Work focused" },
    { id: "home-pc",        label: "Custom Home PC",      icon: "🖥️", desc: "Daily use"    },
  ],
  "pc-lenovo": [
    { id: "thinkcentre", label: "ThinkCentre", icon: "🖥️", desc: "Business desktop" },
    { id: "ideacentre",  label: "IdeaCentre",  icon: "🖥️", desc: "Home desktop"     },
  ],
  "pc-asus": [
    { id: "rog-strix-pc", label: "ROG Strix Desktop", icon: "🖥️", desc: "Gaming" },
    { id: "vivo-aio",     label: "Vivo AiO",          icon: "🖥️", desc: "All-in-one" },
  ],
  "pc-dell-optiplex": [
    { id: "optiplex7010",  label: "OptiPlex 7010",  icon: "🖥️", desc: "Small form factor" },
    { id: "optiplex3000",  label: "OptiPlex 3000",  icon: "🖥️", desc: "Entry business"    },
  ],
  "pc-dell-xps": [
    { id: "xps8960",  label: "XPS 8960", icon: "🖥️", desc: "Creator desktop" },
  ],
  "pc-dell-alienware": [
    { id: "aurora-r16", label: "Aurora R16", icon: "🖥️", desc: "Gaming desktop" },
  ],
  "pc-hp-elite": [
    { id: "elitedesk", label: "EliteDesk 800", icon: "🖥️", desc: "Corporate" },
    { id: "eliteone",  label: "EliteOne AiO",  icon: "🖥️", desc: "All-in-one" },
  ],
  "pc-hp-pavilion": [
    { id: "pav-desktop", label: "Pavilion Desktop", icon: "🖥️", desc: "Home use"    },
    { id: "pav-aio",     label: "Pavilion AiO",     icon: "🖥️", desc: "All-in-one" },
  ],
  "pc-hp-omen": [
    { id: "omen-45l", label: "OMEN 45L", icon: "🖥️", desc: "Gaming tower" },
    { id: "omen-25l", label: "OMEN 25L", icon: "🖥️", desc: "Compact gaming" },
  ],
  // Tablets
  "tablet-apple-ipad-pro": [
    { id: "ipadpro13m4",   label: 'iPad Pro 13" M4', icon: "📲", desc: "OLED powerhouse"  },
    { id: "ipadpro11m4",   label: 'iPad Pro 11" M4', icon: "📲", desc: "Compact pro"      },
    { id: "ipadpro13m2",   label: 'iPad Pro 13" M2', icon: "📲", desc: "Previous gen pro" },
  ],
  "tablet-apple-ipad-air": [
    { id: "ipadair13m2",  label: 'iPad Air 13" M2', icon: "📲", desc: "Large Air"        },
    { id: "ipadair11m2",  label: 'iPad Air 11" M2', icon: "📲", desc: "Standard Air"     },
  ],
  "tablet-apple-ipad-mini": [
    { id: "ipadmini7", label: "iPad Mini 7", icon: "📲", desc: "Ultra compact" },
    { id: "ipadmini6", label: "iPad Mini 6", icon: "📲", desc: "Previous mini"  },
  ],
  "tablet-apple-ipad": [
    { id: "ipad10", label: "iPad (10th gen)", icon: "📲", desc: "Standard iPad"  },
    { id: "ipad9",  label: "iPad (9th gen)",  icon: "📲", desc: "Budget iPad"    },
  ],
  "tablet-samsung-galaxy-tab-s": [
    { id: "tabs10ultra", label: "Galaxy Tab S10 Ultra", icon: "📲", desc: "Top tablet"   },
    { id: "tabs10plus",  label: "Galaxy Tab S10+",      icon: "📲", desc: "Large screen" },
    { id: "tabs10",      label: "Galaxy Tab S10",       icon: "📲", desc: "Standard"     },
    { id: "tabs9fe",     label: "Galaxy Tab S9 FE",     icon: "📲", desc: "Fan edition"  },
  ],
  "tablet-samsung-galaxy-tab-a": [
    { id: "taba9plus", label: "Galaxy Tab A9+", icon: "📲", desc: "Mid-range"  },
    { id: "taba9",     label: "Galaxy Tab A9",  icon: "📲", desc: "Budget"     },
  ],
  "tablet-huawei": [
    { id: "matepadpro", label: "MatePad Pro 13.2",  icon: "📲", desc: "Flagship tablet" },
    { id: "matepad11",  label: "MatePad 11.5",      icon: "📲", desc: "Mid-range"       },
  ],
  "tablet-lenovo": [
    { id: "tabp12pro", label: "Tab P12 Pro",   icon: "📲", desc: "AMOLED display" },
    { id: "tabm10",    label: "Tab M10 Plus",  icon: "📲", desc: "Budget"         },
  ],
  "tablet-amazon": [
    { id: "firemax11", label: "Fire Max 11",   icon: "📲", desc: "Best Amazon"   },
    { id: "firehd10",  label: "Fire HD 10",    icon: "📲", desc: "Popular"       },
    { id: "firehd8",   label: "Fire HD 8",     icon: "📲", desc: "Budget"        },
  ],
  // Watches
  "watch-apple": [
    { id: "aw-ultra2",   label: "Apple Watch Ultra 2",   icon: "⌚", desc: "Adventure"     },
    { id: "aw-s10",      label: "Apple Watch Series 10", icon: "⌚", desc: "Latest"        },
    { id: "aw-s9",       label: "Apple Watch Series 9",  icon: "⌚", desc: "Previous"      },
    { id: "aw-se2",      label: "Apple Watch SE (2nd)",  icon: "⌚", desc: "Budget Apple"  },
  ],
  "watch-samsung": [
    { id: "gw7",       label: "Galaxy Watch 7",          icon: "⌚", desc: "Latest"        },
    { id: "gw7ultra",  label: "Galaxy Watch Ultra",      icon: "⌚", desc: "Rugged"        },
    { id: "gw6classic",label: "Galaxy Watch 6 Classic",  icon: "⌚", desc: "Rotating bezel"},
  ],
  "watch-garmin": [
    { id: "fenix8",    label: "Fenix 8",          icon: "⌚", desc: "Ultimate sport"  },
    { id: "vivoactive5",label:"Vivoactive 5",     icon: "⌚", desc: "Fitness focused" },
    { id: "forerunner",label: "Forerunner 965",   icon: "⌚", desc: "Running"         },
  ],
  "watch-fitbit": [
    { id: "sense2",  label: "Fitbit Sense 2",  icon: "⌚", desc: "Health focused" },
    { id: "versa4",  label: "Fitbit Versa 4",  icon: "⌚", desc: "Balanced"       },
    { id: "charge6", label: "Fitbit Charge 6", icon: "⌚", desc: "Fitness band"   },
  ],
  // Consoles
  "console-sony-ps5": [
    { id: "ps5-slim",  label: "PS5 Slim",          icon: "🎮", desc: "Latest PS5"    },
    { id: "ps5",       label: "PS5 Original",      icon: "🎮", desc: "First gen"     },
    { id: "ps5-de",    label: "PS5 Digital Edition",icon:"🎮", desc: "Disc-less"     },
  ],
  "console-sony-ps4": [
    { id: "ps4pro",  label: "PS4 Pro",   icon: "🎮", desc: "4K gaming"    },
    { id: "ps4slim", label: "PS4 Slim",  icon: "🎮", desc: "Compact"      },
    { id: "ps4",     label: "PS4 Original",icon:"🎮",desc:"First gen"    },
  ],
  "console-microsoft-series-x": [
    { id: "series-x",  label: "Xbox Series X",  icon: "🎮", desc: "4K powerhouse"  },
    { id: "series-s",  label: "Xbox Series S",  icon: "🎮", desc: "Compact 1440p"  },
  ],
  "console-microsoft-one": [
    { id: "onex",  label: "Xbox One X",  icon: "🎮", desc: "4K enhanced"   },
    { id: "ones",  label: "Xbox One S",  icon: "🎮", desc: "Compact"       },
    { id: "one",   label: "Xbox One",    icon: "🎮", desc: "Original"      },
  ],
  "console-nintendo": [
    { id: "switch2",   label: "Nintendo Switch 2",  icon: "🎮", desc: "Latest"         },
    { id: "switch",    label: "Nintendo Switch",    icon: "🎮", desc: "OLED/Original"  },
    { id: "switch-lite",label:"Switch Lite",        icon: "🎮", desc: "Handheld only"  },
  ],
};

export const issues = [
  { id: "battery",     label: "Battery Replacement",  icon: "🔋", desc: "Drains fast or won't charge"  },
  { id: "screen",      label: "Screen Repair",         icon: "📺", desc: "Cracked or broken display"   },
  { id: "charging",    label: "Charging Port",         icon: "🔌", desc: "Won't charge properly"       },
  { id: "speaker",     label: "Speaker Issue",         icon: "🔊", desc: "No sound or distorted"       },
  { id: "mic",         label: "Microphone Problem",    icon: "🎤", desc: "Can't hear during calls"     },
  { id: "back-glass",  label: "Back Glass Cracked",    icon: "💔", desc: "Rear panel damage"           },
  { id: "camera",      label: "Camera Repair",         icon: "📷", desc: "Blurry or not working"      },
  { id: "water",       label: "Water Damage",          icon: "💧", desc: "Liquid damage repair"        },
  { id: "button",      label: "Button Not Working",    icon: "🔘", desc: "Power / volume buttons"      },
  { id: "software",    label: "Software Issue",        icon: "⚙️", desc: "Freezing / bootloop / OS"   },
  { id: "wifi",        label: "WiFi / Bluetooth",      icon: "📶", desc: "Connectivity problems"       },
  { id: "overheating", label: "Overheating",           icon: "🌡️", desc: "Gets hot quickly"           },
  { id: "storage",     label: "Storage Upgrade",       icon: "💾", desc: "Need more space"             },
  { id: "keyboard",    label: "Keyboard/Trackpad",     icon: "⌨️", desc: "Keys or pad not working"    },
  { id: "hinge",       label: "Hinge Repair",          icon: "🔩", desc: "Lid won't open/close"        },
  { id: "fan",         label: "Fan / Cooling",         icon: "🌀", desc: "Loud fan or overheating"    },
];
