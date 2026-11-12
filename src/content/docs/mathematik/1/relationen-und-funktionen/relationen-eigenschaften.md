---
title: "Eigenschaften von Relationen"
description: "Reflexiv, irreflexiv, symmetrisch, antisymmetrisch, transitiv: Formel, Beweis als Rechenkette und Gegenbeispiel."
sidebar:
  order: 2
  label: "Eigenschaften"
---

*In einem Satz: Man beschreibt eine Relation, indem man prüft, welche von fünf typischen Regeln für sie gelten.*

## Schreibweise und Vorgehen

Sei $R$ eine Relation auf einer Menge $A$, also $R \subseteq A \times A$. Statt $(a, b) \in R$ schreibt man auch $a \,R\, b$. In allen Beispielen unten ist $A = \mathbb{N} = \{1, 2, 3, \dots\}$, und die Relation ist durch eine **Regel** gegeben, zum Beispiel $a \,R\, b \Leftrightarrow a \leq b$.

Jede der fünf Eigenschaften ist eine Aussage über **alle** Elemente. Deshalb gibt es zwei Wege:

- **Nachweisen:** Du nimmst beliebige Elemente $a, b, c$ und formst die Regel Schritt für Schritt um, bis die Behauptung dasteht. Beispiele sind kein Beweis.
- **Widerlegen:** Du suchst **ein** Gegenbeispiel mit konkreten Zahlen. Ein einziger Fall genügt.

Warum das so ist, steht im Artikel [Logik und Notation](/mathematik/1/logik-und-mengen/logik-und-notation/) bei der Verneinung von $\forall$.

## Reflexiv

:::note[Definition]
$R$ heißt **reflexiv**, wenn jedes Element zu sich selbst in Relation steht:

$$
\forall a \in A:\; a \,R\, a .
$$

Widerlegt wird die Eigenschaft durch ein einziges Element: $\exists a \in A:\; \neg(a \,R\, a)$.
:::

:::tip[In einfachen Worten]
Jeder steht in Beziehung zu sich selbst. Bei "hat dieselbe Parität wie" ist das so: Jede Zahl ist gerade oder ungerade wie sie selbst.
:::

**Beispiel mit Rechenweg.** Sei $a \,R\, b \Leftrightarrow a + b$ ist gerade. Wir setzen $b = a$ ein:

$$
a \,R\, a \;\Leftrightarrow\; a + a \text{ ist gerade} \;\Leftrightarrow\; 2a \text{ ist gerade} .
$$

Die letzte Aussage stimmt für jedes $a \in \mathbb{N}$, denn $2a = 2 \cdot a$. Also gilt $a \,R\, a$ für alle $a$, und $R$ ist reflexiv.

**Gegenbeispiel.** Sei $a \,R\, b \Leftrightarrow a < b$. Dann ist $a \,R\, a \Leftrightarrow a < a$, und das ist falsch. Schon für $a = 1$ gilt $1 < 1$ nicht. Also ist $<$ **nicht** reflexiv.

## Irreflexiv

:::note[Definition]
$R$ heißt **irreflexiv**, wenn kein Element zu sich selbst in Relation steht:

$$
\forall a \in A:\; \neg(a \,R\, a) .
$$

Widerlegt wird die Eigenschaft durch ein einziges Element: $\exists a \in A:\; a \,R\, a$.
:::

:::tip[In einfachen Worten]
Niemand steht in Beziehung zu sich selbst. Bei "ist kleiner als" ist das so: Keine Zahl ist kleiner als sie selbst.
:::

**Beispiel mit Rechenweg.** Sei $a \,R\, b \Leftrightarrow a < b$. Wir setzen $b = a$ ein:

$$
a \,R\, a \;\Leftrightarrow\; a < a .
$$

Die Aussage $a < a$ ist für **jedes** $a$ falsch. Also gilt $\neg(a \,R\, a)$ für alle $a$, und $<$ ist irreflexiv.

**Gegenbeispiel.** Sei $a \,R\, b \Leftrightarrow a \leq b$. Für $a = 1$ gilt $1 \leq 1$, also $1 \,R\, 1$. Das ist ein einziger Verstoß, also ist $\leq$ **nicht** irreflexiv. Wegen $a \leq a$ ist $\leq$ stattdessen reflexiv. Eine Relation kann auch **weder reflexiv noch irreflexiv** sein, wenn nur manche Elemente zu sich selbst in Relation stehen.

