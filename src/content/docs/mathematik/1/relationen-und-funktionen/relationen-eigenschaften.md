---
title: "Eigenschaften von Relationen"
description: "Reflexiv, symmetrisch, antisymmetrisch, transitiv: Formel, Beispiel aus der Hausaufgabe als Rechenkette und Gegenbeispiel."
sidebar:
  order: 2
  label: "Eigenschaften"
---

*In einem Satz: Man beschreibt eine Relation, indem man prüft, welche von vier typischen Regeln für sie gelten.*

## Schreibweise und Vorgehen

Sei $R$ eine Relation auf einer Menge $A$, also $R \subseteq A \times A$. Statt $(a, b) \in R$ schreibt man auch $a \,R\, b$. Mit $\mathbb{N}$ ist hier $\{1, 2, 3, \dots\}$ gemeint.

Jede der vier Eigenschaften ist eine Aussage über **alle** Elemente. Deshalb gibt es zwei Wege:

- **Nachweisen:** Du nimmst beliebige Elemente und formst die Regel Schritt für Schritt um, bis die Behauptung dasteht. Einzelne Beispiele beweisen nichts.
- **Widerlegen:** Du suchst **ein** Gegenbeispiel mit konkreten Werten. Ein einziger Fall genügt.

Warum das so ist, steht im Artikel [Logik und Notation](/mathematik/1/logik-und-mengen/logik-und-notation/) bei der Verneinung von $\forall$.

Für zwei Eigenschaften nutzen wir dieselbe Relation auf $\mathbb{N} \times \mathbb{N}$, deren Elemente Paare $(a, b)$ sind:

$$
(a, b) \,R\, (c, d) \;\Leftrightarrow\; a \cdot d \leq b \cdot c .
$$

Sie vergleicht Paare nach dem Verhältnis $a/b$ gegen $c/d$. Mit $a/b \leq c/d$ und Multiplikation mit $b \cdot d > 0$ entsteht genau $a \cdot d \leq b \cdot c$.

## Reflexiv

:::note[Definition]
$R$ heißt **reflexiv**, wenn jedes Element zu sich selbst in Relation steht:

$$
\forall x \in A:\; x \,R\, x .
$$

Widerlegt wird die Eigenschaft durch ein einziges Element: $\exists x \in A:\; \neg(x \,R\, x)$.
:::

:::tip[In einfachen Worten]
Jeder steht in Beziehung zu sich selbst. Bei "ist im selben Fachsemester wie" ist das so: Ich bin im selben Fachsemester wie ich selbst.
:::

**Aufgabe.** Auf $\mathbb{N} \times \mathbb{N}$ ist durch $(a, b) \,R\, (c, d) \Leftrightarrow a d \leq b c$ eine Relation erklärt. Untersuche $R$ auf Reflexivität.

**Lösung.** *Zu zeigen:* $(a, b) \,R\, (a, b)$ für **jedes** Paar, am Ende muss also $a \cdot b \leq b \cdot a$ dastehen.

Sei $(a, b)$ beliebig. Wir setzen $(c, d) = (a, b)$ ein:

$$
(a, b) \,R\, (a, b) \;\Leftrightarrow\; a \cdot b \leq b \cdot a \;\Leftrightarrow\; a \cdot b \leq a \cdot b .
$$

Der zweite Schritt ist das Kommutativgesetz $b \cdot a = a \cdot b$. Die letzte Aussage ist für alle $a, b \in \mathbb{N}$ wahr. Also gilt $(a, b) \,R\, (a, b)$ für jedes Paar, und $R$ ist reflexiv.

**Gegenbeispiel.** *Zu zeigen:* "kleiner als" ist nicht reflexiv, wir brauchen also **ein** $x$ mit $\neg(x \,R\, x)$. Sei $x \,R\, y \Leftrightarrow x < y$ auf $\mathbb{N}$. Dann ist $x \,R\, x \Leftrightarrow x < x$, und das ist falsch. Schon für $x = 1$ gilt $1 < 1$ nicht. Also ist "kleiner als" **nicht** reflexiv.

## Symmetrisch

:::note[Definition]
$R$ heißt **symmetrisch**, wenn die Relation immer in beide Richtungen gilt:

$$
\forall x, y \in A:\; x \,R\, y \Rightarrow y \,R\, x .
$$

Widerlegt wird die Eigenschaft durch ein einziges Paar: $\exists x, y \in A:\; x \,R\, y \land \neg(y \,R\, x)$.
:::

