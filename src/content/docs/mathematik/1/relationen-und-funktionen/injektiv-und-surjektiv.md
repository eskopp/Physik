---
title: "Injektivität und Surjektivität"
description: "Wann eine Funktion jeden Wert höchstens einmal und wann sie jeden Wert mindestens einmal trifft, mit Aufgaben und sauber ausgeschriebenen Lösungen."
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

**Vorgehen beim Nachweis.** Du nimmst $f(x_1) = f(x_2)$ an und formst um, bis $x_1 = x_2$ dasteht. Zum Widerlegen gibst du zwei verschiedene Eingaben mit gleichem Ausgang an.

### Aufgabe: Auf Injektivität prüfen

Sei $f: D \subseteq \mathbb{R} \to \mathbb{R}$. Prüfe auf Injektivität:

- **a)** $f(x) = 3x + 1$ mit $D = \mathbb{R}$
- **b)** $f(x) = x^2$ mit $D = [0, \infty)$
- **c)** $f(x) = x^2$ mit $D = \mathbb{R}$
- **d)** $f(x) = mx + n$ mit $m, n \in \mathbb{R}$ und $D \subseteq \mathbb{R}$

**Lösung a).** *Zu zeigen:* Aus $f(x_1) = f(x_2)$ folgt $x_1 = x_2$.

Seien $x_1, x_2 \in \mathbb{R}$ beliebig mit $f(x_1) = f(x_2)$. Wir formen um, bis $x_1 = x_2$ dasteht:

$$
\begin{aligned}
3x_1 + 1 &= 3x_2 + 1 && | - 1 \\
3x_1 &= 3x_2 && | : 3 \\
x_1 &= x_2 .
\end{aligned}
$$

Aus $f(x_1) = f(x_2)$ folgt $x_1 = x_2$. Also ist $f$ **injektiv**.

**Lösung b).** *Zu zeigen:* Aus $f(x_1) = f(x_2)$ folgt $x_1 = x_2$.

Seien $x_1, x_2 \in [0, \infty)$ beliebig mit $f(x_1) = f(x_2)$:

$$
\begin{aligned}
x_1^2 &= x_2^2 && | \sqrt{\ } \\
x_1 &= x_2 .
\end{aligned}
$$

Das Wurzelziehen ist hier erlaubt, weil $x_1, x_2 \geq 0$ sind: Es gilt $\sqrt{x^2} = |x| = x$ für $x \geq 0$. Also ist $f$ auf $[0, \infty)$ **injektiv**.

**Lösung c).** *Zu zeigen:* $f$ ist **nicht** injektiv. Dafür genügt ein Gegenbeispiel, also zwei **verschiedene** Eingaben $x_1 \neq x_2$ mit $f(x_1) = f(x_2)$.

Wähle $x_1 = -1$ und $x_2 = 1$:

$$
f(-1) = (-1)^2 = 1 = 1^2 = f(1) \qquad\text{aber}\qquad -1 \neq 1 .
$$

Zwei verschiedene Eingaben haben denselben Ausgang. Also ist $f$ auf $\mathbb{R}$ **nicht injektiv**. Beim Wurzelziehen wie in b) ginge ein Vorzeichen verloren, denn $\sqrt{x^2} = |x|$.

**Lösung d).** Hier muss man zwei Fälle trennen, denn für $m = 0$ passiert etwas anderes als für $m \neq 0$.

*Fall $m \neq 0$.* *Zu zeigen:* Aus $f(x_1) = f(x_2)$ folgt $x_1 = x_2$. Seien $x_1, x_2$ beliebig mit $f(x_1) = f(x_2)$:

$$
\begin{aligned}
m x_1 + n &= m x_2 + n && | - n \\
m x_1 &= m x_2 && | : m \\
x_1 &= x_2 .
\end{aligned}
$$

Die Division durch $m$ ist erlaubt, weil $m \neq 0$ ist. Also ist $f$ **injektiv**.

*Fall $m = 0$.* *Zu zeigen:* $f$ ist nicht injektiv, wir brauchen also zwei verschiedene Eingaben mit gleichem Ausgang. Es ist $f(x) = 0 \cdot x + n = n$, die Funktion ist konstant. Zum Beispiel gilt $f(0) = n = f(1)$ mit $0 \neq 1$. Also ist $f$ **nicht injektiv**.

