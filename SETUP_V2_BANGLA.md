SIX M STORE SuperShop Google Sheets V2

ভিত্তি: SIX_M_STORE_SuperShop_GoogleSheets_V1
WhatsApp automatic notification: এই V2-তে নেই।

1) Google Apps Script-এ Code.gs-এর পুরনো কোডের বদলে এই Code.gs দিন।
2) একবার setupSixMStore() Run করুন। এতে Stock sheet-সহ প্রয়োজনীয় sheet তৈরি হবে।
3) Deploy > Manage deployments > Web app > Execute as Me > Who has access: Anyone দিয়ে Deploy/Update করুন।
4) নতুন Web App URL কপি করুন।
5) admin.html-এর GAS_URL-এর জায়গায় URL বসান।
6) GitHub-এ admin.html আপলোড/replace করুন।
7) প্রথম Login: superadmin / CHANGE-ME-NOW — Login করার পর অবশ্যই পরে password ব্যবস্থাপনা উন্নত করা উচিত।

নোট: V1-এর index.html ও Products.js এখানে রাখা হয়েছে। Website order endpoint-এর জন্য একই Web App URL ব্যবহার করা যাবে।
