<template>
  <q-page class="my-12 mx-auto w-9/12">
    <div>
      <h2 class="text-4xl">
        Wallet
      </h2>

      <p class="my-3 text-xl">
        0
      </p>

      <q-btn label="Reload Wallet" />

      <q-input label="Public Key" class="my-3" />

      <q-input label="Private Key" class="my-3" />

      <q-input label="Blockchain Address" class="my-3" />
    </div>

    <div class="mt-20">
      <h2 class="text-4xl">
        Send Money
      </h2>

      <q-input prefix="Address:" class="my-3" dense/>

      <q-input prefix="Amount:" class="my-3 w-48" dense/>

      <q-btn color="primary" class="mt-5" label="Send" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});
</script>
