---
title: Logik und Notation
description: Aussagen, Verknüpfungen und Quantoren, die Sprache der Mathematik.
weight: 1
aliases:
  - "/mathematik/1/logik-und-notation/"
---

*In einem Satz: Die Mathematik hat eine eigene kurze Schrift, und wer die Zeichen $\forall$, $\exists$, $\Rightarrow$ und $\Leftrightarrow$ lesen kann, versteht jeden Beweis.*

## Aussagen und Verknüpfungen

> [!NOTE] Definition
> Eine **Aussage** ist ein Satz, der entweder wahr oder falsch ist. Aus Aussagen $A$ und $B$ entstehen neue Aussagen:
>
> | Zeichen | Name | Lies |
> |---|---|---|
> | $\neg A$ | Negation | "nicht $A$" |
> | $A \land B$ | Konjunktion | "$A$ und $B$" |
> | $A \lor B$ | Disjunktion | "$A$ oder $B$" (auch beides) |
> | $A \Rightarrow B$ | Implikation | "wenn $A$, dann $B$" |
> | $A \Leftrightarrow B$ | Äquivalenz | "$A$ genau dann, wenn $B$" |

> [!TIP] In einfachen Worten
> Das mathematische "oder" ist nie "entweder oder". Es ist auch wahr, wenn beide Teile stimmen. Die Implikation $A \Rightarrow B$ ist ein Versprechen: "Wenn es regnet, nehme ich einen Schirm mit." Gebrochen ist es nur, wenn es regnet und du keinen Schirm dabei hast. Regnet es nicht, ist das Versprechen nie gebrochen, egal was du tust.

### Wahrheitstafeln

Eine **Wahrheitstafel** listet auf, was eine Verknüpfung ergibt, wenn man für $A$ und $B$ jede mögliche Kombination von wahr (w) und falsch (f) einsetzt.

**Nicht, $\neg A$.** Dreht den Wahrheitswert um.

| $A$ | $\neg A$ |
|---|---|
| w | f |
| f | w |

**Und, $A \land B$.** Wahr nur dann, wenn beide Teile wahr sind.

| $A$ | $B$ | $A \land B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | f |
| f | f | f |

**Oder, $A \lor B$.** Falsch nur dann, wenn beide Teile falsch sind.

| $A$ | $B$ | $A \lor B$ |
|---|---|---|
| w | w | w |
| w | f | w |
| f | w | w |
| f | f | f |

**Wenn-dann, $A \Rightarrow B$.** Falsch nur dann, wenn $A$ wahr und $B$ falsch ist. Das ist der gebrochene Schirm-Versprechen-Fall aus dem Kasten oben.

| $A$ | $B$ | $A \Rightarrow B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | w |
| f | f | w |

**Genau dann, wenn, $A \Leftrightarrow B$.** Wahr nur dann, wenn $A$ und $B$ denselben Wahrheitswert haben.

| $A$ | $B$ | $A \Leftrightarrow B$ |
|---|---|---|
| w | w | w |
| w | f | f |
| f | w | f |
| f | f | w |

Alle vier Verknüpfungen auf einen Blick:

| $A$ | $B$ | $A \land B$ | $A \lor B$ | $A \Rightarrow B$ | $A \Leftrightarrow B$ |
|---|---|---|---|---|---|
| w | w | w | w | w | w |
| w | f | f | w | f | f |
| f | w | f | w | w | f |
| f | f | f | f | w | w |

> [!CAUTION] Stolperstelle
> $A \Rightarrow B$ ist **nicht** dasselbe wie $B \Rightarrow A$. Aus "Wenn es regnet, ist die Straße nass" folgt nicht "Wenn die Straße nass ist, regnet es". Die Straße kann auch von einem Putzwagen nass sein. Gleichwertig zu $A \Rightarrow B$ ist dagegen die **Kontraposition** $\neg B \Rightarrow \neg A$: "Ist die Straße trocken, dann regnet es nicht."

### Warum die Verneinung einer Implikation „A und nicht B“ bedeutet

Die Implikation ist nur falsch, wenn $A$ wahr und $B$ falsch ist. Genau dann ist $A \land \neg B$ wahr. In allen anderen drei Zeilen der Wahrheitstafel ist $A \Rightarrow B$ wahr und $A \land \neg B$ falsch. Also gilt

