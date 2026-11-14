---
title: "Dichtebestimmung (M1)"
description: "Was Dichte ist und wie man sie aus Masse und Volumen bestimmt, auch dann, wenn sich das Volumen nicht ausmessen lässt: mit dem Auftrieb und mit dem Pyknometer."
weight: 1
---

*In einem Satz: Die Dichte sagt, wie viel Masse in einem Volumen steckt, und wenn man das Volumen nicht messen kann, lässt es sich über das verdrängte Wasser bestimmen.*

## Dichte

> [!NOTE] Definition
> Die **Dichte** $\rho$ eines Körpers ist der Quotient aus seiner Masse $m$ (Einheit $\mathrm{kg}$ oder $\mathrm{g}$) und seinem Volumen $V$ (Einheit $\mathrm{m^3}$ oder $\mathrm{cm^3}$):
>
> $$ \rho = \frac{m}{V} . $$
>
> Einheit: $\mathrm{kg/m^3}$, im Labor meist $\mathrm{g/cm^3}$. Es gilt $1\,\mathrm{g/cm^3} = 1000\,\mathrm{kg/m^3}$.

> [!TIP] In einfachen Worten
> Die Dichte ist die Masse von einem Kubikzentimeter des Stoffes. Ein Würfel Aluminium mit der Kantenlänge $1\,\mathrm{cm}$ wiegt etwa $2{,}7\,\mathrm{g}$. Ein gleich großer Würfel aus Blei wiegt etwa $11{,}3\,\mathrm{g}$. Die Dichte ist eine Eigenschaft des Stoffes und hängt nicht davon ab, wie groß das Stück ist.

### Beispiel

Ein Würfel hat die Kantenlänge $a = 2{,}00\,\mathrm{cm}$ und die Masse $m = 21{,}6\,\mathrm{g}$. Sein Volumen ist

$$
V = a^3 = (2{,}00\,\mathrm{cm})^3 = 8{,}00\,\mathrm{cm^3} .
$$

Die Dichte ist damit

$$
\rho = \frac{m}{V} = \frac{21{,}6\,\mathrm{g}}{8{,}00\,\mathrm{cm^3}} = 2{,}70\,\mathrm{g/cm^3} .
$$

Das passt zu Aluminium. Die Zahlen sind frei gewählt und keine Messwerte.

## Das Volumen bestimmen

Die Masse liest man an einer Waage ab. Schwieriger ist das Volumen. Bei einfachen Körpern misst man die Maße nach und rechnet.

> [!NOTE] Definition
> Für einen Quader mit den Kantenlängen $a$, $b$ und $c$ und für einen Zylinder mit dem Durchmesser $d$ und der Höhe $h$ gilt
>
> $$ V_\mathrm{Quader} = a \cdot b \cdot c \qquad\text{und}\qquad V_\mathrm{Zylinder} = \frac{\pi \cdot d^2}{4} \cdot h . $$

> [!TIP] In einfachen Worten
> Beim Quader ist das Volumen Länge mal Breite mal Höhe. Beim Zylinder ist es die Kreisfläche am Boden mal die Höhe.

Bei unregelmäßigen Körpern geht das nicht. Dann nutzt man aus, dass ein Körper im Wasser Platz wegnimmt. Das verdrängte Wasser hat genau das Volumen des Körpers, und sein Gewicht lässt sich wiegen. Dafür gibt es zwei Wege.

## Auftriebsmethode

> [!NOTE] Definition
> Ein Körper, der ganz in eine Flüssigkeit der Dichte $\rho_\mathrm{Fl}$ eintaucht, erfährt den **Auftrieb** $F_A$. Er ist so groß wie die Gewichtskraft der verdrängten Flüssigkeit (Archimedisches Prinzip):
>
> $$ F_A = \rho_\mathrm{Fl} \cdot V \cdot g , $$
>
> mit dem Volumen $V$ des Körpers und der Fallbeschleunigung $g = 9{,}81\,\mathrm{m/s^2}$. Wägt man den Körper in Luft mit der Masse $m_K$ und unter Wasser mit der scheinbaren Masse $m_K^*$, ergibt sich seine Dichte $\rho_K$ aus
>
> $$ \rho_K = \frac{m_K}{m_K - m_K^*} \cdot \rho_W , $$
>
> wobei $\rho_W$ die Dichte von Wasser ist.

