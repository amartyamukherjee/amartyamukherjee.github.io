---
title: "Physics-Informed Neural Network Policy Iteration: Algorithms, Convergence, and Verification"
collection: publications
permalink: /publication/2024-03-26-PINN-Policy
excerpt: 'We approach the problem of optimal control for nonlinear systems by employing extreme learning machines (ELM) and physics-informed neural networks (PINN) to construct successive approximations to the Generalized Hamilton-Jacobi-Bellman (GHJB) equation. We show that these approximations converge uniformly to the viscosity solution of the Hamilton-Jacobi-Bellman (HJB) equation. Our proposed algorithms, ELM policy iteration (ELM-PI) and PINN policy iteration (PINN-PI) are trained to minimize the loss function given by the GHJB equation for three different control problems and outperform existing reinforcement learning and optimal control algorithms in the literature.'
date: 2024-2-15
venue: 'International Conference on Machine Learning (ICML)'
paperurl: 'https://arxiv.org/pdf/2402.10119'
citation: 'Meng, Y., Zhou, R., Mukherjee, A., Fitzsimmons, M., Song, C., Liu, J. (2024). &quot;Physics-Informed Neural Network Policy Iteration: Algorithms, Convergence, and Verification.&quot; <i>International Conference on Machine Learning</i>'
---
Solving nonlinear optimal control problems is a challenging task, particularly for highdimensional problems. We propose algorithms for model-based policy iterations to solve nonlinear optimal control problems with convergence guarantees. The main component of our approach is an iterative procedure that utilizes neural approximations to solve linear partial differential equations (PDEs), ensuring convergence. We present two variants of the algorithms. The first variant
formulates the optimization problem as a linear least square problem, drawing inspiration from extreme learning machine (ELM) for solving PDEs. This variant efficiently handles low-dimensional problems with high accuracy. The second variant
is based on a physics-informed neural network (PINN) for solving PDEs and has the potential to address high-dimensional problems. We demonstrate that both algorithms outperform traditional approaches, such as Galerkin methods, by a significant margin. We provide a theoretical analysis of both algorithms in terms of convergence of neural
approximations towards the true optimal solutions in a general setting. Furthermore, we employ formal verification techniques to demonstrate the verifiable stability of the resulting controllers.