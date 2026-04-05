# JALOLADDING AQL JANGI: NISO, VALIYON VA PARVON Strategiya O'yini

Bu loyiha maktab tarix darslari uchun yaratilgan interaktiv o'yin hisoblanadi.  
O'yin Jaloliddin Manguberdining 1221-yildagi uch muhim jangiga asoslangan:
- Niso jangi
- Valiyon jangi
- Parvon jangi

O'yin ikki jamoa uchun mo'ljallangan bo'lib, o'quvchilar strategik fikrlash orqali savollarga javob beradilar.

---

# O'yin haqida

O'yin quyidagi tamoyil asosida ishlaydi:
- 2 ta jamoa bir vaqtning o'zida o'ynaydi
- har savolga **30 soniya** vaqt beriladi
- o'yin umumiy **10 daqiqa** davom etadi
- jami **20 ta savol** mavjud
- maksimal natija **10 ball**

To'g'ri javob uchun:
- har savol = **0.5 ball**

---

# O'yin interfeysi

Har jamoa uchun alohida panel mavjud:
- yuqorida jang xaritasi
- xarita ustida savol
- pastda 4 ta javob varianti
- real vaqt ball ko'rsatkichi

Natijalar butun sinf ko'ra olishi uchun katta ko'rinishda chiqariladi.

---

# Sound tizimi

O'yinda atmosfera yaratish uchun audio ishlatiladi.

### Fon musiqasi
- guitar-loop

### G'alaba soundlari
- BINGO BANGO BONGO
- VICTORY
- WINNER WINNER CHICKEN DINNER

### Xato javob soundlari
- try again
- negative beeps
- you lost
- painful ooh

Soundlar o'yin holatiga qarab navbat bilan ishlatiladi.

---

# Fayl tuzilishi

```
jaloladdin-dars-game
index.html
style.css
script.js
images/
  niso.jpg
  valiyon.jpg
  parvon.jpg
audio/
  guitar-loop.mp3
  game-bonus.mp3
  victory-male.mp3
  you-win.mp3
  time-over.mp3
  painful-ooh.mp3
  failure.mp3
  try-again.mp3
  negative-beeps.mp3
  you-lost-male.mp3
```

---

# Ta'limiy maqsad

Ushbu loyiha tarix darslarini yanada qiziqarli qilish uchun ishlab chiqilgan.

O'yin o'quvchilarga quyidagilarni rivojlantirishga yordam beradi:
- strategik fikrlash
- tarixiy voqealarni tahlil qilish
- jamoa bilan ishlash
- tez qaror qabul qilish

---

# Manbalar

O'yin savollari quyidagi tarixiy manbalarga asoslangan:
- Nasaviy — *Siyrat as-Sulton Jalol ad-Din Mangburni*
- Ibn al-Asir — *Al-Kamil fi at-Tarikh*
- Rashid ad-Din — *Jome at-Tavorix*

---

# Muallif

Tarix darslari uchun zamonaviy interaktiv metodika asosida ishlab chiqilgan loyiha.

Maqsad:  
**AI va interaktiv texnologiyalar yordamida tarix fanini yanada qiziqarli qilish.**

---

# AI Promptlar (O'yin yaratishda ishlatilgan)

Quyidagi promptlar o'yin logikasi va savollarini yaratishda AI bilan ishlashda qo'llanilgan.

---

## 🧠 UMUMIY MASTER PROMPT (butun o'yin logikasi uchun)

