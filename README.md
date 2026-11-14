# Physik

Mitschriften, Übungen und Unterlagen zum Physikstudium (TU Ilmenau, Technische Physik). Die Seite liegt unter https://studium.erikskopp.de und ist mit Hugo und dem Theme Hextra gebaut.

Das Grundpraktikum liegt separat in `Grundpraktikum-der-Physik-1`.

## Aufbau

- `content/`: die Artikel, ein Ordner je Bereich und Modul, Startseite in `content/_index.md`
- `static/`: Dateien, die unverändert veröffentlicht werden (Favicon, Logo, `CNAME`)
- `hugo.yaml`: Konfiguration, Theme und Menü
- `.github/workflows/deploy.yml`: baut die Seite bei jedem Push auf `main` und veröffentlicht sie auf GitHub Pages

## Lokal bauen

```bash
hugo server         # Vorschau unter http://localhost:1313
hugo --gc --minify  # fertige Seite in public/
```
