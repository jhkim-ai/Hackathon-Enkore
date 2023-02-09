<template>
<v-EnkoreMyPage>
    <v-card color="grey lighten-4" flat>
        <v-app-bar color="secondary" dark dense>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
            <v-toolbar-title>마이페이지</v-toolbar-title>
            <v-spacer />
        </v-app-bar>
    </v-card>
    <v-navigation-drawer permanent expand-on-hover>
        <!--v-list-item>
            <v-list-item-avatar>
                <v-icon>mdi-account</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
        </v-list-item-->
        <v-divider />
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
    <router-view/>
</v-EnkoreMyPage>
</template>

<script>
export default {
    name: 'EnkoreMyPage',
    data() {
        return {
            drawer: true,
            items: [{
                    title: '의결권펀딩',
                    icon: 'mdi-vote',
                    to: '/'
                },
                {
                    title: '배당금기부',
                    icon: 'mdi-hand-heart',
                    to: '/myPageDonate'
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