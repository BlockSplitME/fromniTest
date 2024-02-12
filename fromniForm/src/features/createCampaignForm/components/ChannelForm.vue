<template>
    <v-expansion-panels variant="default" >
        <v-expansion-panel v-for="channel in channels" rounded>
       
            <v-row class="ma-0" >
                <v-col class="flex-grow-0 d-flex align-center">
                    <input type="checkbox" v-model="channel.checked" />
                </v-col>
                <v-col class="rounded">
                    <ChannelComponent :channel="channel" :config="findConfChannel(channel.name)"/>
                </v-col>
            </v-row>
        </v-expansion-panel>
        
    </v-expansion-panels>
</template>

<script lang="ts" setup>
    import { defineProps, PropType } from 'vue'
    import { ChannelType, ConfigType } from '../types'
    import ChannelComponent from './Channel.vue';

    const props = defineProps({
        channels: Object as PropType<ChannelType[]>,
        config: Object as PropType<ConfigType[]> 
    })

    const findConfChannel = (name: string) => {
        if(props.config) {
            return props.config.find((item) => {
                return item.name == name
            })
        }
    }
</script>
