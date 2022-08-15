<template>
  <div class="top-0 left-0 right-0 bottom-0 fixed">
    <div class="relative w-full h-full">
      <h1 style="color: red" class=" text-9xl notFound absolute  ">Page Not Found</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>
.notFound {
  animation: animationNotFound 1s infinite,nhapNhay 0.1s infinite;
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