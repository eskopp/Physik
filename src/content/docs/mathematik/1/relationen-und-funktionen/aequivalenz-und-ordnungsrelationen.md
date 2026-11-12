---
title: "Äquivalenz- und Ordnungsrelationen"
description: "Zwei wichtige Sorten von Relationen und woran man sie erkennt."
sidebar:
  order: 3
  label: "Äquivalenz, Ordnung"
---

*In einem Satz: Eine Äquivalenzrelation sagt "gleichwertig in einer Hinsicht", eine Ordnungsrelation sagt "kommt davor oder ist gleich".*

## Äquivalenzrelationen

:::note[Definition]
Eine Relation $R$ auf $A$ heißt **Äquivalenzrelation**, wenn sie **reflexiv, symmetrisch und transitiv** ist.
:::

:::tip[In einfachen Worten]
Eine Äquivalenzrelation fasst Dinge zusammen, die in einer bestimmten Hinsicht gleich sind, auch wenn sie sonst verschieden sind. Zwei Menschen mit demselben Geburtsjahr sind "gleich alt" im Sinne der Relation, egal wie sie sonst aussehen.
:::

### Beispiel

Auf $\{0,1,2,3,4,5\}$ sei $a \sim b$ definiert durch "$a - b$ ist durch $3$ teilbar", also gleicher Rest bei Division durch $3$.

- **Reflexiv:** $a - a = 0$ ist durch $3$ teilbar.
- **Symmetrisch:** Ist $a - b$ durch $3$ teilbar, dann auch $b - a = -(a-b)$.
- **Transitiv:** Sind $a - b$ und $b - c$ durch $3$ teilbar, dann auch die Summe $a - c$.

Die Relation hat $12$ Paare und zerlegt die Menge in drei Gruppen mit gleichem Rest:

$$
\{0, 3\}, \qquad \{1, 4\}, \qquad \{2, 5\} .
$$

Solche Gruppen heißen **Äquivalenzklassen**. Jedes Element liegt in genau einer von ihnen.

## Ordnungsrelationen

:::note[Definition]
Eine Relation $R$ auf $A$ heißt **Ordnungsrelation** (genauer: Halbordnung), wenn sie **reflexiv, antisymmetrisch und transitiv** ist. Gilt zusätzlich, dass je zwei Elemente $a, b$ vergleichbar sind, also $a \,R\, b$ oder $b \,R\, a$, dann heißt sie **totale Ordnung**.
:::

:::tip[In einfachen Worten]
Eine Ordnung legt fest, wer "vor" wem kommt, und jeder ist mit sich selbst "höchstens gleich". Bei einer totalen Ordnung lassen sich alle in eine Reihe stellen, wie Zahlen auf dem Zahlenstrahl. Bei einer Halbordnung dürfen manche Paare unvergleichbar sein.
:::

### Beispiele

- Die Relation $\leq$ auf den Zahlen ist eine totale Ordnung.
- Die Teilmengenbeziehung $\subseteq$ auf $\mathcal{P}(\{1,2\})$ ist reflexiv, antisymmetrisch und transitiv, also eine Ordnung. Sie ist **nicht total**: Die Mengen $\{1\}$ und $\{2\}$ sind unvergleichbar, keine ist Teilmenge der anderen.
- Die Teilbarkeit "$a$ teilt $b$" auf $\{1,\dots,6\}$ ist ebenfalls eine Halbordnung. Die Zahlen $2$ und $3$ sind unvergleichbar.

## Der Vergleich

| Eigenschaft | Äquivalenzrelation | Ordnungsrelation |
|---|---|---|
| reflexiv | ja | ja |
| symmetrisch | ja | nein (meist) |
| antisymmetrisch | nein (meist) | ja |
| transitiv | ja | ja |

:::caution[Stolperstelle]
Die Gleichheit $=$ ist **beides zugleich**: Sie ist reflexiv, symmetrisch, antisymmetrisch und transitiv. Eine Relation, die nicht transitiv ist, wird weder das eine noch das andere. Ein Beispiel ist "ist befreundet mit": Wenn A mit B und B mit C befreundet ist, muss A nicht mit C befreundet sein.
:::

Die einzelnen Eigenschaften und wie man sie prüft, stehen im Artikel [Eigenschaften von Relationen](/mathematik/1/relationen-und-funktionen/relationen-eigenschaften/).
