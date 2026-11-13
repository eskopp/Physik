---
title: "Komplexe Zahlen: Wurzeln und Gleichungen"
description: "n-te Wurzeln, quadratische, kubische und Bruchgleichungen über den komplexen Zahlen, mit Rezept und Probe."
weight: 4
linkTitle: "Wurzeln, Gleichungen"
---

*In einem Satz: Jede Gleichung der Form $z^n = w$ hat in den komplexen Zahlen genau $n$ Lösungen, und sie liegen als regelmäßiges Vieleck auf einem Kreis.*

## n-te Wurzeln

> [!NOTE] Definition
> Sei $w = \rho\,e^{i\theta} \neq 0$ und $n \in \mathbb{N}$. Die Gleichung $z^n = w$ hat genau $n$ Lösungen:
>
> $$ z_k = \sqrt[n]{\rho}\;e^{\,i\,\frac{\theta + 2\pi k}{n}}, \qquad k = 0, 1, \dots, n - 1 . $$
>
> Herleitung: Mit $z = r\,e^{i\varphi}$ lautet die Gleichung $r^n e^{i\,n\varphi} = \rho\,e^{i\theta}$. Daraus folgt $r^n = \rho$ und $n\varphi = \theta + 2\pi k$ für eine ganze Zahl $k$, denn Winkel sind nur bis auf volle Umdrehungen festgelegt.

> [!TIP] In einfachen Worten
> Du suchst Zahlen, die $n$-mal mit sich selbst multipliziert $w$ ergeben. Eine Lösung findest du, indem du die **Länge** auf die $n$-te Wurzel setzt und den **Winkel durch $n$** teilst. Die übrigen Lösungen erhältst du, indem du immer um $360^\circ/n$ weiterdrehst. Sie liegen gleichmäßig verteilt auf einem Kreis, als Ecken eines regelmäßigen $n$-Ecks. Nach $n$ Schritten bist du wieder am Anfang, deshalb läuft $k$ nur bis $n - 1$.

### So gehst du vor: n-te Wurzeln

1. Schreibe $w$ in **Eulerform** $\rho\,e^{i\theta}$ (Betrag, Winkel, Quadrant beachten).
2. Setze in die Formel ein und rechne $\sqrt[n]{\rho}$ aus.
3. Rechne die Winkel $\dfrac{\theta + 2\pi k}{n}$ für $k = 0, \dots, n - 1$ aus.
4. Schreibe jede Lösung in der geforderten Form, meist $a + bi$.
5. **Probe:** Potenziere eine Lösung mit $n$, es muss $w$ herauskommen. Zähle, dass es genau $n$ Lösungen sind.

### Beispiel: Dritte Wurzel aus minus acht

*Zu zeigen:* Alle drei Lösungen von $z^3 = -8$ in der Form $a + bi$.

**1. Eulerform:** $w = -8 = 8\,e^{i\pi}$, also $\rho = 8$ und $\theta = \pi$.

**2. Länge:** $\sqrt[3]{8} = 2$.

**3. Winkel:** $\dfrac{\pi + 2\pi k}{3}$ für $k = 0, 1, 2$, das sind $\dfrac{\pi}{3},\ \pi,\ \dfrac{5\pi}{3}$.

**4. Lösungen:**

$$
\begin{aligned}
z_0 &= 2\,e^{i\pi/3} = 2\left(\tfrac{1}{2} + i\tfrac{\sqrt{3}}{2}\right) = 1 + \sqrt{3}\,i, \\
z_1 &= 2\,e^{i\pi} = -2, \\
z_2 &= 2\,e^{i\,5\pi/3} = 2\left(\tfrac{1}{2} - i\tfrac{\sqrt{3}}{2}\right) = 1 - \sqrt{3}\,i .
\end{aligned}
$$

