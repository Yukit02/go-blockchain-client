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

      <q-input
        label="Public Key"
        class="my-3"
        v-model="walletState.public_key"
      />

      <q-input
        label="Private Key"
        class="my-3"
        v-model="walletState.private_key"
      />

      <q-input
        label="Blockchain Address"
        class="my-3"
        v-model="walletState.blockchain_address"
      />
    </div>

    <div class="mt-20">
      <h2 class="text-4xl">
        Send Money
      </h2>

      <q-input
        prefix="Address:"
        class="my-3"
        dense
      />

      <q-input
        prefix="Amount:"
        class="my-3 w-48"
        dense
      />

      <q-btn
        color="primary"
        class="mt-5"
        label="Send"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, reactive } from 'vue';
import { Wallet } from '../models/wallet'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const walletState = reactive<Wallet>({
      public_key: '',
      private_key: '',
      blockchain_address: ''
    })

    const setWallet = (wallet: Wallet) => {
      walletState.public_key = wallet.public_key
      walletState.private_key = wallet.private_key
      walletState.blockchain_address = wallet.blockchain_address
    }

  // ==== Init data fetching ====
    const fetchMyWallet = async () => {
      await axios.post('http://localhost:8000/wallet')
                 .then(
                   (res) => {
                     setWallet(res.data as Wallet)
                   }
                 )
                 .catch(
                   (err) => {
                     console.error(err)
                   }
                 )
    }
    void fetchMyWallet()
  // ==== Init data fetching ====

    return {
      walletState
    }
  }

});
</script>