> [!TIP] In einfachen Worten
> Im Wasser fühlt sich ein Körper leichter an. Die Waage zeigt unter Wasser weniger an als in Luft. Der Unterschied ist genau die Masse des Wassers, das der Körper zur Seite geschoben hat. Daraus kennt man das Volumen. Mit der Masse aus der Luftwägung hat man dann alles für die Dichte.

### Herleitung (selbst durchgerechnet)

Die Gewichtskraft in Luft ist $m_K \cdot g$, unter Wasser ist sie $m_K^* \cdot g$. Der Unterschied ist der Auftrieb. Mit $m_W$ als Masse des verdrängten Wassers gilt

$$
m_K \cdot g - m_K^* \cdot g = m_W \cdot g .
$$

Das $g$ kürzt sich weg: $m_K - m_K^* = m_W$. Das verdrängte Wasser hat das Volumen $V$ des Körpers, also $m_W = \rho_W \cdot V$. Daraus folgt

$$
V = \frac{m_K - m_K^*}{\rho_W} .
$$

Das setzen wir in $\rho_K = m_K / V$ ein:

$$
\rho_K = \frac{m_K}{\dfrac{m_K - m_K^*}{\rho_W}} = \frac{m_K}{m_K - m_K^*} \cdot \rho_W .
$$

### Beispiel

Ein Körper hat in Luft die Masse $m_K = 21{,}6\,\mathrm{g}$ und unter Wasser die scheinbare Masse $m_K^* = 13{,}6\,\mathrm{g}$. Mit $\rho_W = 1{,}00\,\mathrm{g/cm^3}$ ist

$$
\rho_K = \frac{21{,}6\,\mathrm{g}}{21{,}6\,\mathrm{g} - 13{,}6\,\mathrm{g}} \cdot 1{,}00\,\mathrm{g/cm^3} = \frac{21{,}6}{8{,}0} \cdot 1{,}00\,\mathrm{g/cm^3} = 2{,}70\,\mathrm{g/cm^3} .
$$

Das verdrängte Wasser wiegt $8{,}0\,\mathrm{g}$, das Volumen des Körpers ist also $8{,}0\,\mathrm{cm^3}$. Die Zahlen sind frei gewählt und keine Messwerte.

> [!CAUTION] Stolperstelle
> Die scheinbare Masse $m_K^*$ ist **kleiner** als $m_K$. Im Nenner steht die Differenz $m_K - m_K^*$, nicht $m_K^*$ allein. Außerdem darf der Körper nirgends am Gefäß anstoßen, und es dürfen keine Luftblasen an ihm hängen. Blasen vergrößern das verdrängte Volumen und machen die Dichte scheinbar kleiner.

## Pyknometer

> [!NOTE] Definition
> Ein **Pyknometer** ist ein Gefäß mit einem festen, genau gefüllten Volumen. Man wiegt es dreimal: mit Wasser gefüllt ($m_1$), den Körper allein ($m_K$) und das Pyknometer mit Wasser und eingelegtem Körper ($m_2$). Die Dichte des Körpers ist
>
> $$ \rho_K = \frac{m_K}{m_1 + m_K - m_2} \cdot \rho_W . $$

> [!TIP] In einfachen Worten
> Du legst den Körper in das randvolle Gefäß. Er schiebt Wasser heraus, es läuft über. Danach ist das Gefäß leichter, als es sein müsste. Dieser Unterschied ist das übergelaufene Wasser. Es hat das Volumen des Körpers.

### Herleitung (selbst durchgerechnet)

Ohne Überlauf wöge das Pyknometer $m_1 + m_K$. Gemessen wird $m_2$. Der Unterschied ist die Masse $m_W$ des übergelaufenen Wassers:

$$
m_W = m_1 + m_K - m_2 .
$$

Es hat das Volumen $V$ des Körpers, also $m_W = \rho_W \cdot V$ und

$$
V = \frac{m_1 + m_K - m_2}{\rho_W} .
$$

Eingesetzt in $\rho_K = m_K / V$ ergibt sich die Formel aus der Definition.

### Beispiel