```
8-sinf o'quvchilari uchun Jaloliddin Manguberdi hayotidagi uchta muhim jang —
Niso, Valiyon va Parvon asosida interaktiv, immersiv va gamifikatsiyalangan
tarixiy o'yin yarat.

O'yin PUBG uslubida bo'lsin:
- 2 jamoa bir vaqtda o'ynaydi
- Har bir jamoa mustaqil qaror qabul qiladi
- Har savol — bu strategik vaziyat
- Har qaror — real tarixiy asosga ega bo'lsin

Asosiy g'oya:
Jaloliddin doim jang qilishni emas, balki:
- vaziyatni baholash
- qo'shinni saqlash
- strategik qaror qilish
orqali g'alabaga erishgan.

O'yin davomida quyidagilar aks etsin:
- tez fikrlash
- maydon tanlash
- dushman xatolaridan foydalanish
- sabr va intizom

Til:
- sodda, 8-sinfga mos
- murakkab terminlarsiz
- qisqa va aniq

Har bir bosqich:
- savol (vaziyat)
- 4 ta variant
- 1 ta to'g'ri strategiya

Natijada o'quvchi tushunishi kerak:
"G'alaba kuch bilan emas, strategiya bilan keladi"
```

---

## 🏹 1-XONA: NISO — MASTER PROMPT

```
Niso jangini interaktiv strategik o'yin sifatida tasvirla.

Asosiy tarixiy mazmun:
- Jaloliddin majburlikdan jang qiladi
- asosiy maqsad: qo'shinni saqlab qolish
- tez harakat va vaqtni boy bermaslik muhim

O'yin logikasi:
- kichik to'qnashuvlar
- tez qarorlar
- noto'g'ri qaror = vaqt yo'qotish
- to'g'ri qaror = yo'l ochish

Savollar quyidagilarga asoslansin:
- kichik to'siqni yorib o'tish
- vaqtni tejash
- jangni cho'zmaslik
- asosiy maqsadni unutmaslik

Beriladigan xulosa:
Har bir jangda urushish shart emas.
Ba'zan eng katta g'alaba — tirik qolish va to'g'ri yo'lni tanlash.
```

---

## 🏔 2-XONA: VALIYON — MASTER PROMPT

```
Valiyon jangini himoya va sabr strategiyasi asosida interaktiv o'yinga aylantir.

Asosiy tarixiy mazmun:
- Jaloliddin joy tanlash orqali ustunlikka erishadi
- baland joy va kuzatuv muhim
- sabr bilan dushman xatosini kutadi

O'yin logikasi:
- maydon tanlash
- dushmanni chalg'itish
- tartibni saqlash
- shoshmaslik

Savollar quyidagilarga asoslansin:
- baland joy vs past joy
- sabr vs shoshilish
- birlik vs tarqoqlik
- kuzatuv vs ko'r-ko'rona hujum

Beriladigan xulosa:
Kuchli bo'lish — bu ko'p askar emas,
balki to'g'ri joy va sabr bilan qaror qilishdir.
```

---

## ⚔️ 3-XONA: PARVON — MASTER PROMPT

```
Parvon jangini strategik g'alaba sifatida interaktiv o'yinga aylantir.

Asosiy tarixiy mazmun:
- Jaloliddin tor hududdan ustalik bilan foydalanadi
- dushman harakatini cheklaydi
- sabr + boshqaruv = g'alaba

O'yin logikasi:
- hudud tanlash
- dushmanni cheklash
- aldovlarni aniqlash
- g'alabadan keyin tartibni saqlash

Savollar quyidagilarga asoslansin:
- tor joydan foydalanish
- dushman harakatini nazorat qilish
- sabr bilan kutish
- g'alabadan keyingi qaror

Beriladigan xulosa:
Eng katta g'alaba — bu nazorat.
Kim vaziyatni boshqarsa, o'sha yutadi.
```

---

## 🔥 BONUS: O'YIN RUHI (PUBG uslub prompt)

```
O'yinga quyidagi ruhni ber:
- har savol = jang vaziyati
- har tanlov = hayot-mamot qarori
- tez javob = ustunlik
- kech javob = xavf

Natija effektlari:
- tez to'g'ri javob → BINGO BANGO BONGO
- oddiy g'alaba → VICTORY
- raqib xatosi → WINNER WINNER CHICKEN DINNER
- xato → TRY AGAIN

O'yin o'quvchini "qatnashchi"ga aylantirsin, tomoshabin emas.
```
