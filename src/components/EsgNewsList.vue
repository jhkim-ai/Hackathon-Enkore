<template>
  <div>
    <v-simple-table height="500px" fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ESG 관련 뉴스
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in desserts"
          :key="item.name"
        >
          <td>{{ idx+1 }}. {{ item.name }}</td>
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
          name: 'SKC솔믹스, SK엔펄스로 사명 변경… “반도체 ESG 기업 도약”',
        },
        {
          name: `'그린워싱' 막는다···ESG 채권 평가 가이드라인 제정`,
        },
        {
          name: `“건설에서 환경 기업으로…자회사와 함께하는 ESG 경영이 강점”`,
        },
        {
          name: `동국제약, 지속가능한 성장위해 ESG 경영 박차`,
        },
        {
          name: `서구문화재단 ‘ESG경영·미래비전’ 발표`,
        },
        {
          name: `이석용 NH농협은행장, 충북 ESG 현장경영`,
        },
        {
          name: `동국제약 “ESG 경영 강화… 투명하게 회사 운영할 것”`,
        },
        {
          name: `Honeycomb`,
        },
        {
          name: `Donut`,
        },
        {
          name: `KitKat`,
        },
      ],
    }
  },
}
</script>

<style>

</style>