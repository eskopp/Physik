---
title: "Verkettung von Funktionen"
description: "Die Komposition g nach f, ihre Definition und zwei Beweise zu Injektivität und Surjektivität."
weight: 5
linkTitle: "Verkettung"
---

*In einem Satz: Bei der Verkettung schaltet man zwei Funktionen hintereinander, sodass der Ausgang der ersten zum Eingang der zweiten wird.*

## Die Komposition

> [!NOTE] Definition
> Seien $f: A \to B$ und $g: B \to C$ Funktionen. Der Zielbereich von $f$ ist also der Definitionsbereich von $g$. Die **Verkettung** (auch **Komposition**) von $g$ nach $f$ ist die Funktion
>
> $$ g \circ f: A \to C, \qquad (g \circ f)(x) = g\bigl(f(x)\bigr) . $$
>
> Man liest "$g$ nach $f$" oder "$g$ verkettet mit $f$".

> [!TIP] In einfachen Worten
> Erst wendest du $f$ auf $x$ an, dann wendest du $g$ auf das Ergebnis an. Man schreibt $g \circ f$ in dieser Reihenfolge, weil die Schreibweise $g(f(x))$ von innen nach außen gelesen wird: Zuerst kommt $f$, ganz links steht $g$.

### Beispiel

Seien $f, g: \mathbb{R} \to \mathbb{R}$ mit $f(x) = 2x - 5$ und $g(x) = x^2$. Dann ist

$$
(g \circ f)(x) = g(2x - 5) = (2x - 5)^2, \qquad
(f \circ g)(x) = f(x^2) = 2x^2 - 5 .
$$

Für $x = 3$ ergibt das $(g \circ f)(3) = 1^2 = 1$, aber $(f \circ g)(3) = 2 \cdot 9 - 5 = 13$.

> [!CAUTION] Stolperstelle
> Die Verkettung ist **nicht vertauschbar**. Im Beispiel ist $g \circ f \neq f \circ g$. Die Reihenfolge bestimmt, welche Funktion zuerst wirkt. Außerdem muss das Ergebnis von $f$ im Definitionsbereich von $g$ liegen, sonst kann man $g \circ f$ nicht bilden.

## Injektiv und surjektiv bei der Verkettung

### Zwei Sätze

**Satz.** Seien $f: A \to B$ und $g: B \to C$ Funktionen. Dann gilt:

- **a)** Ist $g \circ f$ surjektiv, dann ist $g$ surjektiv.
- **b)** Ist $g \circ f$ injektiv, dann ist $f$ injektiv.

Die Begriffe stehen im Artikel [Injektivität und Surjektivität](/mathematik/1/relationen-und-funktionen/injektiv-und-surjektiv/). Beide Beweise folgen demselben Muster: Man nimmt die Voraussetzung über $g \circ f$ und liest daraus die Behauptung über einen Teil ab.

**Beweis a).** *Zu zeigen:* Zu jedem $c \in C$ gibt es ein $b \in B$ mit $g(b) = c$. Am Ende muss also ein Element $b \in B$ dastehen, das auf $c$ abgebildet wird.

Sei $c \in C$ beliebig. Da $g \circ f$ surjektiv ist, gibt es ein $a \in A$ mit

$$
(g \circ f)(a) = c \;\Leftrightarrow\; g\bigl(f(a)\bigr) = c .
$$

Wir setzen $b := f(a)$. Dann ist $b \in B$, denn $f$ bildet nach $B$ ab, und es gilt

$$
g(b) = g\bigl(f(a)\bigr) = c .
$$

Zu jedem $c \in C$ haben wir also ein $b \in B$ mit $g(b) = c$ gefunden. Damit ist $g$ **surjektiv**. $\square$

**Beweis b).** *Zu zeigen:* Aus $f(a_1) = f(a_2)$ folgt $a_1 = a_2$ für alle $a_1, a_2 \in A$. Am Ende muss also $a_1 = a_2$ dastehen.

Seien $a_1, a_2 \in A$ beliebig mit $f(a_1) = f(a_2)$. Wir wenden $g$ auf beide Seiten an:

$$
\begin{aligned}
f(a_1) &= f(a_2) && | \; g \text{ anwenden} \\
g\bigl(f(a_1)\bigr) &= g\bigl(f(a_2)\bigr) && \\
(g \circ f)(a_1) &= (g \circ f)(a_2) . &&
\end{aligned}
$$

Da $g \circ f$ injektiv ist, folgt daraus $a_1 = a_2$. Damit ist $f$ **injektiv**. $\square$

> [!TIP] In einfachen Worten
> Zu a): Wenn die ganze Kette jedes Ziel trifft, muss schon der **letzte** Schritt $g$ jedes Ziel treffen können, denn dahinter kommt nichts mehr. Zu b): Wenn die ganze Kette keine zwei Eingaben zusammenfallen lässt, darf schon der **erste** Schritt $f$ das nicht tun, denn was $f$ zusammenwirft, kann $g$ nicht mehr trennen.

> [!CAUTION] Stolperstelle
> Die **Umkehrungen** gelten nicht. Aus "$g \circ f$ surjektiv" folgt nicht, dass auch $f$ surjektiv ist. Aus "$g \circ f$ injektiv" folgt nicht, dass auch $g$ injektiv ist.
>
> **Gegenbeispiel für beide.** Sei $A = \{1\}$, $B = \{a, b\}$ und $C = \{c\}$ mit $f(1) = a$ sowie $g(a) = c$ und $g(b) = c$. Dann ist $g \circ f: \{1\} \to \{c\}$ mit $(g \circ f)(1) = c$. Sie ist surjektiv und injektiv. Aber $f$ ist nicht surjektiv, denn $b$ wird nicht getroffen, und $g$ ist nicht injektiv, denn $g(a) = g(b)$ bei $a \neq b$.
