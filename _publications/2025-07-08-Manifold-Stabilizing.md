---
title: "Manifold-Guided Stabilization of Nonlinear Dynamical Systems with Diffusion Models"
collection: publications
permalink: /publication/2025-07-08-Manifold-Stabilizing
excerpt: 'We train a diffusion model on a dataset of asymptotically stable vector fields and employ Tweedie’s estimate to iteratively adjust control parameters, ensuring convergence to a stabilizing controller.'
date: 2025-07-08
venue: 'American Control Conference (ACC 2025)'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/11107555'
---
This paper introduces Manifold-Guided Stabilizing Control (MGSC), a novel approach to synthesizing stabilizing controllers for nonlinear dynamical systems using diffusion models. Our method formulates control synthesis as a search for the closest asymptotically stable vector field within a learned manifold of stable dynamics. We train a diffusion model on a dataset of asymptotically stable vector fields and employ Tweedie’s estimate to iteratively adjust control parameters, ensuring convergence to a stabilizing controller. This formulation enables zero-shot stabilization for previously unseen systems with significantly reduced computational cost. Our numerical experiments demonstrate that MGSC achieves stabilization in just 16 seconds, compared to 2 minutes in prior work, while generalizing effectively across different nonlinear control problems. These results highlight the potential of diffusion models as a powerful tool for fast, data-driven control synthesis.