:::tip[In einfachen Worten]
Wenn $x$ zu $y$ passt, dann passt auch $y$ zu $x$. Bei "ist im selben Fachsemester wie" ist das so: Sind Anna und Ben im selben Fachsemester, dann sind es auch Ben und Anna.
:::

**Aufgabe.** Sei $M$ die Menge der Studierenden und $s(x)$ das Fachsemester von $x$. Zwei Studierende stehen in Relation $R_1$, wenn sie im selben Fachsemester sind, also $x \,R_1\, y \Leftrightarrow s(x) = s(y)$. Untersuche $R_1$ auf Symmetrie.

**Lösung.** *Zu zeigen:* Aus $x \,R_1\, y$ folgt $y \,R_1\, x$, am Ende muss also $s(y) = s(x)$ dastehen.

Seien $x, y \in M$ beliebig mit $x \,R_1\, y$:

$$
x \,R_1\, y \;\Leftrightarrow\; s(x) = s(y) \;\Leftrightarrow\; s(y) = s(x) \;\Leftrightarrow\; y \,R_1\, x .
$$

Der mittlere Schritt gilt, weil die Gleichheit von Zahlen in beide Richtungen gilt. Also folgt aus $x \,R_1\, y$ immer $y \,R_1\, x$, und $R_1$ ist symmetrisch.

**Aufgabe.** Ist die Relation $(a, b) \,R\, (c, d) \Leftrightarrow a d \leq b c$ auf $\mathbb{N} \times \mathbb{N}$ symmetrisch?

**Lösung.** Nein. *Zu zeigen:* Es gibt Paare mit $(a,b) \,R\, (c,d)$, aber **nicht** $(c,d) \,R\, (a,b)$. Wähle $(a, b) = (1, 2)$ und $(c, d) = (3, 4)$:

$$
(1,2) \,R\, (3,4) \;\Leftrightarrow\; 1 \cdot 4 \leq 2 \cdot 3 \;\Leftrightarrow\; 4 \leq 6 \quad\text{(wahr)},
$$

$$
(3,4) \,R\, (1,2) \;\Leftrightarrow\; 3 \cdot 2 \leq 4 \cdot 1 \;\Leftrightarrow\; 6 \leq 4 \quad\text{(falsch)}.
$$

Es gilt $(1,2) \,R\, (3,4)$, aber nicht $(3,4) \,R\, (1,2)$. Damit ist $R$ **nicht** symmetrisch.

## Antisymmetrisch

:::note[Definition]
$R$ heißt **antisymmetrisch**, wenn aus Relation in beide Richtungen schon Gleichheit folgt:

$$
\forall x, y \in A:\; (x \,R\, y \land y \,R\, x) \Rightarrow x = y .
$$

Widerlegt wird die Eigenschaft durch ein einziges Paar: $\exists x, y \in A:\; x \,R\, y \land y \,R\, x \land x \neq y$.
:::

:::tip[In einfachen Worten]
Zwei **verschiedene** Elemente dürfen nie in beide Richtungen zueinander in Relation stehen. Bei "hat dieselbe Matrikelnummer wie" ist das so: Wer dieselbe Matrikelnummer hat, ist dieselbe Person.
:::

**Aufgabe.** Sei $M$ die Menge der Studierenden und $m(x)$ die Matrikelnummer von $x$. Zwei Studierende stehen in Relation $R_2$, wenn sie dieselbe Matrikelnummer haben, also $x \,R_2\, y \Leftrightarrow m(x) = m(y)$. Untersuche $R_2$ auf Antisymmetrie.

**Lösung.** *Zu zeigen:* Aus $x \,R_2\, y$ und $y \,R_2\, x$ folgt $x = y$, am Ende muss also die **Gleichheit der Studierenden** dastehen.

Seien $x, y \in M$ mit $x \,R_2\, y$ und $y \,R_2\, x$:

$$
x \,R_2\, y \land y \,R_2\, x \;\Leftrightarrow\; m(x) = m(y) \land m(y) = m(x) \;\Rightarrow\; m(x) = m(y) \;\Rightarrow\; x = y .
$$

Der letzte Schritt gilt, weil Matrikelnummern eindeutig sind: Verschiedene Studierende haben verschiedene Nummern. Also ist $R_2$ antisymmetrisch.

