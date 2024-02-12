<template>
  <CreateForm :key="remountKey" @remount-form="remountKey+=1" /> 
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import CreateForm from '@/features/createCampaignForm/CreateCampaignForm.vue';
  export default defineComponent({
    name: "App",
    components: { CreateForm },
    data: () => {
      return {
        remountKey: 0
      }
    }
  });
</script>