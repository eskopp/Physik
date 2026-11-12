---
title: "Komplexe Zahlen: Betrag und Polarform"
description: "Die Zahlenebene, Betrag und Winkel einer komplexen Zahl und die Umrechnung in die Polarform."
sidebar:
  order: 10
  label: "Betrag und Polarform"
---

*In einem Satz: Eine komplexe Zahl ist ein Punkt in der Ebene, und man kann ihn entweder mit zwei Koordinaten oder mit Abstand und Winkel angeben.*

## Die Zahlenebene und der Betrag

:::note[Definition]
In der **komplexen Zahlenebene** wird $z = a + b\,i$ als Punkt $(a, b)$ gezeichnet. Die waagerechte Achse ist die **reelle Achse** und die senkrechte Achse die **imaginäre Achse**.

Der **Betrag** von $z$ ist der Abstand des Punkts vom Ursprung. Nach dem Satz des Pythagoras gilt

$$
|z| = \sqrt{a^2 + b^2} .
$$
:::

:::tip[In einfachen Worten]
Der Betrag sagt, wie weit die Zahl vom Nullpunkt entfernt ist, ganz gleich in welcher Richtung. Er ist wie die Länge eines Pfeils vom Ursprung zum Punkt.
:::

**Beispiel:** Für $z = 3 + 4i$ ist $|z| = \sqrt{9 + 16} = 5$.

## Der Winkel

:::note[Definition]
Das **Argument** $\varphi$ einer komplexen Zahl $z \neq 0$ ist der Winkel zwischen der positiven reellen Achse und dem Pfeil zu $z$, gegen den Uhrzeigersinn gemessen. Man wählt meist den Wert im Bereich $-\pi < \varphi \leq \pi$, in Grad also $-180^\circ < \varphi \leq 180^\circ$.
:::

:::tip[In einfachen Worten]
Der Winkel sagt, in welche Richtung der Pfeil zeigt. $0^\circ$ ist nach rechts, $90^\circ$ nach oben, $180^\circ$ nach links.
:::

Für $a > 0$ ergibt sich der Winkel aus $\tan\varphi = b/a$, also $\varphi = \arctan(b/a)$. Für $z = 3 + 4i$ ist das $\varphi = \arctan(4/3) \approx 53{,}13^\circ$.

:::caution[Stolperstelle]
Der Taschenrechner liefert für $\arctan$ nur Werte zwischen $-90^\circ$ und $90^\circ$. Liegt die Zahl links der imaginären Achse ($a < 0$), stimmt das Ergebnis nicht. Für $z = -1 + i$ gibt $\arctan(1/(-1)) = -45^\circ$, der Pfeil zeigt aber nach links oben, also ist $\varphi = 135^\circ$. Für $z = -1 - i$ gibt $\arctan(1/1)$ den Wert $45^\circ$, richtig ist $\varphi = -135^\circ$. Zeichne dir den Punkt immer kurz auf und bestimme den **Quadranten**.
:::

| Zahl | Quadrant | $\arctan(b/a)$ | richtiger Winkel $\varphi$ |
|---|---|---|---|
| $1 + i$ | I | $45^\circ$ | $45^\circ$ |
| $-1 + i$ | II | $-45^\circ$ | $135^\circ$ |
| $-1 - i$ | III | $45^\circ$ | $-135^\circ$ |
| $1 - i$ | IV | $-45^\circ$ | $-45^\circ$ |

Im zweiten Quadranten rechnet man $\varphi = \arctan(b/a) + 180^\circ$, im dritten $\varphi = \arctan(b/a) - 180^\circ$.

## Die Polarform

:::note[Definition]
Mit Betrag $r = |z|$ und Winkel $\varphi$ gilt die **Polarform** (auch trigonometrische Darstellung)

$$
z = r\,(\cos\varphi + i\,\sin\varphi) .
$$

Zwischen den Darstellungen gilt:

$$
a = r\cos\varphi, \qquad b = r\sin\varphi, \qquad r = \sqrt{a^2 + b^2} .
$$
:::

:::tip[In einfachen Worten]
Die Form $a + b\,i$ sagt: so weit nach rechts, so weit nach oben. Die Polarform sagt: so weit weg vom Ursprung, in diese Richtung. Beides beschreibt denselben Punkt.
:::

### Beispiele

**Von $a + b\,i$ nach Polarform:** Für $z = 1 + i$ ist $r = \sqrt{2}$ und $\varphi = 45^\circ$, also

$$
1 + i = \sqrt{2}\,\bigl(\cos 45^\circ + i\,\sin 45^\circ\bigr) .
$$

**Von der Polarform nach $a + b\,i$:** Für $r = 2$ und $\varphi = 60^\circ$ gilt

$$
z = 2\,\bigl(\cos 60^\circ + i\,\sin 60^\circ\bigr) = 2\left(\tfrac{1}{2} + i\,\tfrac{\sqrt{3}}{2}\right) = 1 + \sqrt{3}\,i \approx 1 + 1{,}73\,i .
$$
