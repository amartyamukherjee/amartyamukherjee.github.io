---
title: "Actor-Critic Methods using Physics-Informed Neural Networks: Control of a 1D PDE Model for Fluid-Cooled Battery Packs"
collection: publications
permalink: /publication/2023-05-18-Pack-Cooling
excerpt: 'This paper proposes an actor-critic algorithm for controlling the temperature of a battery pack using a cooling fluid. This is modeled by a coupled 1D partial differential equation (PDE) with a controlled advection term that determines the speed of the cooling fluid. We propose an algorithm that treats the value network as a Physics-Informed Neural Network (PINN) to solve for the continuous-time HJB equation rather than a discrete-time Bellman optimality equation, and we derive an optimal controller for the environment that we exploit to achieve optimal control.'
date: 2023-06-19
venue: 'ICML Workshop on New Frontiers in Learning, Control, and Dynamical Systems'
paperurl: 'https://openreview.net/pdf?id=0mFwZHN2FN'
citation: 'Mukherjee, A., Liu, J. (2023). &quot;Actor-Critic Methods using Physics-Informed Neural Networks: Control of a 1D PDE Model for Fluid-Cooled Battery Packs.&quot; <i>ICML Workshop on New Frontiers in Learning, Control, and Dynamical Systems</i>'
---
This paper proposes an actor-critic algorithm for controlling the temperature of a battery pack using a cooling fluid. This is modeled by a coupled 1D partial differential equation (PDE) with a controlled advection term that determines the speed of the cooling fluid. The Hamilton-Jacobi-Bellman (HJB) equation is a PDE that evaluates the optimality of the value function and determines an optimal controller. We propose an algorithm that treats the value network as a Physics-Informed Neural Network (PINN) to solve for the continuous-time HJB equation rather than a discrete-time Bellman optimality equation, and we derive an optimal controller for the environment that we exploit to achieve optimal control. Our experiments show that a hybrid-policy method that updates the value network using the HJB equation and updates the policy network identically to PPO achieves the best results in the control of this PDE system. 

[Poster](/files/PackCooling_poster.pdf) [Code](https://github.com/amartyamukherjee/stable-baselines3)