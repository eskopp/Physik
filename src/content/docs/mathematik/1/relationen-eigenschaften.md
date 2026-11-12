---
title: "Eigenschaften von Relationen"
description: "Reflexiv, symmetrisch, antisymmetrisch, transitiv: Was sie bedeuten und wie man sie prüft."
sidebar:
  order: 6
  label: "Eigenschaften"
---

*In einem Satz: Man beschreibt eine Relation, indem man prüft, welche von fünf typischen Regeln für sie gelten.*

## Die fünf Eigenschaften

Sei $R$ eine Relation auf einer Menge $A$.

:::note[Definition]
$R$ heißt

- **reflexiv**, wenn jedes Element zu sich selbst in Relation steht: $\forall a \in A:\; a \,R\, a$.
- **irreflexiv**, wenn kein Element zu sich selbst in Relation steht: $\forall a \in A:\; \neg(a \,R\, a)$.
- **symmetrisch**, wenn die Relation in beide Richtungen gilt: $\forall a,b \in A:\; a \,R\, b \Rightarrow b \,R\, a$.
- **antisymmetrisch**, wenn aus Relation in beide Richtungen schon Gleichheit folgt: $\forall a,b \in A:\; (a \,R\, b \land b \,R\, a) \Rightarrow a = b$.
- **transitiv**, wenn sich Relationen verketten lassen: $\forall a,b,c \in A:\; (a \,R\, b \land b \,R\, c) \Rightarrow a \,R\, c$.
:::

:::tip[In einfachen Worten]
**Reflexiv:** Jeder steht in Beziehung zu sich selbst, wie bei "ist gleich alt wie". **Symmetrisch:** Die Beziehung gilt immer in beide Richtungen, wie "sitzt neben". **Antisymmetrisch:** Gilt sie in beide Richtungen, dann sind es dieselben Dinge, wie bei $\leq$. **Transitiv:** Ein Umweg über einen Dritten ist nicht nötig, wie bei "ist größer als". Wer größer ist als jemand, der größer ist als du, ist auch größer als du.
:::

### Beispiele

Auf $A = \{1, 2, 3\}$ betrachten wir fünf Relationen: $a \leq b$, $a = b$, $a < b$ sowie die beiden Relationen $R_4 = \{(1,2),(2,1)\}$ und $R_5 = \{(1,2),(2,1),(1,3)\}$. Es gilt:

| Eigenschaft | $\leq$ | $=$ | $<$ | $R_4$ | $R_5$ |
|---|---|---|---|---|---|
| reflexiv | ja | ja | nein | nein | nein |
| irreflexiv | nein | nein | ja | ja | ja |
| symmetrisch | nein | ja | nein | ja | nein |
| antisymmetrisch | ja | ja | ja | nein | nein |
| transitiv | ja | ja | ja | nein | nein |

:::caution[Stolperstelle]
Symmetrisch und antisymmetrisch sind **keine Gegensätze**. Die Gleichheit $a = b$ ist beides zugleich. Die Relation $R_5$ ist keins von beiden. Auch reflexiv und irreflexiv schließen sich nicht in jedem Fall aus: Auf der leeren Menge gilt beides, und eine Relation kann weder das eine noch das andere sein, wenn nur manche Elemente zu sich selbst in Relation stehen.
:::

## Eigenschaften widerlegen

Um eine Eigenschaft nachzuweisen, muss man sie für **alle** Elemente zeigen. Um sie zu **widerlegen**, genügt ein einziges Gegenbeispiel (siehe [Logik und Notation](/mathematik/1/logik-und-notation/), Verneinung von $\forall$).

**Beispiel:** Die Relation $R_4 = \{(1,2),(2,1)\}$ auf $\{1,2,3\}$ ist nicht transitiv. Es gilt $1 \,R_4\, 2$ und $2 \,R_4\, 1$. Transitivität würde $1 \,R_4\, 1$ verlangen, aber $(1,1) \notin R_4$. Damit ist ein Gegenbeispiel gefunden.

## Relationen ergänzen

Fehlt einer Relation eine Eigenschaft, kann man fehlende Paare hinzufügen.

- **Reflexiv machen:** alle Paare $(a, a)$ ergänzen.
- **Symmetrisch machen:** zu jedem Paar $(a, b)$ das Paar $(b, a)$ ergänzen.
- **Transitiv machen:** zu $(a,b)$ und $(b,c)$ das Paar $(a,c)$ ergänzen.

**Beispiel:** Die Relation $R = \{(1,2),(2,3)\}$ auf $\{1,2,3\}$ soll reflexiv, symmetrisch und transitiv werden. Man ergänzt $(1,1),(2,2),(3,3)$, dann $(2,1),(3,2)$, und dann verlangt die Transitivität unter anderem $(1,3)$ und $(3,1)$. Am Ende liegen alle $9$ Paare von $A \times A$ in der Relation, es sind also $7$ Paare neu.

:::caution[Stolperstelle]
Die Reihenfolge ist wichtig. Ergänzt man zuerst die Transitivität und danach die Symmetrie, entstehen wieder Lücken: Aus $\{(1,2),(2,3)\}$ wird erst $\{(1,2),(1,3),(2,3)\}$, nach dem Symmetrisieren fehlen aber zum Beispiel $(1,1)$ für die Transitivität. Prüfe nach dem Ergänzen immer **alle** Eigenschaften noch einmal.
:::
