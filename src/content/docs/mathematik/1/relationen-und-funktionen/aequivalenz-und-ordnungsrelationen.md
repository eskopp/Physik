---
title: "Äquivalenz- und Ordnungsrelationen"
description: "Zwei wichtige Sorten von Relationen, woran man sie erkennt und wie man sie nachweist oder widerlegt."
sidebar:
  order: 3
  label: "Äquivalenz, Ordnung"
---

*In einem Satz: Eine Äquivalenzrelation sagt "gleichwertig in einer Hinsicht", eine Ordnungsrelation sagt "kommt davor oder ist gleich".*

Die Eigenschaften reflexiv, symmetrisch, antisymmetrisch und transitiv sind im Artikel [Eigenschaften von Relationen](/mathematik/1/relationen-und-funktionen/relationen-eigenschaften/) erklärt. Hier setzen wir sie zu zwei Sorten von Relationen zusammen.

## Äquivalenzrelationen

:::note[Definition]
Eine Relation $R$ auf $A$ heißt **Äquivalenzrelation**, wenn sie **reflexiv, symmetrisch und transitiv** ist.
:::

:::tip[In einfachen Worten]
Eine Äquivalenzrelation fasst Dinge zusammen, die in einer bestimmten Hinsicht gleich sind, auch wenn sie sonst verschieden sind. Studierende im selben Fachsemester sind "gleich" im Sinne der Relation, egal wie sie sonst heißen.
:::

**Vorgehen beim Nachweis.** Du zeigst alle drei Eigenschaften einzeln für beliebige Elemente. Fehlt eine, ist es keine Äquivalenzrelation.

### Aufgabe: Fachsemester

Sei $M$ die Menge der Studierenden und $s(x)$ das Fachsemester von $x$. Gib eine Relation $R_1$ an, die eine Äquivalenzrelation auf $M$ ist, und begründe es. Zwei Studierende stehen in Relation, wenn sie im selben Fachsemester sind.

**Lösung.** Wir setzen $x \,R_1\, y \Leftrightarrow s(x) = s(y)$ und prüfen die drei Eigenschaften für beliebige $x, y, z \in M$.

**Reflexiv.** Ich bin im selben Fachsemester wie ich selbst:

$$
x \,R_1\, x \;\Leftrightarrow\; s(x) = s(x) .
$$

Die Aussage stimmt für jedes $x \in M$.

**Symmetrisch.** Seien $x$ und $y$ im selben Fachsemester. Dann auch $y$ und $x$:

$$
x \,R_1\, y \;\Leftrightarrow\; s(x) = s(y) \;\Leftrightarrow\; s(y) = s(x) \;\Leftrightarrow\; y \,R_1\, x .
$$

**Transitiv.** Seien $x, y$ im selben und $y, z$ im selben Fachsemester. Dann sind $x$ und $z$ im selben:

$$
x \,R_1\, y \land y \,R_1\, z \;\Leftrightarrow\; s(x) = s(y) \land s(y) = s(z) \;\Rightarrow\; s(x) = s(z) \;\Leftrightarrow\; x \,R_1\, z .
$$

Alle drei Eigenschaften gelten, also ist $R_1$ eine **Äquivalenzrelation**. Sie zerlegt $M$ in Gruppen, nämlich in alle Studierenden eines Fachsemesters. Solche Gruppen heißen **Äquivalenzklassen**. Jedes Element liegt in genau einer Klasse.

### Aufgabe: Primteiler

Für $n \in \mathbb{N}$ bezeichnet $P(n) = \{p \mid p \text{ ist Primzahl und } p \text{ teilt } n\}$ die Menge der Primteiler von $n$. Zum Beispiel ist $P(12) = \{2, 3\}$ und $P(8) = \{2\}$. Auf $\mathbb{N}$ wird eine Relation $\sim$ definiert durch

$$
a \sim b \;\Leftrightarrow\; P(a) = P(b) .
$$

Untersuche $\sim$ auf Reflexivität, Symmetrie und Transitivität. Ist $\sim$ eine Äquivalenz- oder eine Ordnungsrelation?

**Lösung.** Seien $a, b, c \in \mathbb{N}$ beliebig.

**Reflexiv:** $a \sim a \Leftrightarrow P(a) = P(a)$. Das stimmt immer.

**Symmetrisch:** $a \sim b \Leftrightarrow P(a) = P(b) \Leftrightarrow P(b) = P(a) \Leftrightarrow b \sim a$.

