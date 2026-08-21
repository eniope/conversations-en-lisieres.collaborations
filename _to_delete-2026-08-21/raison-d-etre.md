---
type: note
title: "Raison d'être"
date: 2026-08-21
statut: en cours
draft: false
publish: true
description: "Pourquoi la question des données occupe une place particulière dans cette recherche, et l'enjeu des données interopérables."
---

# Raison d'être de ce dossier

Pourquoi consacrer un dossier aux données, dans une recherche qui part d'une vie vécue ?
Parce que la question des données n'est pas, ici, un détail technique : elle fait partie de l'enquête.
Elle vient de loin, comme le raconte l'[À propos](https://cooplab.org/) : une préoccupation ancienne pour la qualité de mes pensées, l'entrée en 2003 dans une vie numérique connectée, puis la rencontre du passage donnée → information → connaissance → capacité d'agir.

Mais surtout, elle pose une question que je ne veux pas régler en coulisses :

*Comment quelque chose qui arrive dans une vie devient-il une donnée, puis éventuellement une connaissance, sans que le geste de mise en données efface ce qu'il sélectionne, transforme et interprète ?*

Une expérience vécue n'est pas encore une donnée de recherche. Elle laisse des traces : notes, photographies, courriels, souvenirs consignés, documents, productions collectives, enregistrements, pages web. Certaines de ces traces sont ensuite sélectionnées, décrites, reliées, catégorisées. C'est à travers ces opérations qu'elles deviennent progressivement des données susceptibles d'être interrogées.

Cette transformation n'est pas neutre. C'est pourquoi ce dossier documente à la fois les données produites et les opérations par lesquelles elles le deviennent.

## L'enjeu des données interopérables dans la conception d'un modèle de données

Concevoir un modèle de données, c'est choisir des catégories : décider quelles entités existent (épisode, acteur, ressource, lieu, milieu, trace, question, capacité, fork...) et comment elles peuvent être reliées.
Ce choix n'est jamais neutre.
Catégoriser, c'est déjà interpréter. Un modèle détermine en partie ce qui pourra être retrouvé, rapproché, comparé, compté ou représenté. Il contribue donc à rendre certaines choses visibles et, dans le même mouvement, peut en laisser d'autres hors champ.

Un modèle peut être fermé, taillé pour un seul usage : le mien. Il peut aussi être conçu pour être interopérable, c'est-à-dire pour permettre à des données issues de systèmes, d'outils ou de mondes sociaux différents d'entrer en relation sans devoir être entièrement reconstruites à chaque passage.
C'est l'un des enjeux de la science ouverte et des principes qui visent à rendre les données trouvables, accessibles, interopérables et réutilisables.

Mais cette interopérabilité ne se réduit pas à choisir un format de fichier.
Rendre deux données combinables suppose aussi de décider ce qui peut être considéré comme commun ou équivalent entre elles, ce qui ne l'est pas, et quelles transformations leur circulation d'un système à l'autre leur fait subir.
L'interopérabilité devient alors une question épistémologique autant que technique.

L'enjeu est double, et il est en tension.
Trop personnel, mon modèle risque d'enfermer mes données dans un langage que personne d'autre ne peut réellement reprendre.
Trop standardisé, il risque au contraire d'aplatir ce que mon expérience et mes terrains ont de singulier sous des catégories conçues ailleurs et pour d'autres usages.
Le travail consiste donc moins à rechercher une interopérabilité maximale qu'à construire une interopérabilité explicite et située : identifier ce qui peut être partagé, ce qui peut être traduit, ce qui ne peut l'être qu'imparfaitement, et ce qu'il vaut mieux maintenir différent.
Une non-équivalence documentée peut parfois être plus féconde qu'une équivalence forcée.

Dans cette perspective, certains éléments du modèle pourraient remplir une fonction proche de celle d'un objet-frontière : conserver suffisamment d'identité commune pour permettre la coopération entre plusieurs univers de pratiques, tout en restant assez plastiques pour être saisis différemment selon les situations. Cette fonction ne peut cependant pas être décrétée par le modèle : elle devra être observée dans les usages qui en seront faits.

## Un modèle habitable et relié

Je cherche ainsi à construire un modèle qui demeure habitable pour moi, c'est-à-dire capable de rester proche des questions apparues dans l'expérience, tout en étant suffisamment relié à des standards partagés pour que ses données puissent circuler et être reprises.
Cela pourra passer par plusieurs niveaux :