Das Pyknometer mit Wasser wiegt $m_1 = 50{,}0\,\mathrm{g}$. Der Körper wiegt $m_K = 21{,}6\,\mathrm{g}$. Mit Wasser und Körper zeigt die Waage $m_2 = 63{,}6\,\mathrm{g}$. Das übergelaufene Wasser wiegt

$$
m_W = 50{,}0\,\mathrm{g} + 21{,}6\,\mathrm{g} - 63{,}6\,\mathrm{g} = 8{,}0\,\mathrm{g} ,
$$

und die Dichte ist

$$
\rho_K = \frac{21{,}6\,\mathrm{g}}{8{,}0\,\mathrm{g}} \cdot 1{,}00\,\mathrm{g/cm^3} = 2{,}70\,\mathrm{g/cm^3} .
$$

Das ist dasselbe Ergebnis wie bei der Auftriebsmethode. Die Zahlen sind frei gewählt und keine Messwerte.

> [!CAUTION] Stolperstelle
> Das Pyknometer muss vor dem Wiegen außen trocken sein, sonst zählt anhaftendes Wasser mit. Auch hier verfälschen Luftblasen im Gefäß das Ergebnis.

## Flüssigkeiten messen

> [!NOTE] Definition
> Kennt man das Volumen $V_K$ eines Körpers, kann man den Auftrieb umgekehrt nutzen und die Dichte einer **Flüssigkeit** messen. Aus $m_K - m_K^* = \rho_\mathrm{Fl} \cdot V_K$ folgt
>
> $$ \rho_\mathrm{Fl} = \frac{m_K - m_K^*}{V_K} . $$

> [!TIP] In einfachen Worten
> Es ist dieselbe Rechnung mit vertauschten Rollen. Jetzt ist der Körper bekannt und die Flüssigkeit gesucht. Auf diesem Prinzip beruht die Mohr-Westphalsche Waage.

## Warum die Dichte von Wasser zählt

Alle Formeln brauchen $\rho_W$. Wasser hat bei $20\,^\circ\mathrm{C}$ eine Dichte von etwa $0{,}998\,\mathrm{g/cm^3}$. Mit der Temperatur ändert sie sich leicht. Für grobe Rechnungen setzt man $1{,}00\,\mathrm{g/cm^3}$, für genaue Ergebnisse nimmt man den Tabellenwert zur Wassertemperatur.

> [!CAUTION] Stolperstelle
> Die Auftriebsformel gilt, wenn man den Auftrieb in Luft vernachlässigt. Luft hat nur etwa $0{,}0012\,\mathrm{g/cm^3}$. Das ist rund tausendmal weniger als Wasser und bei einer normalen Waage nicht zu bemerken.

## Alle Methoden an einem Zahlenbeispiel

Hier rechnen wir alle Methoden mit demselben Körper durch. So sieht man, dass sie dasselbe Ergebnis liefern. Alle Zahlen sind frei gewählt und keine Messwerte. Als Körper nehmen wir einen Aluminiumzylinder mit dem Durchmesser $d = 2{,}000\,\mathrm{cm}$ und der Höhe $h = 4{,}00\,\mathrm{cm}$. Für Wasser setzen wir $\rho_W = 0{,}9982\,\mathrm{g/cm^3}$ ein, den Wert bei $20\,^\circ\mathrm{C}$.

### Volumen aus den Maßen

$$
V = \frac{\pi \cdot d^2}{4} \cdot h = \frac{\pi \cdot (2{,}000\,\mathrm{cm})^2}{4} \cdot 4{,}00\,\mathrm{cm} = 12{,}57\,\mathrm{cm^3}
$$

An der Waage lesen wir die Masse $m_K = 33{,}9\,\mathrm{g}$ ab. Damit ist

$$
\rho_K = \frac{m_K}{V} = \frac{33{,}9\,\mathrm{g}}{12{,}57\,\mathrm{cm^3}} = 2{,}70\,\mathrm{g/cm^3}
$$

Das ist unsere Vergleichsgröße für die beiden folgenden Methoden.

### Auftriebsmethode

Unter Wasser zeigt die Waage die scheinbare Masse $m_K^* = 21{,}4\,\mathrm{g}$. Der Unterschied zur Wägung in Luft ist

