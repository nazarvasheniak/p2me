<script>
new Vue({
  // состояние
  data() {
    return {
      count: 0
    };
  },
  // представление
  template: `
    <div>{{ count }}</div>
  `,
  // действия
  methods: {
    increment() {
      this.count++;
    }
  }
});
</script>
