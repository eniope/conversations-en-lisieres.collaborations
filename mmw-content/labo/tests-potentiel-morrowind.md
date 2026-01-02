---
title: Banc de tests – affichage global
---

# Titre de niveau 1 — Vérification typographique

Paragraphe standard destiné à tester la **police de corps**, l’interligne, la largeur de colonne et la lisibilité générale.  
Texte volontairement neutre, sans enjeu sémantique, afin de concentrer l’attention sur la **forme** plutôt que sur le fond.

Texte avec **gras**, *italique*, ***gras + italique***, `code inline`, et un lien externe :  
https://example.org

---

## Titre de niveau 2 — Navigation et chrome

Lien interne vers l’accueil : [[index]]

Lien interne fictif : [[page-inexistante]]

Objectif :
- observer le comportement du menu horizontal
- vérifier l’alignement
- détecter les débordements
- observer le footer au chargement

---

### Titre de niveau 3 — Hiérarchie fine

Paragraphe court pour observer l’espacement vertical entre niveaux de titres.

---

# Callouts standards (socle Morrowind)

> [!note]
> Callout **note** standard.  
> Sert à vérifier le style de base des encadrés.

> [!info]
> Callout **info** (infobox).  
> Doit activer les styles définis dans `infobox-callout.scss`.

> [!warning]
> Callout **warning**.  
> Vérifie contrastes, bordures, icônes éventuelles.

> [!caption]
> Callout **caption**.  
> Sert à tester `caption-callout.scss`.

> [!maintenance]
> Callout **maintenance**.  
> Vérifie `maintenance-template-callout.scss`.

---

# Colonnes

> [!column]
> ### Colonne A
> Texte de test pour la colonne A.  
> Vérifie largeur, marges, alignement vertical.

> [!column]
> ### Colonne B
> Texte de test pour la colonne B.  
> Vérifie comportement en parallèle.

---

# Images et médias

Image avec largeur contrainte :

![[image-test.png|400]]

Texte sous l’image pour vérifier :
- marges verticales
- interaction image / texte
- règles de `image-adjustments.scss`

---

# Transclusions

Transclusion simple :

![[index]]

Objectif :
- vérifier `transclusion-adjustments.scss`
- observer marges, encadrements, séparation visuelle

---

# Code et syntaxe

Bloc de code :

```js
function testQuartz() {
  console.log("Test syntax highlighting");
}
