<template>
    <v-row class="justify-start" >
        <v-col class="flex-grow-0" v-for="item in tips">
            <Chip @addEvent="addText(item)">
                {{ item }}   
            </Chip>
        </v-col>
        <v-col class="flex-grow-0" v-if="keyboardConf?.isSupportURL" v-for="item in urls">
            <Chip @addEvent="openUrl(item.url)">
                {{ item.tip }}   
            </Chip>
        </v-col>
        <v-col class="flex-grow-0">
            <CreateChipDialog v-if="addButton()" :textLength="keyboardConf?.textLength" :isSupportUrl="isSupportUrl()" @addTip="addTip" @addUrl="addUrl"/>
        </v-col>
    </v-row>
    
</template>

<script lang="ts" setup>
    import CreateChipDialog from './CreateChipDialog.vue';
    import Chip from './Chip.vue'
    import { KeyboardType, UrlType } from '../types'

    import { defineProps, PropType,  } from 'vue'
    const props = defineProps({
        tips: Object as PropType<string[]>,
        urls: Object as PropType<UrlType[]>,
        keyboardConf: Object as PropType<KeyboardType>
    })
    const emit = defineEmits(['addText'])
    const addText = (data: string): void => {
        console.log(data);
        emit('addText', data)
    }
    const openUrl = (data: string): void => {
        window.open(data)
    }
    const addTip = (data: string): void => {
        props.tips?.push(data)
    }
    const addUrl = (data: string, url: string): void => {
        props.urls?.push({tip: data, url: url});
    }
    const addButton = () :boolean => {
        if(props.keyboardConf) {
            if(props.keyboardConf.capacity && props.tips) {
                length = props.tips.length
                if(props.urls) {
                    length += props.urls.length
                }
                return props.keyboardConf.capacity > length
            } return true;
        } return false;
    }

    const isSupportUrl = () :boolean => {
        console.log(props.keyboardConf?.isSupportURL);
        if(props.keyboardConf?.isSupportURL) {
            if(props.keyboardConf?.countMaxURL && props.urls) {
                return props.keyboardConf.countMaxURL > props.urls.length
            } return true
        } return false
    }
</script>
