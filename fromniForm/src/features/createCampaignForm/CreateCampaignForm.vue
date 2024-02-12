<template >
    <v-form v-if="remount"  class="ma-5">
        <v-card>
            <v-card-title>
                <span class="text-h5">Create campaign</span>
            </v-card-title>
            <v-card-text>
                <v-text-field v-model="campaign.name" label="Campaign name" variant="outlined"  required/>
            </v-card-text>
            <v-card-item>
                <ChannelForm :channels="campaign.channels" :config="config"></ChannelForm>
            </v-card-item>    
            <v-card-actions>
                <v-btn color="blue-darken-1" @click="saveCampaign()" variant="text">
                    Сохранить
                </v-btn>
                <!-- <v-btn color="blue-darken-1" @click="loadCampaign(campaign.name)" variant="text">
                    Загрузить
                </v-btn> -->
                <v-btn color="red-darken-1" @click="clearCampaign()" variant="text">
                    Очистить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script lang="ts" setup>
    import ChannelForm from './components/ChannelForm.vue'

    import { useCreateCampaignFormStore } from './store'
    import * as api from './api'
    import { ref } from 'vue'

    const store = useCreateCampaignFormStore();
    store.createCompaign();
    let remount = ref(true)
    let campaign = store.campaign
    let config = store.config
    
    const saveCampaign = () => api.default.post(store.campaign);
    const loadCampaign = async (data: string) => {
        (api.default.get(data).then((data) => {
            store.setCampaign(data)
            campaign = store.campaign
            console.log(campaign);
        }))
    }
    
    const emit = defineEmits(['remountForm']);
    const clearCampaign = () => {
        store.clear();
        emit('remountForm');
    }
    
</script>