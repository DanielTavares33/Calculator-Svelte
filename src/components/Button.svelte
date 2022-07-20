<script lang="ts">
	export let text: string;
  export let triple: boolean = false;
  export let duple: boolean = false;
  export let operation: boolean = false;
  export let highlight: boolean = false;
  export let onClick: (value: string) => void = () => {} 
</script>

<button class="button" class:triple class:duple class:operation class:highlight on:click={() => onClick(text)}>
    {text}
</button>

<style>
  .button {
    margin: 0;
    border: 1px solid var(--background-color);
    flex-basis: 25%;
  }

  .triple {
    flex-basis: 75%;
  }

  .duple {
    flex-basis: 50%;
  }

  .operation {
    background-color: orange;
    color: white;
  }

  .highlight {
    background-color: red;
    color: white;
  }
</style>