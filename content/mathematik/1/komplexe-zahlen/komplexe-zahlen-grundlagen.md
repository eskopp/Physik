---
title: "Komplexe Zahlen: Grundlagen"
description: "Die imaginäre Einheit, die Form a + bi und das Rechnen mit komplexen Zahlen."
weight: 1
linkTitle: "Grundlagen"
aliases:
  - "/mathematik/1/komplexe-zahlen-grundlagen/"
---

*In einem Satz: Komplexe Zahlen erweitern die reellen Zahlen um eine Zahl $i$, deren Quadrat $-1$ ist, damit jede quadratische Gleichung eine Lösung hat.*

## Die imaginäre Einheit und die Form a + bi

> [!NOTE] Definition
> Die **imaginäre Einheit** $i$ ist die Zahl mit
>
> $$ i^2 = -1 . $$
>
> Eine **komplexe Zahl** hat die Form
>
> $$ z = a + b\,i \qquad\text{mit } a, b \in \mathbb{R} . $$
>
> Dabei heißt $a = \operatorname{Re}(z)$ der **Realteil** und $b = \operatorname{Im}(z)$ der **Imaginärteil**. Beide sind reelle Zahlen. Die Menge aller komplexen Zahlen heißt $\mathbb{C}$.

> [!TIP] In einfachen Worten
> Eine komplexe Zahl besteht aus zwei reellen Zahlen: einem Teil "ohne $i$" und einem Teil "mit $i$". Mit $i$ rechnest du wie mit einer Variablen, nur dass du jedes $i^2$ durch $-1$ ersetzt. Die Gleichung $x^2 = -1$ hat in $\mathbb{R}$ keine Lösung, in $\mathbb{C}$ aber die Lösungen $i$ und $-i$.

Die Potenzen von $i$ wiederholen sich im Takt von vier:

$$
i^1 = i, \qquad i^2 = -1, \qquad i^3 = -i, \qquad i^4 = 1, \qquad i^5 = i, \ \dots
$$

## Rechnen mit komplexen Zahlen

> [!NOTE] Definition
> Für $z_1 = a + b\,i$ und $z_2 = c + d\,i$ gilt
>
> $$ z_1 + z_2 = (a + c) + (b + d)\,i, \qquad z_1 - z_2 = (a - c) + (b - d)\,i, $$
>
> $$ z_1 \cdot z_2 = (ac - bd) + (ad + bc)\,i . $$
>
> Die **konjugiert komplexe Zahl** zu $z = a + b\,i$ ist $\bar z = a - b\,i$. Für die Division erweitert man mit dem Konjugierten des Nenners:
>
> $$ \frac{z_1}{z_2} = \frac{z_1 \cdot \bar z_2}{z_2 \cdot \bar z_2} = \frac{z_1 \cdot \bar z_2}{c^2 + d^2} . $$

> [!TIP] In einfachen Worten
> Addieren und Subtrahieren geht getrennt für Real- und Imaginärteil. Beim Multiplizieren multiplizierst du aus wie bei Klammern und ersetzt $i^2$ durch $-1$. Beim Dividieren machst du den Nenner reell: Du erweiterst mit seinem Konjugierten, denn $(c + d\,i)(c - d\,i) = c^2 + d^2$ ist eine gewöhnliche Zahl.

### Beispiel

Für $z_1 = 3 + 2i$ und $z_2 = 1 - 4i$ gilt:

$$
z_1 + z_2 = 4 - 2i, \qquad z_1 - z_2 = 2 + 6i .
$$

Multiplikation, mit $i^2 = -1$:

$$
z_1 \cdot z_2 = 3 - 12i + 2i - 8i^2 = 3 - 10i + 8 = 11 - 10i .
$$

Division, mit $\bar z_2 = 1 + 4i$ und $z_2 \bar z_2 = 1 + 16 = 17$:

$$
\frac{z_1}{z_2} = \frac{(3 + 2i)(1 + 4i)}{17} = \frac{3 + 12i + 2i + 8i^2}{17} = \frac{-5 + 14i}{17} = -\frac{5}{17} + \frac{14}{17}\,i .
$$

### Potenzen und Gleichungen

Für $z = 1 + i$ rechnet man schrittweise: $z^2 = 1 + 2i + i^2 = 2i$ und damit

$$
z^3 = z^2 \cdot z = 2i\,(1 + i) = 2i + 2i^2 = -2 + 2i .
$$

Eine **lineare Gleichung** löst man wie im Reellen, indem man nach $z$ umstellt und dann dividiert. Aus $(2 + i)\,z = 3 - i$ folgt

$$
z = \frac{3 - i}{2 + i} = \frac{(3 - i)(2 - i)}{5} = \frac{6 - 3i - 2i + i^2}{5} = \frac{5 - 5i}{5} = 1 - i .
$$

Die Probe zeigt: $(2 + i)(1 - i) = 2 - 2i + i - i^2 = 3 - i$. Das stimmt.

> [!CAUTION] Stolperstelle
> Das Vorzeichen bei $i^2$ geht gern verloren. Es gilt $-8i^2 = -8 \cdot (-1) = +8$, nicht $-8$. Rechne bei Produkten immer zuerst alle Terme aus und ersetze erst danach $i^2$ durch $-1$.

Wie man komplexe Zahlen als Punkte in der Ebene versteht und mit Betrag und Winkel beschreibt, steht im Artikel [Betrag und Polarform](/mathematik/1/komplexe-zahlen/komplexe-zahlen-polarform/).
