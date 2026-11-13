---
title: "Torsionsmodul (M7)"
description: "Wie sich ein Stab beim Verdrehen verhält und wie man daraus den Schubmodul bestimmt, mit der statischen und der dynamischen Methode."
weight: 1
---

*In einem Satz: Ein Stab wehrt sich gegen das Verdrehen wie eine Feder gegen das Dehnen, und aus dieser Steifigkeit lässt sich der Schubmodul des Materials bestimmen.*

## Schub und Schubmodul

> [!NOTE] Definition
> Eine **Schubspannung** $\tau$ ist eine Kraft pro Fläche, die parallel zur Fläche wirkt. Sie schiebt Schichten des Körpers gegeneinander um den **Schiebewinkel** $\gamma$ (im Bogenmaß, ohne Einheit). Bei kleinen Verformungen gilt das Hookesche Gesetz für Schub:
>
> $$ \tau = G \cdot \gamma . $$
>
> Der Faktor $G$ heißt **Schubmodul** oder Torsionsmodul. Einheit: $\mathrm{Pa} = \mathrm{N/m^2}$.

> [!TIP] In einfachen Worten
> Stell dir einen Stapel Spielkarten vor, den du seitlich verschiebst. Die Karten rutschen gegeneinander. Wie stark du schieben musst, hängt vom Material ab. $G$ sagt, wie schwer sich ein Material auf diese Weise verformen lässt. Ein großes $G$ heißt: steif.

## Der Stab als Drehfeder

> [!NOTE] Definition
> Ein runder Stab mit der Länge $l$ und dem Durchmesser $d$ wird um den Winkel $\varphi$ verdreht (im Bogenmaß, Einheit $\mathrm{rad}$). Dafür braucht man das Drehmoment $M$ (Einheit $\mathrm{N\,m}$) mit
>
> $$ M = D \cdot \varphi \qquad\text{und}\qquad D = \frac{\pi \cdot G \cdot d^4}{32 \cdot l} . $$
>
> $D$ heißt **Richtgröße** oder Direktionsmoment des Stabes. Einheit: $\mathrm{N\,m/rad}$, kurz $\mathrm{N\,m}$.

> [!TIP] In einfachen Worten
> Das ist dieselbe Idee wie bei einer Schraubenfeder: Dort gilt $F = k \cdot x$, hier gilt $M = D \cdot \varphi$. Die Richtgröße $D$ ist die Steifigkeit des Stabes beim Verdrehen. Ein dickerer Stab ist viel steifer, denn der Durchmesser geht mit der vierten Potenz ein. Ein längerer Stab ist weicher.

### Herleitung (selbst durchgerechnet)

Wir verdrehen einen Stab mit dem Radius $R = d/2$. Ein Punkt im Abstand $r$ von der Achse wandert dabei um die Strecke $r \cdot \varphi$ zur Seite, über die Länge $l$ des Stabes. Der Schiebewinkel dort ist

$$
\gamma(r) = \frac{r \cdot \varphi}{l} .
$$

Mit dem Hookeschen Gesetz folgt die Schubspannung $\tau(r) = G \cdot r \cdot \varphi / l$. Ein dünner Ring mit dem Radius $r$ und der Dicke $\mathrm{d}r$ hat die Fläche $2\pi r \cdot \mathrm{d}r$. Die Kraft auf den Ring ist $\tau \cdot 2\pi r \cdot \mathrm{d}r$, ihr Hebelarm ist $r$. Das Drehmoment des Rings ist also

$$
\mathrm{d}M = r \cdot \tau(r) \cdot 2\pi r \cdot \mathrm{d}r = \frac{2\pi \cdot G \cdot \varphi}{l} \cdot r^3 \, \mathrm{d}r .
$$

Alle Ringe von der Achse bis zum Rand addieren sich zum gesamten Drehmoment:

$$
M = \frac{2\pi \cdot G \cdot \varphi}{l} \int_0^{d/2} r^3 \, \mathrm{d}r
= \frac{2\pi \cdot G \cdot \varphi}{l} \cdot \frac{(d/2)^4}{4}
= \frac{\pi \cdot G \cdot d^4}{32 \cdot l} \cdot \varphi .
$$