**5. Probe:** $(-2)^3 = -8$. Die beiden anderen Lösungen haben ebenfalls den Betrag $2$ und den Winkel $\pm 60^\circ$ und ergeben beim Potenzieren mit $3$ den Winkel $\pm 180^\circ$, also $-8$.

> [!CAUTION] Stolperstelle
> Wer nur $z = -2$ nennt, hat zwei Lösungen vergessen. Über den komplexen Zahlen hat $z^n = w$ für **$w \neq 0$ genau $n$ verschiedene Lösungen**, nicht nur die reelle.
>
> Der Fall $w = 0$ ist die Ausnahme: Aus $z^n = 0$ folgt $|z|^n = 0$, also $z = 0$. Es gibt nur **eine** verschiedene Lösung. Man sagt, $z = 0$ ist eine $n$-fache Lösung (Vielfachheit $n$). Deshalb verlangt die Formel oben $w \neq 0$, denn für $w = 0$ hat die Zahl keinen Winkel $\theta$.

### Beispiel: Dritte Wurzel aus Wurzel drei minus i

*Zu zeigen:* Alle drei Lösungen von $z^3 - \sqrt{3} + i = 0$.

**0. Umstellen:** Wir bringen die Gleichung in die Form $z^3 = w$:

$$
z^3 - \sqrt{3} + i = 0 \;\Leftrightarrow\; z^3 = \sqrt{3} - i .
$$

**1. Eulerform von $w = \sqrt{3} - i$:** Betrag $\rho = \sqrt{3 + 1} = 2$. Die Zahl hat den Realteil $\sqrt{3} > 0$ und den Imaginärteil $-1 < 0$, sie liegt im vierten Quadranten. Mit $\tan\theta = \dfrac{-1}{\sqrt{3}}$ folgt $\theta = -\dfrac{\pi}{6}$ ($-30^\circ$). Also

$$
w = 2\,e^{-i\pi/6} .
$$

**2. Länge:** $\sqrt[3]{2} \approx 1{,}260$.

**3. Winkel:** $\dfrac{-\pi/6 + 2\pi k}{3}$ für $k = 0, 1, 2$:

$$
-\frac{\pi}{18}\ (-10^\circ), \qquad \frac{11\pi}{18}\ (110^\circ), \qquad \frac{23\pi}{18}\ (230^\circ) .
$$

**4. Lösungen:**

$$
z_k = \sqrt[3]{2}\;e^{\,i\,\varphi_k} \quad\text{mit}\quad \varphi_0 = -10^\circ,\ \varphi_1 = 110^\circ,\ \varphi_2 = 230^\circ .
$$

In der Form $a + bi$, mit $\cos\varphi$ und $\sin\varphi$ aus dem Taschenrechner:

$$
\begin{aligned}
z_0 &\approx 1{,}241 - 0{,}219\,i, \\
z_1 &\approx -0{,}431 + 1{,}184\,i, \\
z_2 &\approx -0{,}810 - 0{,}965\,i .
\end{aligned}
$$

Diese Winkel sind keine schönen Werte, deshalb gibt es hier keine einfache Form mit Wurzeln. Man lässt die Lösungen in Eulerform stehen oder gibt Näherungswerte an.

**5. Probe:** Es ist $|z_k|^3 = 2 = |w|$. Für $z_0$ ist $3 \cdot (-10^\circ) = -30^\circ$, also $z_0^3 = 2\,e^{-i\pi/6} = \sqrt{3} - i$. Für $z_1$ ist $3 \cdot 110^\circ = 330^\circ = -30^\circ + 360^\circ$, und für $z_2$ ist $3 \cdot 230^\circ = 690^\circ = -30^\circ + 720^\circ$. In allen drei Fällen kommt derselbe Winkel $-30^\circ$ heraus.

Die drei Lösungen liegen als Ecken eines gleichseitigen Dreiecks auf dem Kreis mit Radius $\sqrt[3]{2}$ um $0$, jeweils um $120^\circ$ gedreht.

## Gleichungen mit Verschiebung

