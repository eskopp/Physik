---
title: "Beweismethoden"
description: "Direkter Beweis, Gegenbeispiel und Widerspruchsbeweis im Vergleich."
sidebar:
  order: 11
  label: "Beweismethoden"
---

*In einem Satz: Ein Beweis zeigt mit Schritten aus bekannten Aussagen, dass etwas immer stimmt, und es gibt drei Grundwege dorthin.*

## Voraussetzung, Behauptung, Beweis

:::note[Definition]
Eine mathematische Aussage hat meist die Form einer Implikation $A \Rightarrow B$. Dabei ist $A$ die **Voraussetzung**, also das, was man annehmen darf, und $B$ die **Behauptung**, also das, was zu zeigen ist. Ein **Beweis** ist eine Kette von logisch zwingenden Schritten von $A$ nach $B$. Jeder Schritt folgt aus Definitionen, bekannten Sätzen oder den vorigen Schritten.
:::

:::tip[In einfachen Worten]
Voraussetzung ist das, was du geschenkt bekommst. Behauptung ist das, wo du ankommen willst. Der Beweis ist der Weg dazwischen, und jeder Schritt muss begründet sein. Frag dich bei jeder Zeile: Warum darf ich das schreiben?
:::

## Der direkte Beweis

:::note[Definition]
Beim **direkten Beweis** startet man bei der Voraussetzung und folgert Schritt für Schritt die Behauptung. Dabei nimmt man ein **beliebiges** Objekt mit der verlangten Eigenschaft und benutzt nur, was die Voraussetzung hergibt.
:::

**Beispiel.** *Behauptung:* Die Summe zweier gerader Zahlen ist gerade.

*Beweis.* Seien $a$ und $b$ gerade. Nach der Definition gibt es ganze Zahlen $k$ und $m$ mit $a = 2k$ und $b = 2m$. Dann ist

$$
a + b = 2k + 2m = 2\,(k + m) .
$$

Da $k + m$ eine ganze Zahl ist, ist $a + b$ gerade. $\square$

## Das Gegenbeispiel

:::note[Definition]
Eine Aussage der Form "für alle $x$ gilt $P(x)$" ist **widerlegt**, sobald man **ein** $x$ findet, für das $P(x)$ falsch ist. Dieses $x$ heißt **Gegenbeispiel**.
:::

:::tip[In einfachen Worten]
Um etwas für alle zu beweisen, brauchst du eine Begründung, die für jeden Fall passt. Um es zu widerlegen, genügt ein einziger Fall, bei dem es schiefgeht.
:::

**Beispiel.** *Behauptung:* Für jede natürliche Zahl $n$ ist $n^2 + n + 41$ eine Primzahl.

Das stimmt für $n = 0, 1, \dots, 39$, die Behauptung ist aber trotzdem falsch. Für $n = 40$ gilt

$$
40^2 + 40 + 41 = 1681 = 41 \cdot 41 .
$$

Das ist keine Primzahl. Damit ist die Behauptung durch ein Gegenbeispiel widerlegt.

:::caution[Stolperstelle]
Ein Beispiel ist kein Beweis, auch nicht viele Beispiele. Die Formel oben liefert 40-mal in Folge eine Primzahl und versagt dann doch. Beispiele helfen beim Verstehen und beim Vermuten, bewiesen ist damit nichts. Ein Gegenbeispiel dagegen ist ein vollständiger Beweis dafür, dass eine Aussage falsch ist.
:::

## Der Widerspruchsbeweis

:::note[Definition]
Beim **Widerspruchsbeweis** nimmt man das **Gegenteil** der Behauptung an und leitet daraus eine falsche Aussage her, einen Widerspruch. Dann kann die Annahme nicht stimmen, und die Behauptung muss gelten.
:::

:::tip[In einfachen Worten]
Du tust so, als wäre die Behauptung falsch, und folgst den Konsequenzen. Kommt am Ende etwas Unmögliches heraus, war die Annahme falsch. Dann bleibt nur die Behauptung übrig.
:::

**Beispiel.** *Behauptung:* Es gibt keine größte natürliche Zahl.

*Beweis.* Angenommen, es gibt eine größte natürliche Zahl $N$. Dann ist auch $N + 1$ eine natürliche Zahl, und es gilt $N + 1 > N$. Das widerspricht der Annahme, dass $N$ die größte ist. Also gibt es keine größte natürliche Zahl. $\square$

:::caution[Stolperstelle]
Verwechsle den Widerspruchsbeweis nicht mit dem Gegenbeispiel. Das Gegenbeispiel zeigt, dass eine Aussage **falsch** ist, indem es einen Fall findet, in dem sie versagt. Der Widerspruchsbeweis zeigt, dass eine Aussage **wahr** ist, indem er ihr Gegenteil unmöglich macht.
:::

Wie man das Gegenteil einer Aussage richtig bildet, steht im Artikel [Logik und Notation](/mathematik/1/logik-und-notation/) unter Verneinung. Für Aussagen über alle natürlichen Zahlen gibt es eine eigene Methode, die [vollständige Induktion](/mathematik/1/vollstaendige-induktion/).
