---
title: Beschleunigung
description: Wie schnell sich die Geschwindigkeit ändert.
sidebar:
  order: 2
---

*In einem Satz: Die Beschleunigung sagt, wie stark sich deine Geschwindigkeit pro Sekunde ändert.*

## Mittlere und momentane Beschleunigung

:::note[Definition]
Ändert sich die Geschwindigkeit in der Zeit $\Delta t$ um $\Delta v$, dann ist die **mittlere Beschleunigung**

$$
\bar a = \frac{\Delta v}{\Delta t} .
$$

Die **momentane Beschleunigung** ist die Ableitung der Geschwindigkeit nach der Zeit, also die zweite Ableitung des Ortes:

$$
a(t) = \frac{\mathrm{d}v}{\mathrm{d}t} = \frac{\mathrm{d}^2 x}{\mathrm{d}t^2} .
$$

Die SI-Einheit ist Meter pro Sekunde zum Quadrat, $\mathrm{m/s^2}$.
:::

:::tip[In einfachen Worten]
Beschleunigung ist die Änderung der Geschwindigkeit, nicht die Geschwindigkeit selbst. Wenn du auf das Gaspedal trittst oder bremst, beschleunigst du. Bei $2\,\mathrm{m/s^2}$ wird dein Tempo jede Sekunde um $2\,\mathrm{m/s}$ größer.
:::

### Beispiel

Ein Auto beschleunigt in $10\,\mathrm{s}$ von $0$ auf $100\,\mathrm{km/h}$. Zuerst in $\mathrm{m/s}$ umrechnen: $100\,\mathrm{km/h} \approx 27{,}8\,\mathrm{m/s}$. Dann

$$
\bar a = \frac{27{,}8\,\mathrm{m/s}}{10\,\mathrm{s}} \approx 2{,}8\,\mathrm{m/s^2} .
$$

:::caution[Stolperstelle]
Ein negatives Vorzeichen bei $a$ heißt nicht automatisch "bremsen". Es bedeutet nur, dass die Beschleunigung in die negative Richtung zeigt. Bewegt sich ein Körper schon in negative Richtung, macht ihn $a < 0$ sogar schneller. Gebremst wird, wenn $a$ und $v$ verschiedene Vorzeichen haben.
:::

<details>
<summary>Herleitung für konstante Beschleunigung</summary>

Ist $a$ konstant, dann ergibt Integrieren von $a = \mathrm{d}v/\mathrm{d}t$ mit der Anfangsgeschwindigkeit $v_0$

$$
v(t) = v_0 + a\,t .
$$

Noch einmal integriert, mit dem Anfangsort $x_0$, ergibt sich

$$
x(t) = x_0 + v_0\,t + \tfrac{1}{2}\,a\,t^2 .
$$

Für den freien Fall ist $a = g \approx 9{,}81\,\mathrm{m/s^2}$.

</details>
