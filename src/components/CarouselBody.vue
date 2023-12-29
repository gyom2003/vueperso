

<template>
    <div style="margin-top: 20px;">
        <el-carousel :interval="4000" type="card" height="400px" width="200px" loop=true>
            <el-carousel-item v-for="item in imgdata" :key="item">
                <img :src="item" style="width: 100%; height: 100%;" />
            </el-carousel-item>

            <div class="carouselcontent">
                <h1>Chez Guillaume</h1>
                <h3>Restaurant Parisien</h3>
                <p>33 Avenue de Verdun Chatillon 92320</p>
            </div>
        </el-carousel>  

        <div class="bodycontentone">
            <h1>Qui Sommes nous ? </h1>
            <p> Chez Guillaume, c'est un peu le repère des joueurs du XV de France... Pourquoi ?
Parce qu'ils aiment les assiettes copieuses, garnies de produits frais et délicieux, de préférence en provenance locale</p>
        </div>

        <div class="bodycontenttwo">
            
        </div>
    </div>

</template>


<script>
import img1 from '../assets/carouselimg/img1.avif'
import img2 from '../assets/carouselimg/img2.avif'
import img3 from '../assets/carouselimg/img3.jpg'
import img4 from '../assets/carouselimg/img4.avif'

export default {
  name: 'CarouselComponent',

  data() {
    return {
        imgdata:[img1, img2, img3, img4] 
    }
  }
}
</script>

<style scoped>
/*carousel part*/
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.carouselcontent {
    position: absolute;
    z-index: 2;
    width: 50%;
    height: 50%;
    top: 40%;
    left: 25%;
    margin: 20px;
}
.carouselcontent h1,
.carouselcontent h3,
.carouselcontent p {
    color: rgb(238, 237, 237);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    font-weight: 400;
}

/*partie body content*/
.bodycontentone {
    width: 100%;
    height: 200px;
    border-bottom: 2px solid #ccc;
}
.bodycontentone h1 {
    position: relative;
    font-size: 28px; 
    font-weight: 300; 
    margin-left: 10%; 
}
.bodycontentone h1::after {
    content: '';
    display: block;
    width: 35%;
    height: 10%;
    height: 8px;
    background-color: #FCE9E5;
    position: absolute;
    bottom: -12px;
    left: -11%;
    transition: transform 0.3s ease;
}
.bodycontentone h1:hover::after {
    transform: translateX(25%);
}

.bodycontentone p {
    font-size: 18px; 
    font-weight: bold; 
    text-align: center;
    margin-top: 3%;
}

</style>

