<script>
  import Globe from "$lib/components/Globe.svelte";
</script>

<div class="flex justify-center items-center h-[80vh] w-full">
  <div
    class="relative flex h-fit w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl"
  >
    <span
      class="pointer-events-none select-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
    >
      Globe
    </span>
    <Globe class="top-28" />
    <div
      class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]"
    />
  </div>
</div>