$$
m_K - m_K^* = 33{,}9\,\mathrm{g} - 21{,}4\,\mathrm{g} = 12{,}5\,\mathrm{g} .
$$

So viel wiegt das verdrängte Wasser. Daraus folgt das Volumen und die Dichte:

$$
V = \frac{12{,}5\,\mathrm{g}}{0{,}9982\,\mathrm{g/cm^3}} = 12{,}52\,\mathrm{cm^3}
\qquad\text{und}\qquad
\rho_K = \frac{33{,}9\,\mathrm{g}}{12{,}5\,\mathrm{g}} \cdot 0{,}9982\,\mathrm{g/cm^3} = 2{,}71\,\mathrm{g/cm^3} .
$$

### Pyknometer

Das Pyknometer mit Wasser wiegt $m_1 = 52{,}3\,\mathrm{g}$. Mit Wasser und eingelegtem Körper zeigt die Waage $m_2 = 73{,}7\,\mathrm{g}$. Die Masse des übergelaufenen Wassers ist

$$
m_W = m_1 + m_K - m_2 = 52{,}3\,\mathrm{g} + 33{,}9\,\mathrm{g} - 73{,}7\,\mathrm{g} = 12{,}5\,\mathrm{g} .
$$

Das ist derselbe Wert wie beim Auftrieb, denn beide Methoden messen das verdrängte Wasser. Also ergeben sich auch dasselbe Volumen und dieselbe Dichte:

$$
\rho_K = \frac{33{,}9\,\mathrm{g}}{12{,}5\,\mathrm{g}} \cdot 0{,}9982\,\mathrm{g/cm^3} = 2{,}71\,\mathrm{g/cm^3} .
$$

### Dichte einer Flüssigkeit

Jetzt tauchen wir denselben Zylinder in Ethanol. Sein Volumen kennen wir aus den Maßen: $V_K = 12{,}57\,\mathrm{cm^3}$. Die scheinbare Masse unter Ethanol ist $m_K^* = 24{,}0\,\mathrm{g}$. Dann gilt

$$
\rho_\mathrm{Fl} = \frac{m_K - m_K^*}{V_K} = \frac{33{,}9\,\mathrm{g} - 24{,}0\,\mathrm{g}}{12{,}57\,\mathrm{cm^3}} = 0{,}79\,\mathrm{g/cm^3} .
$$

Das passt zum bekannten Wert für Ethanol von etwa $0{,}79\,\mathrm{g/cm^3}$.

### Vergleich

| Methode | Volumen | Dichte des Körpers |
|---|---|---|
| Aus den Maßen | $12{,}57\,\mathrm{cm^3}$ | $2{,}70\,\mathrm{g/cm^3}$ |
| Auftrieb | $12{,}52\,\mathrm{cm^3}$ | $2{,}71\,\mathrm{g/cm^3}$ |
| Pyknometer | $12{,}52\,\mathrm{cm^3}$ | $2{,}71\,\mathrm{g/cm^3}$ |

Alle drei Werte liegen sehr nah beieinander und passen zu Aluminium mit etwa $2{,}70\,\mathrm{g/cm^3}$. Die kleinen Unterschiede kommen von der begrenzten Ablesegenauigkeit der Waage, die hier mit $0{,}1\,\mathrm{g}$ angenommen ist. Bei Auftrieb und Pyknometer steckt sie in einer Differenz von Wägungen, deshalb wirkt sie sich dort etwas stärker aus.

## Ausprobieren

Wähle einen Stoff und eine Masse. Das Widget rechnet das Volumen des Körpers, die scheinbare Masse unter Wasser und die Dichte nach der Auftriebsformel zurück. Die Dichten der Stoffe sind gerundete Richtwerte, die Massen sind frei gewählt. Es sind keine Messwerte.

{{< dichte >}}

Beobachte: Je größer die Dichte des Stoffes, desto weniger Masse geht unter Wasser „verloren“. Bei Blei fehlt unter Wasser nur etwa ein Zehntel der Masse (rund 9 %), bei Aluminium über ein Drittel (rund 37 %).

## Quellen

- Demtröder, W.: *Experimentalphysik 1, Mechanik und Wärme*. Springer. Kapitel zu Hydrostatik und Auftrieb (Archimedisches Prinzip).
- Herleitungen: selbst durchgerechnet.
