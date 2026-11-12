---
title: "Eigenschaften von Relationen"
description: "Reflexiv, irreflexiv, symmetrisch, antisymmetrisch, transitiv: Schreibweise, Beispiel mit Rechenweg und Gegenbeispiel."
sidebar:
  order: 2
  label: "Eigenschaften"
---

*In einem Satz: Man beschreibt eine Relation, indem man prüft, welche von fünf typischen Regeln für sie gelten.*

## Schreibweise und Vorgehen

Sei $R$ eine Relation auf einer Menge $A$, also $R \subseteq A \times A$. Statt $(a, b) \in R$ schreibt man auch $a \,R\, b$. Beide Schreibweisen bedeuten dasselbe. In allen Beispielen unten ist $A = \{1, 2, 3\}$.

Jede der fünf Eigenschaften ist eine Regel, die für **alle** Elemente oder Paare gelten muss. Deshalb gehst du immer so vor:

- **Nachweisen:** Du prüfst die Regel für jedes Element oder jedes Paar einzeln, bis du alle durch hast.
- **Widerlegen:** Du suchst **ein** Gegenbeispiel. Ein einziger Fall, in dem die Regel verletzt ist, genügt.

Warum das so ist, steht im Artikel [Logik und Notation](/mathematik/1/logik-und-mengen/logik-und-notation/) bei der Verneinung von $\forall$.

## Reflexiv

:::note[Definition]
$R$ heißt **reflexiv**, wenn jedes Element zu sich selbst in Relation steht:

$$
\forall a \in A:\; a \,R\, a \qquad\text{das heißt}\qquad (a, a) \in R \ \text{für jedes } a \in A .
$$

Widerlegt wird die Eigenschaft durch ein einziges Element: $\exists a \in A:\; (a, a) \notin R$.
:::

:::tip[In einfachen Worten]
Jeder steht in Beziehung zu sich selbst. Bei "ist gleich alt wie" ist das so: Jeder ist so alt wie er selbst.
:::

**Beispiel mit Rechenweg.** Sei $R = \{(1,1),\ (2,2),\ (3,3),\ (1,2)\}$. Wir prüfen für jedes Element $a$ das Paar $(a, a)$:

- $a = 1$: $(1,1) \in R$ ✓
- $a = 2$: $(2,2) \in R$ ✓
- $a = 3$: $(3,3) \in R$ ✓

Alle drei Paare liegen in $R$. Also ist $R$ reflexiv. Das zusätzliche Paar $(1,2)$ stört nicht.

**Gegenbeispiel.** Sei $S = \{(1,1),\ (2,2),\ (1,2)\}$. Für $a = 1$ und $a = 2$ passt es, aber für $a = 3$ gilt $(3,3) \notin S$. Damit ist $S$ **nicht** reflexiv.

## Irreflexiv

:::note[Definition]
$R$ heißt **irreflexiv**, wenn kein Element zu sich selbst in Relation steht:

$$
\forall a \in A:\; \neg(a \,R\, a) \qquad\text{das heißt}\qquad (a, a) \notin R \ \text{für jedes } a \in A .
$$

Widerlegt wird die Eigenschaft durch ein einziges Element: $\exists a \in A:\; (a, a) \in R$.
:::

:::tip[In einfachen Worten]
Niemand steht in Beziehung zu sich selbst. Bei "ist größer als" ist das so: Niemand ist größer als er selbst.
:::

**Beispiel mit Rechenweg.** Sei $R = \{(1,2),\ (2,3)\}$. Wir prüfen für jedes $a$, dass $(a, a)$ **nicht** in $R$ liegt:

- $a = 1$: $(1,1) \notin R$ ✓
- $a = 2$: $(2,2) \notin R$ ✓
- $a = 3$: $(3,3) \notin R$ ✓

Also ist $R$ irreflexiv.

**Gegenbeispiel.** Sei $S = \{(1,1),\ (1,2)\}$. Für $a = 1$ gilt $(1,1) \in S$. Das ist ein einziger Verstoß, also ist $S$ **nicht** irreflexiv. Wegen $(2,2) \notin S$ ist $S$ auch nicht reflexiv. Eine Relation kann also **weder reflexiv noch irreflexiv** sein.

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

**Beispiel mit Rechenweg.** Sei $R = \{(1,2),\ (2,1),\ (3,3)\}$. Wir nehmen jedes Paar $(a, b)$ aus $R$ und prüfen, ob das umgedrehte Paar $(b, a)$ auch in $R$ liegt:

- $(1,2)$: Umkehrung $(2,1) \in R$ ✓
- $(2,1)$: Umkehrung $(1,2) \in R$ ✓
- $(3,3)$: Umkehrung $(3,3) \in R$ ✓

Alle Paare haben ihre Umkehrung in $R$. Also ist $R$ symmetrisch.