- des identifiants stables, indépendants de la page ou de l'outil qui représente un objet ;
- des formats ouverts et structurés, permettant l'échange entre logiciels ;
- des vocabulaires partagés, lorsque des correspondances pertinentes existent ;
- des relations explicites avec des catégories plus générales utilisées ailleurs ;
- la conservation de la provenance des données et de leurs transformations ;
- l'indication du statut des rapprochements et interprétations produits au cours de l'enquête.

L'objectif n'est donc pas seulement qu'une machine puisse lire mes fichiers.
Il est aussi qu'une autre personne puisse comprendre d'où vient une donnée, comment elle a été constituée, quelles transformations elle a subies et à quel titre une relation entre deux éléments est proposée.

## Des données aux différentes représentations

Cette distinction devient concrète dans les instruments utilisés au cours de la recherche.
Une page Quartz, un point sur une carte, un événement dans une frise ou un nœud dans un graphe ne sont pas nécessairement quatre données différentes. Ils peuvent constituer quatre représentations d'une même entité ou d'une même trace.

Par exemple :

```
expérience ou événement
        ↓
trace
        ↓
donnée structurée
        ↓
 ┌──────┼─────────┬──────────┐
 ↓      ↓         ↓          ↓
Quartz  frise     carte      graphe
```

Cette distinction devient particulièrement importante lorsque plusieurs espaces de publication sont concernés.
`cooplab.org`, `lisieres.cooplab.org` et `these.cooplab.org` peuvent conserver des fonctions éditoriales différentes tout en s'appuyant progressivement sur des objets partageant des identifiants et des relations communes.
Une même ressource, un même acteur ou un même épisode pourrait alors apparaître dans plusieurs espaces sans être recréé comme une entité différente à chaque fois.

L'enjeu n'est plus simplement de pouvoir fusionner techniquement plusieurs bases ou plusieurs graphes.
Il devient :

*Qu'est-ce que cela signifie de dire que deux traces ou deux représentations provenant de contextes différents parlent de la même chose ?*

Et, symétriquement :

*À quel moment faut-il au contraire conserver leur différence ?*

## Les instruments comme partie de l'enquête

GoGoCarto structure des acteurs, des lieux et des initiatives selon certaines catégories. Si celles-ci peuvent dialoguer avec d'autres vocabulaires ou d'autres cartes, des rapprochements deviennent possibles. Dans le cas contraire, la carte demeure davantage isolée.
La frise chronologique et la carte-récit produisent déjà des informations structurées, datées et situées, susceptibles d'être lues à la fois par une personne et par une machine.
Obsidian organise les traces en amont.
Quartz les rend publiques sous certaines formes.
Les outils de graphe permettent de rendre visibles certaines relations.
Les IA peuvent contribuer à rechercher, rapprocher, reformuler ou proposer des relations dans le corpus.

Ces instruments ne sont pas de simples tuyaux transparents. Chacun sélectionne, transforme et donne une forme particulière au matériau. Ce qu'un instrument permet de rendre visible ou calculable fait donc lui-même partie de l'enquête.

La conception du modèle de données devient le lieu où ces différentes pièces pourront s'accorder, ou choisir de ne pas s'accorder, et où cette décision pourra être documentée.

## Une question qui reste ouverte

À ce stade, je ne cherche donc pas à stabiliser définitivement un modèle.
Je cherche à rendre son élaboration observable.
Les catégories pourront apparaître, se transformer, être abandonnées ou précisées. Leurs versions seront conservées et les raisons de ces transformations documentées.

L'interopérabilité participe de cette expérimentation.
Elle ne constitue pas une annexe technique ajoutée une fois le modèle construit. Elle met à l'épreuve le modèle lui-même :

*Que faut-il conserver pour qu'une donnée puisse quitter son contexte d'origine sans devenir muette sur les conditions de sa production ?*

Cette question prolonge celle qui ouvre ce dossier.

*Comment quelque chose qui arrive dans une vie devient-il une donnée ?*

Elle en ajoute une seconde :

*Comment une donnée constituée dans un monde peut-elle devenir utilisable dans un autre sans que le geste de mise en compatibilité efface ce qu'il sélectionne, transforme ou interprète ?*

C'est à cet endroit que les questions de données, de modélisation, d'interopérabilité et de connaissance cessent de pouvoir être séparées.

*Stéphane Caillaud · CC BY-SA 4.0*