**Aufgabe.** Ist die Relation $(a, b) \,R\, (c, d) \Leftrightarrow a d \leq b c$ auf $\mathbb{N} \times \mathbb{N}$ antisymmetrisch?

**Lösung.** Nein. *Zu zeigen:* Es gibt zwei **verschiedene** Paare, die in beide Richtungen in Relation stehen. Wähle $(a, b) = (1, 2)$ und $(c, d) = (2, 4)$:

$$
(1,2) \,R\, (2,4) \;\Leftrightarrow\; 1 \cdot 4 \leq 2 \cdot 2 \;\Leftrightarrow\; 4 \leq 4 \quad\text{(wahr)},
$$

$$
(2,4) \,R\, (1,2) \;\Leftrightarrow\; 2 \cdot 2 \leq 4 \cdot 1 \;\Leftrightarrow\; 4 \leq 4 \quad\text{(wahr)}.
$$

Beide Richtungen gelten, aber $(1,2) \neq (2,4)$. Damit ist $R$ **nicht** antisymmetrisch.

## Transitiv

:::note[Definition]
$R$ heißt **transitiv**, wenn sich Relationen verketten lassen:

$$
\forall x, y, z \in A:\; (x \,R\, y \land y \,R\, z) \Rightarrow x \,R\, z .
$$

Widerlegt wird die Eigenschaft durch eine einzige Kette: $\exists x, y, z \in A:\; x \,R\, y \land y \,R\, z \land \neg(x \,R\, z)$.
:::

:::tip[In einfachen Worten]
Ein Umweg über einen Dritten ist nicht nötig. Bei "ist im selben Fachsemester wie" ist das so: Ist Anna mit Ben und Ben mit Carla im selben Fachsemester, dann sind auch Anna und Carla im selben.
:::

**Aufgabe.** Zeige, dass die Relation $(a, b) \,R\, (c, d) \Leftrightarrow a d \leq b c$ auf $\mathbb{N} \times \mathbb{N}$ transitiv ist.

**Lösung.** *Zu zeigen:* Aus $(a, b) \,R\, (c, d)$ und $(c, d) \,R\, (e, f)$ folgt $(a, b) \,R\, (e, f)$. Am Ende muss also $a f \leq b e$ dastehen.

Seien $(a, b)$, $(c, d)$ und $(e, f)$ beliebig mit $(a, b) \,R\, (c, d)$ und $(c, d) \,R\, (e, f)$. Das bedeutet

$$
a d \leq b c \quad (1) \qquad\text{und}\qquad c f \leq d e \quad (2) .
$$

Wir multiplizieren (1) mit $f$ und (2) mit $b$. Das ist erlaubt, weil $f, b > 0$ sind und die Ungleichung dabei erhalten bleibt:

$$
\begin{aligned}
a d f &\leq b c f && (1) \cdot f \\
b c f &\leq b d e && (2) \cdot b .
\end{aligned}
$$

Beide Ungleichungen haben $b c f$ in der Mitte. Also gilt

$$
a d f \leq b c f \leq b d e \quad\Rightarrow\quad a d f \leq b d e .
$$

Jetzt teilen wir durch $d$. Das ist erlaubt, weil $d \geq 1$ ist:

$$
a d f \leq b d e \;\; | : d \quad\Rightarrow\quad a f \leq b e \;\Leftrightarrow\; (a, b) \,R\, (e, f) .
$$

Damit folgt aus $(a, b) \,R\, (c, d)$ und $(c, d) \,R\, (e, f)$ immer $(a, b) \,R\, (e, f)$. Also ist $R$ transitiv.

:::caution[Stolperstelle]
Die Division durch $d$ geht nur für $d \neq 0$. Rechnet man mit $\mathbb{N}_0 = \{0, 1, 2, \dots\}$, ist die Relation **nicht** transitiv. Gegenbeispiel: $(1,0) \,R\, (0,0)$ und $(0,0) \,R\, (0,1)$ sind beide wahr, denn $1 \cdot 0 \leq 0 \cdot 0$ und $0 \cdot 1 \leq 0 \cdot 0$. Aber $(1,0) \,R\, (0,1)$ wäre $1 \cdot 1 \leq 0 \cdot 0$, also $1 \leq 0$, und das ist falsch. Schreibe deshalb beim Beweis dazu, dass $\mathbb{N}$ bei $1$ beginnt.
:::

## Überblick

Vier Relationen aus den Beispielen und ihre Eigenschaften. Dabei ist $P(n)$ die Menge der Primteiler von $n$, zum Beispiel $P(12) = \{2, 3\}$.

