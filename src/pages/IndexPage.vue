<template>
  <q-page class="column flex-center">
    <div>
      <q-btn
        label="스탑와치"
        color="green"
        icon="timer"
        @click="onClickTimer()"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const $router = useRouter();

const count = ref(0);

const min = -5;
const max = 5;

const onClickTimer = () => {
  $router.push('/stopwatch');
};
</script>
