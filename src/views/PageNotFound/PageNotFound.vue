<template>
  <div class="top-0 left-0 right-0 bottom-0 fixed">
    <div class="relative w-full h-full">

      <h1 style="color: red" class=" text-9xl notFound absolute" ref="text">Page Not Found</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {
      red: 1,
      blue: 1,
      green: 1,
      scale: 1,
      rotate: 0,
      opacity: 1,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    };
  },
  methods: {
    randomAnimation() {
      this.red = Math.floor(Math.random() * 255);
      this.blue = Math.floor(Math.random() * 255);
      this.green = Math.floor(Math.random() * 255);
      this.scale = Math.random() * 2;
      this.rotate = Math.floor(Math.random() * 360);
      this.opacity = Math.random();
      this.top = Math.floor(Math.random() * 100);
      this.right = Math.floor(Math.random() * 100);
      this.left = Math.floor(Math.random() * 100);
      this.bottom = Math.floor(Math.random() * 100);
      // console.log(this.red, this.blue, this.green, this.scale, this.rotate, this.opacity, this.top, this.right, this.left, this.bottom);
    },
    setAnimate() {
      this.randomAnimation()
      return {
        color: 'rgb(' + this.red + ',' + this.blue + ',' + this.green + ')',
        scale: this.scale,
        rotate: this.rotate + 'deg',
        opacity: this.opacity,
        top: this.top+'px',
        right: this.right + 'px',
        left: this.left + 'px',
        bottom: this.bottom + 'px',
      }
    }
  },
  mounted() {
    setInterval(()=>{
      this.$refs.text.animate([
        this.setAnimate(),
        this.setAnimate(),
      ], {
        duration: 500,
        iterations: 1
      });
    }, 500);

  }
}
</script>

<style scoped>
.notFound {
  /*animation: animationNotFound 1s infinite,nhapNhay 0.1s infinite;*/
}

@keyframes nhapNhay {
  0% {
    opacity: 1;
    color: #000091;

  }
  25% {
    opacity: 0;
    color: #01fff5;

  }
  50% {
    opacity: 1;
    color: red;

  }
  75% {
    opacity: 0;
    color: #fffb48;

  }
  100% {
    opacity: 1;
    color: #29640c;

  }

}

@keyframes animationNotFound {
  0% {
    top: 0;
    scale: 2;
  }
  25% {
    right: 0;
    scale: 1.5;
    rotate: 180deg;
  }
  50% {
    bottom: 0;
    scale: 0.5;
    rotate: 270deg;
  }
  75% {
    left: 20%;
    scale: 1.2;
    rotate: 360deg;
  }
  100% {
    top: 50%;
    right: 0;
    scale: 1;
    rotate: 0deg;
  }
}
</style>