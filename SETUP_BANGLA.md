# SIX M STORE — Google Sheets Super Shop System V1

এই প্যাকেজে বর্তমান customer website-এর design/products রেখে Google Sheets backend প্রস্তুত করা হয়েছে।

## 1) Google Sheet তৈরি
একটি নতুন Google Sheet খুলুন → Extensions → Apps Script → `Code.gs`-এর কোড পুরোটা paste করুন → Save.

## 2) Sheet প্রস্তুত
Apps Script editor থেকে `setupSixMStore` function Run করুন। প্রথমবার permission চাইলে আপনার Google account দিয়ে Allow করুন। এতে Orders, Products, Sales, Expenses, Customers, Admins, Settings, AuditLog sheet তৈরি হবে।

## 3) Super Admin password
`Code.gs`-এ `DEFAULT_ADMIN_PASSWORD`-এর `CHANGE-ME-NOW` বদলে একটি নতুন password দিন এবং আবার `setupSixMStore` Run করুন। পরে Admins sheet-এ প্রয়োজনীয় admin account যোগ করা যাবে; production ব্যবহারের আগে default account/password বদলানো জরুরি।

## 4) Web App Deploy
Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone → Deploy.

Web App URL কপি করে `index.html` এবং `admin.html`-এর `GAS_URL`-এ বসাতে হবে।

## 5) Website order flow
Customer website-এর order Google Sheets-এর `Orders` sheet-এ যাবে। Customer device-এ WhatsApp খুলে দেওয়ার প্রয়োজন নেই।

## 6) Admin flow
Admin login → Dashboard → Orders / Products / Sales / Expenses. Super Admin account থেকে পরে Admin account তৈরি করা যাবে।

## 7) Important
এই V1 Google Apps Script + Google Sheets ভিত্তিক। WhatsApp/Telegram-এ server-side automatic notification দিতে আলাদা provider credentials লাগতে পারে; সেগুলো এই প্যাকেজে hard-code করা হয়নি।
