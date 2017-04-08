<template>
    <ul>
        <li v-for="item in $store.state.common.navList">
            <span class="icon-edit"></span><router-link :to="item.path">{{ item.title }}</router-link>
        </li>
    </ul>
</template>