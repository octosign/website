---
path: "/sk/help/faq"
language: sk
date: "2020-06-09"
title: "Často kladené otázky"
---

## Aké operačné systémy sú podporované?

Podporované sú všetky verzie operačných systémov Windows a macOS, ktoré sú podporované samotným výrobcom. Aplikácia je testovaná na najnovšej verzii Windows 10 a macOS 10.15 Catalina. Aplikácia by mala tiež fungovať na aktuálnych verziách populárnych distribúcií Linuxu. Testovaná je na Ubuntu 18.04.

Windows 7 nie je oficiálne podporovaný a po spustení sa nezobrazujú možnosti podpísania. Pre opravenie je potrebné nainštalovať novšiu verziu PowerShell, ktorá sa dá získať vo voliteľnej aktualizácii [KB3191566](https://download.microsoft.com/download/6/F/5/6F5FF66C-6775-42B0-86C4-47D41F2DA187/Win7AndW2K8R2-KB3191566-x64.zip).

## Je aplikácia vhodná na použitie v komunikácii so štátom?

Nie, aplikácia zatiaľ nie je dostatočne prispôsobená na použitie v komunikácii so štátom. Pri podpísaní PDF súborov sa musíte sami uistiť, že je vo formáte PDF/A. Iné formáty pravdepodobne nebudú akceptované. Pre záujem zo strany komunity bude toto použitie vylepšené v budúcnosti. Diskutuje sa napríklad aj priame prepojenie s webovými aplikáciami Slovenskej Republiky na [platforma.slovensko.digital](https://platforma.slovensko.digital/t/jednoduchy-desktopovy-oss-na-podpisanie-a-overenie-podpisu/6878).

## Zbiera a odosiela aplikácia údaje?

Nie, aplikácia nezbiera žiadne údaje o podpisovaných súboroch ani žiadne iné citlivé údaje. Aplikácia nemá žiadne servery, ktoré by sa používali na tento účel. Keďže aplikácia má otvorený zdrojový kód, môžete si to overiť v zdrojovom kóde na [GitHub.com](https://github.com/durasj/octosign).

## Má aplikácia platenú verziu? Je naozaj zadarmo?

Aplikácia je plne zadarmo a licencovaná pod licenciou pre softvér s otvoreným zdrojovým kódom. Zdrojový kód si môžete pozrieť na [GitHub.com](https://github.com/durasj/octosign).

## Je aplikácia pripravená na bežné používanie?

Aplikácia je momentálne v intenzívnom vývoji. Pri používaní sa môžu vyskytnúť chyby a mnohé funkcie ešte chýbajú. Spätnú väzbu prosím píšte na [GitHub.com](https://github.com/durasj/octosign) alebo priamo autorovi použitím kontaktných informácií na [duras.me](https://duras.me).

## Je možné používať aplikáciu bez pripojenia na internet?

Pri použití možnosti *Pokročilý elektronický podpis* aplikácia nie je stavaná na používanie bez pripojenia na internet. Overovanie podpisov totiž vyžaduje komunikáciu so servermi tretej strany.
