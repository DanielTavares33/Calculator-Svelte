<script lang="ts">
  export let value: string

  $:fontSize = value.length > 20 ? 'small' : `s-${value.length}`
</script>

<div class={`display ${fontSize}`}>
  <span>{value}</span>
</div>

<style>
  .display {
      display: flex;
      background-color: aliceblue;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      padding: 0px 5px;
      overflow: hidden;
      font-size: 1.7rem;
      margin: 2px 1px;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
  }

  .s-10 { font-size: 1.5rem; }
  .s-11 { font-size: 1.4rem; }
  .s-12 { font-size: 1.3rem; }
  .s-13 { font-size: 1.2rem; }
  .s-14 { font-size: 1.1rem; }
  .s-15 { font-size: 1rem; }
  .s-16 { font-size: 0.9rem; }
  .s-17 { font-size: 0.8rem; }
  .s-18 { font-size: 0.8rem; }
  .s-19 { font-size: 0.8rem; }
  .s-20 { font-size: 0.7rem; }
  .small { font-size: 0.6rem; }
</style>