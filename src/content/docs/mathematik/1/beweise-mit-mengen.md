---
title: Beweise mit Mengen
description: Mit der Elementmethode Teilmengen und Gleichheiten von Mengen beweisen.
sidebar:
  order: 4
---

*In einem Satz: Um etwas über Mengen zu beweisen, nimmst du ein beliebiges Element und verfolgst, in welchen Mengen es liegen muss.*

## Die Elementmethode

:::note[Definition]
Die **Elementmethode** beweist Aussagen über Mengen auf der Ebene einzelner Elemente.

- Für $A \subseteq B$: Sei $x \in A$ **beliebig**. Zeige, dass dann $x \in B$ gilt.
- Für $A = B$: Zeige $A \subseteq B$ und $B \subseteq A$.
:::

:::tip[In einfachen Worten]
Du bist wie ein Detektiv, der einen beliebigen Verdächtigen herauspickt und seiner Spur folgt. Du darfst nichts Besonderes über ihn annehmen, nur das, was die Voraussetzungen hergeben. Landet er am Ende dort, wo du ihn haben willst, gilt das für jeden Verdächtigen.
:::

"Beliebig" heißt: Du hast kein bestimmtes Element im Kopf, sondern argumentierst für jedes mögliche. Dann gilt das Ergebnis für alle.

### Beispiel: Das Distributivgesetz

Zu zeigen ist $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.

**Schritt 1: "$\subseteq$".** Sei $x \in A \cap (B \cup C)$. Dann ist $x \in A$ und $x \in B \cup C$. Wir unterscheiden zwei Fälle:

- Ist $x \in B$, dann liegt $x$ in $A$ und in $B$, also $x \in A \cap B$.
- Ist $x \in C$, dann liegt $x$ in $A$ und in $C$, also $x \in A \cap C$.

In beiden Fällen ist $x \in (A \cap B) \cup (A \cap C)$.

**Schritt 2: "$\supseteq$".** Sei $x \in (A \cap B) \cup (A \cap C)$. Wieder zwei Fälle:

- Ist $x \in A \cap B$, dann ist $x \in A$ und $x \in B$. Wegen $B \subseteq B \cup C$ gilt $x \in B \cup C$. Also $x \in A \cap (B \cup C)$.
- Ist $x \in A \cap C$, dann folgt genauso $x \in A \cap (B \cup C)$.

Beide Richtungen sind gezeigt, also sind die Mengen gleich.

:::caution[Stolperstelle]
Ein Beispiel ist kein Beweis. Dass das Distributivgesetz für $A = \{1,2\}$, $B = \{2,3\}$ und $C = \{3,4\}$ stimmt, beweist es nicht für alle Mengen. Umgekehrt **widerlegt** ein einziges Gegenbeispiel eine allgemeine Behauptung.
:::

## Widerlegen mit einem Gegenbeispiel

Gilt die Behauptung $A \setminus (B \setminus C) = (A \setminus B) \setminus C$ für alle Mengen? Nein. Wähle $A = B = C = \{1\}$. Dann ist

$$
A \setminus (B \setminus C) = \{1\} \setminus \emptyset = \{1\}, \qquad
(A \setminus B) \setminus C = \emptyset \setminus \{1\} = \emptyset .
$$

Die beiden Mengen sind verschieden, die Behauptung ist damit widerlegt. Ein Gegenbeispiel genügt, weil die Behauptung für **alle** Mengen gelten soll. Das ist die Verneinung eines $\forall$-Satzes aus dem Artikel [Logik und Notation](/mathematik/1/logik-und-notation/).
