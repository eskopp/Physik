---
title: "Injektivität und Surjektivität"
description: "Wann eine Funktion jeden Wert höchstens einmal und wann sie jeden Wert mindestens einmal trifft, mit Beweis als Rechenkette."
sidebar:
  order: 4
  label: "Injektiv, surjektiv"
---

*In einem Satz: Eine Funktion ist injektiv, wenn sich nie zwei Eingaben denselben Ausgang teilen, und surjektiv, wenn jeder mögliche Ausgang auch erreicht wird.*

## Funktionen als besondere Relationen

:::note[Definition]
Eine **Funktion** $f: A \to B$ ist eine Relation $f \subseteq A \times B$, bei der jedes $a \in A$ in **genau einem** Paar $(a, b)$ vorkommt. Man schreibt $f(a) = b$. Die Menge $A$ heißt **Definitionsbereich**, die Menge $B$ **Zielbereich**.
:::

:::tip[In einfachen Worten]
Bei einer allgemeinen Relation darf ein Element mit mehreren anderen in Beziehung stehen oder auch mit keinem. Bei einer Funktion hat jede Eingabe genau einen Ausgang. Die Relation "$a \leq b$" ist deshalb keine Funktion: Die $1$ steht mit $1$, $2$ und $3$ in Relation.
:::

Ob eine Funktion injektiv oder surjektiv ist, hängt vom **Definitionsbereich und vom Zielbereich** ab, nicht nur von der Formel. Deshalb steht bei jedem Beispiel dabei, zwischen welchen Mengen die Funktion läuft.

## Injektiv

:::note[Definition]
$f: A \to B$ heißt **injektiv**, wenn verschiedene Eingaben verschiedene Ausgaben haben:

$$
\forall x_1, x_2 \in A:\; f(x_1) = f(x_2) \Rightarrow x_1 = x_2 .
$$

Widerlegt wird die Eigenschaft durch ein einziges Paar: $\exists x_1, x_2 \in A:\; x_1 \neq x_2 \land f(x_1) = f(x_2)$.
:::

:::tip[In einfachen Worten]
Keine Kollision: Zwei verschiedene Eingaben landen nie im selben Ausgang. Wenn du also den Ausgang kennst, weißt du eindeutig, welche Eingabe dahinter steckt.
:::

**Vorgehen beim Nachweis.** Du nimmst $f(x_1) = f(x_2)$ an und formst um, bis $x_1 = x_2$ dasteht.

**Beispiel mit Rechenweg.** Sei $f: \mathbb{R} \to \mathbb{R}$ mit $f(x) = 2x - 5$. Seien $x_1, x_2 \in \mathbb{R}$ beliebig mit $f(x_1) = f(x_2)$:

$$
\begin{aligned}
2x_1 - 5 &= 2x_2 - 5 && | + 5 \\
2x_1 &= 2x_2 && | : 2 \\
x_1 &= x_2 .
\end{aligned}
$$

Aus $f(x_1) = f(x_2)$ folgt also $x_1 = x_2$. Damit ist $f$ injektiv.

**Gegenbeispiel.** Sei $g: \mathbb{R} \to \mathbb{R}$ mit $g(x) = x^2$. Wir wählen $x_1 = -2$ und $x_2 = 2$:

$$
g(-2) = 4 = g(2) \qquad\text{aber}\qquad -2 \neq 2 .
$$

Zwei verschiedene Eingaben haben denselben Ausgang. Damit ist $g$ **nicht** injektiv.

**Mit anderem Definitionsbereich.** Dieselbe Formel auf $[0, \infty)$, also $h: [0,\infty) \to \mathbb{R}$ mit $h(x) = x^2$, ist injektiv. Aus $x_1^2 = x_2^2$ folgt

$$
x_1^2 - x_2^2 = 0 \;\Leftrightarrow\; (x_1 - x_2)(x_1 + x_2) = 0 .
$$

Ein Produkt ist null, wenn ein Faktor null ist. Der Fall $x_1 + x_2 = 0$ bedeutet wegen $x_1, x_2 \geq 0$, dass beide $0$ sind, also $x_1 = x_2$. Der Fall $x_1 - x_2 = 0$ ist direkt $x_1 = x_2$. In beiden Fällen gilt $x_1 = x_2$.

## Surjektiv

:::note[Definition]
$f: A \to B$ heißt **surjektiv**, wenn jedes Element des Zielbereichs getroffen wird:

$$
\forall y \in B\ \exists x \in A:\; f(x) = y .
$$

Widerlegt wird die Eigenschaft durch ein einziges Element: $\exists y \in B:\; \neg\,\exists x \in A:\; f(x) = y$.
:::

