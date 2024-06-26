---
title: "Enhancing Reinforcement Learning in Vision-Based Environments with Optical Flow"
collection: publications
permalink: /publication/2023-12-05-Optical-Flow-RL
excerpt: 'While convolutional neural networks have been effective in extracting meaningful features from frames, the representation of motion in reinforcement learning tasks remains a challenge. We propose an approach to improve the performance of RL models in Atari environments by concatenating OF with raw image frames as input.'
date: 2023-12-05
venue: 'Journal of Computational Vision and Imaging Systems'
paperurl: '/files/OpticalFlow_RL.pdf'
citation: 'Mukherjee, A., Liu, J. (2024). &quot;Enhancing Reinforcement Learning in Vision-Based Environments with Optical Flow.&quot; <i>Journal of Computational Vision and Imaging Systems</i>, 9(1), 1–3. DOI: https://doi.org/10.15353/jcvis.v9i1.10000'
---
Reinforcement learning (RL) has emerged as a powerful technique for training agents to excel in a wide range of sequential decision-making tasks, including playing video games in the Atari 2600 environment. While convolutional neural networks (CNNs) have been effective in extracting meaningful features from frames, the representation of motion remains a challenge. Optical flow (OF) gives information about the motion in sequential image data such as videos, which makes it useful in reinforcement learning. In this paper, we propose an approach to improve the performance of RL models in Atari environments by concatenating OF with raw image frames as input. Our experiments show that adding OF to an environment improves the training of the Deep Q Network (DQN) model and shows higher rewards compared to concatenating the present frame with its previous frame.