<template>
    <ul>
        <li v-for="item in $store.state.common.navList">
            nav: <span class="icon-edit"></span><router-link :to="item.path">{{ item.title }}</router-link>
        </li>
    </ul>
</template>