Da $m = 0$ erlaubt ist, ist $f(x) = mx + n$ im Allgemeinen **nicht** injektiv. Sie ist es genau für $m \neq 0$.

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

### Aufgabe: Auf Surjektivität prüfen

Sei $f: A \to B$. Prüfe auf Surjektivität:

- **a)** $f(x) = 3x + 1$ mit $A = B = \mathbb{R}$
- **b)** $f(x) = mx + n$ mit $A = B = \mathbb{R}$ und $m, n \in \mathbb{R}$
- **c)** $f(x) = x^2$ mit $A = B = \mathbb{R}$
- **d)** $f(x) = x^2$ mit $A = \mathbb{R}$ und $B = [0, \infty)$

**Lösung a).** *Zu zeigen:* Zu jedem $y \in \mathbb{R}$ gibt es ein $x \in \mathbb{R}$ mit $f(x) = y$. Am Ende muss also ein konkretes $x$ dastehen, das von $y$ abhängt.

Sei $y \in \mathbb{R}$ beliebig. Wir lösen $f(x) = y$ nach $x$ auf:

$$
\begin{aligned}
3x + 1 &= y && | - 1 \\
3x &= y - 1 && | : 3 \\
x &= \frac{y - 1}{3} .
\end{aligned}
$$

Dieses $x$ ist für jedes $y \in \mathbb{R}$ eine reelle Zahl. Zur Kontrolle: $f\!\left(\frac{y-1}{3}\right) = 3 \cdot \frac{y-1}{3} + 1 = y$. Also ist $f$ **surjektiv**.

**Lösung b).** Wieder zwei Fälle.

*Fall $m \neq 0$.* *Zu zeigen:* Zu jedem $y \in \mathbb{R}$ gibt es ein $x \in \mathbb{R}$ mit $f(x) = y$. Sei $y \in \mathbb{R}$ beliebig:

$$
\begin{aligned}
m x + n &= y && | - n \\
m x &= y - n && | : m \\
x &= \frac{y - n}{m} .
\end{aligned}
$$

Das $x$ existiert für jedes $y$, weil $m \neq 0$ ist. Also ist $f$ **surjektiv**.

*Fall $m = 0$.* *Zu zeigen:* $f$ ist nicht surjektiv, wir brauchen also **ein** $y$, das nicht getroffen wird. Es ist $f(x) = n$ konstant, es wird nur der Wert $n$ getroffen. Jedes $y \neq n$, zum Beispiel $y = n + 1$, wird nicht getroffen. Also ist $f$ **nicht surjektiv**.

Da $m = 0$ erlaubt ist, ist $f(x) = mx + n$ im Allgemeinen **nicht** surjektiv. Sie ist es genau für $m \neq 0$.

**Lösung c).** *Zu zeigen:* $f$ ist **nicht** surjektiv. Dafür genügt ein einziges $y \in B$, zu dem es kein $x \in A$ mit $f(x) = y$ gibt.

Wähle $y = -4 \in B = \mathbb{R}$. Wir suchen $x \in \mathbb{R}$ mit

$$
x^2 = -4 .
$$

Diese Gleichung hat in $\mathbb{R}$ keine Lösung, denn ein Quadrat ist nie negativ, und $\sqrt{-4}$ ist keine reelle Zahl. Der Wert $-4$ wird nie getroffen. Also ist $f$ **nicht surjektiv**.

**Lösung d).** *Zu zeigen:* Zu jedem $y \in [0, \infty)$ gibt es ein $x \in \mathbb{R}$ mit $x^2 = y$.

Sei $y \in [0, \infty)$ beliebig. Wir lösen $x^2 = y$ und wählen

$$
x = \sqrt{y} .
$$

Wegen $y \geq 0$ ist $\sqrt{y}$ eine reelle Zahl, liegt also in $A = \mathbb{R}$. Kontrolle: $(\sqrt{y})^2 = y$. Also ist $f$ mit Zielbereich $[0, \infty)$ **surjektiv**. Dieselbe Formel wie in c), aber ein anderer Zielbereich, und deshalb ein anderes Ergebnis.

## Bijektiv