:::tip[In einfachen Worten]
Kein Ausgang bleibt leer. Wähle dir irgendeinen Wert $y$ im Zielbereich: Du findest immer eine Eingabe $x$, die auf ihn führt.
:::

**Vorgehen beim Nachweis.** Du nimmst ein beliebiges $y$ aus dem Zielbereich, löst die Gleichung $f(x) = y$ nach $x$ auf und prüfst, dass dieses $x$ im Definitionsbereich liegt.

**Beispiel mit Rechenweg.** Sei $f: \mathbb{R} \to \mathbb{R}$ mit $f(x) = 2x - 5$. Sei $y \in \mathbb{R}$ beliebig. Wir suchen $x$ mit $f(x) = y$:

$$
\begin{aligned}
2x - 5 &= y && | + 5 \\
2x &= y + 5 && | : 2 \\
x &= \frac{y + 5}{2} .
\end{aligned}
$$

Dieses $x$ ist für jedes $y \in \mathbb{R}$ eine reelle Zahl. Zur Kontrolle: $f\!\left(\frac{y+5}{2}\right) = 2 \cdot \frac{y+5}{2} - 5 = y$. Damit ist $f$ surjektiv.

**Gegenbeispiel.** Sei $g: \mathbb{R} \to \mathbb{R}$ mit $g(x) = x^2$. Wir wählen $y = -1$:

$$
x^2 = -1 .
$$

Diese Gleichung hat in $\mathbb{R}$ keine Lösung, denn ein Quadrat ist nie negativ. Der Wert $-1$ wird nie getroffen. Damit ist $g$ **nicht** surjektiv.

**Mit anderem Zielbereich.** Auf $k: \mathbb{R} \to [0, \infty)$ mit $k(x) = x^2$ ist die Funktion surjektiv. Für beliebiges $y \geq 0$ löst $x = \sqrt{y}$ die Gleichung, denn $(\sqrt{y})^2 = y$, und $\sqrt{y}$ ist eine reelle Zahl.

## Bijektiv

:::note[Definition]
$f: A \to B$ heißt **bijektiv**, wenn sie injektiv und surjektiv ist. Dann gibt es zu jedem $y \in B$ genau ein $x \in A$ mit $f(x) = y$, und man kann die Funktion rückwärts lesen.
:::

:::tip[In einfachen Worten]
Jeder Eingang gehört zu genau einem Ausgang und umgekehrt. Nur dann kann man die Zuordnung eindeutig umkehren.
:::

**Beispiel.** $f: \mathbb{R} \to \mathbb{R}$ mit $f(x) = 2x - 5$ ist injektiv und surjektiv, also bijektiv. Die Umkehrung steht schon im Rechenweg oben: $f^{-1}(y) = \dfrac{y + 5}{2}$.

:::caution[Stolperstelle]
Die Funktion $x \mapsto x^2$ ist als $\mathbb{R} \to \mathbb{R}$ weder injektiv noch surjektiv. Als $\mathbb{R} \to [0,\infty)$ ist sie surjektiv, aber nicht injektiv. Als $[0,\infty) \to \mathbb{R}$ ist sie injektiv, aber nicht surjektiv. Erst als $[0,\infty) \to [0,\infty)$ ist sie bijektiv. Gleiche Formel, andere Mengen, andere Eigenschaft.
:::

## Endliche Mengen zählen

Bei endlichen Mengen lässt sich alles abzählen. Für $A = \{1,2,3\}$ und $B = \{a,b\}$ gibt es $2^3 = 8$ Funktionen $A \to B$. Keine davon ist injektiv, denn drei Eingaben passen nicht in zwei Ausgänge ohne Doppelung. Sechs davon sind surjektiv. Die Funktion $1 \mapsto a$, $2 \mapsto a$, $3 \mapsto b$ ist ein Beispiel: Sie trifft $a$ und $b$, benutzt aber $a$ doppelt.

## Relationen und ihre Totalität

Auch für allgemeine Relationen $R \subseteq A \times B$ gibt es passende Wörter:

| Eigenschaft | Bedeutung |
|---|---|
| linkstotal | jedes $a \in A$ kommt in mindestens einem Paar vor |
| rechtseindeutig | jedes $a \in A$ kommt in höchstens einem Paar vor |
| rechtstotal | jedes $b \in B$ kommt in mindestens einem Paar vor |
| linkseindeutig | jedes $b \in B$ kommt in höchstens einem Paar vor |

Damit ist eine Funktion eine linkstotale und rechtseindeutige Relation. Sie ist **injektiv**, wenn sie zusätzlich linkseindeutig ist, und **surjektiv**, wenn sie rechtstotal ist. "Surjektiv" bedeutet bei Relationen also, dass jedes Element der Zielmenge mindestens einmal getroffen wird.
