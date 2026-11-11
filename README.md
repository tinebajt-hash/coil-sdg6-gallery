# COIL · SDG 12 – spletna galerija: Odgovorna poraba in proizvodnja

Spletna galerija projekta COIL, ki jo pripravita dva dijaka. Tema: **Cilj trajnostnega razvoja št. 12 (SDG 12) – odgovorna poraba in proizvodnja**. Stran vsebuje uvodno predstavitev SDG 12, opis izbrane težave (hitra moda in tekstilni odpadki), fotografsko galerijo s filtriranjem po avtorjih, interaktivni kviz, anketo in predstavitvena videa.

## 📁 Struktura datotek

```
coil-sdg12-gallery/
│
├── index.html      # struktura in vsebina spletne strani
├── style.css       # barve, pisave, postavitev in oblikovanje
├── script.js       # interaktivni kviz, anketa, filtriranje fotografij
├── README.md       # opis projekta in razdelitev dela
│
├── images/
│   ├── dijakA/     # fotografije Dijaka A (foto-01.jpg … foto-06.jpg)
│   └── dijakB/     # fotografije Dijaka B (foto-01.jpg … foto-06.jpg)
│
└── videos/         # lokalni videoposnetki (večji videi → YouTube, Unlisted + vdelava)
```

> ⚠️ Fotografije v mapi `images/` je treba še naložiti (vsak dijak najmanj 6 lastnih,
> imenovanih `foto-01.jpg` … `foto-06.jpg`). Prav tako v `index.html` zamenjata
> `VIDEO_ID_A` in `VIDEO_ID_B` z dejanskima ID-jema YouTube videov.

## 👥 Razdelitev dela (Division of work)

| Naloga | Kdo |
|---|---|
| Uvodna predstavitev SDG 12 | Dijak A |
| Opis izbrane težave | Dijak B |
| Najmanj 6 lastnih fotografij | Dijak A in Dijak B (oba) |
| Naslovnica in prvi del galerije | Dijak A |
| Drugi del galerije in zaključek | Dijak B |
| Interaktivna vsebina (kviz, anketa, filtriranje) | Skupaj |
| Predstavitveni video | Dijak A in Dijak B (oba) |

**English summary (za pregled prispevkov / učiteljico):**

- Student A: SDG introduction, photography, homepage design.
- Student B: problem research, photography, interactive quiz.
- Together: gallery development, testing and publication.

Vsak dijak mora spremembe shranjevati **iz svojega GitHub računa**, da bo razviden njegov prispevek (Commits oziroma Insights → Contributors).

## 🤝 Pravila sodelovanja

1. Pred začetkom se dogovorita, kdo ureja katere datoteke/dele strani.
2. Isti datoteki hkrati ne urejata neposredno na veji `main`.
3. Pred večjimi spremembami preverita zadnjo različico projekta (`git pull`).
4. Vsako delo shranita z jasnim opisom spremembe, npr.:
   - `Add SDG introduction`
   - `Upload six edited photos`
   - `Create interactive quiz`
   - `Improve gallery design`
   - `Add introduction videos`
5. Redno preverita, da galerija še pravilno deluje.
6. Za sočasno urejanje kode uporabita ločeni veji (`branch`) in združevanje prek **Pull Requestov** (priporočeno za naprednejše dijake).

## 🚀 Objava na GitHub Pages

1. Odpri skupni repozitorij → **Settings → Pages**.
2. Pod *Build and deployment* izberi **Deploy from a branch**.
3. Izberi vejo `main` in mapo `/ (root)` → **Save**.
4. Počakaj na objavo; povezava bo oblike:
   `https://<uporabnisko-ime>.github.io/coil-sdg12-gallery/`
5. Pred oddajo preverita: vse fotografije, videoposnetki, povezave in interaktivne funkcije (kviz, anketa, filtri).

## 🧪 Lokalni zagon

Dovolj je, da v brskalniku odpreš `index.html`. Priporočljivo pa je uporabiti lokalni strežnik:

```bash
python3 -m http.server 8000
# nato odpri http://localhost:8000
```

## 🛠️ Tehnologije

- HTML5, CSS3 (spremenljivke, grid, odzivni dizajn), JavaScript (brez knjižnic)
- Rezultati ankete se hranijo v `localStorage` brskalnika
- Barvna shema sledi uradni barvi cilja SDG 12 (#BF8B2E / vijolična)