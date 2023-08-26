<template>
  <q-page padding>
    <div class="text-center">
      <h5>Countdown</h5>
      <span class="digit">{{ parseInt(remain_time / 1000 / 3600) }}</span>
      <span class="separator">:</span>
      <span class="digit">{{ parseInt((remain_time / 1000 / 60) % 60) }}</span>
      <span class="separator">:</span>
      <span class="digit">{{ parseInt((remain_time / 1000) % 60) }}</span>
    </div>
    <div class="text-center">elapsed: {{ elapsed / 1000 }}</div>
    <div class="text-center">target_time: {{ target_time / 1000 }}</div>
    <div class="text-center">remain_time: {{ remain_time / 1000 }}</div>
    <div class="text-center q-mt-md">
      <q-btn label="시작" color="secondary" @click="onClickStart" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const hour = ref(2);
const min = ref(30);
const sec = ref(20);

let interval_id;
onMounted(() => {});
onUnmounted(() => {
  if (interval_id != null) clearInterval(interval_id);
});

let started;
const elapsed = ref(0);
const target_time = ref(0);
const remain_time = ref(
  (hour.value * 60 * 60 + min.value * 60 + sec.value) * 1000
);
const onClickStart = () => {
  target_time.value =
    (hour.value * 60 * 60 + min.value * 60 + sec.value) * 1000;
  started = new Date().getTime();
  interval_id = setInterval(function () {
    elapsed.value = new Date().getTime() - started;
    remain_time.value = target_time.value - elapsed.value;
  }, 10); // 10 밀리초(0.01초)마다 실행
};
</script>

<style>
.digit {
  border: 1px solid red;
  margin: 3px;
  padding: 3px;
  background-color: orange;
  font-size: 36px;
}

.separator {
  font-size: 36px;
}
</style>
