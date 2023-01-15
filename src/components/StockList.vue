<template>
  <div class="table-info">
    <v-simple-table height="500px" fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            실시간 인기주
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in desserts"
          :key="item.name"
        >
          <td>{{idx + 1}}. {{ item.name }}</td>
        </tr>
      </tbody>
    </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      desserts: [
        {
          name: '삼성전자',
        },
        {
          name: 'SK하이닉스',
        },
        {
          name: 'TQQQ 레버리지 3배',
        },
        {
          name: '네이버',
        },
        {
          name: '카카오페이',
        },
        {
          name: '카카오',
        },
        {
          name: '카카오뱅크',
        },
        {
          name: '현대자동차',
        },
        {
          name: '한국조선해양',
        },
        {
          name: 'TIGER 200 IT',
        },
      ],
    }
  },
}
</script>

<style>

</style>