## Symmetrisch

:::note[Definition]
$R$ heißt **symmetrisch**, wenn die Relation immer in beide Richtungen gilt:

$$
\forall a, b \in A:\; a \,R\, b \Rightarrow b \,R\, a .
$$

Widerlegt wird die Eigenschaft durch ein einziges Paar: $\exists a, b \in A:\; a \,R\, b \land \neg(b \,R\, a)$.
:::

:::tip[In einfachen Worten]
Wenn $a$ zu $b$ passt, dann passt auch $b$ zu $a$. Bei "sitzt neben" ist das so: Sitzt Anna neben Ben, dann sitzt Ben neben Anna.
:::

**Beispiel mit Rechenweg.** Sei $a \,R\, b \Leftrightarrow a + b$ ist gerade. Seien $a, b$ beliebig mit $a \,R\, b$:

$$
a \,R\, b \;\Leftrightarrow\; a + b \text{ ist gerade} \;\Leftrightarrow\; b + a \text{ ist gerade} \;\Leftrightarrow\; b \,R\, a .
$$

Der mittlere Schritt ist das Kommutativgesetz $a + b = b + a$. Also folgt aus $a \,R\, b$ immer $b \,R\, a$, und $R$ ist symmetrisch.

**Gegenbeispiel.** Sei $a \,R\, b \Leftrightarrow a \leq b$. Wir wählen $a = 1$ und $b = 2$:

$$
1 \leq 2 \ \text{(wahr)}, \qquad 2 \leq 1 \ \text{(falsch)} .
$$

Es gilt $1 \,R\, 2$, aber nicht $2 \,R\, 1$. Damit ist $\leq$ **nicht** symmetrisch.

## Antisymmetrisch

:::note[Definition]
$R$ heißt **antisymmetrisch**, wenn aus Relation in beide Richtungen schon Gleichheit folgt:

$$
\forall a, b \in A:\; (a \,R\, b \land b \,R\, a) \Rightarrow a = b .
$$

Widerlegt wird die Eigenschaft durch ein einziges Paar: $\exists a, b \in A:\; a \,R\, b \land b \,R\, a \land a \neq b$.
:::

:::tip[In einfachen Worten]
Zwei **verschiedene** Elemente dürfen nie in beide Richtungen zueinander in Relation stehen. Bei "ist kleiner oder gleich" ist das so: Gilt $a$ vor $b$ und $b$ vor $a$, müssen sie dasselbe Element sein.
:::

**Beispiel mit Rechenweg.** Sei $a \,R\, b \Leftrightarrow a \leq b$. Seien $a, b$ beliebig mit $a \,R\, b$ und $b \,R\, a$:

$$
a \,R\, b \land b \,R\, a \;\Leftrightarrow\; a \leq b \land b \leq a \;\Rightarrow\; a = b .
$$

Der letzte Schritt gilt, weil eine Zahl, die weder größer noch kleiner als die andere ist, ihr gleich ist. Also ist $\leq$ antisymmetrisch.

**Gegenbeispiel.** Sei $a \,R\, b \Leftrightarrow a + b$ ist gerade. Wir wählen $a = 1$ und $b = 3$:

$$
1 + 3 = 4 \text{ ist gerade}, \quad 3 + 1 = 4 \text{ ist gerade}, \quad \text{aber } 1 \neq 3 .
$$

Es gilt $1 \,R\, 3$ und $3 \,R\, 1$ mit $1 \neq 3$. Damit ist diese Relation **nicht** antisymmetrisch.

## Transitiv

:::note[Definition]
$R$ heißt **transitiv**, wenn sich Relationen verketten lassen:

$$
\forall a, b, c \in A:\; (a \,R\, b \land b \,R\, c) \Rightarrow a \,R\, c .
$$

Widerlegt wird die Eigenschaft durch eine einzige Kette: $\exists a, b, c \in A:\; a \,R\, b \land b \,R\, c \land \neg(a \,R\, c)$.
:::