**Transitiv:** Aus $P(a) = P(b)$ und $P(b) = P(c)$ folgt $P(a) = P(c)$, also $a \sim c$.

Damit ist $\sim$ eine **Äquivalenzrelation**. Die Klassen sind zum Beispiel $\{2, 4, 8, 16, \dots\}$ (alle Zahlen mit $P = \{2\}$) und $\{6, 12, 18, 24, \dots\}$ (alle mit $P = \{2, 3\}$). Die Zahl $1$ hat $P(1) = \emptyset$ und bildet allein eine Klasse.

## Ordnungsrelationen

:::note[Definition]
Eine Relation $R$ auf $A$ heißt **Ordnungsrelation** (genauer: Halbordnung), wenn sie **reflexiv, antisymmetrisch und transitiv** ist. Gilt zusätzlich, dass je zwei Elemente $x, y$ vergleichbar sind, also $x \,R\, y$ oder $y \,R\, x$, dann heißt sie **totale Ordnung**.
:::

:::tip[In einfachen Worten]
Eine Ordnung legt fest, wer "vor" wem kommt, und jeder ist mit sich selbst "höchstens gleich". Bei einer totalen Ordnung lassen sich alle in eine Reihe stellen, wie Zahlen auf dem Zahlenstrahl. Bei einer Halbordnung dürfen manche Paare unvergleichbar sein.
:::

**Beispiele für Ordnungen.**

- $\leq$ auf den Zahlen ist eine totale Ordnung.
- $\subseteq$ auf $\mathcal{P}(\{1,2\})$ ist reflexiv, antisymmetrisch und transitiv, aber **nicht total**: $\{1\}$ und $\{2\}$ sind unvergleichbar.
- "Gleiche Matrikelnummer" ist eine Ordnung (und zugleich eine Äquivalenzrelation), denn sie bedeutet nur Gleichheit: Aus $m(x) = m(y)$ folgt $x = y$, weil Matrikelnummern eindeutig sind.

### Aufgabe: Teilmengen der Primteiler

Mit $P$ wie oben wird auf $\mathbb{N}$ eine Relation $R$ definiert durch $a \,R\, b \Leftrightarrow P(a) \subseteq P(b)$. Untersuche $R$ auf Reflexivität, Symmetrie, Antisymmetrie und Transitivität. Ist $R$ eine Äquivalenz- oder eine Ordnungsrelation?

**Lösung.** Wir prüfen die Eigenschaften einzeln.

**Reflexiv:** $a \,R\, a \Leftrightarrow P(a) \subseteq P(a)$. Jede Menge ist Teilmenge von sich selbst.

**Transitiv:** Seien $a \,R\, b$ und $b \,R\, c$, also $P(a) \subseteq P(b)$ und $P(b) \subseteq P(c)$. Dann gilt $P(a) \subseteq P(c)$, also $a \,R\, c$.

**Nicht symmetrisch.** Wähle $a = 2$ und $b = 6$:

$$
P(2) = \{2\} \subseteq \{2, 3\} = P(6) \quad\text{(wahr)}, \qquad P(6) = \{2, 3\} \subseteq \{2\} = P(2) \quad\text{(falsch)} .
$$

Aus $a \,R\, b$ folgt also nicht $b \,R\, a$. Damit ist $R$ **keine Äquivalenzrelation**.

**Nicht antisymmetrisch.** Wähle $a = 2$ und $b = 4$:

$$
P(2) = \{2\} = P(4) \;\Rightarrow\; 2 \,R\, 4 \text{ und } 4 \,R\, 2, \quad\text{aber } 2 \neq 4 .
$$

Beide Richtungen gelten für zwei verschiedene Zahlen. Damit ist $R$ **keine Ordnungsrelation**.

## Der Vergleich

| Eigenschaft | Äquivalenzrelation | Ordnungsrelation |
|---|---|---|
| reflexiv | ja | ja |
| symmetrisch | ja | nein (meist) |
| antisymmetrisch | nein (meist) | ja |
| transitiv | ja | ja |

:::caution[Stolperstelle]
Die Gleichheit ist **beides zugleich**: Sie ist reflexiv, symmetrisch, antisymmetrisch und transitiv. Eine Relation, die nicht transitiv ist, wird weder das eine noch das andere. Ein Beispiel ist "ist befreundet mit": Wenn A mit B und B mit C befreundet ist, muss A nicht mit C befreundet sein. Und "$P(a) \subseteq P(b)$" ist reflexiv und transitiv, aber weder symmetrisch noch antisymmetrisch, also weder Äquivalenz noch Ordnung.
:::
