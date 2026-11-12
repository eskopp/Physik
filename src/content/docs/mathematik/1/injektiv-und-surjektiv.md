---
title: "Injektivität und Surjektivität"
description: "Wann eine Zuordnung eindeutig umkehrbar ist und wie sich Funktionen von Relationen unterscheiden."
sidebar:
  order: 8
  label: "Injektiv und surjektiv"
---

*In einem Satz: Eine Funktion ist injektiv, wenn sich nie zwei Eingaben denselben Ausgang teilen, und surjektiv, wenn jeder mögliche Ausgang auch erreicht wird.*

## Funktionen als besondere Relationen

:::note[Definition]
Eine **Funktion** $f: A \to B$ ist eine Relation $f \subseteq A \times B$, bei der jedes $a \in A$ in **genau einem** Paar $(a, b)$ vorkommt. Man schreibt $f(a) = b$. Die Menge $A$ heißt **Definitionsbereich**, die Menge $B$ **Zielbereich**.
:::

:::tip[In einfachen Worten]
Bei einer allgemeinen Relation darf ein Element mit mehreren anderen in Beziehung stehen oder auch mit keinem. Bei einer Funktion hat jede Eingabe genau einen Ausgang. Die Relation "$a \leq b$" ist deshalb keine Funktion: Die $1$ steht mit $1$, $2$ und $3$ in Relation.
:::

## Injektiv, surjektiv, bijektiv

:::note[Definition]
Eine Funktion $f: A \to B$ heißt

- **injektiv**, wenn verschiedene Eingaben verschiedene Ausgaben haben: $f(a_1) = f(a_2) \Rightarrow a_1 = a_2$.
- **surjektiv**, wenn jedes Element des Zielbereichs getroffen wird: $\forall b \in B\ \exists a \in A:\; f(a) = b$.
- **bijektiv**, wenn sie injektiv und surjektiv ist.
:::

:::tip[In einfachen Worten]
**Injektiv:** Kein Ausgang wird doppelt benutzt, es gibt keine Kollision. **Surjektiv:** Kein Ausgang bleibt leer, jeder wird erreicht. **Bijektiv:** Beides, jeder Eingang gehört zu genau einem Ausgang und umgekehrt. Nur dann kann man die Zuordnung eindeutig rückwärts lesen.
:::

### Beispiele

Für $f: \mathbb{R} \to \mathbb{R}$ mit $f(x) = x^2$ gilt:

- **Nicht injektiv:** $f(-1) = 1 = f(1)$, aber $-1 \neq 1$. Ein Gegenbeispiel genügt.
- **Nicht surjektiv:** Die Zahl $-1$ wird nie getroffen, denn $x^2 \geq 0$.

Für $g: \mathbb{R} \to \mathbb{R}$ mit $g(x) = 2x + 1$ gilt: Sie ist bijektiv. Zu jedem $y$ gibt es genau das $x = (y-1)/2$ mit $g(x) = y$.

Mit endlichen Mengen lässt sich alles abzählen. Für $A = \{1,2,3\}$ und $B = \{a,b\}$ gibt es $2^3 = 8$ Funktionen $A \to B$. Keine davon ist injektiv, denn drei Eingaben passen nicht in zwei Ausgänge ohne Doppelung. Sechs davon sind surjektiv. Die Funktion $1 \mapsto a$, $2 \mapsto a$, $3 \mapsto b$ ist ein Beispiel: Sie trifft $a$ und $b$, benutzt aber $a$ doppelt.

:::caution[Stolperstelle]
Ob eine Funktion injektiv oder surjektiv ist, hängt von den Mengen ab, nicht nur von der Formel. Die Funktion $x \mapsto x^2$ ist als Abbildung $\mathbb{R} \to \mathbb{R}$ weder injektiv noch surjektiv. Als $\mathbb{R} \to [0,\infty)$ ist sie surjektiv, aber nicht injektiv. Als $[0,\infty) \to [0,\infty)$ ist sie bijektiv.
:::

## Relationen und ihre Totalität

Auch für allgemeine Relationen $R \subseteq A \times B$ gibt es passende Wörter:

| Eigenschaft | Bedeutung |
|---|---|
| linkstotal | jedes $a \in A$ kommt in mindestens einem Paar vor |
| rechtseindeutig | jedes $a \in A$ kommt in höchstens einem Paar vor |
| rechtstotal | jedes $b \in B$ kommt in mindestens einem Paar vor |
| linkseindeutig | jedes $b \in B$ kommt in höchstens einem Paar vor |

Damit ist eine Funktion eine linkstotale und rechtseindeutige Relation. Sie ist **injektiv**, wenn sie zusätzlich linkseindeutig ist, und **surjektiv**, wenn sie rechtstotal ist. "Surjektiv" bedeutet bei Relationen also, dass jedes Element der Zielmenge mindestens einmal getroffen wird.