:::note[Definition]
$f: A \to B$ heißt **bijektiv**, wenn sie injektiv und surjektiv ist. Dann gibt es zu jedem $y \in B$ genau ein $x \in A$ mit $f(x) = y$, und man kann die Funktion rückwärts lesen.
:::

:::tip[In einfachen Worten]
Jeder Eingang gehört zu genau einem Ausgang und umgekehrt. Nur dann kann man die Zuordnung eindeutig umkehren.
:::

**Vorgehen.** Du zeigst drei Dinge: Die Funktion bildet wirklich von $A$ nach $B$ ab, sie ist injektiv, und sie ist surjektiv. Eine Bijektion $A \to B$ zeigt, dass beide Mengen "gleich viele" Elemente haben, man sagt **gleichmächtig**.

### Aufgabe: Bijektionen angeben

Zeige, dass die Teilmengen von $\mathbb{R}$ gleichmächtig sind, und gib jeweils eine Bijektion $f: A \to B$ an:

- **a)** $A = (0, 1)$ und $B = (a, b)$ mit $a, b \in \mathbb{R}$ und $a < b$
- **b)** $A = (-\infty, 0]$ und $B = [1, \infty)$

**Lösung a).** *Zu zeigen* sind drei Dinge: (1) $f$ bildet $(0,1)$ nach $(a,b)$ ab, (2) $f$ ist injektiv, das heißt aus $f(x_1) = f(x_2)$ folgt $x_1 = x_2$, und (3) $f$ ist surjektiv, das heißt zu jedem $y \in (a,b)$ gibt es ein $x \in (0,1)$ mit $f(x) = y$.

Wir wählen die lineare Funktion

$$
f(x) = (b - a)\,x + a .
$$

*Sie bildet nach $B$ ab.* Für $0 < x < 1$ gilt $0 < (b-a)\,x < b - a$, denn $b - a > 0$. Addiert man $a$, folgt $a < f(x) < b$, also $f(x) \in (a, b)$.

*Injektiv.* Zu zeigen ist $x_1 = x_2$. Seien $x_1, x_2 \in (0,1)$ mit $f(x_1) = f(x_2)$:

$$
\begin{aligned}
(b-a)\,x_1 + a &= (b-a)\,x_2 + a && | - a \\
(b-a)\,x_1 &= (b-a)\,x_2 && | : (b-a) \\
x_1 &= x_2 .
\end{aligned}
$$

Die Division ist erlaubt, weil $b - a \neq 0$ ist.

*Surjektiv.* Zu zeigen ist ein $x \in (0,1)$ mit $f(x) = y$. Sei $y \in (a, b)$ beliebig. Wir lösen $f(x) = y$:

$$
\begin{aligned}
(b-a)\,x + a &= y && | - a \\
(b-a)\,x &= y - a && | : (b-a) \\
x &= \frac{y - a}{b - a} .
\end{aligned}
$$

Dieses $x$ liegt in $(0, 1)$: Aus $a < y < b$ folgt $0 < y - a < b - a$, und Division durch $b - a > 0$ ergibt $0 < x < 1$. Damit ist $f$ surjektiv.

Da $f$ injektiv und surjektiv ist, ist $f$ **bijektiv**.

**Lösung b).** *Zu zeigen* sind wieder drei Dinge: $f$ bildet nach $[1,\infty)$ ab, ist injektiv ($x_1 = x_2$) und ist surjektiv (zu jedem $y \geq 1$ ein $x \leq 0$ mit $f(x) = y$). Wir wählen

$$
f(x) = -x + 1 .
$$

*Sie bildet nach $B$ ab.* Für $x \leq 0$ gilt $-x \geq 0$ und damit $f(x) = -x + 1 \geq 1$, also $f(x) \in [1, \infty)$.

*Injektiv.* Aus $f(x_1) = f(x_2)$ folgt $-x_1 + 1 = -x_2 + 1$, also $-x_1 = -x_2$ und damit $x_1 = x_2$.

*Surjektiv.* Sei $y \in [1, \infty)$ beliebig. Aus $-x + 1 = y$ folgt $x = 1 - y$. Wegen $y \geq 1$ gilt $x = 1 - y \leq 0$, also $x \in (-\infty, 0]$. Kontrolle: $f(1 - y) = -(1 - y) + 1 = y$.

Also ist $f$ **bijektiv**.

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
