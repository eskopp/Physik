---
title: "Vollständige Induktion"
description: "Aussagen für alle natürlichen Zahlen beweisen, mit Induktionsanfang und Induktionsschritt."
weight: 2
aliases:
  - "/mathematik/1/vollstaendige-induktion/"
---

*In einem Satz: Bei der vollständigen Induktion zeigst du, dass eine Aussage für die erste Zahl gilt und dass sie jedes Mal an die nächste Zahl weitergereicht wird.*

## Das Prinzip

> [!NOTE] Definition
> Sei $A(n)$ eine Aussage über natürliche Zahlen $n$. Um $A(n)$ für **alle** $n \geq n_0$ zu beweisen, zeigt man zwei Dinge:
>
> 1. **Induktionsanfang:** $A(n_0)$ ist wahr.
> 2. **Induktionsschritt:** Für jedes $n \geq n_0$ gilt: **Wenn** $A(n)$ wahr ist (die **Induktionsvoraussetzung**), **dann** ist auch $A(n+1)$ wahr (die **Induktionsbehauptung**).
>
> Daraus folgt, dass $A(n)$ für alle $n \geq n_0$ gilt.

> [!TIP] In einfachen Worten
> Stell dir eine lange Reihe Dominosteine vor. Der Induktionsanfang kippt den ersten Stein um. Der Induktionsschritt garantiert: Fällt ein Stein, dann fällt auch der nächste. Zusammen fallen alle. Je nach Vorlesung beginnt $\mathbb{N}$ bei $0$ oder bei $1$. Dann ist der Induktionsanfang $n_0 = 0$ oder $n_0 = 1$.

## Beispiel: Die Gaußsche Summenformel

*Behauptung:* Für alle $n \geq 1$ gilt

$$
1 + 2 + \dots + n = \frac{n\,(n+1)}{2} .
$$

**Induktionsanfang** ($n = 1$): Links steht $1$, rechts $\dfrac{1 \cdot 2}{2} = 1$. Die Aussage stimmt.

**Induktionsvoraussetzung:** Für ein festes $n \geq 1$ gelte $1 + 2 + \dots + n = \dfrac{n\,(n+1)}{2}$.

**Induktionsbehauptung:** Dann gilt auch für $n + 1$:

$$
1 + 2 + \dots + n + (n+1) = \frac{(n+1)\,(n+2)}{2} .
$$

**Induktionsschritt:** Wir beginnen mit der linken Seite der Behauptung. Den Anfang der Summe ersetzen wir mit der Induktionsvoraussetzung:

$$
\begin{aligned}
1 + 2 + \dots + n + (n+1)
&= \frac{n\,(n+1)}{2} + (n+1) && \text{(Induktionsvoraussetzung)} \\
&= (n+1)\left(\frac{n}{2} + 1\right) \\
&= \frac{(n+1)\,(n+2)}{2} .
\end{aligned}
$$

Das ist genau die rechte Seite der Induktionsbehauptung. Damit ist der Schritt gezeigt, und die Formel gilt für alle $n \geq 1$. $\square$

## Beispiel: Ungerade Zahlen

*Behauptung:* Die Summe der ersten $n$ ungeraden Zahlen ist $n^2$:

$$
1 + 3 + 5 + \dots + (2n - 1) = n^2 .
$$

Induktionsanfang ($n = 1$): $1 = 1^2$. Induktionsschritt: Gilt die Formel für $n$, dann ist

$$
1 + 3 + \dots + (2n-1) + (2n+1) = n^2 + 2n + 1 = (n+1)^2 .
$$

Also gilt sie auch für $n + 1$.

## Typische Verständnisfragen

**Warum darf ich die Induktionsvoraussetzung benutzen?** Im Induktionsschritt behauptest du nicht, dass $A(n)$ wahr ist. Du zeigst nur die Implikation "$A(n)$ wahr, dann $A(n+1)$ wahr". Eine Implikation darf man beweisen, indem man ihre Voraussetzung annimmt. Dass $A(n)$ wirklich wahr ist, folgt dann erst aus dem Induktionsanfang und der Kette der Schritte.

**Warum taucht beim Schritt ein zusätzlicher Summand auf?** Die Summe bis $n+1$ hat einen Summanden mehr als die Summe bis $n$. Du trennst ihn ab, ersetzt den Rest mit der Induktionsvoraussetzung und rechnest weiter.

**Was ist der Unterschied zwischen Induktionsvoraussetzung und zu beweisender Aussage?** Die Induktionsvoraussetzung ist $A(n)$ und darf im Schritt benutzt werden. Die zu beweisende Aussage in diesem Schritt ist $A(n+1)$, und die darf man **nicht** schon voraussetzen. Rechne daher immer von einer Seite aus und erreiche die andere.

> [!CAUTION] Stolperstelle
> Ohne Induktionsanfang beweist der Schritt nichts. Nimm die falsche Aussage $A(n)$: "$n = n + 1$". Der Schritt gelingt, denn aus $n = n + 1$ folgt durch Addition von $1$, dass $n + 1 = n + 2$ gilt. Trotzdem ist die Aussage für kein $n$ wahr, denn der Induktionsanfang $1 = 2$ ist falsch. Die Dominokette fällt nicht, wenn der erste Stein stehen bleibt.

Wie man das Vorgehen als Beweismethode einordnet, steht im Artikel [Beweismethoden](/mathematik/1/beweise/beweismethoden/).
