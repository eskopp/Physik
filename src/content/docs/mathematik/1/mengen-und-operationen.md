---
title: Mengen und Mengenoperationen
description: Was eine Menge ist, wie man sie schreibt und wie man Mengen verknüpft.
sidebar:
  order: 2
  label: "Mengen"
---

*In einem Satz: Eine Menge ist eine Sammlung von Dingen, und es zählt nur, ob ein Ding drin ist, nicht wie oft oder in welcher Reihenfolge.*

## Mengen und Teilmengen

:::note[Definition]
Eine **Menge** fasst verschiedene Objekte, die **Elemente**, zusammen. Mit $x \in A$ schreibt man "$x$ ist Element von $A$" und mit $x \notin A$ das Gegenteil. Man gibt Mengen auf zwei Arten an:

$$
A = \{1, 2, 3\} \qquad\text{oder}\qquad A = \{x \in \mathbb{N} \mid x \leq 3 \text{ und } x \geq 1\} .
$$

Die **leere Menge** $\emptyset$ hat kein Element. Eine Menge $A$ ist **Teilmenge** von $B$, geschrieben $A \subseteq B$, wenn jedes Element von $A$ auch in $B$ liegt:

$$
A \subseteq B \;\Leftrightarrow\; \forall x:\; (x \in A \Rightarrow x \in B) .
$$

Gilt zusätzlich $A \neq B$, heißt $A$ **echte Teilmenge**, geschrieben $A \subsetneq B$. Zwei Mengen sind **gleich**, wenn sie sich gegenseitig enthalten:

$$
A = B \;\Leftrightarrow\; A \subseteq B \,\land\, B \subseteq A .
$$
:::

:::tip[In einfachen Worten]
Stell dir eine Tüte mit Murmeln vor. Eine Menge sagt nur, welche Sorten drin sind. $\{1, 2, 2, 3\}$ und $\{3, 1, 2\}$ sind dieselbe Menge. Eine Teilmenge ist eine Auswahl aus der Tüte, auch die leere Auswahl und die ganze Tüte zählen dazu.
:::

:::caution[Stolperstelle]
$\emptyset$ und $\{\emptyset\}$ sind verschieden. $\emptyset$ ist eine leere Tüte. $\{\emptyset\}$ ist eine Tüte, in der genau ein Ding liegt, nämlich eine leere Tüte. Also hat $\emptyset$ null Elemente und $\{\emptyset\}$ ein Element.
:::

### Warum die leere Menge Teilmenge jeder Menge ist

Für $\emptyset \subseteq A$ muss die Aussage "$x \in \emptyset \Rightarrow x \in A$" für jedes $x$ gelten. Die Vorbedingung $x \in \emptyset$ ist aber immer falsch. Nach der Wahrheitstafel der Implikation ist die Aussage dann wahr. Es gibt kein Element von $\emptyset$, das in $A$ fehlen könnte.

## Mengenoperationen

:::note[Definition]
Für Mengen $A$ und $B$ sind

$$
A \cup B = \{x \mid x \in A \lor x \in B\}, \qquad
A \cap B = \{x \mid x \in A \land x \in B\}, \qquad
A \setminus B = \{x \mid x \in A \land x \notin B\}
$$

die **Vereinigung**, der **Schnitt** und die **Differenz**.
:::

:::tip[In einfachen Worten]
Die Vereinigung wirft beide Tüten zusammen. Der Schnitt behält nur, was in beiden Tüten liegt. Die Differenz $A \setminus B$ nimmt aus $A$ alles heraus, was auch in $B$ liegt.
:::

### Beispiel

Für $A = \{1, 2, 3, 4\}$ und $B = \{3, 4, 5\}$ gilt

$$
A \cup B = \{1,2,3,4,5\}, \quad A \cap B = \{3,4\}, \quad A \setminus B = \{1,2\}, \quad B \setminus A = \{5\} .
$$

:::caution[Stolperstelle]
Die Differenz ist nicht symmetrisch. Im Beispiel ist $A \setminus B = \{1,2\}$, aber $B \setminus A = \{5\}$. Vereinigung und Schnitt dagegen sind vertauschbar: $A \cup B = B \cup A$ und $A \cap B = B \cap A$.
:::

Für Vereinigung und Schnitt gelten außerdem das Assoziativgesetz und das Distributivgesetz, zum Beispiel

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C) .
$$

Wie man so eine Gleichung beweist, zeigt der Artikel [Beweise mit Mengen](/mathematik/1/beweise-mit-mengen/).
