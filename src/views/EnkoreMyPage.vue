<template>
<v-EnkoreMyPage>
    <v-card class="mx-auto" flat elevation="4">
        <v-app-bar color="secondary" dark dense>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title>마이페이지</v-toolbar-title>
            <v-spacer />
        </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="drawer">
        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</v-EnkoreMyPage>
</template>

<script>
export default {
    name: 'EnkoreMyPage',
    data() {
        return {
            drawer: false,
            items: [{
                    title: '의결권펀딩',
                    icon: 'mdi-vote',
                    to: '/myPageFunding'
                },
                {
                    title: '배당금기부',
                    icon: 'mdi-hand-heart',
                    to: '/myPageDonate'
                },
                {
                    title: '프로젝트 생성내역',
                    icon: 'mdi-file-document-check',
                    to: '/myPageProject'
                },
                {
                    title: 'ESG 자가측정',
                    icon: 'mdi-sprout',
                    to: '/esgPage'
                },
            ]
        }
    },
}
</script>

<style scoped>
.v-application .primary{
    background-color : azure
}
</style>