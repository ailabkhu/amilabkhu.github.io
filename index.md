---
layout: page
# title: AMI Lab
subtitle: <b>A</b>ug<b>M</b>ented <b>I</b>ntelligence  Laboratory
published: true
---


<div style="position: relative; width: 600px; height: 300px; margin: auto; overflow: hidden;">
  <div id="slider" style="display: flex; transition: transform 0.5s ease;">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/MICCAI1.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/KCCV2024.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/MICCAI3.jpg">
  </div>

  <!-- 좌우 버튼 -->
  <button onclick="moveSlide(-1)" style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); background: white; border: none; font-size: 2rem; cursor: pointer;">&#10094;</button>
  <button onclick="moveSlide(1)" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: white; border: none; font-size: 2rem; cursor: pointer;">&#10095;</button>

  <!-- 동그라미 표시 -->
  <div id="dots" style="text-align: center; margin-top: 10px;">
    <span onclick="currentSlide(0)" style="cursor: pointer; font-size: 2rem;">●</span>
    <span onclick="currentSlide(1)" style="cursor: pointer; font-size: 2rem;">●</span>
    <span onclick="currentSlide(2)" style="cursor: pointer; font-size: 2rem;">●</span>
  </div>
</div>

<style>
.slider-container {
  position: relative;
  width: 800px;
  height: 600px;
  margin: auto;
  overflow: hidden;
}

#slider {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

#slider img {
  width: 800px;
  height: 600px;
  object-fit: cover;
  flex-shrink: 0;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.prev { left: 10px; }
.next { right: 10px; }

#dots {
  text-align: center;
  margin-top: 10px;
}

#dots span {
  cursor: pointer;
  font-size: 2rem;
}

@media (max-width: 1000px) {
  .slider-container {
    width: 450px;
    height: 300px;
  }

  #slider img {
    width: 450px;
    height: 300px;
  }
}
</style>

<!-- slider.js 불러오기 -->
<script src="/assets/js/slider.js"></script>
Welcome to **AMI Lab** at **Kyung Hee University**!             
Augmented Intelligence means we are studying AI for humanity.                    
Key Technologies: Explainability, Reliability, Responsibility, Data-Efficiency, Human-level Understanding 

### Our Mission: 
- Make contributions to the community (Contribution rather than competition)
- Run with People

### Recent News
<hr>
- Mar. 2025 Enki is at New York University for six months as a visiting scholar (Global AI Frontier Lab.)
- Feb. 2025 One MICCAI 2025 workshop got accepted. Prof. Seong Tae Kim will serve as Co-Chair of [GRAIL (Workshop on GRaphs in biomedicAl Image anaLysis)](https://grail-miccai.github.io/) 
- Dec. 2024 One paper got accepted to **IEEE Transactions on Circuits and Systems for Video Technology (IF: 8.3, JCR IF Rank 5.5%)**! Congrats Enki!
- Dec. 2024 Two papers (on Vision-Language Models) got accepted to **AAAI 2025**! Congrats Minkuk, Hyeon Bae, Hamza, Abdullah, Yong Hyun!
- Oct. 2024: We have won the **MICCAI 2024** PhaKIR Challenge (1st prize) in the category of "Surgical Instrument Instance Segmentation" (part of EndoVis challenge). Congrats to Winners (Enki, Hyeon Bae, Oh Sung, Ka Young).  
- Jul. 2024 One paper got accepted to **ECCV 2024**! Congrats!
- Jun. 2024 One paper got accepted to **MICCAI 2024**! Congrats Hyeon Bae, Yong Hyun!
- Apr. 2024 A new research grant on Interactive Surgical Video Interpretation has been awarded from NRF (Outstanding Young Researcher Grant)! 
- Feb. 2024 Two papers (on Vision-Language Models) got accepted to **CVPR 2024**! Congrats Yong Hyun, Minkuk, Hyeon Bae!
- Feb. 2024 Prof. Seong Tae Kim will serve as an Area Chair of **MICCAI 2024**!
- Jan. 2024 Prof. Seong Tae Kim will serve another term (2024-2025) as an Associate Editor of **IEEE Transactions on Circuits and Systems for Video Technology (IEEE TCSVT)**!
- Nov. 2023 One paper got accepted to **Image and Vision Computing (IF: 4.7, JCR IF Rank 18.5%)**! Congrats Enki!
- Nov. 2023 One paper got accepted to **Neural Networks (IF: 7.8, JCR IF Rank 9.5%)**!         
- Feb. 2023 One paper got accepted to **CVPR 2023**! Congrats Yong Hyun!

#Explainable AI #Reliable AI #Responsible AI #Multimodal AI