Steht links ein Ausdruck wie $(z + 1)^n$, führt man eine **Substitution** ein: $u = z + 1$. Man löst $u^n = w$ und rechnet am Ende zurück mit $z = u - 1$.

### So gehst du vor: Substitution

1. Substituiere $u = z + c$.
2. Löse $u^n = w$ wie oben, es gibt $n$ Lösungen $u_k$.
3. Rechne **zurück**: $z_k = u_k - c$.
4. **Zeichne** die Lösungen: Die $u_k$ bilden ein regelmäßiges $n$-Eck um $0$, die $z_k$ dasselbe $n$-Eck, verschoben um $-c$.
5. Probe: Setze eine Lösung in die Ausgangsgleichung ein.

### Beispiel: Sechste Wurzel mit Verschiebung

*Zu zeigen:* Alle sechs Lösungen $z$ und ihre Lage in der Zahlenebene.

**1. Substitution:** $u = z + 1$ ergibt $u^6 = 1 = 1 \cdot e^{i\cdot 0}$.

**2. Lösen:** $\rho = 1$ und $\theta = 0$, also

$$
u_k = e^{\,i\,2\pi k/6} = e^{\,i\,\pi k/3}, \qquad k = 0, 1, \dots, 5 .
$$

**3. Zurückrechnen** mit $z_k = u_k - 1$:

| $k$ | $u_k$ | $z_k = u_k - 1$ |
|---|---|---|
| 0 | $1$ | $0$ |
| 1 | $\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\,i$ | $-\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\,i$ |
| 2 | $-\tfrac{1}{2} + \tfrac{\sqrt{3}}{2}\,i$ | $-\tfrac{3}{2} + \tfrac{\sqrt{3}}{2}\,i$ |
| 3 | $-1$ | $-2$ |
| 4 | $-\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\,i$ | $-\tfrac{3}{2} - \tfrac{\sqrt{3}}{2}\,i$ |
| 5 | $\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\,i$ | $-\tfrac{1}{2} - \tfrac{\sqrt{3}}{2}\,i$ |

**4. Zeichnung:** Die $u_k$ sind die Ecken eines regelmäßigen Sechsecks auf dem Einheitskreis. Das Subtrahieren von $1$ verschiebt alles um eins nach links. Die Lösungen $z_k$ liegen also auf dem Kreis mit Radius $1$ um den Mittelpunkt $-1$:

<svg viewBox="0 0 360 260" role="img" aria-label="Die sechs Lösungen von (z+1)^6=1 liegen als regelmäßiges Sechseck auf dem Kreis mit Radius 1 um den Punkt -1" style="max-width:26rem;width:100%;height:auto;color:var(--sl-color-text,#333)">
<line x1="20" y1="130" x2="345" y2="130" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
<line x1="250" y1="10" x2="250" y2="250" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
<text x="340" y="124" font-size="12" fill="currentColor">Re</text><text x="256" y="20" font-size="12" fill="currentColor">Im</text>
<circle cx="180" cy="130" r="70" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
<polygon points="250.0,130.0 215.0,69.4 145.0,69.4 110.0,130.0 145.0,190.6 215.0,190.6" fill="rgba(11,107,220,0.10)" stroke="#0b6bdc" stroke-width="1.5"/>
<line x1="110" y1="126" x2="110" y2="134" stroke="currentColor" stroke-width="1"/><text x="104" y="148" font-size="11" fill="currentColor">-2</text>
<line x1="180" y1="126" x2="180" y2="134" stroke="currentColor" stroke-width="1"/><text x="174" y="148" font-size="11" fill="currentColor">-1</text>
<line x1="320" y1="126" x2="320" y2="134" stroke="currentColor" stroke-width="1"/><text x="314" y="148" font-size="11" fill="currentColor">1</text>
<circle cx="180" cy="130" r="2.5" fill="currentColor"/>
<circle cx="250.0" cy="130.0" r="4.5" fill="#0b6bdc"/><text x="259.8" y="139.8" font-size="12" fill="currentColor">z0</text>
<circle cx="215.0" cy="69.4" r="4.5" fill="#0b6bdc"/><text x="211.5" y="83.4" font-size="12" fill="currentColor">z1</text>
<circle cx="145.0" cy="69.4" r="4.5" fill="#0b6bdc"/><text x="141.5" y="83.4" font-size="12" fill="currentColor">z2</text>
<circle cx="110.0" cy="130.0" r="4.5" fill="#0b6bdc"/><text x="86.2" y="130.0" font-size="12" fill="currentColor">z3</text>
<circle cx="145.0" cy="190.6" r="4.5" fill="#0b6bdc"/><text x="141.5" y="169.6" font-size="12" fill="currentColor">z4</text>
<circle cx="215.0" cy="190.6" r="4.5" fill="#0b6bdc"/><text x="215.0" y="169.6" font-size="12" fill="currentColor">z5</text>
</svg>