| Eigenschaft | $a d \leq b c$ auf $\mathbb{N}^2$ | gleiches Fachsemester | gleiche Matrikelnummer | $P(a) \subseteq P(b)$ |
|---|---|---|---|---|
| reflexiv | ja | ja | ja | ja |
| symmetrisch | nein | ja | ja | nein |
| antisymmetrisch | nein | nein | ja | nein |
| transitiv | ja | ja | ja | ja |

:::caution[Stolperstelle]
Symmetrisch und antisymmetrisch sind **keine Gegensätze**. "Gleiche Matrikelnummer" ist beides zugleich, denn sie bedeutet nur Gleichheit. Die Relation $a d \leq b c$ ist keins von beiden. "Gleiches Fachsemester" ist symmetrisch, aber nicht antisymmetrisch, sobald zwei verschiedene Studierende im selben Fachsemester sind.
:::

## Relationen ergänzen

Fehlt einer Relation eine Eigenschaft, kann man fehlende Paare hinzufügen. Gesucht ist dann die **kleinste** Relation, die die gewünschten Eigenschaften hat und die alte Relation enthält.

- **Transitiv machen:** zu $(x,y)$ und $(y,z)$ das Paar $(x,z)$ ergänzen.
- **Reflexiv machen:** alle Paare $(x, x)$ ergänzen.
- **Symmetrisch machen:** zu jedem Paar $(x, y)$ das Paar $(y, x)$ ergänzen.

### Aufgabe: Kleinste Erweiterungen

Sei $A = \{a, b, c, d, e, f\}$ und
$$
R = \{(a,b),\ (c,b),\ (b,d),\ (e,f),\ (f,e)\} .
$$

Bestimme jeweils die Relation mit der kleinsten Elementanzahl, für die gilt:

- **a)** $R \subseteq R_1$ und $R_1$ ist transitiv.
- **b)** $R \subseteq R_2$ und $R_2$ ist transitiv und reflexiv.
- **c)** $R \subseteq R_3$ und $R_3$ ist symmetrisch, transitiv und reflexiv.

**Lösung.**

**a) Kleinste transitive Relation $R_1 \supseteq R$.** Wir suchen alle Ketten:

- $(a,b)$ und $(b,d)$ verlangen $(a,d)$.
- $(c,b)$ und $(b,d)$ verlangen $(c,d)$.
- $(e,f)$ und $(f,e)$ verlangen $(e,e)$.
- $(f,e)$ und $(e,f)$ verlangen $(f,f)$.

Mit den vier neuen Paaren entstehen keine weiteren Ketten, die Relation ist jetzt transitiv:

$$
R_1 = R \cup \{(a,d),\ (c,d),\ (e,e),\ (f,f)\}, \qquad |R_1| = 5 + 4 = 9 .
$$

**b) Kleinste transitive und reflexive Relation $R_2 \supseteq R$.** Zu $R_1$ fehlen noch die Paare $(a,a)$, $(b,b)$, $(c,c)$ und $(d,d)$. Die Paare $(e,e)$ und $(f,f)$ sind schon da. Die neuen Schleifen erzeugen keine neuen Ketten:

$$
R_2 = R_1 \cup \{(a,a),\ (b,b),\ (c,c),\ (d,d)\}, \qquad |R_2| = 9 + 4 = 13 .
$$

**c) Kleinste symmetrische, transitive und reflexive Relation $R_3 \supseteq R$.** Das ist eine Äquivalenzrelation. Wir sehen, welche Elemente die Paare von $R$ verbinden: $a, b, c, d$ hängen über $(a,b)$, $(c,b)$, $(b,d)$ zusammen, und $e, f$ hängen über $(e,f)$ zusammen. Eine Äquivalenzrelation muss innerhalb jeder solchen Gruppe **alle** Paare enthalten:

$$
R_3 = \{a,b,c,d\} \times \{a,b,c,d\} \;\cup\; \{e,f\} \times \{e,f\}, \qquad |R_3| = 4^2 + 2^2 = 16 + 4 = 20 .
$$

:::caution[Stolperstelle]
Die Reihenfolge ist wichtig. Ergänzt man zuerst die Transitivität und danach die Symmetrie, entstehen wieder Lücken. Prüfe nach dem Ergänzen immer **alle** gewünschten Eigenschaften noch einmal.
:::