:::tip[In einfachen Worten]
Ein Umweg über einen Dritten ist nicht nötig. Bei "ist ein Teiler von" ist das so: Teilt $a$ die Zahl $b$ und $b$ die Zahl $c$, dann teilt $a$ auch $c$.
:::

**Beispiel mit Rechenweg.** Sei $a \,R\, b \Leftrightarrow a \mid b$, das heißt, $b = k \cdot a$ für ein $k \in \mathbb{N}$. Seien $a, b, c$ beliebig mit $a \,R\, b$ und $b \,R\, c$. Dann gibt es $k, l \in \mathbb{N}$ mit

$$
b = k \cdot a \qquad\text{und}\qquad c = l \cdot b .
$$

Wir setzen die erste Gleichung in die zweite ein:

$$
c = l \cdot b = l \cdot (k \cdot a) = (l \cdot k) \cdot a .
$$

Da $l \cdot k \in \mathbb{N}$ ist, folgt $a \mid c$, also $a \,R\, c$. Damit ist $\mid$ transitiv.

**Gegenbeispiel.** Sei $a \,R\, b \Leftrightarrow |a - b| = 1$ ("sind Nachbarzahlen"). Wir wählen $a = 1$, $b = 2$, $c = 3$:

$$
|1 - 2| = 1 \ \text{(wahr)}, \qquad |2 - 3| = 1 \ \text{(wahr)}, \qquad |1 - 3| = 2 \neq 1 \ \text{(falsch)} .
$$

Es gilt $1 \,R\, 2$ und $2 \,R\, 3$, aber nicht $1 \,R\, 3$. Damit ist diese Relation **nicht** transitiv.

## Überblick

Fünf Relationen auf $\mathbb{N}$ und ihre Eigenschaften:

| Eigenschaft | $a \leq b$ | $a < b$ | $a + b$ gerade | $a \mid b$ | $\lvert a - b \rvert = 1$ |
|---|---|---|---|---|---|
| reflexiv | ja | nein | ja | ja | nein |
| irreflexiv | nein | ja | nein | nein | ja |
| symmetrisch | nein | nein | ja | nein | ja |
| antisymmetrisch | ja | ja | nein | ja | nein |
| transitiv | ja | ja | ja | ja | nein |

:::caution[Stolperstelle]
Symmetrisch und antisymmetrisch sind **keine Gegensätze**. Die Gleichheit $a = b$ ist beides zugleich. Die Relation $\lvert a - b \rvert = 1$ ist symmetrisch, aber nicht antisymmetrisch, und $a \leq b$ ist antisymmetrisch, aber nicht symmetrisch. Es gibt auch Relationen, die keins von beiden sind. Auch reflexiv und irreflexiv schließen sich nur auf nichtleeren Mengen gegenseitig aus, und eine Relation kann **keins von beiden** sein.
:::

## Relationen ergänzen

Fehlt einer Relation eine Eigenschaft, kann man fehlende Paare hinzufügen.

- **Reflexiv machen:** alle Paare $(a, a)$ ergänzen.
- **Symmetrisch machen:** zu jedem Paar $(a, b)$ das Paar $(b, a)$ ergänzen.
- **Transitiv machen:** zu $(a,b)$ und $(b,c)$ das Paar $(a,c)$ ergänzen.

**Beispiel:** Die Relation $R = \{(1,2),(2,3)\}$ auf $\{1,2,3\}$ soll reflexiv, symmetrisch und transitiv werden. Man ergänzt $(1,1),(2,2),(3,3)$, dann $(2,1),(3,2)$, und dann verlangt die Transitivität unter anderem $(1,3)$ und $(3,1)$. Am Ende liegen alle $9$ Paare von $A \times A$ in der Relation, es sind also $7$ Paare neu.

:::caution[Stolperstelle]
Die Reihenfolge ist wichtig. Ergänzt man zuerst die Transitivität und danach die Symmetrie, entstehen wieder Lücken: Aus $\{(1,2),(2,3)\}$ wird erst $\{(1,2),(1,3),(2,3)\}$, nach dem Symmetrisieren fehlt aber zum Beispiel $(1,1)$ für die Transitivität. Prüfe nach dem Ergänzen immer **alle** Eigenschaften noch einmal.
:::
