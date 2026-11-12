---
title: Potenzmengen
description: Die Menge aller Teilmengen einer Menge und wie viele es sind.
sidebar:
  order: 3
---

*In einem Satz: Die Potenzmenge einer Menge ist die Menge aller Auswahlen, die man aus ihr treffen kann.*

## Definition und Anzahl

:::note[Definition]
Die **Potenzmenge** einer Menge $A$ ist die Menge aller Teilmengen von $A$:

$$
\mathcal{P}(A) = \{M \mid M \subseteq A\} .
$$

Hat $A$ genau $n$ Elemente, dann hat $\mathcal{P}(A)$ genau $2^n$ Elemente.
:::

:::tip[In einfachen Worten]
Für jedes Element von $A$ entscheidest du: nehme ich es in meine Auswahl oder nicht? Jede Kombination dieser Ja-Nein-Entscheidungen ergibt eine Teilmenge. Die Elemente der Potenzmenge sind selbst Mengen.
:::

### Beispiele

Für $A = \{a, b\}$ gibt es vier Teilmengen:

$$
\mathcal{P}(A) = \bigl\{\emptyset,\ \{a\},\ \{b\},\ \{a,b\}\bigr\} .
$$

Für $A = \{1,2,3\}$ gibt es $2^3 = 8$ Teilmengen: $\emptyset$, $\{1\}$, $\{2\}$, $\{3\}$, $\{1,2\}$, $\{1,3\}$, $\{2,3\}$ und $\{1,2,3\}$.