Der Faktor vor $\varphi$ ist die Richtgröße $D$.

## Statische Methode

> [!NOTE] Definition
> Am Rand einer Kreisscheibe mit dem Radius $R_S$ hängen Gewichte mit der Gesamtmasse $m_\mathrm{ges}$. Sie erzeugen am Stab das Drehmoment
>
> $$ M = m_\mathrm{ges} \cdot g \cdot R_S , $$
>
> mit der Fallbeschleunigung $g = 9{,}81\,\mathrm{m/s^2}$. Man verdreht die Scheibe mit verschiedenen Massen und trägt $M$ über dem Winkel $\varphi$ auf. Es ergibt sich eine Gerade, ihre Steigung $S$ ist die Richtgröße: $S = D$. Daraus folgt der Schubmodul
>
> $$ G = \frac{32 \cdot S \cdot l}{\pi \cdot d^4} . $$

> [!TIP] In einfachen Worten
> Du hängst nacheinander mehr Gewicht an und liest ab, wie weit sich die Scheibe dreht. Mehr Gewicht heißt mehr Drehmoment und mehr Winkel. Wie steil die Gerade ist, sagt, wie steif der Stab ist. Aus der Steifigkeit und den Maßen des Stabes rechnest du den Schubmodul aus.

### Beispiel

Die Werte sind **Beispielwerte, keine Messwerte**. Ein Stab hat den Schubmodul $G = 80\,\mathrm{GPa}$, die Länge $l = 1{,}0\,\mathrm{m}$ und den Durchmesser $d = 4{,}0\,\mathrm{mm}$. Dann ist die Richtgröße

$$
D = \frac{\pi \cdot 80 \cdot 10^{9}\,\mathrm{Pa} \cdot (4{,}0 \cdot 10^{-3}\,\mathrm{m})^4}{32 \cdot 1{,}0\,\mathrm{m}} \approx 2{,}01\,\mathrm{N\,m} .
$$

An einer Scheibe mit $R_S = 0{,}10\,\mathrm{m}$ hängt eine Masse von $0{,}50\,\mathrm{kg}$. Das Drehmoment ist

$$
M = 0{,}50\,\mathrm{kg} \cdot 9{,}81\,\mathrm{m/s^2} \cdot 0{,}10\,\mathrm{m} \approx 0{,}49\,\mathrm{N\,m} .
$$

Der Winkel ist

$$
\varphi = \frac{M}{D} = \frac{0{,}49\,\mathrm{N\,m}}{2{,}01\,\mathrm{N\,m}} \approx 0{,}24\,\mathrm{rad} \approx 14^\circ .
$$

Rückwärts gerechnet ergibt die Steigung $S = D$ wieder $G = 80\,\mathrm{GPa}$.

> [!CAUTION] Stolperstelle
> Der Durchmesser geht in der vierten Potenz in $G$ ein. Ein Fehler von $1\,\%$ bei $d$ ergibt etwa $4\,\%$ Fehler bei $G$. Außerdem steht in der Formel der **Durchmesser** $d$ und nicht der Radius. Mit dem Radius $r$ gilt $D = \pi \cdot G \cdot r^4 / (2 \cdot l)$. Wer beides vermischt, liegt um den Faktor $16$ daneben. Die Formeln gelten nur für kleine Winkel, solange das Hookesche Gesetz gilt.

## Dynamische Methode

> [!NOTE] Definition
> Eine Scheibe am Stab schwingt wie ein Pendel hin und her. Ihre Schwingungsdauer ist
>
> $$ T = 2\pi \sqrt{\frac{J}{D}} , $$
>
> mit dem Trägheitsmoment $J$ der Scheibe (Einheit $\mathrm{kg\,m^2}$) und der Richtgröße $D$ des Stabes. Weil $J$ unbekannt ist, misst man ein zweites Mal mit einem Hohlzylinder auf der Scheibe. Der Hohlzylinder hat die Masse $m_Z$, den Außendurchmesser $d_a$ und den Innendurchmesser $d_i$. Sein Trägheitsmoment um die Achse ist bekannt:
>
> $$ J^* = \frac{m_Z}{8} \cdot \left( d_a^2 + d_i^2 \right) . $$
>
> Mit der Schwingungsdauer $T_1$ ohne und $T_2$ mit Hohlzylinder gilt
>
> $$ D = \frac{4\pi^2 \cdot J^*}{T_2^2 - T_1^2} \qquad\text{und damit}\qquad G = 16 \cdot \pi \cdot \frac{m_Z \cdot l}{d^4} \cdot \frac{d_a^2 + d_i^2}{T_2^2 - T_1^2} . $$

