---
title: Potenzmengen
description: Die Menge aller Teilmengen einer Menge und wie viele es sind.
sidebar:
  order: 3
---

*In einem Satz: Die Potenzmenge einer Menge ist die Menge aller Auswahlen, die man aus ihr treffen kann.*

## Definition und Anzahl

:::note[Definition]
Die **Potenzmenge** einer Menge $A$ ist die Menge aller Teilmengen von $A$:

$$
\mathcal{P}(A) = \{M \mid M \subseteq A\} .
$$

Hat $A$ genau $n$ Elemente, dann hat $\mathcal{P}(A)$ genau $2^n$ Elemente.
:::

:::tip[In einfachen Worten]
Für jedes Element von $A$ entscheidest du: nehme ich es in meine Auswahl oder nicht? Jede Kombination dieser Ja-Nein-Entscheidungen ergibt eine Teilmenge. Die Elemente der Potenzmenge sind selbst Mengen.
:::

### Beispiele

Für $A = \{a, b\}$ gibt es vier Teilmengen:

$$
\mathcal{P}(A) = \bigl\{\emptyset,\ \{a\},\ \{b\},\ \{a,b\}\bigr\} .
$$

Für $A = \{1,2,3\}$ gibt es $2^3 = 8$ Teilmengen: $\emptyset$, $\{1\}$, $\{2\}$, $\{3\}$, $\{1,2\}$, $\{1,3\}$, $\{2,3\}$ und $\{1,2,3\}$.

Auch die leere Menge hat eine Potenzmenge. Sie enthält genau eine Teilmenge, nämlich $\emptyset$ selbst:

$$
\mathcal{P}(\emptyset) = \{\emptyset\}, \qquad
\mathcal{P}\bigl(\mathcal{P}(\emptyset)\bigr) = \bigl\{\emptyset,\ \{\emptyset\}\bigr\} .
$$

Das passt zur Formel: $2^0 = 1$ und $2^1 = 2$.

:::caution[Stolperstelle]
Unterscheide $\in$ und $\subseteq$. Für $A = \{a, b\}$ gilt $\{a\} \in \mathcal{P}(A)$, denn $\{a\}$ ist eine Teilmenge von $A$. Es gilt aber $a \notin \mathcal{P}(A)$, denn $a$ ist ein Element von $A$ und selbst keine Menge in $\mathcal{P}(A)$. Außerdem liegen immer $\emptyset \in \mathcal{P}(A)$ und $A \in \mathcal{P}(A)$.
:::

### Warum es genau $2^n$ Teilmengen sind

Nummeriere die Elemente $a_1, \dots, a_n$. Für jedes $a_i$ gibt es zwei Möglichkeiten: Es liegt in der Teilmenge oder nicht. Diese Entscheidungen sind voneinander unabhängig. Also gibt es insgesamt

$$
\underbrace{2 \cdot 2 \cdots 2}_{n\text{-mal}} = 2^n
$$

verschiedene Kombinationen, und jede liefert genau eine Teilmenge.

## Potenzmengen und Teilmengen

Aus $A \subseteq B$ folgt $\mathcal{P}(A) \subseteq \mathcal{P}(B)$. Das lässt sich in drei Schritten beweisen:

1. Sei $M \in \mathcal{P}(A)$ beliebig. Nach der Definition heißt das $M \subseteq A$.
2. Wegen $A \subseteq B$ gilt dann auch $M \subseteq B$, denn jedes Element von $M$ liegt in $A$ und damit in $B$.
3. Also ist $M \in \mathcal{P}(B)$.

Da $M$ beliebig war, ist $\mathcal{P}(A) \subseteq \mathcal{P}(B)$. Dieses Vorgehen mit dem "beliebigen Element" erklärt der Artikel [Beweise mit Mengen](/mathematik/1/beweise-mit-mengen/) genauer.
