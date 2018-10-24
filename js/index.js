var app = new Vue({
  el: '#MainImage',
  data: {
    url: "",
    images: [
      'images/1_2880.jpg', 'images/2_2880.jpg'
    ],
  },
  created() {
    this.loadImg()
  },
  methods: {
    loadImg() {
        this.isLoad = false
        index = Math.floor(Math.random() * this.images.length);
        this.url = this.images[index];
      },
  }
})
  