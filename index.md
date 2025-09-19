---
layout: page
# title: AMI Lab
subtitle: <b>A</b>ug<b>M</b>ented <b>I</b>ntelligence  Laboratory
published: true
---


<div class="slider-container" style="position: relative; overflow: hidden;">
  <div id="slider" style="display: flex; transition: transform 0.5s ease;">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/AAAI25_2.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/AAAI25_4.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/ICIP_2024.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/MICCAI6.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/MICCAI3.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/MICCAI1.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/KCCV2024.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/CVPR24_1.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/CVPR24_3.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/CVPR24_4.jpg">
    <img src="https://raw.githubusercontent.com/ailabkhu/ailabkhu.github.io/master/img/photo/CVPR24_5.jpg">
  </div>

  <!-- 좌우 버튼 -->
<button class="prev" onclick="moveSlide(-1)">&#10094;</button>
<button class="next" onclick="moveSlide(1)">&#10095;</button>


</div>

<style>
.slider-container {
  position: relative;
  width: 800px;
  height: 500px;
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
  height: 500px;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background:rgba(153, 15, 24, 0.3); /* 반투명 검정 */
  border: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: white; /* 화살표는 흰색 */
  cursor: pointer;
  padding: 0rem 0.83rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3); /* 부드러운 그림자 */
  backdrop-filter: blur(5px); /* 배경 흐림 */
}

.prev:hover, .next:hover {
  background: rgba(153, 15, 24, 0.6); /* hover 시 좀 더 진하게 */
  transform: translateY(-50%) scale(1.1); /* hover 시 약간 커짐 */
}

.prev { left: 10px; }
.next { right: 10px; }

/* 동그라미 표시 */
#dots {
  text-align: center;
  margin-top: 20px;
}
#dots span {
  cursor: pointer;
  font-size: 2rem;
  margin: 0 5px;
}
@media (max-width: 1000px) {
  .slider-container {
    width: 450px;
    height: 300px;
  }
  #slider img {
    width: 450px;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
  .prev, .next {
    font-size: 1.5rem;
    padding: 0.4rem 0.6rem;
  }
}

@media (max-width: 600px) {
  .slider-container {
    width: 300px;
    height: 200px;
  }
  #slider img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: center;
  }
  .prev, .next {
    font-size: 1.2rem;
    padding: 0.3rem 0.5rem;
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
- Sep. 2025 One paper (on Explainable AI) got accepted to **NeurIPS 2025** as **Spotlight**! Contrats!
- Aug. 2025 Prof. Seong Tae Kim gave a talk at Workshop on Developing Globally Reliable AI systems for Automated Surgical Procedures in Munich
- Jun. 2025 Three papers got accepted to **MICCAI 2025**! Congrats Ka Young, Enki, Hyeon Bae!
- May 2025 One paper got accepted to **Neural Networks (IF: 6.0, JCR IF Rank 10.5%)**! Congrats Soyoun!
- May 2025 One paper got accepted to **IEEE Geoscience and Remote Sensing Letters (IF: 4.0, JCR IF Rank 10.4%)**! Congrats Enki, Soyoun, Oh Sung!
- May 2025 One paper got accepted to **ICML 2025**! Congrats!
- Apr. 2025 Prof. Seong Tae Kim delivered an invited talk at the [POSTECH CSE/GSAI Seminar](https://ai.postech.ac.kr/seminar_info/view/page/2/id/634#u)
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

#Explainable AI #Reliable AI #Responsible AI #Multimodal AI #Surgical AI