Auch die leere Menge hat eine Potenzmenge, und man kann sie immer wieder bilden. Das zeigt der Abschnitt [Verschachtelte Potenzmengen](#verschachtelte-potenzmengen) weiter unten.

:::caution[Stolperstelle]
Unterscheide $\in$ und $\subseteq$. Für $A = \{a, b\}$ gilt $\{a\} \in \mathcal{P}(A)$, denn $\{a\}$ ist eine Teilmenge von $A$. Es gilt aber $a \notin \mathcal{P}(A)$, denn $a$ ist ein Element von $A$ und selbst keine Menge in $\mathcal{P}(A)$. Außerdem liegen immer $\emptyset \in \mathcal{P}(A)$ und $A \in \mathcal{P}(A)$.
:::

### Warum es genau 2ⁿ Teilmengen sind

Nummeriere die Elemente $a_1, \dots, a_n$. Für jedes $a_i$ gibt es zwei Möglichkeiten: Es liegt in der Teilmenge oder nicht. Diese Entscheidungen sind voneinander unabhängig. Also gibt es insgesamt

$$
\underbrace{2 \cdot 2 \cdots 2}_{n\text{-mal}} = 2^n
$$

verschiedene Kombinationen, und jede liefert genau eine Teilmenge.

## Verschachtelte Potenzmengen

:::note[Definition]
Die Potenzmenge kann man immer wieder bilden. Ausgehend von der leeren Menge entstehen der Reihe nach

$$
\mathcal{P}(\emptyset), \qquad
\mathcal{P}\bigl(\mathcal{P}(\emptyset)\bigr), \qquad
\mathcal{P}\bigl(\mathcal{P}(\mathcal{P}(\emptyset))\bigr), \qquad
\mathcal{P}\bigl(\mathcal{P}(\mathcal{P}(\mathcal{P}(\emptyset)))\bigr) .
$$

Hat eine Menge $n$ Elemente, dann hat ihre Potenzmenge $2^n$ Elemente. Damit kennt man die Anzahl jedes Schritts schon vor dem Ausschreiben.
:::

:::tip[In einfachen Worten]
In jedem Schritt behandelst du die Elemente der letzten Menge als Bausteine und listest alle möglichen Auswahlen daraus auf. Die Anzahl wird nicht verdoppelt, sondern jedes Mal zur Zweierpotenz der vorigen Anzahl. Dadurch wächst sie sehr schnell.
:::

### Schritt für Schritt

**Schritt 1.** Die leere Menge hat $0$ Elemente, also hat ihre Potenzmenge $2^0 = 1$ Element, nämlich $\emptyset$ selbst:

$$
\mathcal{P}(\emptyset) = \{\emptyset\} .
$$

**Schritt 2.** Die Menge aus Schritt 1 hat $1$ Element, also gibt es $2^1 = 2$ Teilmengen:

$$
\mathcal{P}\bigl(\mathcal{P}(\emptyset)\bigr) = \{\emptyset, \{\emptyset\}\} .
$$

**Schritt 3.** Die Menge aus Schritt 2 hat $2$ Elemente, also gibt es $2^2 = 4$ Teilmengen:

$$
\mathcal{P}\bigl(\mathcal{P}(\mathcal{P}(\emptyset))\bigr) = \{\emptyset, \{\emptyset\}, \{\{\emptyset\}\}, \{\emptyset, \{\emptyset\}\}\} .
$$

**Schritt 4.** Die Menge aus Schritt 3 hat $4$ Elemente, also gibt es $2^4 = 16$ Teilmengen. Ausgeschrieben, nach der Zahl ihrer Elemente geordnet ($1 + 4 + 6 + 4 + 1$):

$$
\begin{aligned}
\mathcal{P}\bigl(\mathcal{P}(\mathcal{P}(\mathcal{P}(\emptyset)))\bigr) = \bigl\{\ &\emptyset, \\
&\{\emptyset\},\ \{\{\emptyset\}\},\ \{\{\{\emptyset\}\}\},\ \{\{\emptyset,\,\{\emptyset\}\}\}, \\
&\{\emptyset,\,\{\emptyset\}\},\ \{\emptyset,\,\{\{\emptyset\}\}\},\ \{\emptyset,\,\{\emptyset,\,\{\emptyset\}\}\}, \\
&\{\{\emptyset\},\,\{\{\emptyset\}\}\},\ \{\{\emptyset\},\,\{\emptyset,\,\{\emptyset\}\}\},\ \{\{\{\emptyset\}\},\,\{\emptyset,\,\{\emptyset\}\}\}, \\
&\{\emptyset,\,\{\emptyset\},\,\{\{\emptyset\}\}\},\ \{\emptyset,\,\{\emptyset\},\,\{\emptyset,\,\{\emptyset\}\}\}, \\
&\{\emptyset,\,\{\{\emptyset\}\},\,\{\emptyset,\,\{\emptyset\}\}\},\ \{\{\emptyset\},\,\{\{\emptyset\}\},\,\{\emptyset,\,\{\emptyset\}\}\}, \\
&\{\emptyset,\,\{\emptyset\},\,\{\{\emptyset\}\},\,\{\emptyset,\,\{\emptyset\}\}\}\ \bigr\}
\end{aligned}
$$

Zusammengefasst:

| Menge | Anzahl der Elemente |
|---|---|
| $\mathcal{P}(\emptyset)$ | $1 = 2^0$ |
| $\mathcal{P}(\mathcal{P}(\emptyset))$ | $2 = 2^1$ |
| $\mathcal{P}(\mathcal{P}(\mathcal{P}(\emptyset)))$ | $4 = 2^2$ |
| $\mathcal{P}(\mathcal{P}(\mathcal{P}(\mathcal{P}(\emptyset))))$ | $16 = 2^4$ |

Der nächste Schritt hätte schon $2^{16} = 65\,536$ Elemente. Aufschreiben kann man das nicht mehr, nur noch zählen.

:::caution[Stolperstelle]
Achte genau auf die Klammern. $\emptyset$, $\{\emptyset\}$ und $\{\{\emptyset\}\}$ sind drei verschiedene Mengen. $\emptyset$ hat kein Element, $\{\emptyset\}$ hat ein Element (nämlich $\emptyset$), und $\{\{\emptyset\}\}$ hat ein Element (nämlich $\{\emptyset\}$). Ein vergessenes Klammerpaar macht aus einer Menge eine andere.
:::

## Potenzmengen und Teilmengen

Aus $A \subseteq B$ folgt $\mathcal{P}(A) \subseteq \mathcal{P}(B)$. Das lässt sich in drei Schritten beweisen:

1. Sei $M \in \mathcal{P}(A)$ beliebig. Nach der Definition heißt das $M \subseteq A$.
2. Wegen $A \subseteq B$ gilt dann auch $M \subseteq B$, denn jedes Element von $M$ liegt in $A$ und damit in $B$.
3. Also ist $M \in \mathcal{P}(B)$.

Da $M$ beliebig war, ist $\mathcal{P}(A) \subseteq \mathcal{P}(B)$. Dieses Vorgehen mit dem "beliebigen Element" erklärt der Artikel [Beweise mit Mengen](/mathematik/1/logik-und-mengen/beweise-mit-mengen/) genauer.