**Gegenbeispiel.** Sei $S = \{(1,2),\ (2,1),\ (1,3)\}$. Das Paar $(1,3)$ liegt in $S$, seine Umkehrung $(3,1)$ aber nicht. Damit ist $S$ **nicht** symmetrisch.

## Antisymmetrisch

:::note[Definition]
$R$ heißt **antisymmetrisch**, wenn aus Relation in beide Richtungen schon Gleichheit folgt:

$$
\forall a, b \in A:\; (a \,R\, b \land b \,R\, a) \Rightarrow a = b .
$$

Widerlegt wird die Eigenschaft durch ein einziges Paar: $\exists a, b \in A:\; a \,R\, b \land b \,R\, a \land a \neq b$.
:::

:::tip[In einfachen Worten]
Zwei **verschiedene** Elemente dürfen nie in beide Richtungen zueinander in Relation stehen. Bei "ist kleiner oder gleich" ist das so: Aus $a \leq b$ und $b \leq a$ folgt $a = b$.
:::

**Beispiel mit Rechenweg.** Sei $R = \{(1,1),\ (1,2),\ (2,3)\}$. Wir betrachten jedes Paar $(a, b)$ mit $a \neq b$ und prüfen, ob die Umkehrung $(b, a)$ fehlt:

- $(1,2)$: Umkehrung $(2,1) \notin R$ ✓
- $(2,3)$: Umkehrung $(3,2) \notin R$ ✓
- $(1,1)$: Hier ist $a = b$, es gibt nichts zu prüfen.

Kein Paar mit verschiedenen Elementen kommt in beide Richtungen vor. Also ist $R$ antisymmetrisch.

**Gegenbeispiel.** Sei $S = \{(1,2),\ (2,1)\}$. Es gilt $1 \,S\, 2$ und $2 \,S\, 1$, aber $1 \neq 2$. Das ist der gesuchte Verstoß, also ist $S$ **nicht** antisymmetrisch.

## Transitiv

:::note[Definition]
$R$ heißt **transitiv**, wenn sich Relationen verketten lassen:

$$
\forall a, b, c \in A:\; (a \,R\, b \land b \,R\, c) \Rightarrow a \,R\, c .
$$

Widerlegt wird die Eigenschaft durch eine einzige Kette: $\exists a, b, c \in A:\; a \,R\, b \land b \,R\, c \land \neg(a \,R\, c)$.
:::

:::tip[In einfachen Worten]
Ein Umweg über einen Dritten ist nicht nötig. Bei "ist größer als" ist das so: Ist Anna größer als Ben und Ben größer als Carla, dann ist Anna größer als Carla.
:::

**Beispiel mit Rechenweg.** Sei $R = \{(1,2),\ (2,3),\ (1,3)\}$. Wir suchen alle Ketten, also zwei Paare $(a, b)$ und $(b, c)$, bei denen das zweite Element des ersten Paars das erste des zweiten Paars ist:

- $(1,2)$ und $(2,3)$ bilden eine Kette. Gefordert ist $(1,3)$, und $(1,3) \in R$ ✓
- Das Paar $(1,3)$ endet in $3$, aber kein Paar beginnt mit $3$. Keine weitere Kette.
- Das Paar $(2,3)$ endet ebenfalls in $3$. Keine weitere Kette.

Die einzige Kette ist erfüllt. Also ist $R$ transitiv.

**Gegenbeispiel.** Sei $S = \{(1,2),\ (2,3)\}$. Die Kette $(1,2)$ und $(2,3)$ verlangt $(1,3)$, aber $(1,3) \notin S$. Damit ist $S$ **nicht** transitiv.

## Überblick an bekannten Relationen

Auf $A = \{1, 2, 3\}$ betrachten wir fünf Relationen: $a \leq b$, $a = b$, $a < b$ sowie $R_4 = \{(1,2),(2,1)\}$ und $R_5 = \{(1,2),(2,1),(1,3)\}$. Es gilt:

| Eigenschaft | $\leq$ | $=$ | $<$ | $R_4$ | $R_5$ |
|---|---|---|---|---|---|
| reflexiv | ja | ja | nein | nein | nein |
| irreflexiv | nein | nein | ja | ja | ja |
| symmetrisch | nein | ja | nein | ja | nein |
| antisymmetrisch | ja | ja | ja | nein | nein |
| transitiv | ja | ja | ja | nein | nein |

:::caution[Stolperstelle]
Symmetrisch und antisymmetrisch sind **keine Gegensätze**. Die Gleichheit $a = b$ ist beides zugleich. Die Relation $R_5$ ist keins von beiden. Auch bei reflexiv und irreflexiv gilt: Auf einer nichtleeren Menge schließen sie sich gegenseitig aus, aber eine Relation kann **keins von beiden** sein, wenn nur manche Elemente zu sich selbst in Relation stehen.
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
