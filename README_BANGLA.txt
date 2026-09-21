SIX M STORE Super Shop System V2

1) Google Sheet খুলে Extensions > Apps Script এ Code.gs-এর কোড বসান।
2) Code.gs-এ DEFAULT_ADMIN_PASSWORD অবশ্যই নিজের শক্ত Password দিয়ে বদলান।
3) একবার setupSixMStore() Run করুন এবং Google permission Allow করুন।
4) Deploy > New deployment > Web app
   Execute as: Me
   Who has access: Anyone
5) Web App URL কপি করুন।
6) index.html-এর SIXM_GAS_URL এবং admin.html-এর GAS_URL-এ একই URL বসান।
7) GitHub Pages-এ index.html, admin.html, Products.js এবং আপনার images/ ফোল্ডার আপলোড করুন।
8) Admin login: superadmin + Code.gs-এ দেওয়া আপনার Password.
9) Admin Panel-এর Products/Stock থেকে Products.js Import করে Google Sheet-এ সব variant তুলতে পারবেন।

নোট: Order Confirmed করলে matching product stock কমবে। Direct Cash Sale-এও stock কমবে।
