---
title: Geschwindigkeit
description: Wie schnell sich etwas bewegt, als mittlere und als momentane Größe.
sidebar:
  order: 1
---

*In einem Satz: Die Geschwindigkeit sagt, wie viel Strecke du in einer bestimmten Zeit schaffst.*

## Mittlere Geschwindigkeit

:::note[Definition]
Legt ein Körper in der Zeit $\Delta t$ den Weg $\Delta s$ zurück, dann ist seine **mittlere Geschwindigkeit**

$$
\bar v = \frac{\Delta s}{\Delta t} .
$$

Die SI-Einheit ist Meter pro Sekunde, $\mathrm{m/s}$. Es gilt $1\,\mathrm{m/s} = 3{,}6\,\mathrm{km/h}$.
:::

:::tip[In einfachen Worten]
Die Formel fragt: Wie viele Meter schaffst du in einer Sekunde? Du teilst die ganze Strecke durch die ganze Zeit und tust so, als wärst du die ganze Zeit gleich schnell gewesen.
:::

### Beispiel

Eine Läuferin legt $100\,\mathrm{m}$ in $20\,\mathrm{s}$ zurück:

$$
\bar v = \frac{100\,\mathrm{m}}{20\,\mathrm{s}} = 5\,\mathrm{m/s} = 18\,\mathrm{km/h} .
$$

:::caution[Stolperstelle]
Die mittlere Geschwindigkeit ist **nicht** der Mittelwert aus zwei Geschwindigkeiten. Fährst du eine Strecke hin mit $60\,\mathrm{km/h}$ und zurück mit $40\,\mathrm{km/h}$, dann sind es im Schnitt nicht $50\,\mathrm{km/h}$, sondern $48\,\mathrm{km/h}$. Auf der langsamen Hälfte verbringst du mehr Zeit.
:::

<details>
<summary>Herleitung der 48 km/h</summary>

Die einfache Strecke sei $s$. Die Zeiten sind $t_1 = s/60\,\mathrm{km/h}$ und $t_2 = s/40\,\mathrm{km/h}$. Der Gesamtweg ist $2s$. Damit gilt

$$
\bar v = \frac{2s}{t_1 + t_2} = \frac{2}{\frac{1}{60} + \frac{1}{40}}\,\mathrm{km/h} = 48\,\mathrm{km/h} .
$$

Die Strecke $s$ kürzt sich heraus.

</details>

## Momentane Geschwindigkeit

:::note[Definition]
Die **momentane Geschwindigkeit** zu einem Zeitpunkt $t$ ist der Grenzwert der mittleren Geschwindigkeit, wenn das Zeitintervall gegen null geht. Das ist die Ableitung des Ortes nach der Zeit:

$$
v(t) = \lim_{\Delta t \to 0} \frac{\Delta x}{\Delta t} = \frac{\mathrm{d}x}{\mathrm{d}t} .
$$
:::

:::tip[In einfachen Worten]
Das ist die Anzeige am Tacho in genau diesem Augenblick. Du misst die mittlere Geschwindigkeit über ein immer kürzeres Zeitstück, bis es praktisch ein einzelner Moment ist.
:::

Im Ort-Zeit-Diagramm ist die Geschwindigkeit die **Steigung** der Kurve. Eine steile Kurve bedeutet schnell, eine waagerechte Kurve bedeutet Stillstand.
