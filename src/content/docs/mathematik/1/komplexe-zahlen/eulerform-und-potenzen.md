---
title: "Komplexe Zahlen: Eulerform und Potenzen"
description: "Die Eulerform z = r e^{iφ}, der Satz von de Moivre und wie man hohe Potenzen komplexer Zahlen berechnet."
sidebar:
  order: 3
  label: "Eulerform, Potenzen"
---

*In einem Satz: Mit der Eulerform schreibt man eine komplexe Zahl als Länge und Drehwinkel in einem Ausdruck, und dadurch werden Multiplikation und hohe Potenzen einfach.*

## Die Eulerform

:::note[Definition]
Für jeden Winkel $\varphi$ (im Bogenmaß) gilt die **Eulersche Formel**

$$
e^{i\varphi} = \cos\varphi + i\,\sin\varphi .
$$

Damit lässt sich die Polarform $z = r\,(\cos\varphi + i\,\sin\varphi)$ kürzer schreiben als **Eulerform**

$$
z = r\,e^{i\varphi} \qquad\text{mit } r = |z| \text{ und } \varphi = \arg(z) .
$$

Ein bekannter Spezialfall ist $e^{i\pi} = \cos\pi + i\,\sin\pi = -1$, also $e^{i\pi} + 1 = 0$.
:::

:::tip[In einfachen Worten]
$e^{i\varphi}$ ist der Punkt auf dem Einheitskreis, der um den Winkel $\varphi$ gegen den Uhrzeigersinn gedreht ist. Die Zahl $r\,e^{i\varphi}$ ist dieser Punkt, auf die Länge $r$ gestreckt. Man gibt also "wie weit" und "in welche Richtung" in einem Ausdruck an. Wichtig: Der Winkel steht im **Bogenmaß**, und $e^{i\varphi}$ wiederholt sich nach einer vollen Drehung, also $e^{i\varphi} = e^{i(\varphi + 2\pi)}$.
:::

Mit der Eulerform rechnen sich Produkte und Quotienten einfach. Für $z_1 = r_1 e^{i\varphi_1}$ und $z_2 = r_2 e^{i\varphi_2}$ gilt

$$
z_1 \cdot z_2 = r_1 r_2\,e^{i(\varphi_1 + \varphi_2)}, \qquad
\frac{z_1}{z_2} = \frac{r_1}{r_2}\,e^{i(\varphi_1 - \varphi_2)}, \qquad
\overline{z_1} = r_1\,e^{-i\varphi_1} .
$$

Beim Multiplizieren **multiplizierst du die Längen und addierst die Winkel**. Das folgt aus dem Potenzgesetz $e^{a} e^{b} = e^{a+b}$.

## Der Satz von de Moivre

:::note[Definition]
Für jedes $n \in \mathbb{N}$ gilt

$$
\bigl(r\,e^{i\varphi}\bigr)^n = r^n\,e^{i\,n\varphi}
\qquad\text{das heißt}\qquad
\bigl(\cos\varphi + i\,\sin\varphi\bigr)^n = \cos(n\varphi) + i\,\sin(n\varphi) .
$$
:::

:::tip[In einfachen Worten]
Beim Potenzieren wird die Länge **hoch $n$** genommen und der Winkel **mal $n$**. Das ist die $n$-fache Anwendung der Multiplikationsregel: Jede Multiplikation dreht um den Winkel weiter und streckt um $r$.
:::

### So gehst du vor: hohe Potenzen

1. **Betrag** berechnen: $r = \sqrt{a^2 + b^2}$.
2. **Winkel** bestimmen: $\tan\varphi = b/a$. **Quadrant prüfen**, denn der Taschenrechner liefert für $a < 0$ den falschen Wert (siehe [Betrag und Polarform](/mathematik/1/komplexe-zahlen/komplexe-zahlen-polarform/)).
3. In **Eulerform** schreiben: $z = r\,e^{i\varphi}$.
4. **de Moivre** anwenden: $z^n = r^n\,e^{i\,n\varphi}$.
5. Den Winkel $n\varphi$ **um volle Umdrehungen $2\pi$ reduzieren**.
6. **Zurück** in die Form $a + bi$: $r^n(\cos n\varphi + i\,\sin n\varphi)$ ausrechnen.
7. **Probe:** Der Betrag des Ergebnisses muss $r^n$ sein.

### Beispiel: Die 13. Potenz von Wurzel 3 plus i

*Zu zeigen:* Am Ende muss ein Ausdruck der Form $a + bi$ dastehen.

