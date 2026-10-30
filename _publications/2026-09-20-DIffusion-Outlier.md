---
title: "Score-based Outlier Generation via Controlling the Radon-Nikodym Derivative"
author: "Amartya Mukherjee, Tristan Milne, Kry Yik-Chau Lui, Stephanie Hazlewood, Jun Liu"
collection: publications
permalink: /publication/2026-09-20-DM-Outlier
date: 2026-09-20
venue: 'IEEE Conference on Decision and Control (IEEE CDC 2026)'
paperurl: 'https://arxiv.org/pdf/2609.12113'
---
Outliers are important for stress-testing algorithms and understanding system behaviour under rare conditions. Despite being commonly described as low-likelihood events, existing generative approaches rarely control likelihood explicitly. In this work, we introduce a measure-theoretic notion of outliers based on the distribution of log-likelihood values, which is guaranteed to assign higher probability mass to low-likelihood events with a specifiable magnitude. Building on this formulation, we derive how likelihood reweighting modifies the diffusion score and use this relation to motivate a controlled modification of the reverse-time dynamics. In particular, likelihood reweighting implies a scaling of the score function with a control term derived from the Radon-Nikodym derivative of the likelihood distributions. Correspondingly, the updated score function can be obtained with no retraining of the diffusion model. We exploit the Ornstein-Uhlenbeck semigroup underlying diffusion models to motivate an exponentially interpolated controller which approximates the true control. Experiments demonstrate controlled generation of low-likelihood samples while remaining consistent with the data geometry.
