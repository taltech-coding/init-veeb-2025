# Päevi vaheajani veebileht

- [Abivahendid](#abivahendid)
- [Sissejuhatus](#sissejuhatus)
- [Ülesanded](#ülesanded)
    - [❓ Puuduvate tag'ide lisamine](#-puuduvate-tagide-lisamine)
    - [💄 Puuduvate CSS väärtuste lisamine](#-puuduvate-css-väärtuste-lisamine)
    - [🗓️ Kuupäevade lisamine](#️-kuupäevade-lisamine)
    - [🔢 Aja arvutamine](#-aja-arvutamine)
    - [💭 Kuupäevade valija täiendamine](#-kuupäevade-valija-täiendamine)
    - [🔄️ Tähtpäeva nime uuendamine](#️-tähtpäeva-nime-uuendamine)
    - [3️⃣ Järgmise tähtpäeva kuupäeva kuvamine](#3️⃣-järgmise-tähtpäeva-kuupäeva-kuvamine)
    - [☀️🌙 Dark ja light mode lüliti parandamine](#️-dark-ja-light-mode-lüliti-parandamine)
    - [⭐ Boonusülesanded](#-boonusülesanded)

## Abivahendid

Ka siin töötoas on parimaks abivahendiks abilised, kellelt küsimusi küsida. **Küsi julgelt abi :)** Kui ei saa jõuga,
siis saab nõuga! Kui abiõppejõud sind aidata ei oska, siis kindlasti on sinu küsimusele vastus
ka [Google'is](https://google.com) või [Stack Overflow'is](https://stackoverflow.com/questions). Samuti on meil varasemate töötubade jaoks loodud
[veebilehe tegemise abimaterjalid](https://htmldoc.pages.taltech.ee/) ja ülesannete näidislahendused on kättesaadaval
kaustas "[solutions](https://github.com/taltech-coding/init-veeb-2025/tree/main/solutions)".

## Sissejuhatus

Vaheajad on ühed oodatuimad tähtpäevad õpilaste elus. Küll aga on tüütu arvutada, millal järgmine vaheaeg tuleb. Selleks
hakkasid sa koos sõbraga arendama veebilehte, mis näitab reaalajas, kui palju aega on vaheajani jäänud. Käes on aga
eksamiperiood ja kahjuks peab su sõber õppima matemaatika järeleksamiks, sest ta kukkus eksami läbi. Seega tuleb sul
üksinda töö lõpule viia!

## Ülesanded

Oleme sulle ette valmistanud pisikesed ülesanded ning juhtnöörid nende lahendamiseks. Saad kätt proovida nii HTMLi, CSSi
kui JavaScriptiga. See tähendab, et saad soovi korral muuta ise veebisaidi paigutust, lisada või eemaldada elemente ning
muuta selle välimust ja funktsionaalsust!

Oluline on, et sul oleks tore ja et saaksid natuke oma loovust valla lasta! Kui satud segadusse või vajad abi, siis
tõsta julgelt käsi või guugelda :)

### ❓ Puuduvate _tag_'ide lisamine

Nagu varasemalt mainitud sai, siis kogu HTML on üles ehitatud _tag_'ide peale. Iga HTMLi komponent on mingisugune _tag_!

Esiteks tuleks meil korrastada veidi faili `index.html`. Ava see fail ja otsi sealt üles lehekülje päis (`<head>`
_tag_). Siin tuleb sul taastada ühendus meie HTML struktuurifaili, CSS stiilifaili ja JavaScript skriptifaili vahel.

<details>
  <summary>💡 Kuidas ühendada omavahel HTMLi, CSSi ja JavaScripti?</summary>

CSSi faili ühendamiseks saame kasutada isesulguvat tagi `<link>`, ning panna talle külge märgendi `rel="stylesheet"`, et
anda märku, et tegemist on lehekülje stiili sisaldava failiga. CSS faili nimi tuleb panna märgendis `href=""`
jutumärkide vahele.

Kui see kõik kokku panna, siis CSS faili ühendamine võiks välja näha umbes selline:

```html

<link rel="stylesheet" href="style.css"/>
```

JavaScripti faili ühendamine käib väga sarnaselt, aga seal tuleb kasutada tagi `<script>`. Skriptile tuleb märgenditeks
anda JavaScripti faili nimi `src="failinimi.js"` ja tüüp `type="text/javascript"`. Kuna meie JavaScripti skript hakkab
muutma veebilehe sisu, siis peaks tema ühendamisega ootama kuni ülejäänud veebileht on ära laadinud, ning selleks tuleb
talle märgendina lisada veel `defer`. `<script>` tag ei ole isesulguv, seetõttu tuleb see lõpuks ka sulgeda: `</script>`

Kui see kõik kokku panna, siis JavaScripti faili ühendamiseks kasutatav kood võiks olla näiteks selline:

```html

<script src="script.js" type="text/javascript" defer></script>
```

</details>

### 💄 Puuduvate CSS väärtuste lisamine

Nüüd kui HTMLi sisu parandatud sai, tuleks teha mõned korrektuurid ka veebisaidi välimusele. Sinu ülesandeks on
veebisaidile puuduvad värvid lisada!

CSS koosneb _selector_'itest, millega valitakse elemente. Nende sees saab määrata elemendile erinevaid omadusi. Igale
omadusele saab omakorda anda eri sorti väärtuseid. Omadused on näiteks:

- `color` - teksti värv
- `background-color` - tausta värv
- `font-size` - teksti suurus
- `width` - elemendi laius
- `height` - elemendi kõrgus
- `margin` - elemendi veeris ehk ala valitud elemendi ja teiste elementide vahe
- `padding` - elemendi sees olev "puhver" (Näiteks kui mul on musta joonega kast, mille sees on tekst, siis tekst puutub
  algul kasti. Kui lisada padding, siis tekib vahe teksti ja kastiääre vahele.)
- jne (Fun fact: CSSil on üle 200 erineva omaduse)

Mine faili `style.css` ja lisa puuduvad värvid kohtadesse, kus `background-color` või `color` väärtused on puudu. Need
kohad leiad ülesse "TODO" kommentaaride järgi. Et asi lihtsam oleks, oleme loonud värvidele muutujad (_variable_), mida
saab kasutada. Neid muutujaid näed sa `style.css` failis ridadel 67-75!

<details>
<summary>💡 Kuidas kasutada CSSis muutujaid?</summary>

Siin (ja `style.css` failis ridadel 67-75) saad sa neid väärtuseid ka näha - väärtused, mis algavad "--" ongi muutujad,
mida saab igal pool kasutada.

```css
:root {
    --color-background: #FDFFEC;
    --text-color-blue: #2D3142;
    --text-color-green: #81A880;
    --text-color-orange: #FF8C42;
    --color-blue: #2D3142;
    --color-green: #81A880;
    --color-orange: #FF8C42;
}
```

Muutujate kasutamiseks on selline funktsioon nagu `var()`, mille sisse sa paned muutuja nime, et seda kasutada. Näide:

```css 
background-color:

var
(
--color-background

)
;
color:

var
(
--color-orange

)
;
```

</details>

### 🗓️ Kuupäevade lisamine

Nüüd on aeg vaadata JavaScripti poole. Su sõber lisas juba päris mitme sündmuse kuupäevad ise, kuid ta ei mäletanud,
millal su sünni- ja nimepäev on. Seega pead sa need kuupäevad ise sisestama.

Failis `script.js` asub veebisaidi JavaScripti kood. Sisu võib tunduda küll hirmus, kuid ära muretse! Enamus tööst on
juba tehtud. Kohe faili alguses ongi sündmuste nimekiri (defineeritud kui `timetable`).

Nagu näha on, siis sünnipäeva ja nimepäeva kuupäevadesse on jäetud `YYYY-MM-DD`, sinu ülesanne ongi need asendada samas
formaadis numbritega (Ehk siis aasta-kuu-päev)! Õiget vormistust näed ka teiste ürituste pealt. Vaata, et lisaksid oma
kuupäevale nii alguse kui lõpu väärtuse, et kood toimiks õigesti (algus ja lõpp on samal päeval, lihtsalt algus on kell
00:00 ja lõpp kell 23:59).

### 🔢 Aja arvutamine

Jätkame JavaScriptiga. Su sõber on kirjutanud valmis aja arvutamiseks funktsiooni `updateCountdown();`, kuid ta ei kutsu
seda kuskil välja ehk funktsioon ei käivitu. Lisaks sellele peab funktsiooni välja kutsuma iga 1 sekundi ehk 1000
millisekundi tagant, et see toimiks nagu õige kell toimima peaks.

Rida 182 läheduses peaksid leidma "TODO", mis käib selle ülesande kohta. Seal peadki sa sisestama õige funktsiooni nime,
et see alguses välja kutsuda. Nagu näha, siis funktsiooni välja kutsumiseks tuleb funktsiooni nime järgi panna (sulud).
Kohe pärast seda pead sa uuesti funktsiooni nime sisestama teise funktsiooni `setInterval(FUNKTSIOONI_NIMI, 1000);`,
sest seal hakatakse aja uuendamise funktsiooni välja kutsuma iga sekundi tagant. Pane tähele, et siin pole funktsiooni
nime järele enam (sulge) vaja!

Kui oled kõik õigesti teinud, siis nüüd peaks veebilehel asuv _countdown_ toimima!

### 💭 Kuupäevade valija täiendamine

Nüüd kui kuupäevad on olemas, tuleks nende valik kajastada ka HTMLis, et neid üldse valida saaks. See pole õnneks raske!

Mine faili `index.html` ja selle faili lõpuridadelt leiad sa sellise tagi nagu `<select name="event" id="event">`. Sinna
sisse hakkadki sa valikuid lisama! Nagu näha on, siis seal on juba üks valik olemas. Jäänud on veel lisada valikud
teiste tähtpäevade jaoks.

Kõige lihtsam on teha _copy-paste_ esimeselt realt ja asendada `value=""` väärtus tähtpäevale vastavaga. Et iga valik
saaks õige väärtuse, siis vaata `script.js` faili algust, kus on iga tähtpäeva nimi välja toodud.


<details>
<summary>💡 Kuidas lisada õige väärtus option <i>tag</i>'ile?</summary>

```js
    "kooli lõpp"
:
[ // "kooli lõpp" on tähtpäeva nimi ja selle sama nime pead sa ka optioni väärtuseks panema
    {
        start: new Date("2025-06-18T00:00:00.000Z"),
        end: new Date("2025-06-26T23:59:59.000Z"),
    }
],
```

```html

<option value="kooli lõpp">kooli lõpuni</option> <!-- "kooli lõpp" tuleb niimoodi sisestada -->
```

</details>

### 🔄️ Tähtpäeva nime uuendamine

Nüüd on meie veebileht juba päris funktsionaalne! Ent tähelepanelik vaatleja märkab, et kui valida vaheaja asemel
näiteks sünnipäevani aja lugemine, siis hakkab kell küll õige päevani aega lugema, aga tekst veebilehel teatab endiselt,
et me loeme aega vaheajani! Kuidas seda küll parandada?

Õnneks on selle vea parandamine imelihtne! Ava fail `script.js` ja otsi sealt üles funktsioon `updateEventTitle()`. See
funktsioon peaks meie eest seda teksti uuendama, ent paistab, et koodi autor on unustanud määrata, millise ID-ga
HTML-elementi me siinkohal uuendama peaks.

Proovime sobiva elemendi ID üles leida! Ava fail `index.html` ja otsi sealt üles tekstielement, kus on kirjas "Vaheajani
on jäänud". Nüüd jäta selle elemendi ID meelde, mine tagasi `script.js` faili, ja kirjuta seesama ID funktsiooni
`updateEventTitle()` tühjade jutumärkide sisse. NB! ID tuleb ära muuta nii `if` kui ka `else` harudes!

Kui failis `script.js` on parandused tehtud, siis võiks meie leht uue kuupäeva valimisel õigesti näidata, mis päevani
meie _countdown_ nüüd loeb!

### ☀️🌙 Dark ja light mode lüliti parandamine

Kõige ägedam asi on veel jäänud, et veebileht oleks lõpuks valmis! Nimelt tuleb korda teha teemalüliti (_theme
switcher_). Siis saaksid silmad lõpuks puhata.

Lõpetame samuti JavaScriptiga. `script.js` failis on veel üks TODO, mis asub real 218 (umbes seal). Võib-olla märkad
isegi, et sealt on midagi puudu. Nimelt `data-theme` määramisel ei anta sellele väärtust, mis muudaks veebilehe
välimust. Tühjade jutumärkide sisse peab kirjutama vastavalt "light" või "dark", et koodijupp tööle hakkaks.

HINT: Vaata, kuidas kohe pärast seda pannakse _localStorage_'issee "theme" väärtus.

### ⭐ Boonusülesanded

- 👑 Muuda veebilehe välimust enda maitse järgi. Võid lisada värve, muuta fonti ja paigutusi jne!
- 👑 Lisa sündmuste valikusse ka teisi sündmusi.
- 👑 Võid lisada mingid eriefektid, kui valitud sündmus kätte jõuab. Näiteks _confetti_!