> [!TIP] In einfachen Worten
> Je steifer der Stab, desto schneller schwingt die Scheibe. Je schwerer die Scheibe, desto langsamer. Das Trägheitsmoment der Scheibe kennst du nicht. Deshalb schwingst du zweimal: einmal so, einmal mit einem zusätzlichen Körper, dessen Trägheitsmoment du ausrechnen kannst. Der Unterschied der beiden Schwingungsdauern verrät dir die Steifigkeit, und das unbekannte Trägheitsmoment fällt dabei heraus.

### Herleitung (selbst durchgerechnet)

Die Scheibe hat das unbekannte Trägheitsmoment $J$. Ohne Hohlzylinder gilt $T_1^2 = 4\pi^2 \cdot J / D$. Mit Hohlzylinder kommt $J^*$ dazu, also $T_2^2 = 4\pi^2 \cdot (J + J^*) / D$. Zieht man beide Gleichungen voneinander ab, fällt $J$ weg:

$$
T_2^2 - T_1^2 = \frac{4\pi^2 \cdot J^*}{D}
\qquad\Longrightarrow\qquad
D = \frac{4\pi^2 \cdot J^*}{T_2^2 - T_1^2} .
$$

Das Trägheitsmoment des Hohlzylinders mit den Radien $R_a = d_a/2$ und $R_i = d_i/2$ folgt aus der Summe über dünne Ringe. Die Dichte ist $\rho = m_Z / \left( \pi h \, (R_a^2 - R_i^2) \right)$, mit der Höhe $h$:

$$
J^* = \int_{R_i}^{R_a} r^2 \cdot \rho \cdot 2\pi r h \, \mathrm{d}r
= \frac{\pi \rho h}{2} \left( R_a^4 - R_i^4 \right)
= \frac{m_Z}{2} \left( R_a^2 + R_i^2 \right)
= \frac{m_Z}{8} \left( d_a^2 + d_i^2 \right) .
$$

Setzt man $D$ in $G = 32 \cdot D \cdot l / (\pi d^4)$ ein, ergibt sich die Formel oben:

$$
G = \frac{32 \cdot l}{\pi \cdot d^4} \cdot \frac{4\pi^2}{T_2^2 - T_1^2} \cdot \frac{m_Z}{8} \left( d_a^2 + d_i^2 \right)
= 16 \cdot \pi \cdot \frac{m_Z \cdot l}{d^4} \cdot \frac{d_a^2 + d_i^2}{T_2^2 - T_1^2} .
$$

> [!CAUTION] Stolperstelle
> $T_2$ gehört zur Messung **mit** Hohlzylinder und ist größer als $T_1$. Dann ist $T_2^2 - T_1^2$ positiv. In der Formel stehen die **Quadrate** der Schwingungsdauern, nicht die Schwingungsdauern selbst. Auch hier geht der Durchmesser $d$ des Stabes mit der vierten Potenz ein.

## Ausprobieren

Mit den Reglern änderst du Material, Stab und Scheibe. Das Widget rechnet die Richtgröße $D = \pi \cdot G \cdot r^4 / (2 \cdot l)$ mit dem Stabradius $r$, das Trägheitsmoment der vollen Scheibe $J = \tfrac{1}{2} \cdot m \cdot R^2$ mit der Masse $m$ und dem Radius $R$ der Scheibe, und daraus $T = 2\pi \sqrt{J/D}$. Die Schubmoduln sind gerundete Richtwerte, die Abmessungen sind frei gewählt. Es sind keine Messwerte.

{{< torsion >}}

Beobachte, was passiert, wenn du den Stabradius verdoppelst. Die Richtgröße wächst auf das Sechzehnfache, die Schwingungsdauer sinkt auf ein Viertel.
