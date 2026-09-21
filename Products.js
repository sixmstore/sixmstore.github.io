/* =========================================================
   SIX M STORE
   PRODUCT DATABASE
========================================================= */

const categories = [

/* =========================================================
   1. চাল ও ডাল
========================================================= */

{
    name: "🍚 চাল ও ডাল",
    products: [
        {
            name: "সিদ্ধ/হাফ সিদ্ধ চাল",
            icon: "🍚",
            image: "চাল.jpg",
            variants: [
                {brand:"নুরজাহান মিনিকেট",size:"১ কেজি",price:60},
                {brand:"নুরজাহান মিনিকেট",size:"৫ কেজি",price:300},
                {brand:"নুরজাহান মিনিকেট",size:"১০ কেজি",price:580},
                {brand:"মামনি মিনিকেট",size:"১ কেজি",price:60},
                {brand:"মামনি মিনিকেট",size:"৫ কেজি",price:300},
                {brand:"মামনি মিনিকেট",size:"১০ কেজি",price:590},
                {brand:"বক মার্কা মিনিকেট",size:"১ কেজি",price:80},
                {brand:"বক মার্কা মিনিকেট",size:"৫ কেজি",price:400},
                {brand:"বক মার্কা মিনিকেট",size:"১০ কেজি",price:780},
                {brand:"নাজিরশাইল হাফ সিদ্ধ",size:"১ কেজি",price:90},
                {brand:"নাজিরশাইল হাফ সিদ্ধ",size:"৫ কেজি",price:450},
                {brand:"নাজিরশাইল হাফ সিদ্ধ",size:"১০ কেজি",price:890},
                {brand:"জিরা চাউল",size:"১ কেজি",price:85},
                {brand:"জিরা চাউল",size:"৫ কেজি",price:425},
                {brand:"জিরা চাউল",size:"১০ কেজি",price:830},
                {brand:"গুটি স্বর্ণা",size:"১ কেজি",price:55},
                {brand:"গুটি স্বর্ণা",size:"৫ কেজি",price:275},
                {brand:"গুটি স্বর্ণা",size:"১০ কেজি",price:530}
            ]
        },
        {
            name: "আতপ/চিনিগুড়া চাল",
            icon: "🍚",
            image: "চিনিগুড়া-চাল.jpg",
            variants: [
                {brand:"লিচু মিনিকেট আতপ",size:"১ কেজি",price:70},
                {brand:"লিচু মিনিকেট আতপ",size:"৫ কেজি",price:350},
                {brand:"লিচু মিনিকেট আতপ",size:"১০ কেজি",price:690},
                {brand:"কাটারি আতপ",size:"১ কেজি",price:95},
                {brand:"কাটারি আতপ",size:"৫ কেজি",price:470},
                {brand:"কাটারি আতপ",size:"১০ কেজি",price:930},
                {brand:"চিনিগুড়া চাষী",size:"১ কেজি",price:220},
                {brand:"চিনিগুড়া",size:"১ কেজি",price:195},
                {brand:"চিনিগুড়া",size:"৫ কেজি",price:970},
                {brand:"চিনিগুড়া",size:"১০ কেজি",price:1940}
            ]
        },
        {
            name: "ডাল",
            icon: "🫘",
            image: "ডাল.jpg",
            variants: [
                {brand:"মসুর ডাল মোটা",size:"১ কেজি",price:90},
                {brand:"মসুর ডাল দেশি",size:"১ কেজি",price:150},
                {brand:"মুগ ডাল মোটা",size:"১ কেজি",price:0},
                {brand:"মুগ ডাল দেশি",size:"১ কেজি",price:160},
                {brand:"মটর ডাল",size:"১ কেজি",price:60},
                {brand:"মটর ডাল",size:"৫ কেজি",price:275},
                {brand:"মটর",size:"১ কেজি",price:55},
                {brand:"মটর",size:"৫ কেজি",price:250}
            ]
        },
        {
            name: "ছোলা/চনা বুট",
            icon: "🫘",
            image: "ছোলা.jpg",
            variants: [
                {brand:"সাধারণ",size:"১ কেজি",price:95}
            ]
        }
    ]
},

/* =========================================================
   2. তেল ও মসলা
========================================================= */

{
    name: "🫙 তেল ও মসলা",
    products: [
        {
            name: "সয়াবিন তেল",
            icon: "🫙",
            image: "সয়াবিন-তেল.jpg",
            variants: [
                {brand:"ফ্রেশ",size:"১ লিটার",price:0},
                {brand:"তীর",size:"১ লিটার",price:0},
                {brand:"রূপচাঁদা",size:"১ লিটার",price:0},
                {brand:"বসুন্ধরা",size:"১ লিটার",price:0},
                {brand:"স্টারসিপ",size:"১ লিটার",price:199},
                {brand:"স্টারসিপ",size:"২ লিটার",price:398},
                {brand:"স্টারসিপ",size:"৩ লিটার",price:0},
                {brand:"স্টারসিপ",size:"৫ লিটার",price:975},
                {brand:"সয়াবিন",size:"১ কেজি",price:215},
                {brand:"সুপর",size:"১ কেজি",price:195},
                {brand:"পাম",size:"১ কেজি",price:195}
            ]
        },
        {
            name: "সরিষার তেল",
            icon: "🌻",
            image: "সরিষার-তেল.jpg",
            variants: [
                {brand:"রাঁধুনী",size:"৮০ গ্রাম",price:38},
                {brand:"রাঁধুনী",size:"২৫০ গ্রাম",price:90},
                {brand:"রাঁধুনী",size:"৫০০ গ্রাম",price:180},
                {brand:"রাঁধুনী",size:"১ লিটার",price:370},
                {brand:"ফ্রেশ",size:"৮০ গ্রাম",price:0},
                {brand:"ফ্রেশ",size:"২৫০ গ্রাম",price:0},
                {brand:"ফ্রেশ",size:"৫০০ গ্রাম",price:0},
                {brand:"ফ্রেশ",size:"১ লিটার",price:0},
                {brand:"তীর",size:"৮০ গ্রাম",price:0},
                {brand:"তীর",size:"২৫০ গ্রাম",price:0},
                {brand:"তীর",size:"৫০০ গ্রাম",price:0},
                {brand:"তীর",size:"১ লিটার",price:0},
                {brand:"বসুন্ধরা",size:"৮০ গ্রাম",price:0},
                {brand:"বসুন্ধরা",size:"২৫০ গ্রাম",price:0},
                {brand:"বসুন্ধরা",size:"৫০০ গ্রাম",price:0},
                {brand:"বসুন্ধরা",size:"১ লিটার",price:0}
            ]
        },
        {
            name: "ধনিয়া/ধনিয়া গুঁড়া",
            icon: "🌿",
            image: "ধনিয়া.jpg",
            variants: [
                {brand:"রাঁধুনী",size:"৫০ গ্রাম",price:30},
                {brand:"রাঁধুনী",size:"১০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"২০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"৫০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"১ কেজি",price:0},
                {brand:"ধনিয়া",size:"১ কেজি",price:0}
            ]
        },
        {
            name: "জিরা/জিরা গুঁড়া",
            icon: "🌿",
            image: "জিরা.jpg",
            variants: [
                {brand:"রাঁধুনী",size:"১৫ গ্রাম",price:28},
                {brand:"রাঁধুনী",size:"৫০ গ্রাম",price:85},
                {brand:"রাঁধুনী",size:"১০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"২০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"৫০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"১ কেজি",price:0},
                {brand:"জিরা",size:"১ কেজি",price:650}
            ]
        },
        {
            name: "গরম মসলা গুঁড়া",
            icon: "🧂",
            image: "গরম-মসলা.jpg",
            variants: [
                {brand:"রাঁধুনী",size:"১৫ গ্রাম",price:38},
                {brand:"রাঁধুনী",size:"৪০ গ্রাম",price:80},
                {brand:"রাঁধুনী",size:"১০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"২০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"৫০০ গ্রাম",price:0},
                {brand:"রাঁধুনী",size:"১ কেজি",price:0}
            ]
        },
        {
            name: "দারুচিনি",
            icon: "🌿",
            image: "দারুচিনি.jpg",
            variants: [
                {brand:"সাধারণ",size:"২৫০ গ্রাম",price:130},
                {brand:"সাধারণ",size:"৫০০ গ্রাম",price:250},
                {brand:"সাধারণ",size:"১ কেজি",price:500}
            ]
        },
        {
            name: "এলাচ",
            icon: "🌿",
            image: "এলাচ.jpg",
            variants: [
                {brand:"সাধারণ",size:"১০০ গ্রাম",price:500},
                {brand:"সাধারণ",size:"২০০ গ্রাম",price:1000},
                {brand:"সাধারণ",size:"২৫০ গ্রাম",price:1200},
                {brand:"সাধারণ",size:"৫০০ গ্রাম",price:2400},
                {brand:"সাধারণ",size:"১ কেজি",price:4800}
            ]
        },
        {
            name: "লবঙ্গ",
            icon: "🌿",
            image: "লবঙ্গ.jpg",
            variants: [
                {brand:"সাধারণ",size:"১০০ গ্রাম",price:140},
                {brand:"সাধারণ",size:"২০০ গ্রাম",price:280},
                {brand:"সাধারণ",size:"২৫০ গ্রাম",price:325},
                {brand:"সাধারণ",size:"৫০০ গ্রাম",price:650},
                {brand:"সাধারণ",size:"১ কেজি",price:1300}
            ]
        },
        {
            name: "কিসমিস ও বাদাম",
            icon: "🌿",
            image: "কিসমিস ও বাদাম.jpg",
            variants: [
                {brand:"সাধারণ",size:"১০০ গ্রাম",price:140},
                {brand:"সাধারণ",size:"২০০ গ্রাম",price:280},
                {brand:"সাধারণ",size:"২৫০ গ্রাম",price:325},
                {brand:"সাধারণ",size:"৫০০ গ্রাম",price:650},
                {brand:"সাধারণ",size:"১ কেজি",price:1300}
            ]
        },
        {
            name: "তেজপাতা",
            icon: "🍃",
            image: "তেজপাতা.jpg",
            variants: [
                {brand:"সাধারণ",size:"৫০ গ্রাম",price:20},
                {brand:"সাধারণ",size:"১০০ গ্রাম",price:30},
                {brand:"সাধারণ",size:"২৫০ গ্রাম",price:50},
                {brand:"সাধারণ",size:"৫০০ গ্রাম",price:90},
                {brand:"সাধারণ",size:"১ কেজি",price:180}
            ]
        }
    ]
},

/* =========================================================
   3. নিত্যপ্রয়োজনীয়
========================================================= */

{
    name: "🛒 নিত্যপ্রয়োজনীয় পণ্য",
    products: [
        {
            name: "আটা",
            icon: "🌾",
            image: "আটা.jpg",
            variants: [
                {brand:"সাধারণ",size:"১ কেজি",price:50},
                {brand:"ফ্রেশ",size:"১ কেজি",price:55},
                {brand:"ফ্রেশ",size:"৫ কেজি",price:0},
                {brand:"বসুন্ধরা",size:"১ কেজি",price:0},
                {brand:"বসুন্ধরা",size:"৫ কেজি",price:0},
                {brand:"তীর",size:"১ কেজি",price:0},
                {brand:"তীর",size:"৫ কেজি",price:0}
            ]
        },
        {
            name: "ময়দা",
            icon: "🥣",
            image: "ময়দা.jpg",
            variants: [
                {brand:"সাধারণ",size:"১ কেজি",price:65},
                {brand:"ফ্রেশ",size:"১ কেজি",price:0},
                {brand:"ফ্রেশ",size:"৫ কেজি",price:0},
                {brand:"বসুন্ধরা",size:"১ কেজি",price:0},
                {brand:"বসুন্ধরা",size:"৫ কেজি",price:0},
                {brand:"তীর",size:"১ কেজি",price:0},
                {brand:"তীর",size:"৫ কেজি",price:0}
            ]
        },
        {
            name: "সুজির প্যাকেট",
            icon: "🥣",
            image: "সুজি.jpg",
            variants: [
                {brand:"সজীব",size:"৫০০ গ্রাম",price:45},
                {brand:"তীর",size:"৫০০ গ্রাম",price:0},
                {brand:"ফ্রেশ",size:"৫০০ গ্রাম",price:0}
            ]
        },
        {
            name: "চিনি",
            icon: "🍬",
            image: "চিনি.jpg",
            variants: [
                {brand:"চিনি খোলা",size:"১ কেজি",price:105},
                {brand:"চিনি প্যাকেট",size:"১ কেজি",price:110}
            ]
        },
        {
            name: "লবণ",
            icon: "🧂",
            image: "লবণ.jpg",
            variants: [
                {brand:"ফ্রেশ",size:"৫০০ গ্রাম",price:20},
                {brand:"ফ্রেশ",size:"১ কেজি",price:40},
                {brand:"তীর",size:"৫০০ গ্রাম",price:20},
                {brand:"তীর",size:"১ কেজি",price:40},
                {brand:"No.1",size:"৫০০ গ্রাম",price:20},
                {brand:"No.1",size:"১ কেজি",price:40},
                {brand:"Confidence",size:"৫০০ গ্রাম",price:20},
                {brand:"Confidence",size:"১ কেজি",price:40},
                {brand:"ACI",size:"৫০০ গ্রাম",price:20},
                {brand:"ACI",size:"১ কেজি",price:40},
                {brand:"মোটা লবণ",size:"৫০০ গ্রাম",price:10},
                {brand:"মোটা লবণ",size:"১ কেজি",price:20}
            ]
        },
        {
            name: "গুড়",
            icon: "🍯",
            image: "গুড়.jpg",
            variants: [
                {brand:"সাধারণ",size:"১ কেজি",price:0}
            ]
        },
        {
            name: "সেমাই",
            icon: "🍜",
            image: "সেমাই.jpg",
            variants: [
                {brand:"বনফুল লাচ্ছা",size:"প্যাকেট",price:40},
                {brand:"বনফুল বাংলা",size:"প্যাকেট",price:45}
            ]
        },
        {
            name: "চিড়া",
            icon: "🌾",
            image: "চিড়া.jpg",
            variants: [
                {brand:"সাধারণ",size:"১ কেজি",price:0}
            ]
        },
        {
            name: "মুড়ি",
            icon: "🍘",
            image: "মুড়ি.jpg",
            variants: [
                {brand:"সাধারণ",size:"১ কেজি",price:70}
            ]
        }
    ]
},

/* =========================================================
   4. সবজি ও রান্নার উপকরণ
========================================================= */

{
    name: "🥔 সবজি ও রান্নার উপকরণ",
    products: [
        {
            name: "আলু",
            icon: "🥔",
            image: "আলু.jpg",
            variants: [
                {brand:"সাধারণ",size:"১ কেজি",price:25}
            ]
        },
        {
            name: "পেঁয়াজ",
            icon: "🧅",
            image: "পেঁয়াজ.jpg",
            variants: [
                {brand:"দেশি",size:"১ কেজি",price:0},
                {brand:"ইন্ডিয়ান",size:"১ কেজি",price:60}
            ]
        },
        {
            name: "রসুন",
            icon: "🧄",
            image: "রসুন.jpg",
            variants: [
                {brand:"দেশি",size:"১ কেজি",price:150},
                {brand:"ইমপোর্টেড",size:"১ কেজি",price:0}
            ]
        },
        {
            name: "আদা",
            icon: "🫚",
            image: "আদা.jpg",
            variants: [
                {brand:"দেশি",size:"১ কেজি",price:0},
                {brand:"ইমপোর্টেড",size:"১ কেজি",price:130}
            ]
        },
        {
            name: "হলুদ গুঁড়া",
            icon: "🌕",
            image: "হলুদ.jpg",
            variants: [
                {brand:"রাঁধুনী",size:"২৫ গ্রাম",price:20},
                {brand:"রাঁধুনী",size:"৫০ গ্রাম",price:40},
                {brand:"রাঁধুনী",size:"১০০ গ্রাম",price:75},
                {brand:"রাঁধুনী",size:"২০০ গ্রাম",price:140},
                {brand:"রাঁধুনী",size:"৫০০ গ্রাম",price:290},
                {brand:"রাঁধুনী",size:"১ কেজি",price:0},
                {brand:"সাধারণ",size:"১ কেজি",price:320}
            ]
        },
        {
            name: "মরিচ গুঁড়া/শুকনা মরিচ",
            icon: "🌶️",
            image: "মরিচ.jpg",
            variants: [
                {brand:"রাঁধুনী",size:"২৫ গ্রাম",price:20},
                {brand:"রাঁধুনী",size:"৫০ গ্রাম",price:40},
                {brand:"রাঁধুনী",size:"১০০ গ্রাম",price:75},
                {brand:"রাঁধুনী",size:"২০০ গ্রাম",price:140},
                {brand:"রাঁধুনী",size:"৫০০ গ্রাম",price:290},
                {brand:"রাঁধুনী",size:"১ কেজি",price:0},
                {brand:"সাধারণ",size:"১ কেজি",price:420},
                {brand:"শুকনা মরিচ",size:"৫০০ গ্রাম",price:200},
                {brand:"শুকনা মরিচ",size:"১ কেজি",price:400}
            ]
        }
    ]
},

/* =========================================================
   5. ডেইরি ও খাদ্যপণ্য
========================================================= */

{
    name: "🥛 ডেইরি ও খাদ্যপণ্য",
    products: [
        {
            name: "ডিম",
            icon: "🥚",
            image: "ডিম.jpg",
            variants: [
                {brand:"দেশি",size:"১ ডজন",price:0},
                {brand:"ফার্ম",size:"১ ডজন",price:140}
            ]
        },
        {
            name: "দুধ",
            icon: "🥛",
            image: "দুধ.jpg",
            variants: [
                {brand:"Milk Vita",size:"৫০০ গ্রাম",price:55},
                {brand:"Milk Vita",size:"১ লিটার",price:110},
                {brand:"Aarong",size:"৫০০ গ্রাম",price:50},
                {brand:"Aarong",size:"১ লিটার",price:100},
                {brand:"Pran UST",size:"২০০ গ্রাম",price:30},
                {brand:"Pran UST",size:"৫০০ গ্রাম",price:60},
                {brand:"Aarong UST",size:"২০০ গ্রাম",price:30},
                {brand:"Aarong UST",size:"৫০০ গ্রাম",price:60},
                {brand:"Farm",size:"১ লিটার",price:100}
            ]
        },
        {
            name: "ঘি",
            icon: "🧈",
            image: "ঘি.jpg",
            variants: [
                {brand:"সাধারণ",size:"কৌটা",price:0}
            ]
        },
        {
            name: "মাখন",
            icon: "🧈",
            image: "মাখন.jpg",
            variants: [
                {brand:"Aarong",size:"প্যাকেট",price:0},
                {brand:"Pran",size:"প্যাকেট",price:0}
            ]
        },
        {
            name: "দই",
            icon: "🥛",
            image: "দই.jpg",
            variants: [
                {brand:"Aarong",size:"মিনি কৌটা",price:30}
            ]
        }
    ]
},

/* =========================================================
   6. চা ও পানীয়
========================================================= */

{
    name: "☕ চা ও পানীয়",
    products: [
        {
            name: "চা পাতা",
            icon: "🍵",
            image: "চা-পাতা.jpg",
            variants: [
                {brand:"সাধারণ",size:"১ কেজি",price:360},
                {brand:"সাধারণ",size:"৫০০ গ্রাম",price:180},
                {brand:"ইস্পাহানি",size:"৫০ গ্রাম প্যাকেট",price:30},
                {brand:"ইস্পাহানি",size:"১০০ গ্রাম প্যাকেট",price:60},
                {brand:"ইস্পাহানি",size:"২০০ গ্রাম প্যাকেট",price:120},
                {brand:"ইস্পাহানি",size:"৫০০ গ্রাম প্যাকেট",price:230},
                {brand:"সিলন",size:"৫০ গ্রাম প্যাকেট",price:30},
                {brand:"সিলন",size:"১০০ গ্রাম প্যাকেট",price:60},
                {brand:"সিলন",size:"২০০ গ্রাম প্যাকেট",price:120},
                {brand:"সিলন গোল্ড",size:"৫০০ গ্রাম প্যাকেট",price:230},
                {brand:"তাজা",size:"৫০ গ্রাম প্যাকেট",price:30},
                {brand:"তাজা",size:"১০০ গ্রাম প্যাকেট",price:60},
                {brand:"তাজা",size:"২০০ গ্রাম প্যাকেট",price:120},
                {brand:"তাজা",size:"৫০০ গ্রাম প্যাকেট",price:230},
                {brand:"মুসকান",size:"৫০০ গ্রাম প্যাকেট",price:190}
            ]
        },
        {
            name: "কফি",
            icon: "☕",
            image: "কফি.jpg",
            variants: [
                {brand:"Nescafe",size:"০.৯ গ্রাম",price:5},
                {brand:"Nescafe",size:"৮ গ্রাম",price:10},
                {brand:"Nescafe",size:"১৪ গ্রাম",price:15},
                {brand:"Nescafe",size:"২৪ গ্রাম কৌটা",price:190},
                {brand:"Nescafe",size:"৪৫ গ্রাম কৌটা",price:270},
                {brand:"Nescafe",size:"১০০ গ্রাম কৌটা",price:0},
                {brand:"Nescafe",size:"১৫০ গ্রাম কৌটা",price:0},
                {brand:"Amma Coffee",size:"১ গ্রাম",price:5},
                {brand:"Amma Coffee",size:"১৪গ্রাম",price:10}
            ]
        },
        {
            name: "হরলিক্স",
            icon: "🥛",
            image: "হরলিক্স.jpg",
            variants: [
                {brand:"Horlicks",size:"গ্রাম",price:0},
                {brand:"Horlicks",size:"২৫০ গ্রাম",price:250},
                {brand:"Horlicks",size:"৫০০ গ্রাম",price:490},
                {brand:"Horlicks",size:"১ কেজি",price:880}
            ]
        },
        {
            name: "ল্যাকটোজেন",
            icon: "🥛",
            image: "ল্যাকটোজেন.jpg",
            variants: [
                {brand:"Lactogen 1",size:"গ্রাম",price:0},
                {brand:"Lactogen 1",size:"২০০ গ্রাম",price:0},
                {brand:"Lactogen 1",size:"৩৫০ গ্রাম",price:640},
                {brand:"Lactogen 1",size:"৪০০ গ্রাম",price:0},
                {brand:"Lactogen 2",size:"গ্রাম",price:0},
                {brand:"Lactogen 2",size:"২০০ গ্রাম",price:0},
                {brand:"Lactogen 2",size:"৩৫০ গ্রাম",price:670},
                {brand:"Lactogen 2",size:"৪০০ গ্রাম",price:0},
                {brand:"Lactogen 3",size:"গ্রাম",price:0},
                {brand:"Lactogen 3",size:"২০০ গ্রাম",price:0},
                {brand:"Lactogen 3",size:"৩৫০ গ্রাম",price:690},
                {brand:"Lactogen 3",size:"৪০০ গ্রাম",price:0}
            ]
        },
        {
            name: "কমপ্লান",
            icon: "🥛",
            image: "কমপ্লান.jpg",
            variants: [
                {brand:"Complan",size:"কৌটা",price:0}
            ]
        }
    ]
},

/* =========================================================
   7. বিস্কুট ও স্ন্যাকস
========================================================= */

{
    name: "🍪 বিস্কুট ও স্ন্যাকস",
    products: [
        {
            name: "বিস্কুট/Dry Cake",
            icon: "🍪",
            image: "বিস্কুট.jpg",
            variants: [
                {brand:"Olympic Lexus",size:"প্যাকেট",price:80},
                {brand:"Olympic Energy",size:"প্যাকেট",price:50},
                {brand:"Olympic Nutty",size:"প্যাকেট",price:50},
                {brand:"Olympic Tip",size:"প্যাকেট",price:60},
                {brand:"Olympic Milk Marie",size:"প্যাকেট",price:50},
                {brand:"Olympic Orange",size:"প্যাকেট",price:40},
                {brand:"Olympic Dry Cake",size:"প্যাকেট",price:145},
                {brand:"Kishwan Cho- Cookies",size:"প্যাকেট",price:90},
                {brand:"Kishwan Magica",size:"প্যাকেট",price:140},
                {brand:"Kishwan Horlicks",size:"প্যাকেট",price:70},
                {brand:"Kishwan Dry Cake",size:"প্যাকেট",price:145},
                {brand:"Banoful Cho- Cookies",size:"প্যাকেট",price:50},
                {brand:"Banoful But- Cookies",size:"প্যাকেট",price:50},
                {brand:"Bangas Ghee",size:"প্যাকেট",price:50}
            ]
        },
        {
            name: "টোস্ট বিস্কুট",
            icon: "🍞",
            image: "টোস্ট-বিস্কুট.jpg",
            variants: [
                {brand:"Olympic Pre- Toast",size:"প্যাকেট",price:60},
                {brand:"Kishwan Spe-Toast",size:"প্যাকেট",price:80},
                {brand:"Kishwan T Toast",size:"প্যাকেট",price:50},
                {brand:"Kishwan Ghee Toast",size:"প্যাকেট",price:60},
                {brand:"সাধারণ",size:"প্যাকেট",price:0}
            ]
        },
        {
            name: "নুডলস",
            icon: "🍜",
            image: "নুডলস.jpg",
            variants: [
                {brand:"Maggi",size:"৪ প্যাকেট",price:90},
                {brand:"Maggi",size:"৮ প্যাকেট",price:170},
                {brand:"Maggi",size:"১২ প্যাকেট",price:255},
                {brand:"Maggi",size:"১৬ প্যাকেট",price:340},
                {brand:"Mr. Noodles",size:"৪ প্যাকেট",price:50},
                {brand:"Mr. Noodles",size:"৮ প্যাকেট",price:160},
                {brand:"Mr. Noodles",size:"১২ প্যাকেট",price:230},
                {brand:"Mr. Noodles",size:"১৬ প্যাকেট",price:330},
                {brand:"Mr. Noodles",size:"মিনি প্যাকেট",price:10},
                {brand:"Olympic Foodie",size:"৮ প্যাকেট",price:120},
                {brand:"Olympic Foodie",size:"১২ প্যাকেট",price:180},
                {brand:"Olympic Foodie",size:"১৬ প্যাকেট",price:300},
                {brand:"Olympic Ramen",size:"৪ প্যাকেট",price:100},
                {brand:"Olympic Ramen",size:"৮ প্যাকেট",price:200},
                {brand:"Cook",size:"ফ্যামিলি প্যাকেট",price:60},
                {brand:"Chocola Stick",size:"ফ্যামিলি প্যাকেট",price:50},
                {brand:"Chocola Stick",size:"মিনি প্যাকেট",price:25},
                {brand:"Fresh",size:"মিনি প্যাকেট",price:20}
            ]
        },
        {
            name: "চানাচুর",
            icon: "🥜",
            image: "চানাচুর.jpg",
            variants: [
                {brand:"রুচি বারবিকিউ",size:"মিনি প্যাকেট",price:10},
                {brand:"রুচি বারবিকিউ",size:"১৫০ গ্রাম",price:50},
                {brand:"রুচি বারবিকিউ",size:"৩০০ গ্রাম",price:100},
                {brand:"রুচি বারবিকিউ",size:"৫০০ গ্রাম",price:150},
                {brand:"রুচি ঝাল",size:"মিনি প্যাকেট",price:10},
                {brand:"রুচি ঝাল",size:"১৫০ গ্রাম",price:50},
                {brand:"রুচি ঝাল",size:"৩০০ গ্রাম",price:100},
                {brand:"রুচি ঝাল",size:"৫০০ গ্রাম",price:150},
                {brand:"Bombay",size:"১৫০ গ্রাম",price:50},
                {brand:"Bombay",size:"৩০০ গ্রাম",price:100},
                {brand:"সাধারণ",size:"১ কেজি",price:120}
            ]
        }
    ]
},

/* =========================================================
   8. পরিষ্কার-পরিচ্ছন্নতা
========================================================= */

{
    name: "🧹 পরিষ্কার-পরিচ্ছন্নতা",
    products: [
        {
            name: "কাপড় ধোয়ার পাউডার",
            icon: "🧺",
            image: "কাপড়-ধোয়ার-পাউডার.jpg",
            variants: [
                {brand:"Wheel",size:"২০০ গ্রাম",price:30},
                {brand:"Wheel",size:"৫০০ গ্রাম",price:75},
                {brand:"Wheel",size:"১ কেজি",price:0},
                {brand:"Rin",size:"২০০ গ্রাম",price:50},
                {brand:"Rin",size:"৫০০ গ্রাম",price:100},
                {brand:"Rin",size:"১ কেজি",price:195},
                {brand:"Ghari",size:"২০০ গ্রাম",price:0},
                {brand:"Ghari",size:"৫০০ গ্রাম",price:80},
                {brand:"Ghari",size:"১ কেজি",price:140},
                {brand:"Fast Wash",size:"২০০ গ্রাম",price:0},
                {brand:"Fast Wash",size:"৫০০ গ্রাম",price:90},
                {brand:"Fast Wash",size:"১ কেজি",price:180},
                {brand:"Surf Excel",size:"২৫০ গ্রাম",price:60},
                {brand:"Surf Excel",size:"৫০০ গ্রাম",price:120},
                {brand:"Surf Excel",size:"১ কেজি",price:0},
                {brand:"Keya",size:"২০০ গ্রাম",price:30},
                {brand:"Keya",size:"৫০০ গ্রাম",price:70},
                {brand:"Keya",size:"১ কেজি",price:0},
                {brand:"Tibet",size:"২০০ গ্রাম",price:30},
                {brand:"Tibet",size:"৫০০ গ্রাম",price:75},
                {brand:"Tibet",size:"১ কেজি",price:0},
                {brand:"Tibet",size:"২ কেজি",price:270}
            ]
        },
        {
            name: "কাপড় ধোয়ার সাবান",
            icon: "🧼",
            image: "কাপড়-ধোয়ার-সাবান.jpg",
            variants: [
                {brand:"Tibet",size:"পিস",price:0},
                {brand:"Wheel",size:"পিস",price:0}
            ]
        },
        {
            name: "গোসলের সাবান",
            icon: "🧼",
            image: "গোসলের-সাবান.jpg",
            variants: [
                {brand:"Lux",size:"১০০ গ্রাম",price:0},
                {brand:"Lifebuoy",size:"১০০ গ্রাম",price:0},
                {brand:"Dettol",size:"১০০ গ্রাম",price:0}
            ]
        },
        {
            name: "শ্যাম্পু",
            icon: "🧴",
            image: "শ্যাম্পু.jpg",
            variants: [
                {brand:"Sunsilk",size:"প্যাকেট",price:0},
                {brand:"Clear",size:"প্যাকেট",price:0},
                {brand:"Pantene",size:"প্যাকেট",price:0},
                {brand:"Head & Shoulders",size:"প্যাকেট",price:0}
            ]
        },
        {
            name: "টুথপেস্ট",
            icon: "🪥",
            image: "টুথপেস্ট.jpg",
            variants: [
                {brand:"Colgate",size:"পিস",price:0},
                {brand:"Closeup",size:"পিস",price:0},
                {brand:"Pepsodent",size:"পিস",price:0}
            ]
        },
        {
            name: "টুথব্রাশ",
            icon: "🪥",
            image: "টুথব্রাশ.jpg",
            variants: [
                {brand:"Colgate",size:"পিস",price:0},
                {brand:"Closeup",size:"পিস",price:0}
            ]
        },
        {
            name: "ডিশওয়াশ বার",
            icon: "🧽",
            image: "ডিশওয়াশ-বার.jpg",
            variants: [
                {brand:"Vim",size:"পিস",price:0},
                {brand:"Tibet",size:"পিস",price:0}
            ]
        },
        {
            name: "গ্লাস ক্লিনার",
            icon: "🌸",
            image: "গ্লাস ক্লিনার.jpg",
            variants: [
                {brand:"সাধারণ",size:"পিস",price:0}
            ]
        },
        {
            name: "ব্লিচিং পাউডার",
            icon: "🧹",
            image: "ব্লিচিং-পাউডার.jpg",
            variants: [
                {brand:"সাধারণ",size:"প্যাকেট",price:0}
            ]
        }
    ]
},

/* =========================================================
   9. অন্যান্য প্রয়োজনীয় পণ্য
========================================================= */

{
    name: "🛍️ অন্যান্য প্রয়োজনীয় পণ্য",
    products: [
        {
            name: "ম্যাচ",
            icon: "🔥",
            image: "ম্যাচ.jpg",
            variants: [
                {brand:"সাধারণ",size:"বক্স",price:0}
            ]
        },
        {
            name: "মোমবাতি",
            icon: "🕯️",
            image: "মোমবাতি.jpg",
            variants: [
                {brand:"সাধারণ",size:"প্যাকেট",price:0}
            ]
        },
        {
            name: "টিস্যু",
            icon: "🧻",
            image: "টিস্যু.jpg",
            variants: [
                {brand:"Bashundhara",size:"প্যাকেট",price:0},
                {brand:"Fresh",size:"প্যাকেট",price:0}
            ]
        },
        {
            name: "অ্যালুমিনিয়াম ফয়েল",
            icon: "📦",
            image: "অ্যালুমিনিয়াম-ফয়েল.jpg",
            variants: [
                {brand:"সাধারণ",size:"রোল",price:0}
            ]
        }
    ]
},

/* =========================================================
   10. প্রসাধনী ও পার্সোনাল কেয়ার
========================================================= */

{
    name: "💄 প্রসাধনী ও পার্সোনাল কেয়ার",
    products: [
        {
            name: "ফেসওয়াশ",
            icon: "🧴",
            image: "ফেসওয়াশ.jpg",
            variants: [
                {brand:"Pond's",size:"পিস",price:0},
                {brand:"Garnier",size:"পিস",price:0},
                {brand:"Himalaya",size:"পিস",price:0}
            ]
        },
        {
            name: "হেয়ার অয়েল",
            icon: "🧴",
            image: "হেয়ার-অয়েল.jpg",
            variants: [
                {brand:"Parachute",size:"বোতল",price:0},
                {brand:"Bajaj",size:"বোতল",price:0}
            ]
        },
        {
            name: "পারফিউম",
            icon: "🌸",
            image: "পারফিউম.jpg",
            variants: [
                {brand:"সাধারণ",size:"পিস",price:0}
            ]
        },
        {
            name: "রুম স্প্রে",
            icon: "🌸",
            image: "রুম স্প্রে.jpg",
            variants: [
                {brand:"সাধারণ",size:"পিস",price:0}
            ]
        },
        {
            name: "বডি লোশন",
            icon: "🧴",
            image: "বডি-লোশন.jpg",
            variants: [
                {brand:"Vaseline",size:"বোতল",price:0},
                {brand:"Nivea",size:"বোতল",price:0}
            ]
        },
        {
            name: "ঘামাচি পাউডার",
            icon: "🌸",
            image: "পাউডার.jpg",
            variants: [
                {brand:"সাধারণ",size:"পিস",price:0}
            ]
        }
    ]
},

/* =========================================================
   11. বেভারেজ ও পানীয়
========================================================= */

{
    name: "🥤 বেভারেজ ও পানীয়",
    products: [
        {
            name: "কোল্ড ড্রিংকস",
            icon: "🥤",
            image: "কোল্ড-ড্রিংকস.jpg",
            variants: [
                {brand:"Coca-Cola",size:"250ml",price:25},
                {brand:"Coca-Cola",size:"500ml",price:50},
                {brand:"Coca-Cola",size:"1 later",price:80},
                {brand:"Coca-Cola",size:"2 later",price:130},
                {brand:"Pepsi",size:"250ml",price:0},
                {brand:"Pepsi",size:"500ml",price:0},
                {brand:"Pepsi",size:"1 later",price:0},
                {brand:"Pepsi",size:"2 later",price:0},
                {brand:"Fanta",size:"250ml",price:0},
                {brand:"Fanta",size:"500ml",price:0},
                {brand:"Fanta",size:"1 later",price:0},
                {brand:"Clemon",size:"250ml",price:20},
                {brand:"Clemon",size:"500ml",price:40},
                {brand:"Clemon",size:"1 later",price:70},
                {brand:"Clemon",size:"2 later",price:120},
                {brand:"Pran Up",size:"250ml",price:0},
                {brand:"Pran Up",size:"500ml",price:0},
                {brand:"Pran Up",size:"1 later",price:60},
                {brand:"Pran Up",size:"2 later",price:0},
                {brand:"Mojo",size:"250ml",price:20},
                {brand:"Mojo",size:"500ml",price:40},
                {brand:"Mojo",size:"1 later",price:70},
                {brand:"Mojo",size:"2 later",price:120},
                {brand:"Sprite",size:"250ml",price:25},
                {brand:"Sprite",size:"500ml",price:50},
                {brand:"Sprite",size:"1 later",price:80},
                {brand:"Sprite",size:"2 later",price:130},
                {brand:"7UP",size:"250ml",price:25},
                {brand:"7UP",size:"500ml",price:50},
                {brand:"7UP",size:"1 later",price:80},
                {brand:"7UP",size:"2 later",price:130},
                {brand:"Dinku",size:"250ml",price:30},
                {brand:"lachi",size:"250ml",price:20}
            ]
        },
        {
            name: "মিনারেল ওয়াটার",
            icon: "💧",
            image: "পানি.jpg",
            variants: [
                {brand:"Sun",size:"500ml",price:20},
                {brand:"Mum",size:"500ml",price:20},
                {brand:"Mum",size:"২ লিটার",price:40},
                {brand:"Mum",size:"৫ লিটার",price:90},
                {brand:"Fresh",size:"500ml",price:15},
                {brand:"Fresh",size:"১ লিটার",price:25},
                {brand:"Fresh",size:"২ লিটার",price:35},
                {brand:"Fresh",size:"৫ লিটার",price:90},
                {brand:"Muskan",size:"500ml",price:15},
                {brand:"Muskan",size:"১ লিটার",price:25},
                {brand:"Muskan",size:"২ লিটার",price:35},
                {brand:"Muskan",size:"৫ লিটার",price:0}
            ]
        },
        {
            name: "জুস",
            icon: "🧃",
            image: "জুস.jpg",
            variants: [
                {brand:"Frutika",size:"200ml",price:20},
                {brand:"Frutika",size:"500ml",price:50},
                {brand:"Frutika",size:"1 later",price:80},
                {brand:"Frutika",size:"মিনি প্যাকেট",price:20},
                {brand:"Frutika",size:"1later প্যাকেট",price:0},
                {brand:"Shezan",size:"200ml",price:20},
                {brand:"Shezan",size:"500ml",price:50},
                {brand:"Shezan",size:"1 later",price:80},
                {brand:"Shezan",size:"মিনি প্যাকেট",price:20},
                {brand:"Shezan",size:"1later প্যাকেট",price:0},
                {brand:"Pran",size:"200ml",price:20},
                {brand:"Pran",size:"500ml",price:45},
                {brand:"Pran",size:"1 later",price:80},
                {brand:"Pran",size:"মিনি প্যাকেট",price:20},
                {brand:"Pran",size:"1later প্যাকেট",price:0}
            ]
        },
        {
            name: "এনার্জি ড্রিংক",
            icon: "⚡",
            image: "এনার্জি-ড্রিংক.jpg",
            variants: [
                {brand:"Speed Can",size:"250ml",price:50},
                {brand:"Speed",size:"250ml",price:30},
                {brand:"Power",size:"250ml",price:30},
                {brand:"Tiger",size:"250ml",price:30}
            ]
        }
    ]
}

];