$$
\neg(A \Rightarrow B) \;\Leftrightarrow\; A \land \neg B .
$$

Das ist wichtig für Widerspruchsbeweise und Gegenbeispiele.

## Tautologie und Kontradiktion

> [!NOTE] Definition
> Eine zusammengesetzte Aussage heißt **Tautologie**, wenn sie für jede Belegung ihrer Teilaussagen mit wahr oder falsch wahr ist. Sie heißt **Kontradiktion**, wenn sie für jede Belegung falsch ist.

> [!TIP] In einfachen Worten
> Eine Tautologie ist zwingend wahr, ganz egal, was die einzelnen Aussagen sind. "Es regnet oder es regnet nicht" stimmt immer. Eine Kontradiktion ist unmöglich: "Es regnet und es regnet nicht" kann nie stimmen. Beides sagt nichts über die Welt, es steckt allein in der Form der Aussage.

### Beispiel

Für $A \lor \neg A$ und $A \land \neg A$ gilt:

| $A$ | $\neg A$ | $A \lor \neg A$ | $A \land \neg A$ |
|---|---|---|---|
| w | f | w | f |
| f | w | w | f |

In der dritten Spalte steht nur "w", also ist $A \lor \neg A$ eine Tautologie (der **Satz vom ausgeschlossenen Dritten**). In der vierten Spalte steht nur "f", also ist $A \land \neg A$ eine Kontradiktion.

Auch die Kontraposition aus der Stolperstelle oben lässt sich so beweisen. Die Aussage $(A \Rightarrow B) \Leftrightarrow (\neg B \Rightarrow \neg A)$ ist in jeder Zeile wahr:

| $A$ | $B$ | $A \Rightarrow B$ | $\neg B \Rightarrow \neg A$ | $(A \Rightarrow B) \Leftrightarrow (\neg B \Rightarrow \neg A)$ |
|---|---|---|---|---|
| w | w | w | w | w |
| w | f | f | f | w |
| f | w | w | w | w |
| f | f | w | w | w |

Zwei Aussagen sind also **gleichwertig**, wenn ihre Äquivalenz eine Tautologie ist. Genauso zeigt man die Regeln von De Morgan:

$$
\neg(A \land B) \Leftrightarrow (\neg A \lor \neg B), \qquad
\neg(A \lor B) \Leftrightarrow (\neg A \land \neg B) .
$$

> [!CAUTION] Stolperstelle
> Eine Tautologie ist nicht dasselbe wie eine wahre Aussage. "Es regnet" kann heute wahr sein, ist aber keine Tautologie, weil es morgen falsch sein kann. Tautologien sind wahr, weil ihre **Form** es erzwingt, nicht wegen der Umstände.

## Quantoren

> [!NOTE] Definition
> Das Zeichen $\forall$ heißt **Allquantor** und bedeutet "für alle". Das Zeichen $\exists$ heißt **Existenzquantor** und bedeutet "es gibt mindestens ein". Für eine Eigenschaft $P(x)$ gilt zum Beispiel
>
> $$ \forall x \in \mathbb{R}:\; x^2 \geq 0 \qquad\text{und}\qquad \exists x \in \mathbb{R}:\; x^2 = 4 . $$

> [!TIP] In einfachen Worten
> $\forall$ ist ein Versprechen für **jedes** Element. Ein einziger Fall, in dem es nicht stimmt, reicht, um es zu widerlegen. $\exists$ ist eine Suche: Ein einziges Beispiel genügt, um es zu beweisen.

### Verneinung

Beim Verneinen vertauschen sich die Quantoren, und die Eigenschaft wird verneint:

$$
\neg\bigl(\forall x:\, P(x)\bigr) \;\Leftrightarrow\; \exists x:\, \neg P(x), \qquad
\neg\bigl(\exists x:\, P(x)\bigr) \;\Leftrightarrow\; \forall x:\, \neg P(x) .
$$

**Beispiel:** Die Aussage "Für alle $x \in \mathbb{R}$ gilt $x > 0$" ist falsch. Ihre Verneinung lautet "Es gibt ein $x \in \mathbb{R}$ mit $x \leq 0$". Ein Beispiel dafür ist $x = -1$. Damit ist die Ausgangsaussage widerlegt.
