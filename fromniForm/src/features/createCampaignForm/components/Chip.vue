<template>
    <v-chip variant="outlined" @click="addEvent()"> 
        <slot></slot>
    </v-chip>
</template>

<script setup lang="ts">
    const emit = defineEmits(['addEvent'])
    
    const addEvent = (): void => {
        emit('addEvent')
    }
</script>
