<script lang="ts">
  export let disable = false;

  const classes =
    "bg-blue-500 text-white font-bold py-2 px-4 rounded" +
    (disable ? " opacity-50 cursor-not-allowed" : "");
</script>

<button class={classes} on:click>
  <slot />
</button>