**5. Probe:** Für $z = -2$ ist $(-2 + 1)^6 = (-1)^6 = 1$. Für $z_1$ ist $|z_1 + 1| = |u_1| = 1$ und der Winkel $6 \cdot 60^\circ = 360^\circ$, also $1$.

## Quadratische Gleichungen

> [!NOTE] Definition
> Die Gleichung $a z^2 + b z + c = 0$ mit $a \neq 0$ hat die Lösungen
>
> $$ z_{1,2} = \frac{-b \pm w}{2a}, \qquad\text{wobei } w^2 = D := b^2 - 4ac . $$
>
> Die Zahl $w$ ist **eine** (komplexe) Wurzel aus der Diskriminante $D$.

> [!TIP] In einfachen Worten
> Es ist die bekannte Lösungsformel. Neu ist nur: $D$ darf negativ oder sogar komplex sein, denn eine Wurzel aus $D$ gibt es in $\mathbb{C}$ immer. Das $\pm$ deckt beide Wurzeln ab, du musst dich also nicht für ein Vorzeichen von $w$ entscheiden.

### Beispiel 1: Negative Diskriminante

*Zu zeigen:* Beide Lösungen von $z^2 + 2z + 5 = 0$.

$D = 2^2 - 4 \cdot 1 \cdot 5 = 4 - 20 = -16$. Eine Wurzel ist $w = 4i$, denn $(4i)^2 = -16$. Also

