---
title: "Relationen: Grundlagen"
description: "Geordnete Paare, das kartesische Produkt und was eine Relation ist."
weight: 1
linkTitle: "Grundlagen"
aliases:
  - "/mathematik/1/relationen-grundlagen/"
---

*In einem Satz: Eine Relation legt fest, welche Paare von Dingen zusammengehören.*

## Geordnete Paare und das kartesische Produkt

> [!NOTE] Definition
> Ein **geordnetes Paar** $(a, b)$ besteht aus zwei Objekten, bei denen die Reihenfolge zählt. Zwei Paare sind genau dann gleich, wenn sie in beiden Stellen übereinstimmen: $(a,b) = (c,d) \Leftrightarrow a = c \land b = d$.
>
> Das **kartesische Produkt** zweier Mengen $A$ und $B$ ist die Menge aller geordneten Paare:
>
> $$
> A \times B = \{(a, b) \mid a \in A \land b \in B\} .
> $$
>
> Hat $A$ genau $m$ und $B$ genau $n$ Elemente, dann hat $A \times B$ genau $m \cdot n$ Elemente.

> [!TIP] In einfachen Worten
> Das kartesische Produkt ist die Liste aller denkbaren Kombinationen, bei denen du aus der ersten Menge links und aus der zweiten Menge rechts etwas wählst. Wie bei einer Speisekarte: Jedes Hauptgericht kann mit jeder Beilage kombiniert werden.

### Beispiel

Für $A = \{1, 2\}$ und $B = \{x, y\}$ gilt

$$
A \times B = \{(1,x),\ (1,y),\ (2,x),\ (2,y)\} .
$$

Das sind $2 \cdot 2 = 4$ Paare. Das Paar $(1, x)$ ist etwas anderes als $(x, 1)$, das nicht einmal in $A \times B$ liegt.

## Was ist eine Relation?

> [!NOTE] Definition
> Eine **Relation** von $A$ nach $B$ ist eine Teilmenge des kartesischen Produkts:
>
> $$
> R \subseteq A \times B .
> $$
>
> Statt $(a, b) \in R$ schreibt man auch $a \,R\, b$ und liest "$a$ steht in Relation zu $b$". Eine **Relation auf $A$** ist eine Teilmenge von $A \times A$.

> [!TIP] In einfachen Worten
> Eine Relation ist eine Liste von Paaren, nämlich genau der Paare, für die die Beziehung gilt. Alles, was nicht in der Liste steht, steht nicht in Relation. Die Beziehung kann eine Regel sein, wie "kleiner als", oder einfach eine beliebige Auswahl.

### Beispiel

Auf $A = \{1, 2, 3\}$ sei $a \,R\, b$ definiert durch $a < b$. Dann ist

$$
R = \{(1,2),\ (1,3),\ (2,3)\} .
$$

Die Relation enthält drei Paare. Man kann sie auch als Tabelle darstellen, in der ein Kreuz bedeutet, dass das Paar in $R$ liegt:

| $a \backslash b$ | 1 | 2 | 3 |
|---|---|---|---|
| **1** | | × | × |
| **2** | | | × |
| **3** | | | |

> [!CAUTION] Stolperstelle
> Die Reihenfolge zählt. Es gilt $(1,2) \in R$, aber $(2,1) \notin R$. Die Relation "kleiner als" ist nicht in beide Richtungen wahr.

## Wie viele Relationen gibt es?

Eine Relation auf $A$ ist eine Teilmenge von $A \times A$. Also sind die Relationen auf $A$ genau die Elemente der Potenzmenge $\mathcal{P}(A \times A)$. Hat $A$ genau $n$ Elemente, dann hat $A \times A$ genau $n^2$ Elemente, und es gibt

$$
2^{\,n^2}
$$

verschiedene Relationen auf $A$. Für $n = 2$ sind das $2^4 = 16$, für $n = 3$ schon $2^9 = 512$. Warum $2^k$ Teilmengen entstehen, steht im Artikel [Potenzmengen](/mathematik/1/logik-und-mengen/potenzmengen/).
