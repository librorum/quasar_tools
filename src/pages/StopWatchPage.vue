<template>
  <q-page padding>
    <q-list bordered separator>
      <q-item>
        <q-item-section class="text-bold">스탑와치 </q-item-section>
      </q-item>
      <q-item v-for="(time, time_index) in lap_times" :key="time_index">
        <q-item-section avatar>
          <q-chip color="red-5">{{ time_index + 1 }}</q-chip>
        </q-item-section>
        <q-item-section> {{ time }} </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <div class="text-h6">elapsed: {{ elapsed }}</div>
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn label="시작" color="blue" @click="startStopWatch" />
    <q-btn label="멈춤" color="orange" @click="stopStopWatch" />
    <q-btn label="랩타임" color="green" @click="recordLapTime" />
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const elapsed = ref(0);
let started;
let interval;

const lap_times = ref([]);

onMounted(() => {
  console.log('StopWatch onMounted');
});

onUnmounted(() => {
  stopStopWatch();
});

const startStopWatch = () => {
  stopStopWatch();
  elapsed.value = 0;
  started = new Date().getTime();
  interval = setInterval(() => {
    elapsed.value = (new Date().getTime() - started) / 1000;
  }, 10);
};

const stopStopWatch = () => {
  if (interval != null) clearInterval(interval);
  interval = null;
};

const recordLapTime = () => {
  if (interval == null) return;
  lap_times.value.push(elapsed.value);
};
</script>