$$
z_{1,2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i .
$$

Probe für $z = -1 + 2i$: $(-1 + 2i)^2 + 2(-1 + 2i) + 5 = (1 - 4i - 4) + (-2 + 4i) + 5 = 0$.

### Beispiel 2: Eine typische Gleichung mit negativer Diskriminante

*Zu zeigen:* Beide Lösungen von $z^2 + 6z + 13 = 0$.

Hier ist $a = 1$, $b = 6$ und $c = 13$. Damit

$$
D = 6^2 - 4 \cdot 1 \cdot 13 = 36 - 52 = -16 .
$$

Eine Wurzel aus $-16$ ist $w = 4i$, denn $(4i)^2 = 16 \cdot i^2 = -16$. Also

$$
z_{1,2} = \frac{-6 \pm 4i}{2} = -3 \pm 2i .
$$

Probe für $z = -3 + 2i$: $(-3 + 2i)^2 + 6(-3 + 2i) + 13 = (9 - 12i - 4) + (-18 + 12i) + 13 = 0$. Die zweite Lösung $-3 - 2i$ ist das **Konjugierte** der ersten. Das ist kein Zufall: Bei reellen Koeffizienten treten nicht reelle Lösungen immer als konjugiertes Paar auf.

### Beispiel 3: Komplexe Koeffizienten

*Zu zeigen:* Beide Lösungen von $z^2 + (1 - i)\,z - i = 0$.

$D = (1 - i)^2 - 4 \cdot 1 \cdot (-i) = (1 - 2i - 1) + 4i = 2i$. Wir suchen $w$ mit $w^2 = 2i$. Es gilt $(1 + i)^2 = 1 + 2i - 1 = 2i$, also $w = 1 + i$. Damit

$$
z_{1,2} = \frac{-(1 - i) \pm (1 + i)}{2}, \qquad
z_1 = \frac{-1 + i + 1 + i}{2} = i, \qquad
z_2 = \frac{-1 + i - 1 - i}{2} = -1 .
$$

Probe für $z = i$: $i^2 + (1 - i)\,i - i = -1 + i + 1 - i = 0$. Probe für $z = -1$: $1 - (1 - i) - i = 0$.

> [!CAUTION] Stolperstelle
> Die Wurzel aus einer komplexen Zahl ist **nicht** einfach "$\sqrt{D}$" mit dem Taschenrechner. Du suchst eine Zahl $w$ mit $w^2 = D$, entweder durch Probieren (wie $1 + i$ für $2i$) oder systematisch mit der Eulerform aus dem Abschnitt oben.

## Kubische Gleichungen

Eine Gleichung dritten Grades hat über $\mathbb{C}$ genau drei Lösungen, mehrfache mitgezählt. Man löst sie, indem man den Ausdruck in **Faktoren** zerlegt. Ein Produkt ist null, wenn ein Faktor null ist.

### So gehst du vor: Faktorisieren

1. Suche eine Lösung durch Ausprobieren oder durch **Ausklammern in Gruppen**.
2. Zerlege den Ausdruck in Faktoren.
3. Setze jeden Faktor gleich null und löse die entstehenden Gleichungen.
4. **Probe** für jede Lösung.

### Beispiel: Gruppen ausklammern

*Zu zeigen:* Alle drei Lösungen.

Wir klammern in Gruppen aus:

$$
z^3 - 2z^2 + 4z - 8 = z^2\,(z - 2) + 4\,(z - 2) = (z - 2)\,(z^2 + 4) = 0 .
$$

Aus $z - 2 = 0$ folgt $z = 2$. Aus $z^2 + 4 = 0$ folgt $z^2 = -4$, also $z = \pm 2i$. Die Lösungen sind $2$, $2i$ und $-2i$.

Probe für $z = 2i$: $(2i)^3 - 2(2i)^2 + 4(2i) - 8 = -8i + 8 + 8i - 8 = 0$, mit $i^3 = -i$.

## Bruchgleichungen

### So gehst du vor: Bruchgleichung

1. **Nenner null ausschließen:** Notiere, welche $z$ nicht erlaubt sind.
2. **Mit dem Nenner multiplizieren**, damit der Bruch verschwindet.
3. Nach $z$ auflösen.
4. **Probe**, und prüfe, dass die Lösung nicht verboten ist.

### Beispiel: Bruch mit Nenner z minus i

*Zu zeigen:* Die Lösung $z$ der Gleichung

$$
\frac{z + 1}{z - i} = 2
$$

mit $z \neq i$.

**1. Verboten:** $z \neq i$, sonst ist der Nenner null.

**2. Multiplizieren** mit $z - i \neq 0$:

$$
\begin{aligned}
z + 1 &= 2\,(z - i) && \\
z + 1 &= 2z - 2i && | - z \\
1 + 2i &= z . &&
\end{aligned}
$$

**3. Probe:** $z = 1 + 2i$ ist ungleich $i$, und

$$
\frac{(1 + 2i) + 1}{(1 + 2i) - i} = \frac{2 + 2i}{1 + i} = \frac{2\,(1 + i)}{1 + i} = 2 .
$$

> [!CAUTION] Stolperstelle
> Das Multiplizieren mit dem Nenner geht nur, wenn er nicht null ist. Prüfe deshalb am Ende, dass deine Lösung nicht genau der verbotene Wert ist. Hätte sich hier $z = i$ ergeben, wäre das **keine** Lösung.