**1. Betrag:** $r = \sqrt{(\sqrt{3})^2 + 1^2} = \sqrt{4} = 2$.

**2. Winkel:** Es ist $a = \sqrt{3} > 0$ und $b = 1 > 0$, die Zahl liegt im ersten Quadranten. Also gilt $\tan\varphi = \dfrac{1}{\sqrt{3}}$ und damit $\varphi = \dfrac{\pi}{6}$ ($30^\circ$).

**3. Eulerform:** $z = 2\,e^{i\pi/6}$.

**4. de Moivre:**

$$
z^{13} = 2^{13}\,e^{i\,13\pi/6} = 8192\,e^{i\,13\pi/6} .
$$

**5. Winkel reduzieren:** $\dfrac{13\pi}{6} = 2\pi + \dfrac{\pi}{6}$, und $e^{i\,2\pi} = 1$. Also

$$
z^{13} = 8192\,e^{i\pi/6} .
$$

**6. Zurück in $a + bi$:** Mit $\cos\dfrac{\pi}{6} = \dfrac{\sqrt{3}}{2}$ und $\sin\dfrac{\pi}{6} = \dfrac{1}{2}$ folgt

$$
z^{13} = 8192\left(\frac{\sqrt{3}}{2} + i\,\frac{1}{2}\right) = 4096\sqrt{3} + 4096\,i .
$$

**7. Probe:** $|z^{13}| = 4096\sqrt{3 + 1} = 8192 = 2^{13}$. Das stimmt mit Schritt 4 überein.

:::caution[Stolperstelle]
Man darf **nicht gliedweise** potenzieren: $(\sqrt{3} + i)^{13}$ ist nicht $(\sqrt{3})^{13} + i^{13}$. Und den Winkel $13\pi/6$ solltest du auf $\pi/6$ reduzieren, bevor du Sinus und Kosinus ausrechnest, sonst rechnest du mit unhandlichen Winkeln. Das Ergebnis bleibt dasselbe, weil $\cos$ und $\sin$ sich nach $2\pi$ wiederholen.
:::

## Real- und Imaginärteil, Betrag und Konjugierte aus jeder Form

Je nach Darstellung liest man die Größen so ab:

| Form | $\operatorname{Re}(z)$ | $\operatorname{Im}(z)$ | $\lvert z \rvert$ | $\bar z$ |
|---|---|---|---|---|
| $a + bi$ | $a$ | $b$ | $\sqrt{a^2 + b^2}$ | $a - bi$ |
| $r(\cos\varphi + i\sin\varphi)$ | $r\cos\varphi$ | $r\sin\varphi$ | $r$ | $r(\cos\varphi - i\sin\varphi)$ |
| $r\,e^{i\varphi}$ | $r\cos\varphi$ | $r\sin\varphi$ | $r$ | $r\,e^{-i\varphi}$ |

### So gehst du vor: Größen bestimmen

1. Bringe $z$ in die Form $a + bi$. Bei einem Bruch **erweiterst du mit dem Konjugierten des Nenners**, damit der Nenner reell wird.
2. Lies $a$ und $b$ ab.
3. Berechne Betrag und Konjugierte mit der Tabelle.
4. **Probe** für den Betrag: $|z_1 / z_2| = |z_1| / |z_2|$.

### Beispiel: Ein Bruch mit komplexem Nenner

*Zu zeigen:* $\operatorname{Re}(z)$, $\operatorname{Im}(z)$, $|z|$ und $\bar z$.

**1. Form $a + bi$:** Wir erweitern mit $1 + i$, dem Konjugierten des Nenners. Der Nenner wird $(1 - i)(1 + i) = 1 + 1 = 2$:

$$
z = \frac{(2 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{2 + 2i + i + i^2}{2} = \frac{1 + 3i}{2} = \frac{1}{2} + \frac{3}{2}\,i .
$$

**2. Ablesen:** $\operatorname{Re}(z) = \dfrac{1}{2}$ und $\operatorname{Im}(z) = \dfrac{3}{2}$.

**3. Betrag und Konjugierte:**

$$
|z| = \sqrt{\frac{1}{4} + \frac{9}{4}} = \sqrt{\frac{10}{4}} = \frac{\sqrt{10}}{2}, \qquad
\bar z = \frac{1}{2} - \frac{3}{2}\,i .
$$

**4. Probe:** $|z| = \dfrac{|2 + i|}{|1 - i|} = \dfrac{\sqrt{5}}{\sqrt{2}} = \dfrac{\sqrt{10}}{2}$. Das stimmt.
